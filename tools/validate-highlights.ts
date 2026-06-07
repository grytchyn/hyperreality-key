// Validate all highlight rules against article text
import { MISSIONS } from '../src/data/missions'

let totalRules = 0
let totalMatched = 0
let totalMissing = 0

for (const mission of MISSIONS) {
  const text = (mission.content + ' ' + mission.title).toLowerCase()
  const missing: string[] = []
  let ruleCount = 0

  for (const [toolId, rules] of Object.entries(mission.highlightRules)) {
    for (const rule of rules) {
      ruleCount++
      totalRules++
      for (const word of rule.words) {
        if (text.includes(word.toLowerCase())) {
          totalMatched++
        } else {
          totalMissing++
          missing.push(`"${word}" [${toolId}]`)
        }
      }
    }
  }

  if (missing.length > 0) {
    console.log(`⚠️  Mission ${mission.id} (${mission.source}): ${missing.length} missing`)
    missing.slice(0, 8).forEach(m => console.log(`    ✗ ${m}`))
  } else {
    console.log(`✅ Mission ${mission.id}: ${ruleCount} rules, all match`)
  }
}

console.log(`\n---`)
console.log(`Total: ${totalRules} rules, ${totalMatched} matched, ${totalMissing} missing`)
if (totalMissing === 0) console.log('✅ ALL MATCH!')