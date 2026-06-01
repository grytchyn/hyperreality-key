#!/usr/bin/env python3
"""
HYPERREALITY KEY — NLP Keyword Matcher Generator v1.0
Generates expanded highlight rules from unified academic corpus.
Pure Python, no dependencies. Produces TypeScript output.
"""

import json
import re

# ── STEM GENERATOR ──
# Pure Python morphological expansion (replaces NLTK PorterStemmer)

def expand_word(word: str) -> list[str]:
    """Generate all common morphological variants of a word."""
    word = word.lower().strip()
    forms = {word}
    
    # Handle common English suffix patterns
    if word.endswith('s') and not word.endswith('ss') and len(word) > 3:
        forms.add(word[:-1])  # dangers -> danger
    if word.endswith('es') and len(word) > 4:
        forms.add(word[:-2])  # biases -> bias
        forms.add(word[:-1])   # biases -> biase
    if word.endswith('ing') and len(word) > 5:
        forms.add(word[:-3])           # running -> runn
        forms.add(word[:-3] + 'e')     # running -> runne
        if word[-4] == word[-5] and len(word) > 6:
            forms.add(word[:-4])       # running -> run
    if word.endswith('ed') and len(word) > 4:
        forms.add(word[:-2])           # manipulated -> manipulat
        forms.add(word[:-1])           # manipulated -> manipulate
        if word[-3] == word[-4] and len(word) > 5:
            forms.add(word[:-3])       # stopped -> stop
    if word.endswith('ly'):
        forms.add(word[:-2])           # clearly -> clear
    if word.endswith('tion'):
        forms.add(word[:-4] + 'te')    # manipulation -> manipulate
    if word.endswith('ness'):
        forms.add(word[:-4])           # kindness -> kind
    if word.endswith('ment'):
        forms.add(word[:-4])           # enjoyment -> enjoy
    if word.endswith('er') and len(word) > 4 and word[-4] not in 'aeiou':
        forms.add(word[:-2])           # bigger -> big
    if word.endswith('est') and len(word) > 5:
        forms.add(word[:-3])           # biggest -> big
    
    # Plural handling
    if not word.endswith('s') and len(word) > 2:
        forms.add(word + 's')          # danger -> dangers
        if word.endswith('y') and len(word) > 3 and word[-2] not in 'aeiou':
            forms.add(word[:-1] + 'ies')  # study -> studies
        if word.endswith('f'):
            forms.add(word[:-1] + 'ves')  # wolf -> wolves
        if word.endswith('fe'):
            forms.add(word[:-2] + 'ves')  # knife -> knives
        if word.endswith('ch') or word.endswith('sh') or word.endswith('x'):
            forms.add(word + 'es')
        if word.endswith('o'):
            forms.add(word + 'es')
    
    # Verb forms
    if not word.endswith('ing') and len(word) > 3:
        forms.add(word + 'ing')
        if word.endswith('e'):
            forms.add(word[:-1] + 'ing')  # use -> using
        # doubled consonant pattern
        if word[-1] not in 'aeiou' and word[-2] in 'aeiou' and word[-3] not in 'aeiou':
            forms.add(word + word[-1] + 'ing')  # stop -> stopping
    
    if not word.endswith('ed') and len(word) > 3:
        forms.add(word + 'ed')
        if word.endswith('e'):
            forms.add(word + 'd')       # use -> used
        else:
            forms.add(word + 'ed')
        if word[-1] not in 'aeiou' and word[-2] in 'aeiou' and word[-3] not in 'aeiou':
            forms.add(word + word[-1] + 'ed')  # stop -> stopped
    
    # Adverb forms
    if not word.endswith('ly') and len(word) > 3:
        if word.endswith('ic'):
            forms.add(word + 'ally')    # scientific -> scientifically
        else:
            forms.add(word + 'ly')      # clear -> clearly
    
    # Adjective forms
    forms.add(word + 'er')
    forms.add(word + 'est')
    
    # Noun forms
    forms.add(word + 'tion')
    forms.add(word + 'ment')
    forms.add(word + 'ness')
    forms.add(word + 'ism')
    forms.add(word + 'ist')
    
    # Remove duplicates and short words
    result = [f for f in forms if len(f) >= 3]
    return sorted(set(result))


def expand_phrase(phrase: str) -> list[str]:
    """For multi-word phrases, expand each word independently."""
    words = phrase.lower().split()
    if len(words) <= 1:
        return [phrase.lower()]
    
    # Generate variant phrases by expanding each word
    variants = {phrase.lower()}
    
    # For now, keep multi-word phrases as-is (they're specific patterns)
    # But also add variants with common rephrasing
    # e.g. "everyone is saying" -> "everyone says", "everybody is saying"
    
    # Common substitutions
    subs = {
        'everyone': ['everybody', 'everyone'],
        'people': ['folks', 'everyone', 'everybody'],
        'they': ['they', 'them', 'those'],
        'our': ['our', 'my', 'the'],
    }
    
    for i, w in enumerate(words):
        if w in subs:
            for alt in subs[w]:
                new_words = words.copy()
                new_words[i] = alt
                variants.add(' '.join(new_words))
    
    return sorted(variants)


def generate_rule(words_list: list[str], tool: str, source: str) -> dict:
    """Generate expanded highlight rules for a list of words."""
    all_words = set()
    all_phrases = set()
    
    for word in words_list:
        word = word.lower().strip()
        if ' ' in word:
            # Multi-word phrase
            all_phrases.add(word)
            for variant in expand_phrase(word):
                all_phrases.add(variant)
        else:
            all_words.add(word)
            for form in expand_word(word):
                all_words.add(form)
    
    return {
        'tool': tool,
        'source': source,
        'words': sorted(all_words),
        'phrases': sorted(all_phrases),
    }


# ── LOAD CORPUS ──

with open('/root/hyperreality-key/src/data/unified_corpus.json') as f:
    corpus = json.load(f)

# Group by tool
from collections import defaultdict

tool_rules: dict[str, list] = defaultdict(list)

for entry in corpus['entries']:
    words = entry['words']
    tool = entry['tool']
    source = entry['source']
    
    rule = generate_rule(words, tool, source)
    tool_rules[tool].append(rule)

# Merge rules within each tool (combine word/phrase lists, keep distinct explanations)
# For now, combine all words per tool into flat lists
tool_final = {}
for tool, rules in tool_rules.items():
    all_words = set()
    all_phrases = set()
    sources = set()
    for r in rules:
        all_words.update(r['words'])
        all_phrases.update(r['phrases'])
        sources.add(r['source'])
    tool_final[tool] = {
        'words': sorted(all_words),
        'phrases': sorted(all_phrases),
        'sources': sorted(sources),
    }

# ── STATS ──
print("=" * 60)
print("NLP MATCHER GENERATOR — RESULTS")
print("=" * 60)
for tool, data in sorted(tool_final.items()):
    print(f"\n{tool.upper():20s}: {len(data['words']):4d} words + {len(data['phrases']):4d} phrases = {len(data['words'])+len(data['phrases']):4d} total")
    print(f"  Sources: {', '.join([s[:40] for s in data['sources'][:3]])}")
    if len(data['sources']) > 3:
        print(f"    +{len(data['sources'])-3} more")
    print(f"  Sample words: {', '.join(data['words'][:5])}...")
    print(f"  Sample phrases: {', '.join(data['phrases'][:5])}...")

total_words = sum(len(d['words']) + len(d['phrases']) for d in tool_final.values())
print(f"\n{'─' * 40}")
print(f"TOTAL: {total_words} keyword variants across {len(tool_final)} tools")

# Save the expanded corpus for the JS system
output = {
    'meta': {
        'total_variants': total_words,
        'tools': list(tool_final.keys()),
    },
    'tools': {}
}
for tool, data in tool_final.items():
    output['tools'][tool] = {
        'words': data['words'],
        'phrases': data['phrases'],
    }

with open('/root/hyperreality-key/src/data/expanded_corpus.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\nSaved to: src/data/expanded_corpus.json")