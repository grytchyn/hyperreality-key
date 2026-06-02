// ── CORE TOOLS v11 — EN-only, clean ──
// 12 Tools based on established academic research
// Porter-style English stemmer for highlight matching

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  { id: 'bad-arguments', icon: '⚠️', name: 'Bad Words', color: '#ef4444',
    description: 'Catches logical tricks and fake authority. "Experts say" without naming who → name-dropping. "Everyone knows" → overgeneralization. Ask: Would this hold up in a debate?' },
  { id: 'feelings-check', icon: '🎭', name: 'Feelings', color: '#f59e0b',
    description: 'Reveals emotional manipulation. Fear words (shocking, urgent) → Cialdini\'s Scarcity. Outrage bait (scandal, disgrace) → bypasses logic. Ask: What emotion are they trying to make you feel?' },
  { id: 'brain-check', icon: '🧠', name: 'Brain Check', color: '#22c55e',
    description: 'Exposes cognitive shortcuts (Kahneman System 1). "Most people" → bandwagon effect. "Record numbers" → anchoring bias. Ask: Are you thinking, or just reacting?' },
  { id: 'hidden-story', icon: '🗺️', name: 'Hidden Myth', color: '#06b6d4',
    description: 'Uncovers the deeper narrative (Barthes\' Mythologies). "Freedom", "security", "crisis" are not facts — they are stories with hidden agendas. Ask: What world-view does this make seem inevitable?' },
  { id: 'us-vs-them', icon: '⚔️', name: 'Us vs Them', color: '#d946ef',
    description: 'Reveals social division tactics (Tajfel\'s Social Identity Theory). "We" vs "they" creates in-groups and out-groups. "Flood", "invasion" dehumanize. Ask: Who is being cast as the enemy?' },
  { id: 'value-check', icon: '📊', name: 'Moral Buttons', color: '#f97316',
    description: 'Detects which moral foundation (Haidt) is pressed. Care: "children" → compassion. Fairness: "corrupt" → injustice. Authority: "order" → hierarchy. Ask: Which button are they pushing?' },
  { id: 'fake-check', icon: '🌀', name: 'Fake Check', color: '#a78bfa',
    description: 'Assesses reality level (Baudrillard\'s Hyperreality). Is this a real event, distorted report, or pure simulation? "Viral", "trending" cares only about spread. Ask: Is this about reality or attention?' },
  { id: 'source-check', icon: '📋', name: 'Source Check', color: '#14b8a6',
    description: 'Verifies whether sources actually exist. "According to experts", "studies show" → anonymous authority. "Sources say" → no named source. Ask: Can I find this in 30 seconds?' },
  { id: 'echo-chamber', icon: '🔄', name: 'Echo Chamber', color: '#ec4899',
    description: 'Detects closed loops of self-reinforcing information. "Multiple sources" citing each other is not corroboration — it\'s an echo. Ask: are they all reading the same thing?' },
  { id: 'agenda-setting', icon: '🎯', name: 'Agenda Setting', color: '#0ea5e9',
    description: 'Reveals what is amplified and ignored. "The real issue", "what matters" — the story tells you what to focus on. Ask: what is this making sure I DON\'T think about?' },
  { id: 'red-herring', icon: '🐟', name: 'Red Herring', color: '#8b5cf6',
    description: 'Flags deliberate distractions. "Meanwhile", "what about" — shift focus to something irrelevant. A complex issue reduced to one shocking detail. Ask: is this relevant or distracting?' },
  { id: 'false-appeal', icon: '🎪', name: 'False Appeal', color: '#e11d48',
    description: 'Detects appeals to false authority, tradition, or popularity. "For centuries", "leading experts" — evidence replaced by appearance. Ask: is there actual evidence here?' },
]

export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '⚡', 'feelings-check': '🔥', 'brain-check': '🔬',
  'hidden-story': '🔍', 'us-vs-them': '⚔️', 'value-check': '🛡️',
  'fake-check': '👁️', 'source-check': '📋', 'echo-chamber': '🔄',
  'agenda-setting': '🎯', 'red-herring': '🐟', 'false-appeal': '🎪',
}

// ── ENGLISH STEMMER (Porter-style) ──
function simpleStem(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length < 3) return w
  if (w.endsWith('sses')) w = w.slice(0, -2)
  else if (w.endsWith('ies')) w = w.slice(0, -2)
  else if (w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1)
  if (w.endsWith('eed') && w.length > 3) { /* keep */ }
  else if (w.endsWith('ed') && w.length > 2) { const stem = w.slice(0, -2); if (/[aeiou]/.test(stem)) w = stem }
  else if (w.endsWith('ing') && w.length > 3) { const stem = w.slice(0, -3); if (/[aeiou]/.test(stem)) w = stem }
  if (w.endsWith('y') && w.length > 2 && /[aeiou]/.test(w.slice(0, -1))) { w = w.slice(0, -1) + 'i' }
  const step2: [string, string][] = [
    ['ational', 'ate'], ['tional', 'tion'], ['ization', 'ize'],
    ['iveness', 'ive'], ['fulness', 'ful'], ['ousness', 'ous'],
    ['ation', 'ate'], ['ator', 'ate'], ['iviti', 'ive'], ['biliti', 'ble'],
    ['alism', 'al'], ['aliti', 'al'], ['entli', 'ent'], ['ousli', 'ous'],
    ['enci', 'ence'], ['anci', 'ance'], ['abli', 'able'], ['izer', 'ize'],
    ['alli', 'al'], ['eli', 'e'],
  ]
  for (const [suf, rep] of step2) { if (w.endsWith(suf) && w.length > suf.length + 1) { w = w.slice(0, -suf.length) + rep; break } }
  if (w.endsWith('icate') && w.length > 5) w = w.slice(0, -4) + 'ic'
  else if (w.endsWith('ative') && w.length > 5) w = w.slice(0, -5)
  else if (w.endsWith('alize') && w.length > 5) w = w.slice(0, -4) + 'al'
  else if (w.endsWith('ical') && w.length > 4) w = w.slice(0, -3) + 'ic'
  else if (w.endsWith('ness') && w.length > 4) w = w.slice(0, -4)
  else if (w.endsWith('ful') && w.length > 3) w = w.slice(0, -3)
  else if (w.endsWith('ment') && w.length > 4) w = w.slice(0, -4)
  const step4Suffs = ['al', 'ance', 'ence', 'er', 'ic', 'able', 'ible', 'ant', 'ement', 'ment', 'ent', 'ism', 'ate', 'iti', 'ous', 'ive', 'ize']
  for (const suf of step4Suffs) { if (w.endsWith(suf) && w.length > suf.length + 2) { w = w.slice(0, -suf.length); break } }
  if (w.endsWith('ion') && w.length > 4 && /[st]/.test(w[w.length - 4] || '')) w = w.slice(0, -3)
  if (w.endsWith('e') && w.length > 3) { if (w.length > 4) w = w.slice(0, -1) }
  return w
}

// ── HIGHLIGHT RULES ──
const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  'bad-arguments': [
    { words: ['always', 'never', 'every', 'none', 'nothing', 'totally', 'completely', 'absolutely', 'definitive', 'undoubtedly', 'without a doubt', 'beyond question', 'no question'],
      explanation: '⚠️ Absolute word — Schopenhauer\'s "overgeneralization": claiming something is universal when it never is. Real life has nuance. Ask: is there really no exception anywhere?' },
    { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority', 'researcher', 'specialist', 'analyst'],
      explanation: '🎭 Authority claim — Cialdini\'s Principle: we automatically trust titles. But who is this "expert"? Real authorities name themselves and provide verifiable credentials.' },
    { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly', 'evidently'],
      explanation: '🧠 False certainty — "obviously" replaces actual arguments. Schopenhauer: if something needs to be called "obvious," it probably isn\'t.' },
    { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage', 'data', 'findings'],
      explanation: '📊 False precision — a number without a source is just an opinion with a costume. Always ask: show me the study.' },
    { words: ['rumor', 'rumors', 'viral', 'claim', 'claims', 'allegedly', 'supposedly', 'according to', 'reportedly'],
      explanation: '📢 Unsubstantiated claim — "rumor has it" is not evidence. The original source is missing. Ask: can I trace this to something real?' },
    { words: ['everybody', 'everyone', 'everything', 'everywhere', 'nobody', 'nowhere', 'whoever'],
      explanation: '🌐 Universal quantifier — paints a claim as universally true. Rarely is anything truly universal. Ask: who exactly? Is there ANYONE who doesn\'t fit?' },
    { words: ['strawman', 'straw man', 'misrepresent', 'mischaracterize'],
      explanation: '🎯 Straw man — misrepresenting an argument to make it easier to attack. Ask: is this an accurate restatement of the opposing view?' },
  ],
  'feelings-check': [
    { words: ['fear', 'danger', 'terrible', 'horrible', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'terrifying', 'abuse', 'alarming'],
      explanation: '😨 Fear bait — Cialdini\'s Scarcity principle: fear makes us act without thinking. When language screams, logic whispers. Ask: who benefits from my fear?' },
    { words: ['urgent', 'immediately', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it', 'breaking'],
      explanation: '⏰ Urgency — artificial time pressure bypasses critical thinking. Take a breath. Nothing truly important demands blind speed.' },
    { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous', 'shameful'],
      explanation: '🔥 Outrage bait — emotion replaces argument. Anger is designed to make you share before thinking. Ask: what facts hide behind this fury?' },
    { words: ['suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless', 'exploit', 'exploitation'],
      explanation: '💔 Sympathy manipulation — Cialdini\'s Liking principle. Real charity informs. Manipulation targets your compassion to bypass reason.' },
  ],
  'brain-check': [
    { words: ['majority', 'most people', 'people say', 'popular opinion', 'everyone thinks', 'overwhelmingly', 'vast majority', 'general consensus'],
      explanation: '👥 Bandwagon — Kahneman\'s Availability Heuristic. "Most people" replaces evidence with social proof. Truth is not a democracy.' },
    { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive', 'hundreds of', 'thousands of', 'historic'],
      explanation: '⚓ Anchoring — big numbers set an emotional anchor. 45,000 sounds huge — compared to what? Always ask: compared to WHAT baseline?' },
    { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'],
      explanation: '🧩 Framing as consensus — "common sense" frames opinion as universal truth. Real issues have trade-offs. Ask: what viewpoint is hidden?' },
    { words: ['either/or', 'only choice', 'no choice', 'only option', 'no alternative', 'take it or leave it', 'both sides'],
      explanation: '⚖️ False binary — reducing complex issues to two choices. "Either you\'re with us or against us" ignores the spectrum. Ask: who drew these boxes?' },
  ],
  'hidden-story': [
    { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural', 'privacy', 'surveillance'],
      explanation: '🏛️ Barthes: Myth exposed — "Freedom" is not an argument, it\'s a story. Abstract ideals justify concrete policies without evidence. Ask: who defined this word?' },
    { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster', 'catastrophe', 'violation'],
      explanation: '📢 Barthes: Myth of crisis — "crisis" justifies extraordinary measures and suspends debate. Not every problem is a crisis. Ask: is this really a crisis?' },
    { words: ['heritage', 'classic', 'legacy', 'age-old', 'ancient', 'time-honored'],
      explanation: '🏛️ Myth of tradition — tradition is presented as inherently valuable. But tradition is just what people before us chose. Ask: is this valuable BECAUSE it\'s old?' },
  ],
  'us-vs-them': [
    { words: ['our kind', 'our way of life', 'our values', 'our homeland', 'our country', 'our culture', 'our nation', 'our people'],
      explanation: '🛡️ Tajfel: In-group branding — "our" creates an exclusive club. Even randomly assigned groups produce "us vs them" bias. Ask: who is NOT included?' },
    { words: ['those people', 'these people', 'outsiders', 'foreigners', 'strangers', 'the other', 'others'],
      explanation: '🚫 Out-group labeling — "those people" turns humans into a homogeneous mass. Once de-individuated, they\'re easier to fear. Ask: have you talked to them?' },
    { words: ['invasion', 'flood of', 'wave of', 'swarm', 'plague', 'tide', 'taking over', 'destroying our', 'against us', 'coming for'],
      explanation: '🌊 Dehumanization — war metaphors ("flood," "invasion") turn people into forces of nature. You can\'t negotiate with a flood.' },
    { words: ['threat', 'encroaching', 'creeping', 'infiltration', 'infiltrating', 'fifth column'],
      explanation: '🚨 Proximization — "they are at our doorstep" creates urgency. Ask: is this threat real or framed as approaching to justify action?' },
  ],
  'value-check': [
    { words: ['innocent', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'compassion', 'addictive', 'addiction'],
      explanation: '💚 Haidt: Care — activates compassion or outrage instantly. "Innocent children" is the most universal moral trigger. Ask: who is the victim?' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination', 'greed'],
      explanation: '⚖️ Haidt: Fairness — injustice is one of the strongest motivators. "Corrupt," "unfair" trigger outrage. Ask: what\'s the full picture?' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'treason', 'loyalty', 'sacrifice', 'nation'],
      explanation: '🤝 Haidt: Loyalty — "patriot," "traitor" bind the in-group together. Questioning loyalty silences dissent. Ask: is this about genuine loyalty?' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'establishment'],
      explanation: '👑 Haidt: Authority — hierarchy demands compliance. "Respect," "order," "duty" activate our respect for authority. Ask: who decides its legitimacy?' },
    { words: ['freedom', 'liberty', 'tyranny', 'oppression', 'enslaved', 'dictatorship', 'coercion', 'government overreach'],
      explanation: '🔓 Haidt: Liberty — reactance against control. "Tyranny" triggers pushback. The trick: framing any regulation as oppression. Ask: is this genuinely controlling?' },
  ],
  'fake-check': [
    { words: ['viral', 'meme', 'trending', 'influencer', 'social media', 'go viral', 'blowing up', 'deepfake', 'deepfakes'],
      explanation: '🔄 Baudrillard: Simulacrum — content only cares about its own spread. "Viral" — the message IS the medium. Ask: is there any actual information?' },
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'doctored', 'falsely', 'manipulated', 'misinformation'],
      explanation: '🔎 Unverified — the text admits unreliability. "Allegedly" — the author covers themselves while spreading the claim. Ask: why tell me if unconfirmed?' },
    { words: ['unreal', 'surreal', 'like a movie', "can't believe", 'unbelievable', 'like a scene', 'straight out of'],
      explanation: '🌀 Baudrillard: Hyperreality — even the text knows something is off. The simulation has become more real than reality.' },
    { words: ['artificial', 'fabricated', 'fabrication', 'simulated', 'simulation', 'virtual', 'hyperreal', 'hyperreality'],
      explanation: '🌀 Simulation order — Baudrillard\'s 4 stages. The 4th stage (pure simulacrum) has no connection to any reality. Ask: does this refer to something real?' },
  ],
  'source-check': [
    { words: ['experts', 'scientists', 'researchers', 'doctors', 'professionals', 'authorities', 'analysts', 'specialists'],
      explanation: '🎭 Anonymous authority — "Experts say" is not a source, it\'s a stage prop. Unnamed experts = rhetorical devices. Ask: what are their names?' },
    { words: ['study', 'studies', 'research', 'survey', 'report', 'analysis', 'data', 'statistics'],
      explanation: '📚 Vague reference — "A study shows" is meaningless without details. Which study? Which university? Ask: can I find this in 30 seconds?' },
    { words: ['people say', 'sources say', 'it is said', 'reportedly', 'rumored', 'rumor', 'rumors'],
      explanation: '🗣️ Hearsay — someone heard from someone. "Sources say" is rumor dressed up as reporting. Ask: who is the original source?' },
    { words: ['alleged', 'unconfirmed', 'unverified', 'claimed', 'supposed', 'purported'],
      explanation: '❌ Unverified — the text admits it can\'t confirm its own claim. Ask: why is this being shared if it cannot be confirmed?' },
  ],
  'echo-chamber': [
    { words: ['everyone is saying', 'everyone agrees', 'all over the internet', 'trending everywhere', 'going viral', 'everywhere i look'],
      explanation: '🔄 Echo loop — "everyone is saying" claims consensus without evidence. One story shared 1000 times ≠ 1000 sources.' },
    { words: ['multiple sources', 'sources confirm', 'all outlets', 'every news outlet', 'across the board'],
      explanation: '📡 Self-referencing — "multiple sources" often means one wire story republished. Real corroboration = independent investigations.' },
    { words: ['common sense', 'common knowledge', 'conventional wisdom', 'widely known', 'general consensus'],
      explanation: '🧠 Lakoff: Framing as common sense — calling something "common sense" positions it as beyond debate. But what\'s "common sense" varies by culture.' },
  ],
  'agenda-setting': [
    { words: ['the real issue', 'the real problem', 'what matters', 'what really matters', 'the only thing', 'the only question', 'the crux', 'at the heart of'],
      explanation: '🎯 Framing — the author tells you what to focus on. McCombs & Shaw: media tells you WHAT TO THINK ABOUT. Ask: what am I being made to ignore?' },
    { words: ['meanwhile', 'behind the scenes', "what they don't want you to know", 'hidden truth', "what the media isn't telling you"],
      explanation: '🖥️ Selective attention — "what they don\'t want you to know" positions the story as hidden truth. The framing IS the manipulation.' },
    { words: ['forget', 'ignore', 'the real story', "nobody's talking about"],
      explanation: '👁️ Attention redirection — telling you to "forget X" is explicitly setting your agenda. Ask: is this underreported or just spun as suppressed?' },
  ],
  'red-herring': [
    { words: ['but what about', 'what about', 'and yet', 'despite this', 'meanwhile', 'not to mention', 'forget that'],
      explanation: '🐟 Distraction — "but what about" shifts to easier ground. Schopenhauer: when losing an argument, change the subject. Ask: is this relevant?' },
    { words: ['isolated incident', 'one bad apple', 'not all', 'just a few', 'a tiny minority', 'lone wolf', 'single case'],
      explanation: '🎯 Dismissal — "one bad apple" sounds reasonable but distracts from systemic issues. Ask: is "isolated" dismissing a real pattern?' },
    { words: ['anecdotal', 'but personally', 'in my experience', 'from what i see', 'i know someone'],
      explanation: '📖 Anecdote as argument — one personal story presented as evidence against data. Availability Heuristic: vivid stories override dry data.' },
  ],
  'false-appeal': [
    { words: ['for centuries', 'for generations', 'always been', 'time-tested', 'traditional', 'age-old', 'ancient wisdom'],
      explanation: '🎪 Appeal to tradition — "for centuries" is not an argument, it\'s a timeline. Bloodletting was practiced for centuries. Age ≠ validity.' },
    { words: ['modern', 'progressive', 'new era', 'cutting-edge', 'revolutionary', 'disruptive', 'next generation', 'next level'],
      explanation: '🎪 Appeal to novelty — "new" is not inherently better. Hype replaces evidence. Ask: what SPECIFICALLY makes this better?' },
    { words: ['everyone knows', 'everyone agrees', 'common sense', 'universally accepted', 'widely recognized', 'general consensus'],
      explanation: '🎪 Popularity as proof — argumentum ad populum. The Earth being flat was once "common sense." Ask: is this based on evidence?' },
  ],
}

// ── HIGHLIGHT FUNCTION ──
export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()
  const cleanedText = text.toLowerCase().replace(/[^a-z\s']/g, ' ')
  const singleTokens = cleanedText.split(/\s+/).filter(Boolean)

  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    // Multi-word phrases first (exact match)
    for (const rule of rules) {
      for (const phrase of rule.words) {
        if (phrase.includes(' ')) {
          if (text.toLowerCase().includes(phrase.toLowerCase())) {
            addEntry(map, phrase, { word: phrase, explanation: rule.explanation, color: config.color })
          }
        }
      }
    }

    // Single words — stem-based
    const stemMap = new Map<string, { word: string; explanation: string }[]>()
    for (const rule of rules) {
      for (const word of rule.words) {
        if (word.includes(' ')) continue
        const stem = simpleStem(word)
        const existing = stemMap.get(stem) || []
        existing.push({ word, explanation: rule.explanation })
        stemMap.set(stem, existing)
      }
    }

    const seen = new Set<string>()
    for (const token of singleTokens) {
      if (seen.has(token)) continue
      const tokenStem = simpleStem(token)
      const matches = stemMap.get(tokenStem)
      if (matches && matches.length > 0) {
        seen.add(token)
        const uniqueExplanations = [...new Set(matches.map(m => m.explanation))]
        addEntry(map, token, { word: token, explanation: uniqueExplanations.join(' • '), color: config.color })
      }
    }
  }

  return map
}

function addEntry(map: Map<string, HighlightEntry[]>, key: string, entry: HighlightEntry) {
  const existing = map.get(key) || []
  if (!existing.some(e => e.word === entry.word && e.color === entry.color)) {
    existing.push(entry)
    map.set(key, existing)
  }
}