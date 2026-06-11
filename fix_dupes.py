#!/usr/bin/env python3
with open('src/data/missions.ts', 'r') as f:
    content = f.read()

# Remove duplicate logo lines (keep first, remove second)
# Pattern: logo: '/path',\n    logo: "/path",
import re
# Replace double-quote logo lines that appear right after a single-quote logo line
content = re.sub(r"(logo: '[^']+',\n\s*)logo: \"[^\"]+\",\n", r"\1", content)

with open('src/data/missions.ts', 'w') as f:
    f.write(content)

# Verify no more duplicates
with open('src/data/missions.ts', 'r') as f:
    content = f.read()

dupes = list(re.finditer(r"logo:", content))
print(f"Total 'logo:' occurrences: {len(dupes)}")

# Check for any line with logo appearing on consecutive lines
lines = content.split('\n')
dup_count = 0
for i in range(len(lines) - 1):
    if 'logo:' in lines[i] and 'logo:' in lines[i+1]:
        dup_count += 1
        print(f"DUPLICATE at line {i+1}: {lines[i].strip()} | {lines[i+1].strip()}")

if dup_count == 0:
    print("✅ No duplicate logo lines remaining!")