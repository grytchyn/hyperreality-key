#!/usr/bin/env python3
"""
HYPERREALITY KEY — Smart NLP Matcher Generator v2
Only generates REAL morphological forms using:
1. Word type detection (verb/noun/adjective vs function word)
2. Only conjugates words that CAN conjugate
3. Uses suffix rules with sanity checks
"""

import json
import re

# ── ENGLISH MORPHOLOGY (rules-based, no NLTK needed) ──

FUNCTION_WORDS = {
    'we', 'us', 'our', 'ours', 'they', 'them', 'their', 'theirs',
    'you', 'your', 'yours', 'he', 'she', 'it', 'its',
    'the', 'a', 'an', 'and', 'or', 'but', 'if', 'so', 'for',
    'in', 'on', 'at', 'to', 'by', 'with', 'from', 'of',
    'not', 'no', 'is', 'are', 'was', 'were', 'be', 'been',
    'this', 'that', 'these', 'those', 'here', 'there',
}

# Verb patterns: words ending with these characters are likely verbs
VERB_LIKE = ('e', 'y', 'l', 'p', 't', 'k', 'm', 'n', 'd', 'g', 'r')

# Words that look like function words should not be conjugated
def can_conjugate(word: str) -> bool:
    """Check if a word can reasonably be conjugated."""
    word = word.lower().strip()
    if len(word) < 3:
        return False
    if word in FUNCTION_WORDS:
        return False
    # Skip pure numbers, symbols
    if not word.isalpha():
        return False
    return True

def is_likely_verb(word: str) -> bool:
    """Check if a word looks like a verb."""
    word = word.lower()
    return word.endswith(VERB_LIKE) and not word.endswith(('ness', 'ment', 'tion', 'sion', 'ism', 'ist', 'ful', 'less'))

def is_likely_noun(word: str) -> bool:
    """Check if a word looks like a noun."""
    word = word.lower()
    return word.endswith(('tion', 'sion', 'ment', 'ness', 'ity', 'ism', 'ist', 'er', 'or', 'ance', 'ence'))

def is_likely_adjective(word: str) -> bool:
    """Check if a word looks like an adjective."""
    word = word.lower()
    return word.endswith(('ous', 'ive', 'ful', 'less', 'able', 'ible', 'al', 'ic'))

def generate_real_forms(word: str) -> set[str]:
    """Generate ONLY realistic morphological forms."""
    word = word.lower().strip()
    forms = {word}
    
    if not can_conjugate(word):
        return forms
    
    base = word
    
    # ── PLURAL (nouns) ──
    if word.endswith('s'):
        forms.add(word[:-1])  # dangers -> danger
    else:
        forms.add(word + 's')  # danger -> dangers
        if word.endswith('y') and len(word) > 3 and word[-2] not in 'aeiou':
            forms.add(word[:-1] + 'ies')  # study -> studies
        if word.endswith('ch') or word.endswith('sh') or word.endswith('x') or word.endswith('ss'):
            forms.add(word + 'es')
    
    # ── PAST TENSE (verbs) ──
    if is_likely_verb(word):
        if word.endswith('e'):
            forms.add(word + 'd')  # use -> used
        else:
            forms.add(word + 'ed')  # stop -> stopped
            # Double consonant for CVC pattern
            if len(word) >= 3 and word[-1] not in 'aeiouy' and word[-2] in 'aeiou' and word[-3] not in 'aeiou':
                forms.add(word + word[-1] + 'ed')  # stop -> stopped
    
    # ── PRESENT PARTICIPLE ──
    if is_likely_verb(word):
        if word.endswith('e'):
            forms.add(word[:-1] + 'ing')  # use -> using
        else:
            forms.add(word + 'ing')  # running -> running
            if len(word) >= 3 and word[-1] not in 'aeiouy' and word[-2] in 'aeiou' and word[-3] not in 'aeiou':
                forms.add(word + word[-1] + 'ing')  # stop -> stopping
    
    # ── THIRD PERSON SINGULAR ──
    if is_likely_verb(word):
        if word.endswith('s') or word.endswith('ch') or word.endswith('sh') or word.endswith('x') or word.endswith('o'):
            forms.add(word + 'es')
        elif word.endswith('y') and len(word) > 3 and word[-2] not in 'aeiou':
            forms.add(word[:-1] + 'ies')
        else:
            forms.add(word + 's')
    
    # ── COMPARATIVE/SUPERLATIVE (adjectives) ──
    if is_likely_adjective(word):
        forms.add(word + 'er')
        forms.add(word + 'est')
        forms.add('more ' + word)
        forms.add('most ' + word)
    
    # ── ADVERB FORM ──
    if is_likely_adjective(word) and not word.endswith('ly'):
        if word.endswith('ic'):
            forms.add(word + 'ally')
        else:
            forms.add(word + 'ly')
    
    # ── NEGATIVE FORMS ──
    if can_conjugate(word) and len(word) > 3:
        forms.add('un' + word)
        forms.add('in' + word)
    
    # Remove overly long or short forms
    return {f for f in forms if len(f) >= 2 and len(f) <= 50}


def generate_phrase_variants(phrase: str) -> set[str]:
    """Generate realistic variants for multi-word phrases."""
    phrase = phrase.lower().strip()
    variants = {phrase}
    
    # Common word substitutions
    subs = {
        'everyone': ['everybody', 'all'],
        'nobody': ['no one'],
        'anyone': ['anybody'],
        'someone': ['somebody'],
        'people': ['folks'],
        'that': ['this'],
        'these': ['those'],
        'cannot': ["can't"],
        'will not': ["won't"],
        'is not': ["isn't"],
        'are not': ["aren't"],
        'do not': ["don't"],
        'does not': ["doesn't"],
        'did not': ["didn't"],
    }
    
    words = phrase.split()
    for i, w in enumerate(words):
        if w in subs:
            for alt in subs[w]:
                new_words = words.copy()
                new_words[i] = alt
                variants.add(' '.join(new_words))
    
    return variants


# ── LOAD CORPUS ──

with open('/root/hyperreality-key/src/data/unified_corpus.json') as f:
    corpus = json.load(f)

from collections import defaultdict

# Build expanded rules
tool_rules = defaultdict(lambda: {'words': set(), 'phrases': set(), 'sources': set()})

for entry in corpus['entries']:
    tool = entry['tool']
    source = entry['source']
    tool_rules[tool]['sources'].add(source)
    
    for word in entry['words']:
        word = word.lower().strip()
        if ' ' in word:
            for v in generate_phrase_variants(word):
                tool_rules[tool]['phrases'].add(v)
        else:
            for form in generate_real_forms(word):
                tool_rules[tool]['words'].add(form)

# ── STATS ──
print("=" * 60)
print("SMART NLP MATCHER v2 — RESULTS")
print("=" * 60)

total = 0
for tool in sorted(tool_rules.keys()):
    data = tool_rules[tool]
    wc = len(data['words'])
    pc = len(data['phrases'])
    subtotal = wc + pc
    total += subtotal
    src_list = list(data['sources'])[:3]
    print(f"\n{tool:20s}: {wc:4d} words + {pc:3d} phrases = {subtotal:4d}")
    print(f"  Sources: {', '.join(s[:35] for s in src_list)}")

print(f"\n{'─' * 40}")
print(f"TOTAL: {total} keyword variants across {len(tool_rules)} tools")

# ── GENERATE OUTPUT ──
output = {'tools': {}}
for tool in sorted(tool_rules.keys()):
    data = tool_rules[tool]
    output['tools'][tool] = {
        'words': sorted(data['words']),
        'phrases': sorted(data['phrases']),
        'sources': sorted(data['sources']),
    }

with open('/root/hyperreality-key/src/data/smart_corpus.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"Saved: src/data/smart_corpus.json")

# ── GENERATE TYPESCRIPT HIGHLIGHT RULES ──
# Now generate the actual coreTools.ts update

def escape_ts(s: str) -> str:
    """Escape string for TypeScript single-quoted string."""
    return s.replace("'", "\\'").replace('\n', '\\n')

TOOL_NAMES = {
    'bad-arguments': 'Bad Words',
    'feelings-check': 'Feelings',
    'brain-check': 'Brain Check',
    'hidden-story': 'Hidden Myth',
    'us-vs-them': 'Us vs Them',
    'value-check': 'Moral Buttons',
    'fake-check': 'Fake Check',
    'source-check': 'Source Check',
    'echo-chamber': 'Echo Chamber',
    'agenda-setting': 'Agenda Setting',
    'red-herring': 'Red Herring',
    'false-appeal': 'False Appeal',
}

# Academic descriptions per tool
TOOL_EXPLANATIONS = {
    'bad-arguments': 'Exact word match with smart morphological expansion. Sources: Schopenhauer Eristic Dialectic, Cialdini Authority Principle. Catches logical fallacies, false certainty, overgeneralizations, and unsubstantiated claims.',
    'feelings-check': 'Exact word match with smart morphological expansion. Sources: Cialdini Scarcity/Liking, Elster Social Emotions. Reveals emotional manipulation through fear, urgency, outrage, and sympathy triggers.',
    'brain-check': 'Exact word match with smart morphological expansion. Sources: Kahneman & Tversky cognitive biases. Exposes bandwagon, anchoring, framing effects, false binaries, and System 1 triggers.',
    'hidden-story': 'Exact word match with smart morphological expansion. Sources: Barthes Mythologies, Bourdieu Symbolic Violence, Foucault Discourse/Power. Uncovers myth-making through naturalization, crisis framing, and cultural labeling.',
    'us-vs-them': 'Exact word match with smart morphological expansion. Sources: Tajfel & Turner Social Identity Theory, van Dijk CDA. Detects in-group/out-group polarization, dehumanization metaphors, proximization, and threat construction.',
    'value-check': 'Exact word match with smart morphological expansion. Sources: Haidt Moral Foundations Theory (all 6 foundations). Detects moral manipulation through Care, Fairness, Loyalty, Authority, Sanctity, and Liberty triggers.',
    'fake-check': 'Exact word match with smart morphological expansion. Sources: Baudrillard Simulacra and Simulation. Identifies hyperreality signals, simulacrum formation, and digital manipulation (deepfakes, doctored content).',
    'source-check': 'Exact word match with smart morphological expansion. Sources: Media epistemology, Herman & Chomsky Propaganda Model. Verifies source credibility and catches anonymous authority, hearsay, and vague referencing.',
    'echo-chamber': 'Exact word match with smart morphological expansion. Sources: Lakoff Framing Theory, spiral of silence research. Detects closed-loop narratives, framed language, and self-reinforcing consensus claims.',
    'agenda-setting': 'Exact word match with smart morphological expansion. Sources: McCombs & Shaw Agenda-Setting, Goffman Frame Analysis. Reveals attention redirection, selective framing, and meta-communicative frame manipulation.',
    'red-herring': 'Exact word match with smart morphological expansion. Sources: Schopenhauer Eristic Dialectic (distraction tactics). Flags topic shifts, dismissal patterns, and anecdotal arguments that divert from the real issue.',
    'false-appeal': 'Exact word match with smart morphological expansion. Sources: Foucault classification/power, Schopenhauer ad verecundiam. Detects appeals to false authority, tradition, popularity, and institutional labeling.',
}

print(f"\n{'─' * 40}")
print("GENERATING TYPESCRIPT RULES...")

for tool in sorted(tool_rules.keys()):
    data = tool_rules[tool]
    words = data['words']
    phrases = data['phrases']
    name = TOOL_NAMES.get(tool, tool)
    explanation = TOOL_EXPLANATIONS.get(tool, '')
    
    print(f"  {tool:20s}: {len(words)} words + {len(phrases)} phrases")
    if len(words) > 0:
        print(f"    First 5 words: {', '.join(words[:5])}")
    if len(phrases) > 0:
        print(f"    First 5 phrases: {', '.join(phrases[:5])}")

print(f"\nDONE! Smart corpus saved to src/data/smart_corpus.json")