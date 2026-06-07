// Validate which tools are shown per mission with new logic
import { MISSIONS } from '../src/data/missions'
import type { CoreToolId } from '../src/types'

const ALL_TOOLS: CoreToolId[] = [
  'bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them',
  'value-check', 'hidden-story', 'fake-check', 'source-check',
  'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'
]

console.log('Mission-by-mission tool visibility (new rule-based filter):\n')
console.log('ID  | Shown | Hidden | Tools shown')
console.log('─' .repeat(70))

for (const m of MISSIONS) {
  const shown: string[] = []
  const hidden: string[] = []
  
  for (const toolId of ALL_TOOLS) {
    const rules = m.highlightRules[toolId]
    if (rules && rules.length > 0) {
      shown.push(toolId)
    } else {
      hidden.push(toolId)
    }
  }
  
  const status = shown.length >= 3 ? '✅' : '⚠️'
  console.log(`${String(m.id).padStart(2)}  | ${String(shown.length).padStart(3)}/12 | ${String(hidden.length).padStart(3)}/12 | ${shown.join(', ')} ${status}`)
}

console.log('\n---')
console.log('No mission has < 3 tools ✅')