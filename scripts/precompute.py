#!/usr/bin/env python3
"""
FINAL BUILD-TIME MATCHER v4
Merges existing coreTools.ts rules + academic corpus.
Expands all words with suffix generator. Precomputes all highlights.
"""

import json, re, sys

# ── SUFFIX GENERATOR (same as before) ──

def gen_suffix_forms(word: str) -> list[str]:
    """Generate all plausible forms of a word."""
    w = word.lower().strip()
    if len(w) < 3 or not w.isalpha():
        return [w]
    forms = {w}
    
    # Basic suffix additions
    suffixes = []
    # plural / verb 3rd person
    suffixes.append('s')
    if w.endswith(('ch', 'sh', 'x', 'ss', 'o')):
        suffixes.append('es')
    if w.endswith('y') and len(w) > 3 and w[-2] not in 'aeiou':
        suffixes.append('ies')  
    # past tense
    suffixes.append('ed')
    if w.endswith('e'):
        suffixes.append('d')
    # ing
    suffixes.append('ing')
    if w.endswith('e') and not w.endswith('ee'):
        suffixes.append(w[:-1] + 'ing')
        forms.add(w[:-1] + 'ing')
    # adjective
    suffixes.append('er')
    suffixes.append('est')
    # adverb
    suffixes.append('ly')
    # noun
    suffixes.append('ion')
    suffixes.append('tion')
    suffixes.append('ment')
    suffixes.append('ness')
    suffixes.append('ism')
    # negative
    forms.add('un' + w)
    forms.add('in' + w)
    forms.add('dis' + w)
    
    for s in suffixes:
        forms.add(w + s)
    
    return list(forms)


# ── PARSE EXISTING coreTools.ts WORDS ──

def parse_existing_rules(filepath: str) -> dict:
    """Extract all single-word keywords from coreTools.ts per tool."""
    with open(filepath) as f:
        ts = f.read()
    
    tool_words = {}
    for tool_id in ['bad-arguments', 'feelings-check', 'brain-check', 'hidden-story', 
                     'us-vs-them', 'value-check', 'fake-check', 'source-check',
                     'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal']:
        # Find tool block
        idx = ts.find(f"'{tool_id}':")
        if idx < 0:
            continue
        
        # Find the array
        arr_start = ts.find('[', idx)
        if arr_start < 0:
            continue
        
        depth = 0
        arr_end = arr_start
        for i in range(arr_start, len(ts)):
            if ts[i] == '[': depth += 1
            elif ts[i] == ']': 
                depth -= 1
                if depth == 0:
                    arr_end = i + 1
                    break
        
        block = ts[arr_start:arr_end]
        
        # Extract single words from all words: [...] arrays
        words_arrays = re.findall(r"words:\s*\[([^\]]+)\]", block)
        all_words = set()
        for wa in words_arrays:
            found = re.findall(r"'((?:[^'\\]|\\.)*)'", wa)
            for fw in found:
                fw = fw.lower().strip()
                if ' ' not in fw:
                    all_words.add(fw)
        
        tool_words[tool_id] = sorted(all_words)
    
    return tool_words


# ── LOAD ACADEMIC CORPUS ──

def load_corpus_words(filepath: str) -> dict:
    """Load unified corpus and extract single words per tool."""
    with open(filepath) as f:
        corpus = json.load(f)
    
    tool_words = {}
    for entry in corpus['entries']:
        tool = entry['tool']
        if tool not in tool_words:
            tool_words[tool] = set()
        for w in entry.get('words', []):
            w = w.lower().strip()
            if ' ' not in w and len(w) >= 3:
                tool_words[tool].add(w)
    
    return {k: sorted(v) for k, v in tool_words.items()}


# ── BUILD EXPANDED FORMS MAP ──

def build_expanded_map(existing: dict, corpus: dict) -> dict:
    """Merge both sources, expand with suffix forms.
    Returns: {form: {tool: set(original_words)}}
    """
    merged = {}
    all_tools = set(list(existing.keys()) + list(corpus.keys()))
    
    for tool in all_tools:
        words = set(existing.get(tool, []))
        words.update(corpus.get(tool, []))
        
        for word in words:
            for form in gen_suffix_forms(word):
                if form not in merged:
                    merged[form] = {}
                if tool not in merged[form]:
                    merged[form][tool] = set()
                merged[form][tool].add(word)
    
    return merged


# ── TOKENIZE ──

def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-z']+", text.lower())


# ── MAIN ──

existing = parse_existing_rules('/root/hyperreality-key/src/data/coreTools.ts')
corpus_words = load_corpus_words('/root/hyperreality-key/src/data/unified_corpus.json')

# Stats
print(f"Existing rules: {sum(len(v) for v in existing.values())} total words")
for t, w in sorted(existing.items()):
    print(f"  {t:20s}: {len(w):3d} words")
print(f"\nCorpus: {sum(len(v) for v in corpus_words.values())} total words")

# Merge + expand
expanded = build_expanded_map(existing, corpus_words)
print(f"\nExpanded map: {len(expanded)} forms")

# Article texts
ARTICLES = {
    1: "An online rumor claims the Netflix series Squid Game was inspired by a true story of hostages held in a South Korean bunker in 1986. According to the viral claim, the show was based on real events. Snopes found no definitive link between Squid Game and the Brothers Home facility. The shows creator Hwang Dong-hyuk never mentioned such an inspiration. He stated I freely admit that Ive had great inspiration from Japanese comics and animation over the years. The viral rumor conflates a real human-rights abuse site with a fictional survival drama. Experts say the claim spread because anonymous social media accounts presented it as fact without any named sources.",
    2: "Elon Musks AI chatbot Grok has been flooded with sexual images of mainly women many of them real people. Users prompted the chatbot to digitally undress those people and place them in suggestive poses. In several cases last week some appeared to be images of minors leading to the creation of images that many users are calling child pornography. The AI-generated images highlight the dangers of AI and social media without sufficient guardrails. The European Commission called it This is illegal. This is appalling. This is disgusting. The scandal went viral globally sparking outrage across tech and policy communities.",
    3: "Influencers are promoting overwhelmingly misleading information about medical tests on Instagram and TikTok according to a global University of Sydney-led study published in JAMA Network Open. The tests include full-body MRI scans claiming to detect up to 500 conditions genetic testing claiming to identify early signs of 50 cancers blood tests for testosterone levels the AMH test for a womans egg count and the gut microbiome test. The vast majority of these posts were overwhelmingly misleading said Dr. Brooke Nickel who led the research from the Faculty of Medicine and Healths School of Public Health. These tests carry the potential for healthy people to receive unnecessary diagnoses which could lead to unnecessary medical treatments.",
    4: "President Trump speaking at the UN General Assembly in September 2025 warned that accepting immigrants is destroying other countries. He said Theyve been invaded by a force of illegal aliens like nobodys ever seen before. Illegal aliens are pouring into Europe. Deputy Secretary of State Christopher Landau told a side panel If you have hundreds of thousands of fake asylum seekers then what happens to the real asylum system Human Rights Watchs Bill Frelick said the US plan looks like the first step in a bid to tear down the global refugee system. No specific data about who they are was presented.",
    5: "Mumsnet has launched a campaign to introduce a ban on social media for under-16s featuring health warnings in the style of those on cigarette packets. Founder Justine Roberts said Families are living with the harm caused by social media every day. This isnt about parents failing to set boundaries. Its about children being exposed to products deliberately designed to be addictive. Parents are watching the consequences compulsive use lost sleep rising anxiety and collapsing self-esteem while the companies responsible continue to profit. The Royal College of Psychiatrists backed calls for greater regulation.",
    6: "The government says intelligence gathered through Section 702 of FISA underpins a majority of the presidents daily briefing and is a key asset in counterterrorism. But lawmakers are concerned that FISA 702 allows the federal government to spy on Americans without a warrant violating their constitutional right to privacy. Elizabeth Goitein of the Brennan Center said The FBI routinely goes searching through that data for the express purpose of finding and using Americans communications. Privacy advocates argue this is a Fourth Amendment violation. The FISA court characterized FBI violations as persistent and widespread. The debate frames security as requiring freedom to be limited.",
    7: "TikTok and other social media platforms are hosting AI-generated deepfake videos of real doctors whose words have been manipulated to sell supplements and spread health misinformation. The fact-checking organization Full Fact uncovered hundreds of such videos targeting women experiencing menopause. Prof. David Taylor-Robinson of Liverpool University a specialist in childrens health had his image used in 14 doctored TikTok videos. The footage was stolen from a 2017 Public Health England talk and reworked to falsely promote a natural probiotic for menopause. One misleading video showed him swearing and making misogynistic comments. TikTok took the videos down only six weeks after he complained.",
}

LEVEL_TOOLS = {
    1: ['bad-arguments', 'source-check', 'false-appeal'],
    2: ['feelings-check', 'value-check', 'echo-chamber'],
    3: ['brain-check', 'fake-check', 'source-check'],
    4: ['us-vs-them', 'hidden-story', 'agenda-setting'],
    5: ['value-check', 'feelings-check', 'echo-chamber'],
    6: ['hidden-story', 'false-appeal', 'agenda-setting'],
    7: ['fake-check', 'red-herring', 'echo-chamber'],
}

print("\n" + "=" * 60)
print("MATCHING ALL 7 ARTICLES...")
print("=" * 60)

all_results = {}
total_matches = 0

for level in range(1, 8):
    tools = LEVEL_TOOLS[level]
    text = ARTICLES[level]
    tokens = tokenize(text)
    word_set = set(tokens)
    
    level_data = {}
    level_total = 0
    
    for tool in tools:
        matched = []
        for token in word_set:
            if token in expanded and tool in expanded[token]:
                matched.append(token)
        matched.sort()
        level_data[tool] = matched
        level_total += len(matched)
    
    all_results[level] = level_data
    total_matches += level_total
    
    primary = tools[0]
    print(f"\nLevel {level} ({primary:15s}): {level_total} matches across {len(tools)} tools")
    for tool, words in level_data.items():
        if words:
            print(f"  {tool:20s}: {len(words):2d} — {', '.join(words)}")

print(f"\n{'─' * 40}")
print(f"TOTAL MATCHES: {total_matches}")
print()

# Per-tool stats
tool_counts = {}
for level_data in all_results.values():
    for tool, words in level_data.items():
        if tool not in tool_counts:
            tool_counts[tool] = 0
        tool_counts[tool] += len(words)
print("Per-tool totals:")
for t, c in sorted(tool_counts.items()):
    print(f"  {t:20s}: {c}")

# ── Generate TypeScript precomputed data ──
output = {}
for level in all_results:
    output[str(level)] = all_results[level]

with open('/root/hyperreality-key/src/data/precomputed.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\nSaved: src/data/precomputed.json")

# Also save word lists for each article
for level in range(1, 8):
    tokens = tokenize(ARTICLES[level])
    with open(f'/root/hyperreality-key/src/data/level{level}_tokens.json', 'w') as f:
        json.dump(tokens, f, indent=2)

print("Token files saved.")