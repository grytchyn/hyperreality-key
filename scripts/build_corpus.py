#!/usr/bin/env python3
import json

with open('/root/manipulation_keywords_corpus.json') as f:
    social_corpus = json.load(f)
with open('/root/philosopher_corpus.json') as f:
    philosopher_corpus = json.load(f)

TOOL_MAP = {
    'us-vs-them': 'us-vs-them', 'value-check': 'value-check', 'echo-chamber': 'echo-chamber',
    'ideological-square': 'us-vs-them', 'frame-control': 'agenda-setting', 'emotion-trigger': 'feelings-check',
    'hidden-story': 'hidden-story', 'fake-check': 'fake-check', 'bad-arguments': 'bad-arguments',
    'false-appeal': 'false-appeal',
}

stats = {'entries': 0, 'words': 0, 'phrases': 0, 'per_tool': {}, 'per_source': {}}
all_entries = []

for entry in social_corpus + philosopher_corpus:
    tool = entry.get('tool', 'unknown')
    mapped_tool = TOOL_MAP.get(tool, tool)
    if mapped_tool not in stats['per_tool']:
        stats['per_tool'][mapped_tool] = {'entries': 0, 'words': 0, 'phrases': 0}
    stats['per_tool'][mapped_tool]['entries'] += 1
    for w in entry.get('words', []):
        if ' ' in w:
            stats['per_tool'][mapped_tool]['phrases'] += 1
        else:
            stats['per_tool'][mapped_tool]['words'] += 1
    source = entry.get('source', 'unknown')
    stats['per_source'][source] = stats['per_source'].get(source, 0) + 1
    stats['entries'] += 1
    for w in entry.get('words', []):
        stats['words'] += 1
        if ' ' in w:
            stats['phrases'] += 1
    all_entries.append({'words': entry.get('words', []), 'tool': mapped_tool, 'source': source})

output = {
    'meta': {'total_entries': stats['entries'], 'total_words': stats['words'], 'total_phrases': stats['phrases'], 'sources_covered': len(stats['per_source'])},
    'entries': all_entries
}
with open('/root/hyperreality-key/src/data/unified_corpus.json', 'w') as f:
    json.dump(output, f, indent=2)

print("=" * 50)
print(f"UNIFIED CORPUS: {stats['entries']} entries, {stats['words']} total words")
print(f"Sources: {len(stats['per_source'])}")
print()
for t, s in sorted(stats['per_tool'].items()):
    print(f"  {t:20s} {s['entries']:3d} entries, {s['words']+s['phrases']:4d} total keywords")
print()
print("Top sources:")
for src, count in sorted(stats['per_source'].items(), key=lambda x: -x[1])[:10]:
    print(f"  {count:3d}  {src[:60]}")
