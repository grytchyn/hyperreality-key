#!/usr/bin/env python3
"""
HYPERREALITY KEY — Preprocessing Pipeline v3
Build-time NLP for all 7 articles. Generates enriched highlight data.
"""

import json, re

# ── LOAD CORPUS ──

with open('/root/hyperreality-key/src/data/unified_corpus.json') as f:
    corpus = json.load(f)

# ── BUILD LOOKUP ──
# Tool -> set of lowercase words
tool_words: dict[str, set] = {}
for entry in corpus['entries']:
    tool = entry['tool']
    if tool not in tool_words:
        tool_words[tool] = set()
    for w in entry.get('words', []):
        tool_words[tool].add(w.lower().strip())

# ── FALSE POSITIVE FILTER ──
# Words that appear too frequently in normal text to be meaningful
COMMON_WORDS = {
    'we', 'us', 'our', 'ours', 'they', 'them', 'their', 'theirs',
    'you', 'your', 'yours', 'he', 'she', 'it', 'its',
    'the', 'a', 'an', 'and', 'or', 'but', 'if', 'so', 'for',
    'in', 'on', 'at', 'to', 'by', 'with', 'from', 'of', 'as',
    'not', 'no', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'this', 'that', 'these', 'those', 'here', 'there',
    'i', 'me', 'my', 'mine', 'myself', 'him', 'his', 'her',
    'do', 'does', 'did', 'done', 'doing',
    'have', 'has', 'had', 'having',
    'will', 'would', 'can', 'could', 'shall', 'should', 'may', 'might',
    'am', 'aren', 'isn', 'wasn', 'weren',
    'don', 'doesn', 'didn', 'haven', 'hasn', 'hadn',
    'won', 'wouldn', 'can', 'couldn',
}

def clean_word(w: str) -> str:
    """Remove punctuation, lowercase."""
    return re.sub(r'[^a-z\']', '', w.lower().strip())

def simple_stem(w: str) -> str:
    """Simple English stemmer."""
    w = w.lower().strip()
    if w.endswith('ing') and len(w) > 5:
        w = w[:-3]
        if w.endswith('nn') or w.endswith('tt') or w.endswith('pp'):
            w = w[:-1]
    elif w.endswith('ed') and len(w) > 4:
        w = w[:-2]
        if w.endswith('i'):
            w = w[:-1] + 'y'
    elif w.endswith('ly') and len(w) > 4:
        w = w[:-2]
    elif w.endswith('s') and not w.endswith('ss') and len(w) > 3:
        w = w[:-1]
    return w

# ── SMART MATCHER ──
def match_article(text: str, tool: str) -> list[dict]:
    """
    Find all matches in text for a given tool's keywords.
    Uses stem-based matching to catch variants.
    """
    text_lower = text.lower()
    words = re.findall(r"[a-z']+", text_lower)
    unique_words = set(words)
    
    matches = []
    seen_positions = set()
    
    # Build stem map of all keywords
    keyword_set = tool_words.get(tool, set())
    
    # First: exact multi-word phrase matching
    for kw in keyword_set:
        if ' ' in kw and kw in text_lower:
            idx = 0
            while True:
                pos = text_lower.find(kw, idx)
                if pos == -1:
                    break
                if pos not in seen_positions:
                    matches.append({
                        'word': kw,
                        'position': pos,
                        'length': len(kw),
                        'match_type': 'phrase_exact',
                    })
                    seen_positions.add(pos)
                idx = pos + 1
    
    # Second: stem-based single-word matching
    for word in unique_words:
        if word in COMMON_WORDS or len(word) < 3:
            continue
        
        word_stem = simple_stem(word)
        
        for kw in keyword_set:
            if ' ' in kw:
                continue  # already handled phrases
            kw_stem = simple_stem(kw)
            
            if word_stem == kw_stem or word == kw:
                # Find position in text
                idx = 0
                while True:
                    pos = text_lower.find(word, idx)
                    if pos == -1:
                        break
                    if pos not in seen_positions:
                        matches.append({
                            'word': word,
                            'position': pos,
                            'length': len(word),
                            'match_type': 'stem_exact' if word == kw else 'stem_variant',
                            'matched_against': kw,
                        })
                        seen_positions.add(pos)
                    idx = pos + 1
    
    return matches


# ── LOAD ARTICLES ──
with open('/root/hyperreality-key/src/data/missions.ts') as f:
    ts_content = f.read()

# Parse article contents
articles = re.findall(r"content: `(.*?)`,\s*\n\s+category:", ts_content, re.DOTALL)
print(f"Found {len(articles)} articles")

# ── PREPROCESS ALL 7 ARTICLES ──
results = {}
for i, (tool, article_text) in enumerate(zip(
    ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'fake-check'],
    articles
)):
    matches = match_article(article_text, tool)
    unique_matches = len(set(m['word'] for m in matches))
    results[f'level_{i+1}'] = {
        'tool': tool,
        'total_matches': len(matches),
        'unique_words_matched': unique_matches,
        'matches': matches,
    }
    
    print(f"\nLevel {i+1} ({tool}): {len(matches)} total matches, {unique_matches} unique words")
    # Show unique matched words
    matched_words = set(m['word'] for m in matches)
    print(f"  Words: {', '.join(sorted(matched_words)[:15])}")

# ── SAVE ──
with open('/root/hyperreality-key/src/data/preprocessed_highlights.json', 'w') as f:
    json.dump(results, f, indent=2)

print(f"\nSaved: src/data/preprocessed_highlights.json")

# ── GENERATE WORD-TO-TOOL MAPPING ──
# Build: word -> list of tools that care about it
word_to_tools = {}
for tool, words in tool_words.items():
    for w in words:
        if ' ' not in w and w not in COMMON_WORDS:
            stem = simple_stem(w)
            if stem not in word_to_tools:
                word_to_tools[stem] = set()
            word_to_tools[stem].add(tool)

# Save compact word map for JS
compact_map = {}
for stem, tools in word_to_tools.items():
    compact_map[stem] = list(tools)

with open('/root/hyperreality-key/src/data/word_tool_map.json', 'w') as f:
    json.dump(compact_map, f, indent=2)

print(f"Word-to-tool map: {len(compact_map)} stems")
print(f"Total unique tool assignments: {sum(len(v) for v in compact_map.values())}")