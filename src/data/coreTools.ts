// ── CORE TOOLS v8 — Scientific Framework ──
//
// Each tool is based on established academic research:
//   - Cialdini (Influence / 6 Principles)
//   - Kahneman & Tversky (Cognitive Biases / System 1)
//   - Haidt (Moral Foundations Theory)
//   - Tajfel & Turner (Social Identity Theory)
//   - Barthes (Mythologies / Semiotics)
//   - Schopenhauer (Eristic Dialectic / Logical Fallacies)
//
// Matching rules: EXACT word match only. Multi-word phrases matched before
// any single-word matching to prevent false positives.

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Logische Fehler & falsche Autorität — fundiert auf Schopenhauers Eristik und Cialdini.',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Emotionale Trigger — Angst, Dringlichkeit, Mitleid. Cialdini: Scarcity & Liking.',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Kognitive Verzerrungen — Kahneman System 1. Anker-Effekt, Mitläufertum, Framing.',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Myth',
    color: '#06b6d4',
    description: 'Mythen & Narrative — Roland Barthes: wie Ideologie als "natürlich" getarnt wird.',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'Wir/Sie — Tajfel & Turner: Social Identity Theory. Binäre Feindbilder.',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Moral Buttons',
    color: '#f97316',
    description: 'Moral Foundations — Haidt: Care, Fairness, Loyalty, Authority, Sanctity.',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Realität vs Simulation — Baudrillard: Hyperrealität. Quellen-Epistemologie.',
  },
]

export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '⚡',
  'feelings-check': '🔥',
  'brain-check': '🔬',
  'hidden-story': '🔍',
  'us-vs-them': '⚔️',
  'value-check': '🛡️',
  'fake-check': '👁️',
}

// ── HIGHLIGHT RULES v8 — Scientific Precision ──
//
// Rules use EXACT word matching (array of exact word strings).
// Multi-word phrases live in `phrases[]` and are checked first.
// No stem/prefix matching — "danger" does NOT match "dangerous".

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  // ── BAD ARGUMENTS: Schopenhauer, Cialdini (Authority) ──
  'bad-arguments': [
    // Absolute language — overgeneralization / false dichotomy
    { words: ['always', 'never', 'everyone', 'nobody', 'every', 'none', 'nothing', 'all', 'totally', 'completely', 'absolutely'], explanation: 'Absolutwort — unterdrückt Ausnahmen (Schopenhauer: Überverallgemeinerung).' },
    // False authority — name-dropping without credentials
    { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority'], explanation: 'Autoritätsbehauptung — Cialdini: Authority. Wer ist diese Person wirklich?' },
    // False certainty — presenting opinion as obvious
    { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'], explanation: 'Falsche Gewissheit — "offensichtlich" ersetzt Argumente (Eristik: dictum simpliciter).' },
    // Fake precision — numbers without source
    { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage'], explanation: 'Falsche Präzision — Zahl ohne Quelle ist Meinung, kein Fakt.' },
  ],

  // ── FEELINGS CHECK: Cialdini (Scarcity, Liking), Fear Appeals ──
  'feelings-check': [
    // Fear triggers
    { words: ['fear', 'danger', 'terrible', 'horrible', 'unthinkable', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'dreadful'], explanation: 'Angstmasche — Cialdini: Scarcity plus Fear. Wer profitiert von deiner Angst?' },
    // Urgency / panic
    { words: ['urgent', 'immediately', 'now', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it'], explanation: 'Dringlichkeit — soll System 1 über System 2 stellen. Atme durch.' },
    // Outrage bait
    { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'], explanation: 'Empörungsköder — Emotion statt Argument. Wutanfall ist beabsichtigt.' },
    // Sympathy / pity manipulation
    { words: ['poor', 'suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless'], explanation: 'Mitleidslenkung — Cialdini: Liking. Emotionale Bindung statt Fakten.' },
  ],

  // ── BRAIN CHECK: Kahneman (System 1 biases) ──
  'brain-check': [
    // Bandwagon / majority appeal
    { words: ['majority', 'most people', 'everyone', 'public', 'popular', 'widespread', 'common', 'people say', 'according to'], explanation: 'Mitläufertum — Kahneman: Availability Heuristic. "Viele glauben das" ≠ es stimmt.' },
    // Anchoring — dramatic numbers
    { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive'], explanation: 'Anker-Zahl — Kahneman: Anchoring. Setzt einen extremen Vergleichspunkt.' },
    // False consensus / "of course" framing
    { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'], explanation: 'Framing als Konsens — Kahneman: WYSIATI. Nur weil es im Text steht, ist es nicht wahr.' },
    // Straw man / false binary
    { words: ['either', 'or', 'only', 'choice', 'alternative', 'option'], explanation: 'Falsche Binarität — Kahneman: Framing. Entweder/Oder ignoriert Nuancen.' },
  ],

  // ── HIDDEN MYTH: Roland Barthes (Mythologies) ──
  'hidden-story': [
    // Key myth signifiers
    { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural'], explanation: 'Barthes: Mythos entlarvt — "Freiheit" ist kein Argument, sondern eine Geschichte.' },
    // Naturalization — presenting ideology as "just the way things are"
    { words: ['natural', 'normal', 'proper', 'correct', 'right', 'inevitable', 'unavoidable', 'just is', 'reality'], explanation: 'Barthes: Naturalisierung — Ideologie wird als "normal" getarnt. Wer definiert normal?' },
    // Crisis mythology
    { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster'], explanation: 'Barthes: Mythos der Krise — suggeriert Dringlichkeit und rechtfertigt Maßnahmen.' },
  ],

  // ── US VS THEM: Tajfel & Turner (Social Identity Theory) ──
  'us-vs-them': [
    // In-group
    { words: ['we', 'us', 'our', 'ourselves', 'our own', 'our people', 'our nation', 'our culture'], explanation: 'Tajfel: In-Group — "wir" schafft Zugehörigkeit. Wer gehört nicht zu "uns"?' },
    // Out-group
    { words: ['they', 'them', 'their', 'those', 'these', 'these people', 'outsiders', 'foreigners', 'strangers', 'others', 'the other'], explanation: 'Tajfel: Out-Group — "die" werden homogenisiert. Individuen verschwinden.' },
    // Binary moral labels
    { words: ['good', 'bad', 'evil', 'pure', 'dangerous', 'threat', 'menace', 'correct', 'wrong', 'right'], explanation: 'Tajfel: Binary — nur zwei Kategorien. Das Grau dazwischen wird ausgelöscht.' },
    // Dehumanization markers
    { words: ['flood', 'wave', 'invasion', 'swarm', 'plague', 'infestation', 'tide'], explanation: 'Entmenschlichung — Metaphern aus der Natur machen Menschen zur Bedrohung.' },
  ],

  // ── MORAL BUTTONS: Haidt (Moral Foundations Theory) ──
  'value-check': [
    // Care/harm foundation
    { words: ['innocent', 'hurt', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'kindness', 'compassion', 'care'], explanation: 'Haidt: Care — aktiviert Mitgefühl oder Empörung. Prüfe, wer als Opfer dargestellt wird.' },
    // Fairness/cheating foundation
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination'], explanation: 'Haidt: Fairness — Gefühl von Ungerechtigkeit. Wird Fairness wirklich verletzt?' },
    // Loyalty/betrayal foundation
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together', 'treason', 'loyalty', 'sacrifice', 'nation'], explanation: 'Haidt: Loyalty — Tribalismus. "Wir" gegen "Verräter".' },
    // Authority/subversion foundation
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'disobey', 'rebel', 'establishment'], explanation: 'Haidt: Authority — Hierarchie wird beschworen. Wer bestimmt, was Respekt ist?' },
    // Sanctity/degradation foundation
    { words: ['pure', 'impure', 'sacred', 'sin', 'disgust', 'filthy', 'clean', 'dirty', 'corrupt', 'decay', 'degradation'], explanation: 'Haidt: Sanctity — Ekel als moralisches Urteil. Körpermetaphern für abstrakte Kritik.' },
  ],

  // ── FAKE CHECK: Baudrillard (Simulacra), Epistemology ──
  'fake-check': [
    // Simulation markers — the text references internet itself
    { words: ['viral', 'meme', 'trending', 'share', 'like', 'follow', 'influencer', 'social media', 'go viral', 'blowing up'], explanation: 'Baudrillard: Simulacrum — der Inhalt handelt nur noch von seiner eigenen Verbreitung.' },
    // Unverified / hearsay
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'claims', 'alleged'], explanation: 'Epistemologie: unbestätigt — mindestens eine Stufe von der Realität entfernt.' },
    // Epistemic breaks — text signals its own unreality
    { words: ['literally', 'unreal', 'surreal', 'like a movie', 'dream', 'can\'t believe', 'unbelievable', 'like a scene', 'straight out of'], explanation: 'Baudrillard: Hyperrealität — der Text selbst sagt, dass etwas nicht stimmt.' },
  ],
}

// ── HIGHLIGHT FUNCTION v8 — Exact match only ──
// No stem/prefix matching. Multi-word phrases stored as-is in array.
// Single words: matched EXACTLY after lowercasing.

export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()

  // Build token set: single words
  const singleTokens = text.toLowerCase().replace(/[^a-z\s']/g, '').split(/\s+/).filter(Boolean)

  // Check multi-word phrases first (they contain spaces)
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    for (const rule of rules) {
      for (const phrase of rule.words) {
        if (phrase.includes(' ')) {
          // Multi-word phrase: check if text contains it (case-insensitive)
          const lowerText = text.toLowerCase()
          if (lowerText.includes(phrase.toLowerCase())) {
            addEntry(map, phrase, { word: phrase, explanation: rule.explanation, color: config.color })
          }
        }
      }
    }
  }

  // Then single words — EXACT match only
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    // Check each unique word in the text against each rule's single words
    const seen = new Set<string>()
    for (const token of singleTokens) {
      if (seen.has(token)) continue
      seen.add(token)

      for (const rule of rules) {
        // Match only exact single-word entries (no spaces)
        const exactWords = rule.words.filter(w => !w.includes(' '))
        if (exactWords.includes(token)) {
          addEntry(map, token, { word: token, explanation: rule.explanation, color: config.color })
          break  // one explanation per word per tool
        }
      }
    }
  }

  return map
}

function addEntry(map: Map<string, HighlightEntry[]>, key: string, entry: HighlightEntry) {
  const existing = map.get(key) || []
  // Avoid duplicate explanations for same word+color
  if (!existing.some(e => e.explanation === entry.explanation && e.color === entry.color)) {
    existing.push(entry)
    map.set(key, existing)
  }
}
