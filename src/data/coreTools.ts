// ── CORE TOOLS v8 — Scientific Framework (English only) ──
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
//
// v8.1 — Refined highlight rules to eliminate false positives from common
// English words (we, us, our, they, them, good, bad, all, everyone, nobody).
// Us-vs-Them now uses multi-word phrases instead of generic pronouns.

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Catches logical tricks and fake authority. Example: "Experts say" without naming who → name-dropping. "Everyone knows" → overgeneralization. "Never/always" → ignores exceptions. Ask: Would this hold up in a debate?',
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Reveals emotional manipulation. Fear words (shocking, urgent) → Cialdini\'s Scarcity. Outrage bait (scandal, disgrace) → bypasses logic. Pity (victim, innocent) → Liking principle. Ask: What emotion are they trying to make you feel — and why?',
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Exposes cognitive shortcuts (Kahneman System 1). "Most people" → bandwagon effect. "Record numbers" → anchoring bias. "Of course, obviously" → availability heuristic. Ask: Are you thinking, or just reacting?',
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: 'Hidden Myth',
    color: '#06b6d4',
    description: 'Uncovers the deeper narrative (Roland Barthes\' Mythologies). "Freedom", "security", "crisis" are not facts — they are stories with hidden agendas. When something is called "natural" or "normal", ideology is disguised as common sense. Ask: What world-view does this try to make seem inevitable?',
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'Reveals social division tactics (Tajfel\'s Social Identity Theory). "We" vs "they" creates in-groups and out-groups in seconds. "Flood", "wave", "invasion" dehumanize people by using nature metaphors. Ask: Who is being cast as the enemy — and what proof exists?',
  },
  {
    id: 'value-check',
    icon: '📊',
    name: 'Moral Buttons',
    color: '#f97316',
    description: 'Detects which moral foundation (Haidt) is being pressed. Care: "children", "victim" → compassion trigger. Fairness: "corrupt", "cheat" → injustice trigger. Loyalty: "traitor", "patriot" → tribal trigger. Authority: "duty", "order" → hierarchy trigger. Sanctity: "pure", "disgust" → moral disgust. Ask: Which button are they pushing — and do you want it pushed?',
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Assesses reality level (Baudrillard\'s Hyperreality). Is this a real event, a distorted report, or pure internet simulation? "Viral", "trending" → the content only cares about its own spread. "Allegedly", "sources say" → unverified. "Unreal", "like a movie" → even the text knows something is off. Ask: Is this about reality, or about attention?',
  },
  {
    id: 'source-check',
    icon: '🔎',
    name: 'Source Check',
    color: '#14b8a6',
    description: 'Verifies whether sources actually exist and are credible. "According to experts", "studies show" → anonymous authority. "Sources say", "reportedly" → no named source. "I heard", "someone told me" → hearsay. "The internet says" → no origin at all. Ask: Can I find this source with a 30-second search?',
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
  'source-check': '📋',
}

// ── HIGHLIGHT RULES v8.1 — English only ──
//
// Rules use EXACT word matching (array of exact word strings).
// Multi-word phrases stored alongside single words.
// No stem/prefix matching — "danger" does NOT match "dangerous".
//
// v8.1 fixes: Removed overly common words (we, us, our, they, them, good,
// bad, all, everyone, nobody) from ALL rules to eliminate false positives in
// every post. Us-vs-Them now uses multi-word manipulation phrases instead of
// generic pronouns. False-binary uses phrase patterns instead of single words.

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {
  // ── BAD ARGUMENTS: Schopenhauer, Cialdini (Authority) ──
  'bad-arguments': [
    { words: ['always', 'never', 'every', 'none', 'nothing', 'totally', 'completely', 'absolutely'], explanation: '⚠️ Absolute word — suppresses all exceptions. Schopenhauer called this "overgeneralization": claiming something is universal when it never is. Real life has nuance. When you see "always" or "never," ask: is there really no exception anywhere? This trick shuts down debate by pretending reality is black and white.' },
    { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority'], explanation: '🎭 Authority claim — Cialdini\'s Influence Principle #1: we automatically trust titles. But who is this "expert"? What\'s their name? Their institution? Their actual expertise? Dr. Pepper is a drink, not a medical degree. Real authorities name themselves and provide verifiable credentials.' },
    { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'], explanation: '🧠 False certainty — "obviously" is a debate trick that replaces actual arguments. Schopenhauer\'s "dictum simpliciter": if something needs to be called "obvious," it probably isn\'t. Real truths don\'t need to announce themselves — they withstand scrutiny.' },
    { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage'], explanation: '📊 False precision — a number without a source is just an opinion with a costume. "80% of people" — of which people? Studied by whom? Published where? Statistics feel scientific but are the easiest thing to fabricate. Always ask: show me the study.' },
  ],

  // ── FEELINGS CHECK: Cialdini (Scarcity, Liking), Fear Appeals ──
    'feelings-check': [
      { words: ['fear', 'danger', 'terrible', 'horrible', 'unthinkable', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'dreadful', 'terrifying'], explanation: '😨 Fear bait — Cialdini\'s Scarcity principle: fear makes us act without thinking. "Shocking," "terrifying," "devastating" — every word is designed to trigger your amygdala, not your prefrontal cortex. When language screams, your logic whispers. Ask: who benefits from my fear right now?' },
      { words: ['urgent', 'immediately', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it'], explanation: '⏰ Urgency — a countdown bypasses your critical thinking (System 1 takes over). "Act now," "last chance," "immediately" — these words create artificial scarcity. Cialdini: when time pressure is manufactured, the decision is engineered. Take a breath. Nothing truly important demands blind speed.' },
      { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'], explanation: '🔥 Outrage bait — emotion replaces argument entirely. No specific claims, just fury. The anger is intentional — designed to make you share before thinking. Outrage is addictive and profitable. Ask: what actual facts are being hidden behind this storm of indignation?' },
      { words: ['suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless'], explanation: '💔 Sympathy manipulation — Cialdini\'s Liking principle. "Heartbreaking," "innocent," "helpless" bond you emotionally to the subject. Real charity informs. Manipulation bypasses your reason by targeting your compassion. Ask: is this about helping, or about making me feel something so I stop asking questions?' },
    ],

    // ── BRAIN CHECK: Kahneman (System 1 biases) ──
    'brain-check': [
      { words: ['majority', 'most people', 'people say', 'according to', 'popular opinion', 'everyone thinks'], explanation: '👥 Bandwagon — Kahneman\'s Availability Heuristic. "Most people," "everyone thinks," "popular opinion" — these replace evidence with social proof. Truth is not a democracy. Millions of people believed the Earth was flat once. Popularity does not equal validity.' },
      { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive'], explanation: '⚓ Anchoring — Kahneman\'s Anchoring bias. Big numbers ("millions," "record," "unprecedented") set an emotional anchor in your mind. Your brain uses that anchor as reference, even if it\'s meaningless. 45,000 sounds huge, but compared to what? The global workforce? Always ask: big compared to WHAT baseline?' },
      { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'], explanation: '🧩 Framing as consensus — Kahneman\'s WYSIATI (What You See Is All There Is). "Of course," "common sense," "naturally" — these words frame an opinion as universal truth. The text presents only one perspective and calls it reality. Real issues have trade-offs. Ask: what viewpoint is being hidden by calling this "obvious"?' },
      { words: ['either/or', 'only choice', 'no choice', 'only option', 'no alternative', 'either way', 'take it or leave it', 'both sides', 'on one hand', 'on the other hand'], explanation: '⚖️ False binary — Kahneman\'s Framing bias. Reducing complex issues to two choices is a classic manipulation trick. "Either you\'re with us or against us" ignores the entire spectrum of nuance. Real life has dozens of options between every extreme. Ask: who drew these two boxes and why?' },
    ],

    // ── HIDDEN MYTH: Roland Barthes (Mythologies) ──
    'hidden-story': [
      { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural'], explanation: '🏛️ Barthes: Myth exposed — "Freedom" is not an argument, it\'s a story. Roland Barthes called this "mythology": abstract ideals used to justify concrete policies without evidence. "Security" sounds noble, but whose security? At what cost? Every myth serves someone\'s agenda. Ask: who defined this word, and what do they want me to accept?' },
      { words: ['natural', 'normal', 'proper', 'correct', 'inevitable', 'unavoidable', 'just is', 'reality'], explanation: '🔄 Barthes: Naturalization — the most powerful form of ideology. When something is called "natural" or "inevitable," it\'s presented as beyond question. But nothing is natural in politics — everything is a choice. "That\'s just how things are" is the oldest propaganda slogan. Ask: who benefits from me believing this is inevitable?' },
      { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster'], explanation: '📢 Barthes: Myth of crisis — the word "crisis" itself is a rhetorical weapon. It justifies extraordinary measures, suspends debate, and demands immediate action. Not every problem is a crisis. Calling something a crisis frames the conversation as "action vs inaction" rather than "which action is best." Ask: is this really a crisis, or just a problem being sold as one?' },
    ],

    // ── US VS THEM: Tajfel & Turner (Social Identity Theory) ──
    'us-vs-them': [
      { words: ['our kind', 'our way of life', 'our values', 'our homeland', 'our country', 'our culture', 'our nation', 'our people'], explanation: '🛡️ Tajfel: In-group branding — "our" creates an exclusive club. Tajfel proved that even randomly assigned groups produce "us vs them" bias. When "our" is paired with an abstract value ("our way of life"), the speaker is drawing a boundary. Ask: who is NOT included in this "our"? And why is that boundary being drawn?' },
      { words: ['those people', 'these people', 'outsiders', 'foreigners', 'strangers', 'the other', 'others'], explanation: '🚫 Tajfel: Out-group labeling — people reduced to a category lose their individuality. "Those people" turns humans into a homogeneous mass. Once de-individuated, they become easier to fear, blame, and dismiss. Ask: has anyone actually talked to "those people" to learn their stories?' },
      { words: ['invasion', 'flood of', 'wave of', 'swarm', 'plague', 'infestation', 'tide', 'taking over', 'taking our', 'destroying our', 'against us', 'coming for'], explanation: '🌊 Dehumanization & threat — nature and war metaphors ("flood," "invasion," "plague") transform humans into forces of nature. You can\'t negotiate with a flood. You can\'t compromise with an invasion. These words prepare you to see people as problems, not as humans. Ask: when did people become a weather event?' },
      { words: ['real americans', 'real citizens', 'real people', 'true patriots'], explanation: '🎯 Gatekeeping identity — who gets to be "real"? This phrase draws the strictest boundary possible: it doesn\'t just divide, it delegitimizes. If you\'re not a "true patriot," you\'re not just different — you\'re fake. Ask: who is the gatekeeper, and what authority gave them the key?' },
    ],

    // ── MORAL BUTTONS: Haidt (Moral Foundations Theory) ──
    'value-check': [
      { words: ['innocent', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'kindness', 'compassion'], explanation: '💚 Haidt: Care — activates your compassion or outrage instantly. "Innocent children," "victims," "suffering" — these trigger the Care foundation, the most universally persuasive moral button. The rhetorical trick: framing yourself as the protector and your opponent as the abuser. Always ask: who is being portrayed as the victim, and what policy is being justified by their pain?' },
      { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination'], explanation: '⚖️ Haidt: Fairness — the sense of injustice is one of the strongest human motivators. "Cheat," "corrupt," "unfair" — these words trigger outrage at perceived violations of reciprocity. But is fairness really violated, or is a complex situation being reduced to "they cheated"? Ask: what\'s the full picture of who gets what and why?' },
      { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together', 'treason', 'loyalty', 'sacrifice', 'nation'], explanation: '🤝 Haidt: Loyalty — tribalism disguised as virtue. "Patriot," "traitor," "betray" — these activate the Loyalty foundation, binding the in-group together against perceived enemies. The mechanism: questioning loyalty becomes a way to silence dissent. Ask: is this about genuine loyalty, or about punishing anyone who disagrees?' },
      { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'disobey', 'rebel', 'establishment'], explanation: '👑 Haidt: Authority — hierarchy is invoked to demand compliance. "Respect," "duty," "order," "traditional" — these activate our respect for authority figures and institutions. The trick: framing your position as legitimate authority and opposition as chaos. Ask: what gives this authority its legitimacy, and who decides?' },
      { words: ['pure', 'impure', 'sacred', 'sin', 'disgust', 'filthy', 'corrupt', 'decay', 'degradation'], explanation: '🧼 Haidt: Sanctity — the most primal moral foundation. "Disgust," "pure," "filthy," "sacred" — these use physical disgust metaphors for abstract criticism. Sanctity triggers an immediate gut reaction: something is unclean, wrong, forbidden. Once disgust is activated, reason goes out the window. Ask: is this about actual harm, or about a feeling of contamination?' },
    ],

    // ── FAKE CHECK: Baudrillard (Simulacra), Epistemology ──
    'fake-check': [
      { words: ['viral', 'meme', 'trending', 'follow', 'influencer', 'social media', 'go viral', 'blowing up'], explanation: '🔄 Baudrillard: Simulacrum — the content is ONLY about its own spread. Baudrillard described this as the 4th stage of the image: pure simulation. The post doesn\'t refer to reality; it refers to its own virality. "Go viral," "trending," "blowing up" — the message IS the medium. Ask: does this post contain any actual information, or is it just about getting attention?' },
      { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'claims', 'alleged'], explanation: '🔎 Epistemology: unverified — the text itself admits it\'s unreliable. "Allegedly," "sources say," "unconfirmed" — these words signal that the information is at least one step removed from verifiable reality. The author is covering themselves while still spreading the claim. Ask: if they can\'t confirm it, why are they telling me?' },
      { words: ['unreal', 'surreal', 'like a movie', 'can\'t believe', 'unbelievable', 'like a scene', 'straight out of'], explanation: '🌀 Baudrillard: Hyperreality — even the text knows something is off. "Like a movie," "unreal," "can\'t believe" — these phrases signal that reality and fiction have blurred. Baudrillard\'s hyperreality: the simulation has become more real than reality. When the text itself confesses confusion, you know you\'re in the simulation. Ask: am I engaging with reality, or with a representation of a representation?' },
    ],

    // ── SOURCE CHECK: Epistemology, Source Credibility ──
    'source-check': [
      { words: ['experts', 'scientists', 'researchers', 'doctors', 'professionals', 'authorities', 'analysts', 'specialists'], explanation: '🎪 Anonymous authority — "Experts say" is not a source, it\'s a stage prop. Cialdini\'s Authority principle: we instinctively trust titles. But unnamed experts are not sources — they are rhetorical devices. Real journalists name their sources. Real studies have authors. Ask: what are their names? Where do they work? Can I verify them in 30 seconds?' },
      { words: ['study', 'studies', 'research', 'survey', 'report', 'analysis', 'data', 'statistics', 'findings'], explanation: '📚 Vague reference — "A study shows" is meaningless without details. Which study? By which university? Published in which journal? When? How many participants? A study without a citation is just a story in a lab coat. Real research is traceable. Ask: can I find this paper with a 30-second Google search?' },
      { words: ['people say', 'sources say', 'it is said', 'reportedly', 'apparently', 'allegedly', 'rumored', 'word is'], explanation: '🗣️ Hearsay — someone heard from someone who heard from someone. "Sources say" is the journalistic equivalent of "my friend\'s cousin knows a guy." It\'s rumor dressed up as reporting. The longer the chain of "sources," the less reliable the information. Ask: who is the original source? Can they be named and contacted?' },
      { words: ['internet says', 'everyone knows', 'common knowledge', 'widely known'], explanation: '🌐 Fake consensus — "Common knowledge" is often just unchecked repetition. Five hundred people can repeat the same lie, and it doesn\'t become true. "Common knowledge" is a thought-stopper: it suggests that no verification is needed because "everyone knows." Ask: how do we know this? When was it last verified?' },
      { words: ['alleged', 'unconfirmed', 'unverified', 'claimed', 'supposed', 'purported'], explanation: '❌ Unverified — the text itself admits it cannot confirm its own claim. "Alleged," "unconfirmed," "unverified" — these words are warnings the author embedded. They\'re saying "I\'m telling you this, but I can\'t prove it." Ask: why is this being shared if it cannot be confirmed?' },
    ],
}

// ── HIGHLIGHT FUNCTION v8 — Exact match only ──
// No stem/prefix matching. Multi-word phrases stored as-is in array.
// Single words: matched EXACTLY after lowercasing.

export function getHighlightsFor(toolIds: CoreToolId[], text: string): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()

  const singleTokens = text.toLowerCase().replace(/[^a-z\s']/g, '').split(/\s+/).filter(Boolean)

  // Check multi-word phrases first
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    for (const rule of rules) {
      for (const phrase of rule.words) {
        if (phrase.includes(' ')) {
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

    const seen = new Set<string>()
    for (const token of singleTokens) {
      if (seen.has(token)) continue
      seen.add(token)

      for (const rule of rules) {
        const exactWords = rule.words.filter(w => !w.includes(' '))
        if (exactWords.includes(token)) {
          addEntry(map, token, { word: token, explanation: rule.explanation, color: config.color })
          break
        }
      }
    }
  }

  return map
}

function addEntry(map: Map<string, HighlightEntry[]>, key: string, entry: HighlightEntry) {
  const existing = map.get(key) || []
  if (!existing.some(e => e.explanation === entry.explanation && e.color === entry.color)) {
    existing.push(entry)
    map.set(key, existing)
  }
}
