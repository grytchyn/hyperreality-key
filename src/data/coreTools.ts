// ── CORE TOOLS v9 — 12 Tools (8 original + 4 new) ──
//
// Each tool is based on established academic research:
//   - Cialdini (Influence / 6 Principles)
//   - Kahneman & Tversky (Cognitive Biases / System 1)
//   - Haidt (Moral Foundations Theory)
//   - Tajfel & Turner (Social Identity Theory)
//   - Barthes (Mythologies / Semiotics)
//   - Schopenhauer (Eristic Dialectic / Logical Fallacies)
//   - McCombs & Shaw (Agenda-Setting Theory)
//
// Matching rules: EXACT word match only. Multi-word phrases matched before
// any single-word matching to prevent false positives.

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '\u26A0\uFE0F',
    name: 'Bad Words',
    color: '#ef4444',
    description: 'Catches logical tricks and fake authority. Example: "Experts say" without naming who \u2192 name-dropping. "Everyone knows" \u2192 overgeneralization. "Never/always" \u2192 ignores exceptions. Ask: Would this hold up in a debate?',
  },
  {
    id: 'feelings-check',
    icon: '\uD83C\uDFAD',
    name: 'Feelings',
    color: '#f59e0b',
    description: 'Reveals emotional manipulation. Fear words (shocking, urgent) \u2192 Cialdini\u2019s Scarcity. Outrage bait (scandal, disgrace) \u2192 bypasses logic. Pity (victim, innocent) \u2192 Liking principle. Ask: What emotion are they trying to make you feel \u2014 and why?',
  },
  {
    id: 'brain-check',
    icon: '\uD83E\uDDE0',
    name: 'Brain Check',
    color: '#22c55e',
    description: 'Exposes cognitive shortcuts (Kahneman System 1). "Most people" \u2192 bandwagon effect. "Record numbers" \u2192 anchoring bias. "Of course, obviously" \u2192 availability heuristic. Ask: Are you thinking, or just reacting?',
  },
  {
    id: 'hidden-story',
    icon: '\uD83D\uDDFA\uFE0F',
    name: 'Hidden Myth',
    color: '#06b6d4',
    description: 'Uncovers the deeper narrative (Roland Barthes\u2019 Mythologies). "Freedom", "security", "crisis" are not facts \u2014 they are stories with hidden agendas. When something is called "natural" or "normal", ideology is disguised as common sense. Ask: What world-view does this try to make seem inevitable?',
  },
  {
    id: 'us-vs-them',
    icon: '\u2694\uFE0F',
    name: 'Us vs Them',
    color: '#d946ef',
    description: 'Reveals social division tactics (Tajfel\u2019s Social Identity Theory). "We" vs "they" creates in-groups and out-groups in seconds. "Flood", "wave", "invasion" dehumanize people by using nature metaphors. Ask: Who is being cast as the enemy \u2014 and what proof exists?',
  },
  {
    id: 'value-check',
    icon: '\uD83D\uDCCA',
    name: 'Moral Buttons',
    color: '#f97316',
    description: 'Detects which moral foundation (Haidt) is being pressed. Care: "children", "victim" \u2192 compassion trigger. Fairness: "corrupt", "cheat" \u2192 injustice trigger. Loyalty: "traitor", "patriot" \u2192 tribal trigger. Authority: "duty", "order" \u2192 hierarchy trigger. Sanctity: "pure", "disgust" \u2192 moral disgust. Ask: Which button are they pushing \u2014 and do you want it pushed?',
  },
  {
    id: 'fake-check',
    icon: '\uD83C\uDF00',
    name: 'Fake Check',
    color: '#a78bfa',
    description: 'Assesses reality level (Baudrillard\u2019s Hyperreality). Is this a real event, a distorted report, or pure internet simulation? "Viral", "trending" \u2192 the content only cares about its own spread. "Allegedly", "sources say" \u2192 unverified. "Unreal", "like a movie" \u2192 even the text knows something is off. Ask: Is this about reality, or about attention?',
  },
  {
    id: 'source-check',
    icon: '\uD83D\uDD0E',
    name: 'Source Check',
    color: '#14b8a6',
    description: 'Verifies whether sources actually exist and are credible. "According to experts", "studies show" \u2192 anonymous authority. "Sources say", "reportedly" \u2192 no named source. "I heard", "someone told me" \u2192 hearsay. "The internet says" \u2192 no origin at all. Ask: Can I find this source with a 30-second search?',
  },
  {
    id: 'echo-chamber',
    icon: '\uD83D\uDD04',
    name: 'Echo Chamber',
    color: '#ec4899',
    description: 'Detects closed loops of self-reinforcing information. When the same claims appear from "multiple sources" that all cite each other, it\u2019s not corroboration \u2014 it\u2019s an echo. "Everyone is saying" \u2192 ask: are they all reading the same thing? "Multiple reports" \u2192 from 1 original source? "The internet agrees" \u2192 the internet is one room.',
  },
  {
    id: 'agenda-setting',
    icon: '\uD83C\uDFAF',
    name: 'Agenda Setting',
    color: '#0ea5e9',
    description: 'Reveals what is being amplified and what is being ignored. "The real issue", "what matters", "the only question" \u2014 the story itself tells you what to focus on. Whatever is at the center of attention exists to distract from what is NOT being shown. Ask: what is this story making sure I DON\u2019T think about?',
  },
  {
    id: 'red-herring',
    icon: '\uD83D\uDC1F',
    name: 'Red Herring',
    color: '#8b5cf6',
    description: 'Flags deliberate distractions that pull attention away from the real issue. "Meanwhile", "what about", "some people say" \u2014 these shift focus to something irrelevant. A complex issue is reduced to ONE shocking detail. One dramatic anecdote presented as the whole story. Ask: is this detail actually relevant, or is it here to distract me?',
  },
  {
    id: 'false-appeal',
    icon: '\uD83C\uDFAA',
    name: 'False Appeal',
    color: '#e11d48',
    description: 'Detects appeals to false authority, tradition, or popularity that replace evidence. "For centuries", "always been done this way" \u2192 tradition as argument. "Leading experts", "top scientists" \u2192 nameless authority. "Everyone agrees" \u2192 popularity masquerading as truth. Ask: is the evidence here, or just the APPEARANCE of evidence?',
  },
]

export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '\u26A1',
  'feelings-check': '\uD83D\uDD25',
  'brain-check': '\uD83D\uDD2C',
  'hidden-story': '\uD83D\uDD0D',
  'us-vs-them': '\u2694\uFE0F',
  'value-check': '\uD83D\uDEE1\uFE0F',
  'fake-check': '\uD83D\uDC41\uFE0F',
  'source-check': '\uD83D\uDCCB',
  'echo-chamber': '\uD83D\uDD04',
  'agenda-setting': '\uD83C\uDFAF',
  'red-herring': '\uD83D\uDC1F',
  'false-appeal': '\uD83C\uDFAA',
}

// ── HIGHLIGHT RULES v9 — Exact match only ──

const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {

  // ── BAD ARGUMENTS: Schopenhauer, Cialdini (Authority) ──
  'bad-arguments': [
      { words: ['always', 'never', 'every', 'none', 'nothing', 'totally', 'completely', 'absolutely', 'definitive', 'undoubtedly', 'without a doubt', 'beyond question', 'no question'], explanation: '\u26A0\uFE0F Absolute word \u2014 suppresses all exceptions. Schopenhauer called this "overgeneralization": claiming something is universal when it never is. Real life has nuance. When you see "always" or "never," ask: is there really no exception anywhere? This trick shuts down debate by pretending reality is black and white.' },
      { words: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority', 'researcher'], explanation: '\uD83C\uDFAD Authority claim \u2014 Cialdini\u2019s Influence Principle #1: we automatically trust titles. But who is this "expert"? What\u2019s their name? Their institution? Their actual expertise? Dr. Pepper is a drink, not a medical degree. Real authorities name themselves and provide verifiable credentials.' },
      { words: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'], explanation: '\uD83E\uDDE0 False certainty \u2014 "obviously" is a debate trick that replaces actual arguments. Schopenhauer\u2019s "dictum simpliciter": if something needs to be called "obvious," it probably isn\u2019t. Real truths don\u2019t need to announce themselves \u2014 they withstand scrutiny.' },
      { words: ['percent', 'majority', 'statistics', 'proves', 'proof', 'figures', 'ratio', 'percentage', 'data'], explanation: '\uD83D\uDCCA False precision \u2014 a number without a source is just an opinion with a costume. "80% of people" \u2014 of which people? Studied by whom? Published where? Statistics feel scientific but are the easiest thing to fabricate. Always ask: show me the study.' },
      { words: ['rumor', 'rumors', 'viral', 'claim', 'claims', 'allegedly', 'supposedly', 'according to'], explanation: '\uD83D\uDCE2 Unsubstantiated claim \u2014 "rumor has it" and "according to viral claims" are not evidence. They signal that the information is second-hand, unverified, or fabricated. The author presents speculation as fact. Ask: what is the ORIGINAL source of this claim? Can I trace it to something real?' },
          { words: ['everybody', 'everyone', 'everything', 'everywhere', 'nobody', 'nowhere'], explanation: '\uD83C\uDF10 Universal quantifier \u2014 Schopenhauer\u2019s extension stratagem. "Everybody" or "nobody" paints a claim as universally true or false. Rarely is anything truly universal. Ask: who exactly? Is there ANYONE who doesn\u2019t fit this claim?' },
          { words: ['strawman', 'straw man', 'misrepresent', 'misrepresenting', 'mischaracterize'], explanation: '\uD83C\uDFAF Straw man fallacy \u2014 misrepresenting an argument to make it easier to attack. The classic Schopenhauer eristic trick: distort what someone said, then demolish the distortion. Ask: is this an accurate restatement of the opposing view, or a caricature designed to be easily knocked down?' },
              { words: ['slippery slope', 'domino effect', 'thin end', 'first they'], explanation: '\uD83C\uDFD7\uFE0F Slippery slope \u2014 Schopenhauer\u2019s false-cause stratagem. Claims that one small step will inevitably lead to an extreme outcome, without evidence for the chain. It sounds logical but skips all the intermediate choices. Ask: what EXACTLY would have to happen between step A and step Z? Are those steps certain?' },
            ],

  // ── FEELINGS CHECK: Cialdini (Scarcity, Liking), Fear Appeals ──
  'feelings-check': [
    { words: ['fear', 'danger', 'dangers', 'terrible', 'horrible', 'unthinkable', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'dreadful', 'terrifying', 'exploitation', 'abuse', 'pornography', 'illegal'], explanation: '\uD83D\uDE28 Fear bait \u2014 Cialdini\u2019s Scarcity principle: fear makes us act without thinking. "Shocking," "terrifying," "devastating" \u2014 every word is designed to trigger your amygdala, not your prefrontal cortex. When language screams, your logic whispers. Ask: who benefits from my fear right now?' },
    { words: ['urgent', 'immediately', 'hurry', 'crisis', 'emergency', 'last chance', 'act now', 'before it'], explanation: '\u23F0 Urgency \u2014 a countdown bypasses your critical thinking (System 1 takes over). "Act now," "last chance," "immediately" \u2014 these words create artificial scarcity. Cialdini: when time pressure is manufactured, the decision is engineered. Take a breath. Nothing truly important demands blind speed.' },
    { words: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'], explanation: '\uD83D\uDD25 Outrage bait \u2014 emotion replaces argument entirely. No specific claims, just fury. The anger is intentional \u2014 designed to make you share before thinking. Outrage is addictive and profitable. Ask: what actual facts are being hidden behind this storm of indignation?' },
    { words: ['suffer', 'heartbreaking', 'tragic', 'victim', 'innocent', 'helpless', 'minors', 'exploit'], explanation: '\uD83D\uDC94 Sympathy manipulation \u2014 Cialdini\u2019s Liking principle. "Heartbreaking," "innocent," "helpless" bond you emotionally to the subject. Real charity informs. Manipulation bypasses your reason by targeting your compassion. Ask: is this about helping, or about making me feel something so I stop asking questions?' },
    { words: ['anger', 'angry', 'ashamed', 'shame', 'guilt', 'guilty', 'blame', 'contempt'], explanation: '\uD83D\uDE21 Social emotion triggers \u2014 Elster\u2019s social emotions taxonomy. Anger, shame, guilt, contempt are social emotions that police group boundaries. They make you feel judged or judging. A text that induces these emotions is using social pressure to bypass reason. Ask: am I feeling judged, or being asked to judge \u2014 and who benefits?' },
  ],

  // ── BRAIN CHECK: Kahneman (System 1 biases) ──
  'brain-check': [
    { words: ['majority', 'most people', 'people say', 'according to', 'popular opinion', 'everyone thinks', 'overwhelmingly', 'vast majority'], explanation: '\uD83D\uDC65 Bandwagon \u2014 Kahneman\u2019s Availability Heuristic. "Most people," "everyone thinks," "popular opinion" \u2014 these replace evidence with social proof. Truth is not a democracy. Millions of people believed the Earth was flat once. Popularity does not equal validity.' },
    { words: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive', 'up to', 'hundreds of', 'thousands of'], explanation: '\u2693 Anchoring \u2014 Kahneman\u2019s Anchoring bias. Big numbers ("millions," "record," "unprecedented") set an emotional anchor in your mind. Your brain uses that anchor as reference, even if it\u2019s meaningless. 45,000 sounds huge, but compared to what? The global workforce? Always ask: big compared to WHAT baseline?' },
    { words: ['of course', 'naturally', 'obviously', 'common sense', 'everyone knows', 'undeniable', 'surely'], explanation: '\uD83E\uDDE9 Framing as consensus \u2014 Kahneman\u2019s WYSIATI (What You See Is All There Is). "Of course," "common sense," "naturally" \u2014 these words frame an opinion as universal truth. The text presents only one perspective and calls it reality. Real issues have trade-offs. Ask: what viewpoint is being hidden by calling this "obvious"?' },
    { words: ['either/or', 'only choice', 'no choice', 'only option', 'no alternative', 'either way', 'take it or leave it', 'both sides', 'on one hand', 'on the other hand'], explanation: '\u2696\uFE0F False binary \u2014 Kahneman\u2019s Framing bias. Reducing complex issues to two choices is a classic manipulation trick. "Either you\u2019re with us or against us" ignores the entire spectrum of nuance. Real life has dozens of options between every extreme. Ask: who drew these two boxes and why?' },
    { words: ['misleading', 'unnecessary', 'false', 'fake', 'misinformation'], explanation: '\uD83D\uDEE0\uFE0F Language of deception \u2014 words like "misleading," "false," "fake" do double duty: they describe content AND prime you to distrust. Once you hear "misleading," your System 1 categorizes everything as suspect without analyzing each claim. Ask: is this described as misleading, or DEMONSTRATED as misleading?' },
  ],

  // ── HIDDEN MYTH: Roland Barthes (Mythologies) ──
  'hidden-story': [
    { words: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural', 'privacy', 'surveillance'], explanation: '\uD83C\uDFDB\uFE0F Barthes: Myth exposed \u2014 "Freedom" is not an argument, it\u2019s a story. Roland Barthes called this "mythology": abstract ideals used to justify concrete policies without evidence. "Security" sounds noble, but whose security? At what cost? Every myth serves someone\u2019s agenda. Ask: who defined this word, and what do they want me to accept?' },
    { words: ['natural', 'normal', 'proper', 'correct', 'inevitable', 'unavoidable', 'just is', 'reality', 'eternal', 'timeless', 'forever', 'always been', 'human nature'], explanation: '\uD83D\uDD04 Barthes: Naturalization \u2014 the most powerful form of ideology. When something is called "natural" or "inevitable," it\u2019s presented as beyond question. But nothing is natural in politics \u2014 everything is a choice. "That\u2019s just how things are" is the oldest propaganda slogan. Ask: who benefits from me believing this is inevitable?' },
    { words: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster', 'violation', 'catastrophe', 'catastrophic'], explanation: '\uD83D\uDCE2 Barthes: Myth of crisis \u2014 the word "crisis" itself is a rhetorical weapon. It justifies extraordinary measures, suspends debate, and demands immediate action. Not every problem is a crisis. Calling something a crisis frames the conversation as "action vs inaction" rather than "which action is best." Ask: is this really a crisis, or just a problem being sold as one?' },
    { words: ['heritage', 'classic', 'legacy', 'age-old', 'ancient', 'time-honored'], explanation: '\uD83C\uDFDB\uFE0F Barthes: Myth of tradition \u2014 "heritage" and "classic" make the past an argument. Tradition is presented as inherently valuable, making change seem like loss. But tradition is just what people before us chose. Ask: is this valuable BECAUSE it\u2019s old, or is old just what it happens to be?' },
  ],

  // ── US VS THEM: Tajfel & Turner (Social Identity Theory) ──
  'us-vs-them': [
    { words: ['our kind', 'our way of life', 'our values', 'our homeland', 'our country', 'our culture', 'our nation', 'our people'], explanation: '\uD83D\uDEE1\uFE0F Tajfel: In-group branding \u2014 "our" creates an exclusive club. Tajfel proved that even randomly assigned groups produce "us vs them" bias. When "our" is paired with an abstract value ("our way of life"), the speaker is drawing a boundary. Ask: who is NOT included in this "our"? And why is that boundary being drawn?' },
    { words: ['those people', 'these people', 'outsiders', 'foreigners', 'strangers', 'the other', 'others'], explanation: '\uD83D\uDEAB Tajfel: Out-group labeling \u2014 people reduced to a category lose their individuality. "Those people" turns humans into a homogeneous mass. Once de-individuated, they become easier to fear, blame, and dismiss. Ask: has anyone actually talked to "those people" to learn their stories?' },
    { words: ['invasion', 'flood of', 'wave of', 'swarm', 'plague', 'infestation', 'tide', 'taking over', 'taking our', 'destroying our', 'against us', 'coming for'], explanation: '\uD83C\uDF0A Dehumanization & threat \u2014 nature and war metaphors ("flood," "invasion," "plague") transform humans into forces of nature. You can\u2019t negotiate with a flood. You can\u2019t compromise with an invasion. These words prepare you to see people as problems, not as humans. Ask: when did people become a weather event?' },
    { words: ['real americans', 'real citizens', 'real people', 'true patriots'], explanation: '\uD83C\uDFAF Gatekeeping identity \u2014 who gets to be "real"? This phrase draws the strictest boundary possible: it doesn\u2019t just divide, it delegitimizes. If you\u2019re not a "true patriot," you\u2019re not just different \u2014 you\u2019re fake. Ask: who is the gatekeeper, and what authority gave them the key?' },
    { words: ['civilization', 'civilized', 'barbaric', 'savage', 'primitive', 'backward'], explanation: '\uD83C\uDF0D Civilization narrative \u2014 van Dijk\u2019s positive self-presentation. Calling one group "civilized" and another "backward" is the deepest form of us-vs-them. It frames cultural differences as hierarchy. The "civilized" label implies the right to judge, intervene, or dismiss the "other." Ask: who decided what "civilized" means, and whose interests does that serve?' },
    { words: ['threat', 'encroaching', 'creeping', 'infiltration', 'infiltrating', 'fifth column'], explanation: '\uD83D\uDEA8 Proximization of threat \u2014 Cap\u2019s proximization theory. Presenting a group as approaching or infiltrating (spatially or temporally) creates urgency for action. "They are at our doorstep," "creeping influence" \u2014 these paint the out-group as an approaching danger. Ask: is this threat actually materializing, or is it being framed as approaching to justify preemptive action?' },
  ],

  // ── MORAL BUTTONS: Haidt (Moral Foundations Theory) ──
  'value-check': [
    { words: ['innocent', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'kindness', 'compassion', 'addictive', 'addiction'], explanation: '\uD83D\uDC9A Haidt: Care \u2014 activates your compassion or outrage instantly. "Innocent children," "victims," "suffering" \u2014 these trigger the Care foundation, the most universally persuasive moral button. The rhetorical trick: framing yourself as the protector and your opponent as the abuser. Always ask: who is being portrayed as the victim, and what policy is being justified by their pain?' },
    { words: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'dishonest', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination', 'profit', 'profits', 'greed'], explanation: '\u2696\uFE0F Haidt: Fairness \u2014 the sense of injustice is one of the strongest human motivators. "Cheat," "corrupt," "unfair" \u2014 these words trigger outrage at perceived violations of reciprocity. But is fairness really violated, or is a complex situation being reduced to "they cheated"? Ask: what\u2019s the full picture of who gets what and why?' },
    { words: ['loyal', 'betray', 'patriot', 'traitor', 'united', 'divide', 'together', 'treason', 'loyalty', 'sacrifice', 'nation'], explanation: '\uD83E\uDD1D Haidt: Loyalty \u2014 tribalism disguised as virtue. "Patriot," "traitor," "betray" \u2014 these activate the Loyalty foundation, binding the in-group together against perceived enemies. The mechanism: questioning loyalty becomes a way to silence dissent. Ask: is this about genuine loyalty, or about punishing anyone who disagrees?' },
    { words: ['authority', 'respect', 'obey', 'traditional', 'duty', 'order', 'disrespect', 'defy', 'disobey', 'rebel', 'establishment'], explanation: '\uD83D\uDC51 Haidt: Authority \u2014 hierarchy is invoked to demand compliance. "Respect," "duty," "order," "traditional" \u2014 these activate our respect for authority figures and institutions. The trick: framing your position as legitimate authority and opposition as chaos. Ask: what gives this authority its legitimacy, and who decides?' },
    { words: ['pure', 'impure', 'sacred', 'sin', 'disgust', 'filthy', 'corrupt', 'decay', 'degradation'], explanation: '\uD83E\uDDFC Haidt: Sanctity \u2014 the most primal moral foundation. "Disgust," "pure," "filthy," "sacred" \u2014 these use physical disgust metaphors for abstract criticism. Sanctity triggers an immediate gut reaction: something is unclean, wrong, forbidden. Once disgust is activated, reason goes out the window. Ask: is this about actual harm, or about a feeling of contamination?' },
    { words: ['freedom', 'liberty', 'tyranny', 'oppression', 'enslaved', 'chained', 'shackled', 'dictatorship', 'coercion', 'government overreach'], explanation: '\uD83D\uDD12 Haidt: Liberty \u2014 reactance against control. "Tyranny," "dictatorship," "government overreach" \u2014 these trigger the Liberty foundation: the instinct to push back against perceived domination. It\u2019s the most powerful foundation in individualistic cultures. The rhetorical trick: framing any regulation as oppression. Ask: is this genuinely controlling, or is "freedom" being used to oppose any constraint?' },
    { words: ['communism', 'socialism', 'fascism', 'marxist', 'totalitarian', 'authoritarian'], explanation: '\uD83D\uDEA9 Political labels as moral triggers \u2014 these words are often used not as descriptions but as moral accusations. Haidt: they activate multiple foundations at once (Loyalty + Liberty + Sanctity). Once you label something "socialist" or "fascist," you stop analyzing it. Ask: is this an accurate description, or a label designed to shut down thought?' },
  ],

  // ── FAKE CHECK: Baudrillard (Simulacra), Epistemology ──
  'fake-check': [
    { words: ['viral', 'meme', 'trending', 'follow', 'influencer', 'social media', 'go viral', 'blowing up', 'deepfake', 'deepfakes'], explanation: '\uD83D\uDD04 Baudrillard: Simulacrum \u2014 the content is ONLY about its own spread. Baudrillard described this as the 4th stage of the image: pure simulation. The post doesn\u2019t refer to reality; it refers to its own virality. "Go viral," "trending," "blowing up" \u2014 the message IS the medium. Ask: does this post contain any actual information, or is it just about getting attention?' },
    { words: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'claims', 'alleged', 'doctored', 'falsely', 'manipulated', 'misinformation'], explanation: '\uD83D\uDD0E Epistemology: unverified \u2014 the text itself admits it\u2019s unreliable. "Allegedly," "sources say," "unconfirmed" \u2014 these words signal that the information is at least one step removed from verifiable reality. The author is covering themselves while still spreading the claim. Ask: if they can\u2019t confirm it, why are they telling me?' },
    { words: ['unreal', 'surreal', 'like a movie', "can't believe", 'unbelievable', 'like a scene', 'straight out of'], explanation: '\uD83C\uDF00 Baudrillard: Hyperreality \u2014 even the text knows something is off. "Like a movie," "unreal," "can\u2019t believe" \u2014 these phrases signal that reality and fiction have blurred. Baudrillard\u2019s hyperreality: the simulation has become more real than reality. When the text itself confesses confusion, you know you\u2019re in the simulation. Ask: am I engaging with reality, or with a representation of a representation?' },
    { words: ['stolen', 'footage', 'reworked', 'recreated', 'generated', 'synthetic'], explanation: '\uD83D\uDCF9 Digital manipulation \u2014 "stolen footage," "reworked," "generated" \u2014 the content is not real but an artificial reconstruction. Baudrillard\u2019s 3rd order of simulacra: the copy without an original. When you can\u2019t tell if what you\u2019re seeing ever happened, the simulation has won. Ask: was this recorded from real life, or generated to LOOK like real life?' },
    { words: ['artificial', 'fabricated', 'fabrication', 'simulated', 'simulation', 'virtual', 'hyperreal', 'hyperreality'], explanation: '\uD83D\uDD04 Baudrillard: Simulation order \u2014 Baudrillard\u2019s 4 stages of the image. The 4th stage (pure simulacrum) is when the image has no connection to any reality at all. "Artificial," "simulated," "hyperreal" \u2014 these words mark content that has detached from reality and become its own referent. Ask: does this refer to something real, or has it created its own reality?' },
  ],

  // ── ECHO CHAMBER: Closed loops, self-reinforcing narratives ──
  'echo-chamber': [
    { words: ['everyone is saying', 'everyone agrees', 'all over the internet', 'trending everywhere', 'going viral', 'blowing up', 'everywhere i look', "can't escape"], explanation: '\uD83D\uDD04 Echo loop \u2014 these phrases claim consensus without evidence. If "everyone is saying" the same thing, check if they are all quoting the SAME source. One story shared 1000 times is not 1000 independent sources \u2014 it\u2019s one source repeating. Ask: where did the ORIGINAL story come from?' },
    { words: ['multiple sources', 'sources confirm', 'all outlets', 'every news outlet', 'across the board'], explanation: '\uD83D\uDCE1 Self-referencing \u2014 "multiple sources" often means ONE wire story republished by many outlets. CNN, BBC, Fox all running the same AP story is not corroboration \u2014 it\u2019s syndication. Real corroboration comes from independent investigations. Ask: are these sources independent, or do they all quote the same original?' },
    { words: ['self-reinforcing', 'bubble', 'echo', 'circular', 'closed loop'], explanation: '\uD83C\uDF00 Circular logic \u2014 the source is citing itself or its own network. In an echo chamber, information circulates without ever being verified externally. It\u2019s real because "everyone says it," and everyone says it because "it\u2019s real." Ask: what verifiable evidence exists OUTSIDE this circle?' },
    { words: ['common sense', 'common knowledge', 'conventional wisdom', 'widely known', 'general consensus'], explanation: '\uD83E\uDDD1\u200D\uD83C\uDFED Lakoff: Framing as common sense \u2014 "common sense" is the most powerful frame because it pretends not to be one. Calling something "common sense" positions it as self-evident, beyond debate. But what\u2019s "common sense" in one culture is absurd in another. Ask: is this really universal, or does it just seem obvious because I\u2019ve heard it a thousand times?' },
    { words: ['framing', 'lens', 'perspective', 'viewpoint', 'paradigm', 'worldview'], explanation: '\uD83D\uDCDD Meta-cognition \u2014 when the text uses words like "framing" or "paradigm," it\u2019s acknowledging that reality is being structured. This can be a genuine attempt at analysis OR a technique to legitimize one narrative. The meta-language creates the appearance of self-awareness. Ask: is this genuinely examining its own bias, or is "framing" being used to dismiss other perspectives?' },
  ],

  // ── AGENDA SETTING: What is amplified, what is ignored ──
  'agenda-setting': [
    { words: ['the real issue', 'the real problem', 'what matters', 'what really matters', 'the only thing', 'the only question', 'the crux', 'at the heart of'], explanation: '\uD83C\uDFAF Framing \u2014 the author tells you what to focus on. Agenda-setting theory (McCombs & Shaw, 1972): media doesn\u2019t tell you what to think, it tells you WHAT TO THINK ABOUT. When a story says "the real issue," ask: who decided? And what are they making sure I IGNORE by focusing here?' },
    { words: ['meanwhile', 'behind the scenes', "what they don't want you to know", 'hidden truth', "what the media isn't telling you"], explanation: '\uD83D\uDDA6\uFE0F Selective attention \u2014 "what they don\u2019t want you to know" is itself an agenda-setting technique. It positions the story as "the truth they\u2019re hiding," making any criticism look like cover-up. The framing IS the manipulation. Ask: is this genuinely hidden, or is it being presented as hidden to seem more important?' },
    { words: ['forget', 'ignore', "don't look at", 'look away', 'the real story', "nobody's talking about"], explanation: '\uD83D\uDC41\uFE0F Attention redirection \u2014 telling you to "forget X" or "look at the real story" is explicitly setting your agenda. The author is your attention gatekeeper. Every time something is called "underreported," check: is it underreported because it\u2019s important \u2014 or because it supports a narrative to claim it\u2019s suppressed?' },
    { words: ['framing', 'framed', 'frame', 'narrative', 'perspective', 'lens', 'prism'], explanation: '\uD83D\uDCDD Meta-framing \u2014 when the text USES the word "framing" or "narrative," it\u2019s acknowledging that reality is being shaped. This is agenda-setting exposed mid-act: the author tells you there\u2019s a frame, while creating their own. The only way to escape framing is to check the facts behind every claim. Ask: what facts exist OUTSIDE this frame?' },
  ],

  // ── RED HERRING: Distraction, false trails ──
  'red-herring': [
    { words: ['but what about', 'what about', 'and yet', 'despite this', 'meanwhile', 'all while', 'not to mention', 'forget that'], explanation: '\uD83D\uDC1F Distraction \u2014 "but what about" shifts the topic to something easier to attack or defend. Classic Schopenhauer eristic: when losing an argument, change the subject. The new topic feels related but is actually irrelevant. Ask: is this a real point, or a conversational escape route?' },
    { words: ['isolated incident', 'one bad apple', 'not all', 'just a few', 'a tiny minority', 'lone wolf', 'single case'], explanation: '\uD83C\uDFAF Dismissal \u2014 dismissing a pattern as isolated cases is itself a red herring. It sounds reasonable ("one bad apple") but distracts from systemic issues. The question isn\u2019t whether every case is bad \u2014 it\u2019s whether the pattern exists. Ask: is this truly isolated, or is the word "isolated" being used to dismiss a real trend?' },
    { words: ['anecdotal', 'but personally', 'in my experience', 'from what i see', 'i know someone'], explanation: '\uD83D\uDCD6 Anecdote as argument \u2014 a single personal story is presented as evidence against data. One person\u2019s experience doesn\u2019t invalidate statistics, but it feels more real than numbers. This is Kahneman\u2019s Availability Heuristic: vivid stories override dry data. Ask: does one story outweigh a thousand data points \u2014 or does it just feel like it should?' },
  ],

  // ── FALSE APPEAL: False authority, tradition, popularity ──
  'false-appeal': [
    { words: ['for centuries', 'for generations', 'always been', 'time-tested', 'traditional', 'age-old', 'ancient wisdom'], explanation: '\uD83C\uDFAA Appeal to tradition \u2014 "for centuries" is not an argument, it\u2019s a timeline. Tradition = Tribe loyalty (Haidt\u2019s Authority foundation). Bloodletting was practiced for centuries. So was slavery. Age doesn\u2019t equal validity. Ask: when was this last tested against modern evidence \u2014 or are we supposed to accept it BECAUSE it\u2019s old?' },
    { words: ['modern', 'progressive', 'new era', 'cutting-edge', 'revolutionary', 'disruptive', 'next generation', 'next level'], explanation: '\uD83C\uDFAA Appeal to novelty \u2014 the opposite of tradition but equally empty. "New" is not inherently better. Appeal to novelty (argumentum ad novitatem): something is presented as superior simply because it\u2019s new. "Cutting-edge" replaces evidence with hype. Ask: what SPECIFICALLY makes this better \u2014 not just newer?' },
    { words: ['leading expert', 'top scientist', 'world-renowned', 'famous', 'legendary', 'celebrated', 'renowned authority'], explanation: '\uD83C\uDFAA Unnamed authority \u2014 if the expert\u2019s name is not given, the authority is a prop. "Leading experts agree" is Cialdini\u2019s Authority principle without the authority needing to exist. Real experts have names, institutions, and published work you can verify. Ask: who, specifically? Where do they work? Can I read their actual findings?' },
    { words: ['everyone knows', 'everyone agrees', 'common sense', 'universally accepted', 'widely recognized', 'general consensus'], explanation: '\uD83C\uDFAA Popularity as proof \u2014 argumentum ad populum. "Everyone knows" replaces evidence with presumed consensus. But "common sense" is often just culturally inherited bias. The Earth being flat was once "common sense." Ask: is this "common sense" based on evidence \u2014 or on never having questioned it?' },
    { words: ['legitimate', 'legitimacy', 'illegitimate', 'proper', 'correct', 'appropriate', 'acceptable'], explanation: '\uD83D\uDEE1\uFE0F Foucault: Legitimization \u2014 who gets to decide what is "legitimate"? Foucault showed that institutions claim the power to classify things as proper or improper. Calling something "legitimate" borrows that institutional authority without proving anything. Ask: who granted this legitimacy, and what criteria did they use?' },
  ],

  // ── SOURCE CHECK: Epistemology, Source Credibility ──
  'source-check': [
    { words: ['experts', 'scientists', 'researchers', 'doctors', 'professionals', 'authorities', 'analysts', 'specialists', 'expert'], explanation: '\uD83C\uDFAA Anonymous authority \u2014 "Experts say" is not a source, it\u2019s a stage prop. Cialdini\u2019s Authority principle: we instinctively trust titles. But unnamed experts are not sources \u2014 they are rhetorical devices. Real journalists name their sources. Real studies have authors. Ask: what are their names? Where do they work? Can I verify them in 30 seconds?' },
    { words: ['study', 'studies', 'research', 'survey', 'report', 'analysis', 'data', 'statistics', 'findings'], explanation: '\uD83D\uDCDA Vague reference \u2014 "A study shows" is meaningless without details. Which study? By which university? Published in which journal? When? How many participants? A study without a citation is just a story in a lab coat. Real research is traceable. Ask: can I find this paper with a 30-second Google search?' },
    { words: ['people say', 'sources say', 'it is said', 'reportedly', 'apparently', 'allegedly', 'rumored', 'word is', 'rumor', 'rumors'], explanation: '\uD83D\uDDE3\uFE0F Hearsay \u2014 someone heard from someone who heard from someone. "Sources say" is the journalistic equivalent of "my friend\u2019s cousin knows a guy." It\u2019s rumor dressed up as reporting. The longer the chain of "sources," the less reliable the information. Ask: who is the original source? Can they be named and contacted?' },
    { words: ['internet says', 'everyone knows', 'common knowledge', 'widely known'], explanation: '\uD83C\uDF10 Fake consensus \u2014 "Common knowledge" is often just unchecked repetition. Five hundred people can repeat the same lie, and it doesn\u2019t become true. "Common knowledge" is a thought-stopper: it suggests that no verification is needed because "everyone knows." Ask: how do we know this? When was it last verified?' },
    { words: ['alleged', 'unconfirmed', 'unverified', 'claimed', 'claim', 'supposed', 'purported', 'fact', 'anonymous'], explanation: '\u274C Unverified \u2014 the text itself admits it cannot confirm its own claim. "Alleged," "unconfirmed," "unverified" \u2014 these words are warnings the author embedded. They\u2019re saying "I\u2019m telling you this, but I can\u2019t prove it." Ask: why is this being shared if it cannot be confirmed?' },
  ],
}

// ── HIGHLIGHT FUNCTION v10 — Stem-based matching ──
// Uses a lightweight JS stemmer to match morphological variants

// Lightweight stemmer (Porter-style, ~30 lines)
function simpleStem(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length < 3) return w
  
  // Step 1a: plural/suffix removal
  if (w.endsWith('sses')) w = w.slice(0, -2)
  else if (w.endsWith('ies')) w = w.slice(0, -2)
  else if (w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1)
  
  // Step 1b: -ed, -ing removal  
  if (w.endsWith('eed') && w.length > 3) { /* keep */ }
  else if (w.endsWith('ed') && w.length > 2) {
    const stem = w.slice(0, -2)
    if (/[aeiou]/.test(stem)) w = stem
  }
  else if (w.endsWith('ing') && w.length > 3) {
    const stem = w.slice(0, -3)
    if (/[aeiou]/.test(stem)) w = stem
  }
  
  // Step 1c: -y → -i
  if (w.endsWith('y') && w.length > 2 && /[aeiou]/.test(w.slice(0, -1))) {
    w = w.slice(0, -1) + 'i'
  }
  
  // Step 2: common suffix reduction
  const step2: [string, string][] = [
    ['ational', 'ate'], ['tional', 'tion'], ['ization', 'ize'],
    ['iveness', 'ive'], ['fulness', 'ful'], ['ousness', 'ous'],
    ['ation', 'ate'], ['ator', 'ate'], ['iviti', 'ive'], ['biliti', 'ble'],
    ['alism', 'al'], ['aliti', 'al'], ['entli', 'ent'], ['ousli', 'ous'],
    ['enci', 'ence'], ['anci', 'ance'], ['abli', 'able'], ['izer', 'ize'],
    ['alli', 'al'], ['eli', 'e'],
  ]
  for (const [suf, rep] of step2) {
    if (w.endsWith(suf) && w.length > suf.length + 1) {
      w = w.slice(0, -suf.length) + rep
      break
    }
  }
  
  // Step 3: more reductions
  if (w.endsWith('icate') && w.length > 5) w = w.slice(0, -4) + 'ic'
  else if (w.endsWith('ative') && w.length > 5) w = w.slice(0, -5)
  else if (w.endsWith('alize') && w.length > 5) w = w.slice(0, -4) + 'al'
  else if (w.endsWith('ical') && w.length > 4) w = w.slice(0, -3) + 'ic'
  else if (w.endsWith('ness') && w.length > 4) w = w.slice(0, -4)
  else if (w.endsWith('ful') && w.length > 3) w = w.slice(0, -3)
  else if (w.endsWith('ment') && w.length > 4) w = w.slice(0, -4)
  
  // Step 4: -ion, -er, -ic, -able, -ible, -ant, -ence, -ance, -ent, -ism
  const step4Suffs = ['al', 'ance', 'ence', 'er', 'ic', 'able', 'ible', 'ant', 'ement', 'ment', 'ent', 'ism', 'ate', 'iti', 'ous', 'ive', 'ize']
  for (const suf of step4Suffs) {
    if (w.endsWith(suf) && w.length > suf.length + 2) {
      w = w.slice(0, -suf.length)
      break
    }
  }
  if (w.endsWith('ion') && w.length > 4 && /[st]/.test(w[w.length - 4] || '')) {
    w = w.slice(0, -3)
  }
  
  // Step 5a: -e removal
  if (w.endsWith('e') && w.length > 3) {
    if (w.length > 4) w = w.slice(0, -1)
  }
  
  return w
}

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

  // Then single words — STEM-BASED matching
  // Build a stem→(word→explanation) map per tool for faster lookup
  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue
    
    // Build stem lookup for this tool's keywords
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
      
      // Stem the token from the text
      const tokenStem = simpleStem(token)
      const matches = stemMap.get(tokenStem)
      
      if (matches && matches.length > 0) {
        seen.add(token)
        // Deduplicate explanations (same stem can match multiple keyword forms from same rule)
        const uniqueExplanations = [...new Set(matches.map(m => m.explanation))]
        const combinedExplanation = uniqueExplanations.join(' • ')
        addEntry(map, token, { word: token, explanation: combinedExplanation, color: config.color })
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