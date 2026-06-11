#!/usr/bin/env python3
import re

with open('src/data/missions.ts', 'r') as f:
    content = f.read()

# 1. Add logo to interface
content = content.replace(
    '  url: string\n  scientist: string',
    '  url: string\n  logo: string\n  scientist: string'
)

print("✅ logo added to interface")

# 2. Add logo field after each url:
logo_map = {
    'Reuters/Ipsos': '/assets/logos/reuters.svg',
    'Reuters': '/assets/logos/reuters.svg',
    'PBS NewsHour': '/assets/logos/pbs.svg',
    'AP News': '/assets/logos/ap.svg',
    'The Guardian': '/assets/logos/guardian.svg',
    'BBC': '/assets/logos/bbc.svg',
    'BBC News': '/assets/logos/bbc.svg',
}

lines = content.split('\n')
output = []
for line in lines:
    output.append(line)
    m = re.match(r'^(\s*)url:\s*\'([^\']+)\'', line)
    if m:
        indent = m.group(1)
        source_val = None
        for prev in reversed(output):
            sm = re.search(r"source:\s*'([^']+)'", prev)
            if sm:
                source_val = sm.group(1)
                break
        logo_path = logo_map.get(source_val, '/assets/logos/reuters.svg')
        output.append(f"{indent}logo: '{logo_path}',")

content = '\n'.join(output)
print("✅ logo field added to all missions")

with open('src/data/missions.ts', 'w') as f:
    f.write(content)

print("✅ File written successfully")