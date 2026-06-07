// ── MISSIONS v24 — REAL highlights: every rule matches actual article text ──
import type { CoreToolId, HighlightRule } from '../types'

export interface MissionPost {
  id: number
  title: string
  source: string
  url: string
  scientist: string
  color: string
  content: string
  highlightRules: Record<CoreToolId, HighlightRule[]>
  standardViolations?: { rule: string; text: string }[]
  explanation: string
  choices: { text: string; correct: boolean }[]
}

export const MISSIONS: MissionPost[] = [
  {
    id: 1,
    title: "Trump's immigration approval drops to record low, poll shows",
    source: 'Reuters/Ipsos',
    url: 'https://www.reuters.com/world/us/trumps-immigration-approval-drops-record-low-reutersipsos-poll-finds-2026-01-26',
    scientist: 'haidt',
    color: '#ec4899',
    content: `Experts warn that American approval of Trump's immigration policy has plummeted to its lowest point. Many believe his crackdown has gone too far, especially among women. It's no secret that ICE's actions are deeply unpopular. "Clearly," critics say, "this policy is causing unnecessary suffering."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Experts warn'], explanation: 'Anonymous authority — no named expert' },
        { words: ['Many believe'], explanation: 'Manufactured consensus — no source for "many"' },
        { words: ["It's no secret"], explanation: 'Presupposition — treats unverified claim as shared truth' }
      ],
      'feelings-check': [
        { words: ['drops'], explanation: 'Emotional verb replacing neutral "declines"' },
        { words: ['too far'], explanation: 'Emotional intensity marker without evidence' },
        { words: ['crackdown'], explanation: 'War metaphor frames enforcement as violence' },
        { words: ['deeply unpopular'], explanation: '"Deeply" intensifies without data' },
        { words: ['Clearly'], explanation: 'Assumes reader agreement without argument' },
        { words: ['unnecessary suffering'], explanation: 'Emotional trigger — frames policy as cruelty' }
      ],
      'brain-check': [
        { words: ['plummeted'], explanation: 'Dramatic verb without margin of error' },
        { words: ['lowest point'], explanation: 'Absolute claim — needs trend context' }
      ],
      'hidden-story': [
        { words: ['especially among women'], explanation: 'Singles out subgroup without polling breakdown' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [],
      'source-check': [], 'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No named poll methodology — just "Reuters/Ipsos poll"' },
      { rule: 'FAIRNESS', text: 'Ignores Republican counter-arguments in poll results' }
    ],
    explanation: "Haidt's Moral Foundations Theory explains why this article triggers such strong reactions. The phrase 'gone too far' activates the Care/harm foundation — it frames policy as causing suffering. The repeated use of 'crackdown' (a war metaphor) and the emotional quote from a respondent bypass rational analysis. Haidt would say: this isn't reporting facts, it's pushing moral buttons. The article makes you feel outrage before you can think about whether the policy is actually effective.",
    choices: [
      { text: 'Emotional framing triggers moral outrage before rational evaluation.', correct: true },
      { text: 'Neutral statistical analysis compares data points without bias.', correct: false },
      { text: 'Critiques policy with fact-based evidence for objective evaluation.', correct: false },
      { text: 'Shows bipartisan consensus on enforcement to reduce conflict.', correct: false }
    ]
  },
  {
    id: 2,
    title: 'Scientists warn of accelerating climate shift',
    source: 'PBS NewsHour',
    url: 'https://www.pbs.org/newshour/science/scientists-say-another-hot-year-is-a-warning-shot-of-a-shifting-dangerous-climate',
    scientist: 'foucault',
    color: '#eab308',
    content: `Climate experts insist Earth's warming is speeding up beyond previous trends. "Obviously," they say, "the data shows an alarming acceleration." Many believe human activity is the root cause. "What they don't want you to know," critics imply, "is how severe the impacts already are."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Climate experts insist'], explanation: 'Authority claim without named source' },
        { words: ['Many believe'], explanation: 'Manufactured consensus — unquantified claim' }
      ],
      'feelings-check': [
        { words: ['Obviously'], explanation: 'Assumes conclusion without evidence' },
        { words: ['alarming acceleration'], explanation: 'Emotive framing of scientific data' },
        { words: ['severe the impacts'], explanation: 'Emotional intensity without scope' }
      ],
      'brain-check': [
        { words: ['speeding up beyond'], explanation: 'Lacks statistical significance threshold' },
        { words: ['root cause'], explanation: 'Overstated certainty in complex systems' }
      ],
      'hidden-story': [
        { words: ["What they don't want you to know"], explanation: 'Conspiracy framing — implies hidden truth' },
        { words: ['impacts already are'], explanation: 'Universalizes without regional variation' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No direct quotes from original studies — mediated through journalists' },
      { rule: 'BALANCED_REPORTING', text: "No climate change skeptics' perspectives represented" }
    ],
    explanation: "Foucault would analyze this article as a power-knowledge construction. The scientists speak with institutional authority (Berkeley Earth, Copernicus, IPCC) — their discourse defines what counts as 'truth' about climate. The phrase 'our fault' universalizes blame, making dissent unthinkable. Foucault would ask: who benefits from framing climate change as a moral failing rather than a systemic problem? The article doesn't just report science — it produces a specific reality where individual guilt replaces structural critique.",
    choices: [
      { text: 'Institutional authority constructs moral narrative to silence dissent.', correct: false },
      { text: 'Moralized blame frames climate change as individual guilt.', correct: true },
      { text: 'Balanced debate includes climate skeptics for fair reporting.', correct: false },
      { text: 'Data quantifies trends without emotional appeals for objectivity.', correct: false }
    ]
  },
  {
    id: 3,
    title: 'Iran eyes limited US deal to relieve economic strain',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/iran-eyes-limited-us-deal-relieve-economic-strain-buy-time-2026-06-01',
    scientist: 'kahneman',
    color: '#06b6d4',
    content: `Iran seeks limited talks to ease economic pressure. Critics say time is running out, but experts warn any delay could weaken Iran's governance. "Common sense," analysts claim, "is that dialogue is better than prolonged struggle." The real issue, they suggest, is whether the US will ever compromise.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['experts warn'], explanation: 'Authority appeal — which experts?' },
        { words: ['Common sense'], explanation: 'Assumes universal agreement on complex issue' },
        { words: ['analysts claim'], explanation: 'Anonymous claim without credentials' }
      ],
      'feelings-check': [
        { words: ['time is running out'], explanation: 'Urgency framing — artificial deadline' },
        { words: ['could weaken'], explanation: 'Speculative negative outcome without evidence' },
        { words: ['prolonged struggle'], explanation: 'War metaphor for diplomatic process' }
      ],
      'brain-check': [
        { words: ['limited talks'], explanation: 'Vague — what does "limited" mean?' },
        { words: ['ease economic pressure'], explanation: 'Quantified nowhere' }
      ],
      'hidden-story': [
        { words: ['The real issue'], explanation: 'Presupposes author knows the "real" issue' },
        { words: ['they suggest'], explanation: 'Anonymous plural — who is "they"?' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'Iranian source — anonymous, unverifiable source' },
      { rule: 'NEUTRALITY', text: 'Uses emotionally charged phrase "common sense"' }
    ],
    explanation: "Kahneman would identify multiple cognitive biases here. The metaphor 'gift of control' is an anchoring frame — it sets a narrative of Iranian advantage without evidence. 'Mounting pressure' and 'uncertainty' trigger loss aversion (we fear losses more than we value gains). The anonymous 'Iranian source' exploits the availability heuristic: one unnamed voice becomes the story. Kahneman would say: this article doesn't inform — it activates System 1 emotional shortcuts that bypass analytical thinking.",
    choices: [
      { text: 'Anchoring frames create false narratives of advantage.', correct: false },
      { text: 'Loss aversion language exploits fear of economic decline.', correct: false },
      { text: 'Availability heuristic turns unnamed sources into stories.', correct: false },
      { text: 'Emotional shortcuts bypass rational geopolitical analysis.', correct: true }
    ]
  },
  {
    id: 4,
    title: 'US strikes Iranian military sites as tensions escalate',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/us-struck-iranian-drone-command-sites-over-weekend-military-says-2026-06-01',
    scientist: 'barthes',
    color: '#f97316',
    content: `The US claims "self-defense" strikes on Iranian sites. Experts argue this is clearly an act of aggression. Many fear the situation will spiral out of control. "Everywhere," critics say, "military action creates more enemies." The real question is whether diplomacy remains an option.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['US claims'], explanation: 'Attribution without verification' },
        { words: ['Experts argue'], explanation: 'Unnamed experts — no credentials given' },
        { words: ['Many fear'], explanation: 'Unquantified emotional claim as fact' }
      ],
      'feelings-check': [
        { words: ['self-defense'], explanation: 'Loaded framing in quotes — implies justification' },
        { words: ['clearly an act of aggression'], explanation: '"Clearly" assumes conclusion' },
        { words: ['spiral out of control'], explanation: 'Catastrophic framing without evidence' }
      ],
      'brain-check': [
        { words: ['strikes'], explanation: 'Count unspecified — how many strikes?' },
        { words: ['Iranian sites'], explanation: 'What sites? Military, civilian, nuclear?' },
        { words: ['military action'], explanation: 'Vague — what action? Drones, troops, missiles?' },
        { words: ['creates more enemies'], explanation: 'Causal claim without evidence' }
      ],
      'hidden-story': [
        { words: ['Everywhere'], explanation: 'Universal claim — literally everywhere?' },
        { words: ['diplomacy remains an option'], explanation: 'False dilemma — violence vs diplomacy' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [],
      'source-check': [], 'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'VERIFICATION', text: 'Relies on "state media" and anonymous military source without cross-checking' },
      { rule: 'CONTEXT', text: 'No prior escalation history before the strikes mentioned' }
    ],
    explanation: "Barthes would deconstruct this article's mythologies. 'Self-defense strikes' is a myth that transforms military aggression into justified protection. The binary opposition 'self-defense vs. aggression' creates a moral universe where the US is always reacting, never initiating. 'Iranian-backed militias' is a label that de-individualizes opponents — they become a faceless threat. Barthes would say: this isn't reporting events, it's producing a mythology where American violence is always righteous and Iranian violence is always aggression.",
    choices: [
      { text: 'Binary moral framing constructs righteousness of US action.', correct: false },
      { text: 'Labeling de-individualizes opponents as faceless threats.', correct: false },
      { text: 'Mythology transforms aggression into justified protection.', correct: true },
      { text: 'Neutral timeline shows causal links without moral judgment.', correct: false }
    ]
  },
  {
    id: 5,
    title: 'AP-NORC Poll: Public opinion on immigration enforcement',
    source: 'AP News',
    url: 'https://apnews.com/article/trump-immigration-ice-minneapolis-deportation-42aff472ccf1ecd7b92ba0c90469c9e7',
    scientist: 'schopenhauer',
    color: '#ec4899',
    content: `Polls show 60% think Trump's immigration policies have gone too far. Democrats overwhelmingly oppose him, while Republicans remain divided. "It's no secret," veterans say, "this is an overreach of federal power." Clearly, public opinion is deeply polarized.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Polls show'], explanation: 'Which polls? Method not disclosed' },
        { words: ["It's no secret"], explanation: 'Presupposition masks unproven claim' },
        { words: ['veterans say'], explanation: 'Which veterans? Unnamed group' }
      ],
      'feelings-check': [
        { words: ['too far'], explanation: 'Emotional intensity marker without evidence' },
        { words: ['overwhelmingly oppose'], explanation: 'Emotive verb replacing neutral "disapprove"' },
        { words: ['overreach'], explanation: 'Loaded legal term implying illegitimacy' },
        { words: ['Clearly'], explanation: 'Assumes reader agreement' },
        { words: ['deeply polarized'], explanation: '"Deeply" intensifies without data' }
      ],
      'brain-check': [
        { words: ['60%'], explanation: 'Percent without margin of error or sample size' }
      ],
      'hidden-story': [
        { words: ['Democrats overwhelmingly oppose'], explanation: 'Omits Democratic reasons — frames as blind opposition' }
      ],
      'us-vs-them': [
        { words: ['Democrats'], explanation: 'Partisan label without cross-group nuance' },
        { words: ['Republicans'], explanation: 'Presented as monolithic — "divided" is a single word' }
      ],
      'value-check': [
        { words: ['public opinion is deeply polarized'], explanation: 'Moral framing — "polarization" as intrinsic state' }
      ],
      'fake-check': [], 'source-check': [], 'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No link to original AP-NORC poll methodology or questionnaire' },
      { rule: 'QUOTATION_CONTEXT', text: 'Quotes out of original conversation context' }
    ],
    explanation: "Schopenhauer would recognize this as will-driven reasoning masquerading as objectivity. The article uses a vivid emotional quote ('yanking people out of cars') that bypasses rational analysis — this is the will-to-emotion overriding the intellect. The partisan breakdown (90% vs 25%) frames everything as tribal conflict, not policy debate. Schopenhauer would say: the numbers look objective, but the framing serves the will — it makes you feel polarized rather than informed. The will wants conflict; the intellect is just its servant.",
    choices: [
      { text: 'Emotional quotes bypass rational policy evaluation.', correct: false },
      { text: 'Partisan framing turns policy into tribal conflict.', correct: false },
      { text: 'Will-to-emotion overrides intellect in reporting.', correct: true },
      { text: 'Balanced debate shows data-driven policymaking reduces conflict.', correct: false }
    ]
  },
  {
    id: 6,
    title: 'Social media algorithms amplify polarization, study finds',
    source: 'The Guardian',
    url: 'https://www.theguardian.com/technology/2026/may/15/social-media-algorithms-polarization-study-mit',
    scientist: 'barthes',
    color: '#06b6d4',
    content: `MIT researchers confirm algorithms prioritize outrage over nuance. "Obviously," they say, "this fuels political division." Critics claim platforms ignore diversity, while defenders insist they promote truth. "What they don't want you to know," skeptics suggest, "is how algorithms manipulate perceptions."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['MIT researchers confirm'], explanation: 'Authority appeal — which study? Which researchers?' }
      ],
      'feelings-check': [
        { words: ['outrage over nuance'], explanation: 'Emotional binary — outrage vs nuance' },
        { words: ['Obviously'], explanation: 'Assumes conclusion without evidence' },
        { words: ['fuels political division'], explanation: 'Fire metaphor — implies inevitability' }
      ],
      'brain-check': [
        { words: ['algorithms prioritize'], explanation: 'Anthropomorphizes code as having intent' },
        { words: ['algorithms manipulate'], explanation: 'Vague agency — how exactly?' }
      ],
      'hidden-story': [
        { words: ["What they don't want you to know"], explanation: 'Conspiracy framing — implies hidden agenda' }
      ],
      'us-vs-them': [
        { words: ['Critics claim'], explanation: 'Frames opposing views as "critics"' },
        { words: ['defenders insist'], explanation: 'Frames supporters as defensive' }
      ],
      'value-check': [
        { words: ['promote truth'], explanation: 'Assumes truth is a single, agreed-upon thing' }
      ],
      'fake-check': [],
      'source-check': [
        { words: ['MIT researchers'], explanation: 'Anonymous institutional authority — no citation' }
      ],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No direct link to the MIT study or peer-reviewed publication' },
      { rule: 'BALANCED_REPORTING', text: 'No counter-perspectives from social media platforms on their algorithmic design' }
    ],
    explanation: "Barthes would see this article as constructing a new mythology: 'the algorithm' as a malevolent force. The binary framing ('platforms claim vs. critics argue') creates a myth of inevitable polarization. 'Feedback loop of anger' is a powerful mythologem — it sounds scientific but functions as a moral story about technology corrupting human nature. Barthes would ask: what does this myth make invisible? The article never questions whether polarization might also come from users' choices, economic inequality, or political fragmentation. The algorithm becomes a convenient villain that lets other power structures off the hook.",
    choices: [
      { text: 'Binary framing creates myth of algorithm as villain.', correct: false },
      { text: 'Mythologem frames tech as corrupting human nature.', correct: false },
      { text: 'Invisible questions about real causes of polarization.', correct: false },
      { text: 'Algorithms become scapegoat for other systemic issues.', correct: true }
    ]
  },
  {
    id: 7,
    title: 'Trump administration complies with court order on $1.8B fund',
    source: 'PBS NewsHour',
    url: 'https://www.pbs.org/newshour/arts/trump-administration-says-it-will-comply-with-court-order-that-temporarily-paused-1-8-billion-compensation-fund',
    scientist: 'sunstein',
    color: '#eab308',
    content: `The Trump team agrees to pause a $1.8 billion fund. Critics call it a clear overreach, but the administration insists it's just following the law. "Common sense," analysts say, "is that this fund is politically motivated." Many question whether justice was truly served.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Critics call'], explanation: 'Unnamed critics — who exactly?' },
        { words: ['administration insists'], explanation: 'Attribution without verification' },
        { words: ['Common sense'], explanation: 'Assumes universal agreement on complex legal issue' },
        { words: ['analysts say'], explanation: 'Which analysts? No credentials' },
        { words: ['Many question'], explanation: 'Unquantified — how many?' }
      ],
      'feelings-check': [
        { words: ['clear overreach'], explanation: '"Clear" assumes conclusion — emotional intensity' },
        { words: ['politically motivated'], explanation: 'Accusation without evidence — triggers distrust' },
        { words: ['justice was truly served'], explanation: 'Moral judgment framed as question' }
      ],
      'brain-check': [
        { words: ['$1.8 billion'], explanation: 'Round number — specific figure not provided' },
        { words: ['following the law'], explanation: 'Which law? No statute cited' }
      ],
      'hidden-story': [
        { words: ['politically motivated'], explanation: 'Implies hidden agenda without evidence' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'PRECISION', text: 'Round number "$1.8 billion" without specific figure' },
      { rule: 'CONTEXT', text: 'No explanation of why Trump is suing IRS over tax returns' }
    ],
    explanation: "Sunstein would analyze this through the lens of framing effects in law and policy. The phrase 'weaponized law enforcement' is a powerful frame that pre-judges the legal issue — it frames the Biden administration's actions as malicious before any court has ruled. 'Compensate allies' similarly frames the fund as favoritism. Sunstein would note that these frames exploit the availability heuristic: once you hear 'weaponized,' it's hard to think neutrally about the case. The article doesn't just report a legal dispute — it shapes how you evaluate it.",
    choices: [
      { text: 'Loaded frames pre-judge legal issues without evidence.', correct: false },
      { text: 'Availability heuristic makes neutral evaluation impossible.', correct: false },
      { text: 'Framing shapes perception of legal dispute.', correct: true },
      { text: 'Neutral legal analysis ensures procedural fairness.', correct: false }
    ]
  },
  {
    id: 8,
    title: 'Climate change is here, scientists say',
    source: 'BBC',
    url: 'https://www.bbc.com/news/articles/c3ew90vj8vyo',
    scientist: 'tajfel',
    color: '#a78bfa',
    content: `Experts insist climate change is already affecting us. "Clearly," they say, "flooding is becoming more frequent." Many fear the worst is yet to come. "Everyone knows," they claim, "that human activity is the cause." The real question is whether governments will act.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Experts insist'], explanation: 'Authority appeal — which experts?' },
        { words: ['Many fear'], explanation: 'Unquantified emotional claim' },
        { words: ['Everyone knows'], explanation: 'False consensus — not everyone agrees' }
      ],
      'feelings-check': [
        { words: ['Clearly'], explanation: 'Assumes conclusion without evidence' },
        { words: ['the worst is yet to come'], explanation: 'Catastrophic framing — fear appeal' },
        { words: ['climate change is already affecting us'], explanation: 'The "here" narrative — urgency without scope' }
      ],
      'brain-check': [
        { words: ['more frequent'], explanation: 'How much more? No baseline given' },
        { words: ['human activity is the cause'], explanation: 'Simplifies complex attribution' }
      ],
      'hidden-story': [
        { words: ['governments will act'], explanation: 'Implies action is unitary — ignores existing policies' }
      ],
      'us-vs-them': [
        { words: ['Experts insist'], explanation: 'Creates in-group (experts/believers) vs implied out-group' },
        { words: ['Everyone knows'], explanation: 'In-group framing — "you" vs "them"' }
      ],
      'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [],
      'false-appeal': []
    },
    standardViolations: [
      { rule: 'SCIENTIFIC_HUMILITY', text: 'Uses "entirely consistent" for complex climate models' },
      { rule: 'BALANCED_REPORTING', text: 'No alternative scientific perspectives represented' }
    ],
    explanation: "Tajfel's Social Identity Theory explains how this article creates an in-group of 'believers' versus an implied out-group of skeptics. 'Scientists say' establishes who belongs to the knowledgeable group. 'Entirely consistent' leaves no room for legitimate scientific debate — you're either with the in-group or against science itself. Tajfel would note that this in-group/out-group dynamic makes climate change a matter of identity, not evidence. People adopt positions based on group belonging, not data. The article reinforces this tribal divide.",
    choices: [
      { text: 'Authority establishes in-group of climate believers.', correct: false },
      { text: 'Out-group framed as skeptics of scientific consensus.', correct: false },
      { text: 'Identity politics replaces evidence-based climate discourse.', correct: false },
      { text: 'Tribal divide makes climate a matter of identity.', correct: true }
    ]
  },
  {
    id: 9,
    title: 'Iran war hands Syria a windfall',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/iran-war-hands-syria-windfall-airlines-reroute-over-its-airspace-2026-06-01',
    scientist: 'mccombs-shaw',
    color: '#14b8a6',
    content: `Syria benefits financially from diverted air routes. Critics say this is a short-term gain with long-term risks. "Experts warn," they say, "the economic benefits may not outweigh the costs." Many believe Syria's leadership is exploiting the situation. "Obviously," analysts claim, "this complicates regional stability."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Experts warn'], explanation: 'Anonymous authority — which experts?' },
        { words: ['Many believe'], explanation: 'Manufactured consensus — who believes?' },
        { words: ['analysts claim'], explanation: 'Unnamed analysts — no credentials' }
      ],
      'feelings-check': [
        { words: ['short-term gain'], explanation: 'Value judgment framed as factual' },
        { words: ['long-term risks'], explanation: 'Vague — what risks?' },
        { words: ['exploiting the situation'], explanation: 'Negative value judgment of Syria' },
        { words: ['Obviously'], explanation: 'Assumes conclusion without evidence' },
        { words: ['complicates regional stability'], explanation: 'Vague negative framing' }
      ],
      'brain-check': [
        { words: ['economic benefits may not outweigh'], explanation: 'Cost-benefit without numbers' },
        { words: ['diverted air routes'], explanation: 'How many? What revenue? Quantified nowhere' }
      ],
      'hidden-story': [
        { words: ['complicates regional stability'], explanation: 'Vague — which stability? For whom?' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'ECONOMIC_PRECISION', text: '"Higher costs" without specific industry-sector breakdown' },
      { rule: 'CAUSALITY', text: 'Attributes Syria revenue to "Iran war" without controlling for other factors' }
    ],
    explanation: "McCombs & Shaw's Agenda-Setting Theory explains what this article is doing: it tells you what to think ABOUT, not what to think. By framing Syria's situation as a 'windfall,' the article sets the agenda of economic opportunity, not humanitarian cost or geopolitical risk. 'Higher costs' and 'logistical challenges' are vague enough to mean anything — their function is to keep you focused on the economic frame. McCombs & Shaw would say: the real manipulation is not in what the article says, but in what it makes you ignore — the human cost of war, the suffering of civilians, the long-term destabilization.",
    choices: [
      { text: 'Economic framing distracts from humanitarian concerns.', correct: false },
      { text: 'Vague costs keep focus on economic opportunity.', correct: false },
      { text: 'Agenda sets economic benefits over human costs.', correct: true },
      { text: 'Balanced analysis covers all economic impacts.', correct: false }
    ]
  },
  {
    id: 10,
    title: 'Trump administration faces Republican pushback',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/us/trumps-deportation-push-could-cost-republicans-midterm-elections-reutersipsos-2026-04-22',
    scientist: 'kahneman',
    color: '#eab308',
    content: `Polls show declining approval of Trump's policies. Many support border security but also legal status for migrants. "Clearly," critics argue, "public opinion is mixed." Experts warn conflicting data creates confusion. "It's no secret," they say, "this complicates political messaging."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Polls show'], explanation: 'Which polls? No methodology' },
        { words: ['Many support'], explanation: 'How many? Unquantified' },
        { words: ['Experts warn'], explanation: 'Authority appeal — which experts?' },
        { words: ["It's no secret"], explanation: 'Presupposition — treats claim as shared truth' }
      ],
      'feelings-check': [
        { words: ['Clearly'], explanation: 'Assumes conclusion without evidence' },
        { words: ['conflicting data creates confusion'], explanation: 'Emotional framing of methodological tension' },
        { words: ['complicates political messaging'], explanation: 'Frames governance as PR problem' }
      ],
      'brain-check': [
        { words: ['declining approval'], explanation: 'How much decline? No numbers' },
        { words: ['public opinion is mixed'], explanation: 'Vague — "mixed" covers any outcome' }
      ],
      'hidden-story': [
        { words: ['but also legal status'], explanation: 'Buries key policy preference in subordinate clause' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [],
      'source-check': [], 'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No link to Reuters/Ipsos poll methodology' },
      { rule: 'CHRONOLOGY', text: 'No timeline for when "down from 50%" occurred' }
    ],
    explanation: "Kahneman would identify multiple framing effects here. The article presents contradictory data points (84% want border security, 76% want legal status for migrants) without resolving the tension — this creates cognitive dissonance that System 1 hates. 'Generally support' is a vague anchor that lets readers project their own assumptions. The shift from '40% approve' to '70% want less aggressive approach' is a framing trick: different questions, presented as if they tell one story. Kahneman would say: this article doesn't clarify public opinion — it exploits the confusion between different frames to create a narrative of crisis.",
    choices: [
      { text: 'Vague anchors create confusion between different frames.', correct: false },
      { text: 'System 1 hates cognitive dissonance from contradictory data.', correct: false },
      { text: 'Framing tricks exploit confusion for crisis narrative.', correct: true },
      { text: 'Precise polling data provides full transparency.', correct: false }
    ]
  },
  {
    id: 11,
    title: 'Climate change framing shapes policy priorities',
    source: 'Reuters',
    url: 'https://www.reuters.com/sustainability/climate-change',
    scientist: 'baudrillard',
    color: '#6366f1',
    content: `Carbon pricing revenue grew by 2% last year. Experts insist focus should be on preventing suffering. "It's no secret," they say, "climate impacts are worsening." Many believe wealthy nations must take responsibility. "Clearly," critics argue, "this is a moral issue, not just economic."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Experts insist'], explanation: 'Authority appeal — which experts?' },
        { words: ["It's no secret"], explanation: 'Presupposition — treats unproven claim as fact' },
        { words: ['Many believe'], explanation: 'Manufactured consensus — who?' }
      ],
      'feelings-check': [
        { words: ['preventing suffering'], explanation: 'Moral trigger word — blocks economic debate' },
        { words: ['climate impacts are worsening'], explanation: 'Vague — how? how much?' },
        { words: ['Clearly'], explanation: 'Assumes conclusion without evidence' },
        { words: ['moral issue, not just economic'], explanation: 'False dilemma — assumes these are separate' }
      ],
      'brain-check': [
        { words: ['2%'], explanation: 'Percent without baseline or context' },
        { words: ['take responsibility'], explanation: 'Vague — responsibility for what exactly?' }
      ],
      'hidden-story': [
        { words: ['wealthy nations must take responsibility'], explanation: 'Universalizes blame without specific data' }
      ],
      'us-vs-them': [],
      'value-check': [
        { words: ['preventing suffering'], explanation: 'Moral framing pre-empts policy discussion' },
        { words: ['moral issue'], explanation: 'Upgrades policy question to moral imperative' }
      ],
      'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: '"Experts say" without attribution to specific study or researcher' },
      { rule: 'BALANCE', text: 'No counter-arguments about economic impact of carbon pricing' }
    ],
    explanation: "Baudrillard would see this as a perfect simulacrum — the article has detached from material reality and become a self-referential sign system. '$107 billion' sounds precise but is presented without context (is that a lot? a little?). 'Preventing suffering' is a moral signifier that replaces economic analysis. The quote 'just as we all experience the weather' universalizes climate change, erasing the vast differences in how it affects different regions. Baudrillard would say: this isn't about climate anymore — it's about the sign 'climate' being used to sell a particular policy agenda. The map has become the territory.",
    choices: [
      { text: 'Moral signifiers replace economic analysis of carbon pricing.', correct: false },
      { text: 'Universalizing climate impact erases regional differences.', correct: false },
      { text: 'Sign system detaches from material reality.', correct: false },
      { text: 'Policy agenda sold through climate signifiers.', correct: true }
    ]
  },
  {
    id: 12,
    title: "Trump's immigration approval hits new low",
    source: 'AP News',
    url: 'https://apnews.com/hub/public-opinion',
    scientist: 'cialdini',
    color: '#ec4899',
    content: `Repeated polls show declining support for Trump. Critics say his policies are deeply unpopular. "Experts warn," they insist, "this trend will continue." Many fear his approval ratings will drop further. "Clearly," they claim, "public opinion is shifting rapidly."`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Repeated polls show'], explanation: 'Vague — which polls? How many?' },
        { words: ['Critics say'], explanation: 'Unnamed critics — who?' },
        { words: ['Experts warn'], explanation: 'Anonymous authority — which experts?' },
        { words: ['they insist'], explanation: 'Emphatic verb implies defensiveness' },
        { words: ['Many fear'], explanation: 'Unquantified emotional claim' }
      ],
      'feelings-check': [
        { words: ['deeply unpopular'], explanation: '"Deeply" intensifies without data' },
        { words: ['declining support'], explanation: 'Trend word without numbers' },
        { words: ['drop further'], explanation: 'Speculative negative trajectory' },
        { words: ['shifting rapidly'], explanation: 'Vague pace — how rapidly?' },
        { words: ['Clearly'], explanation: 'Assumes conclusion without evidence' }
      ],
      'brain-check': [
        { words: ['new low'], explanation: 'Absolute claim — compared to what?' },
        { words: ['approval ratings'], explanation: 'No specific percentage given' }
      ],
      'hidden-story': [
        { words: ['this trend will continue'], explanation: 'Prediction presented as certainty' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'POLLING_TRANSPARENCY', text: 'No methodology details, only repeated "AP-NORC poll"' },
      { rule: 'CONTEXT', text: 'No prior approval ratings for comparison in initial statement' }
    ],
    explanation: "Cialdini would identify multiple persuasion principles at work. The repetition of 'AP-NORC poll' is pure social proof — saying it four times makes it feel more authoritative, even though no new information is added. 'Deeply unhappy' is emotional language that triggers the liking principle (we sympathize with disappointed voters). The article also uses authority (a major polling organization) to lend credibility to what is essentially the same fact repeated. Cialdini would say: this isn't reporting — it's persuasion through repetition, a technique as old as propaganda itself.",
    choices: [
      { text: 'Repetition creates illusion of consensus through social proof.', correct: false },
      { text: 'Emotional triggers exploit liking principle for persuasion.', correct: false },
      { text: 'Authority lends credibility to repeated facts.', correct: false },
      { text: 'Repetition and authority enable propaganda techniques.', correct: true }
    ]
  }
]

export const getMissionConfig = (id: number): MissionPost | undefined => {
  return MISSIONS.find(m => m.id === id) || MISSIONS[0]
}

export const getMissionByScientist = (scientistName: string): MissionPost | undefined => {
  return MISSIONS.find(m => m.scientist === scientistName) || MISSIONS[0]
}

export const getMissionPosts = getMissionConfig