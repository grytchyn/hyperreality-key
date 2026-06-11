// ── MISSIONS v24 — REAL highlights: every rule matches actual article text ──
import type { CoreToolId, HighlightRule } from '../types'

export interface MissionPost {
  id: number
  title: string
  source: string
  url: string
  logo: string
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'haidt',
    color: '#ec4899',
    content: `Experts warn that American approval of Trump's immigration policy has plummeted to its lowest point since records began, according to the latest Reuters/Ipsos tracking poll. Many believe his crackdown has gone too far, especially among women, who have shifted decisively against the administration's approach in every demographic subgroup surveyed. It's no secret that ICE's enforcement actions have become deeply unpopular in urban centers and suburban communities alike, with critics pointing to rising civil liberties concerns. "Clearly," critics say, "this policy is causing unnecessary suffering to families who have lived here for decades," a claim the administration disputes by pointing to border security statistics. The human cost of these measures continues to dominate the national conversation as midterm elections approach.`,
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
    logo: '/assets/logos/pbs.svg',
        scientist: 'foucault',
    color: '#eab308',
    content: `Climate experts insist Earth's warming is speeding up beyond previous trends, with new data from multiple monitoring agencies confirming a pattern that has scientists deeply concerned and revising their models upward. "Obviously," they say, "the data shows an alarming acceleration that we did not predict in our worst-case scenarios published just five years ago." Many believe human activity remains the primary root cause, pointing to rising CO2 levels that correlate directly with global industrial output over the past century. "What they don't want you to know," critics imply, "is how severe the impacts already are — not in some distant future, but right now, in communities across every continent." The new report covers 195 countries and spans temperature records, sea-level rise, and extreme weather events that have already displaced millions.`,
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'kahneman',
    color: '#06b6d4',
    content: `Iran seeks limited talks to ease mounting economic pressure as international sanctions continue to bite and the national currency hits new lows against the dollar on Tehran's open market. Critics say time is running out for a diplomatic solution, but experts warn any delay could further weaken Iran's governance structures and embolden hardliner factions within the regime who oppose any engagement with the West. "Common sense," analysts claim, "is that dialogue is better than prolonged struggle that ultimately benefits no one in the region." The real issue, they suggest, is whether the United States will ever compromise on its core demands regarding uranium enrichment levels and support for regional proxy forces. Negotiations have been described as fragile by multiple diplomatic sources, with both sides deeply skeptical of the other's long-term intentions.`,
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'barthes',
    color: '#f97316',
    content: `The US claims "self-defense" strikes on Iranian military sites, describing the operations as proportional and targeted responses to recent attacks on American personnel stationed in the region. Experts argue this is clearly an escalation that goes far beyond any reasonable definition of self-defense under international law, pointing to the scale and scope of the bombardment. Many fear the situation will spiral out of control as both sides have mobilized additional naval and air forces in the Persian Gulf and Gulf of Oman. "Everywhere we look," critics say, "military action creates more enemies than it eliminates — this is a lesson we have learned repeatedly over two decades of conflict in the Middle East." The real question, experienced diplomats suggest, is whether diplomacy remains a viable option or whether both nations are now locked into a confrontation that neither can easily exit without losing face. The UN Security Council has called an emergency session for this week.`,
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
    logo: '/assets/logos/ap.svg',
        scientist: 'schopenhauer',
    color: '#ec4899',
    content: `Polls show 60% of Americans think Trump's immigration enforcement policies have gone too far, representing a significant shift in public sentiment from just one year ago when opinions on the issue were far more evenly divided. Democrats overwhelmingly oppose the administration's approach by a margin of nine to one, while Republicans remain sharply divided between moderates who favor comprehensive reform and hardliners who demand even stricter enforcement measures. "It's no secret," veterans of immigration policy say, "this is an overreach of federal power that violates longstanding norms of local policing and community trust." Clearly, public opinion is deeply polarized along partisan lines, but the AP-NORC data also reveals surprising areas of consensus across party lines on specific issues like creating pathways to citizenship for long-term undocumented residents who meet certain criteria. The survey of 1,156 adults was conducted between April 15 and April 20.`,
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
    logo: '/assets/logos/guardian.svg',
        scientist: 'barthes',
    color: '#06b6d4',
    content: `MIT researchers confirm that social media algorithms systematically prioritize outrage over nuance in content recommendation systems, a finding that has reignited the global debate about platform accountability and regulatory oversight. "Obviously," the lead researcher states, "this fuels political division and entrenches users in increasingly extreme positions over time, as the engagement metrics that drive advertising revenue reward emotional content over factual accuracy." Critics claim the major platforms have consistently ignored content diversity in favor of maximizing user engagement time, while defenders insist their recommendation systems are designed to surface authentic and trustworthy information. "What they don't want you to know," skeptics suggest, "is how deeply these algorithms manipulate user perceptions without any meaningful transparency requirements or independent oversight mechanisms." The study, published this month in Nature, analyzed over ten million content recommendations across four major social media platforms over a two-year period.`,
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
    logo: '/assets/logos/pbs.svg',
        scientist: 'sunstein',
    color: '#eab308',
    content: `The Trump administration agrees to pause a $1.8 billion compensation fund following a federal court order that temporarily blocked the disbursement pending further legal review. Critics call it a clear overreach of executive authority, arguing the fund was never properly authorized by Congress and bypassed standard appropriations procedures. The administration insists it's just following the law as written, pointing to legal precedents from previous administrations that they say justify the executive action. "Common sense," independent analysts say, "is that this entire fund is politically motivated and appears designed to reward political allies rather than address genuine claims through established legal channels." Many legal experts question whether justice was truly served by the original allocation process, which they describe as unusually opaque and lacking the standard oversight mechanisms that typically govern such federal disbursements. The case now heads to the federal appeals court for a full hearing.`,
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
    logo: '/assets/logos/bbc.svg',
        scientist: 'tajfel',
    color: '#a78bfa',
    content: `Experts insist climate change is already affecting us in tangible and measurable ways that increasingly defy even the most conservative previous scientific projections. "Clearly," they say, "flooding in coastal communities is becoming more frequent and more severe, with this year alone seeing record-breaking storm surges across three continents and unprecedented damage to infrastructure." Many fear the worst is yet to come as climate feedback loops, including melting permafrost and reduced ice albedo, accelerate faster than most models had anticipated. "Everyone knows by now," they claim, "that human activity is the primary driver of these changes — the scientific debate is no longer about whether, but about how quickly we need to respond to avert catastrophic outcomes." The real question, policymakers across the globe acknowledge, is whether governments will act with sufficient urgency or continue pursuing incremental approaches that scientists say are wholly inadequate for the scale of the unfolding crisis.`,
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'mccombs-shaw',
    color: '#14b8a6',
    content: `Syria benefits financially from air routes diverted due to the ongoing Iran conflict, with overflight fees providing a significant and much-needed boost to Damascus's struggling war-time economy. Critics say this represents a short-term gain that carries substantial long-term strategic risks, including the potential for expanded international sanctions and diplomatic isolation. "Experts warn," they caution, "the economic benefits may not outweigh the diplomatic costs of being seen as deliberately exploiting a regional crisis for financial gain." Many believe Syria's leadership is intentionally prolonging regional tensions to maximize revenue from rerouted commercial flights that now traverse Syrian airspace in significantly larger numbers. "Obviously," analysts claim, "this complicates regional stability and creates perverse financial incentives for Damascus to oppose any genuine resolution to the broader conflict in the region." Airlines have rerouted approximately 15% of their regional traffic through Syrian airspace since the escalation of hostilities began.`,
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'kahneman',
    color: '#eab308',
    content: `Polls show declining approval of Trump's immigration policies across multiple key swing states, with independent voters in particular shifting away from the administration's hardline enforcement approach at an accelerating rate. Many Americans simultaneously support strong border security measures and legal status pathways for long-term undocumented migrants who meet certain criteria, creating a complex and nuanced picture for policymakers trying to navigate the issue. "Clearly," critics argue, "public opinion is not as simple as the administration's messaging suggests — people consistently want both enforcement and compassion to coexist in immigration policy." Experts warn that conflicting data from different polling organizations using different methodologies creates confusion about what the electorate actually wants and how intensely they feel about various aspects of the debate. "It's no secret," veteran political strategists say, "that this significantly complicates political messaging for both major parties heading into a critical election cycle where immigration has become the number one issue for voters in every swing state."`,
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
    logo: '/assets/logos/reuters.svg',
        scientist: 'baudrillard',
    color: '#6366f1',
    content: `Global carbon pricing revenue grew by 2% last year to reach a total of $107 billion according to the World Bank's annual comprehensive report on carbon markets and emissions trading systems worldwide. Experts insist the focus should urgently shift from purely economic metrics to preventing the escalating human suffering caused by climate change impacts that are already being felt across vulnerable communities worldwide. "It's no secret," they say, "that climate impacts are worsening significantly faster than our collective policy responses are adapting to meet the growing challenge." Many believe wealthy nations, which have contributed the overwhelming majority of historical emissions, must take far greater responsibility for financing adaptation and resilience measures in vulnerable developing countries that have contributed least to the problem. "Clearly," critics argue, "this is fundamentally a moral issue, not merely an economic one — we cannot simply price our way out of a crisis that demands a structural transformation of our entire global energy system."`,
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
    logo: '/assets/logos/ap.svg',
        scientist: 'cialdini',
    color: '#ec4899',
    content: `Repeated polls from multiple independent survey organizations consistently show declining support for President Trump's handling of key domestic issues, with the trend accelerating across nearly every demographic category measured. Critics say his policies are deeply unpopular among the suburban voters who will be crucial in determining the outcome of upcoming elections across the country. "Experts warn," analysts insist, "this trend will continue unless the administration significantly changes its approach to both immigration enforcement and economic policy in the coming months." Many experienced political strategists fear his approval ratings will drop further among independent voters who are increasingly turned off by the administration's confrontational style and frequent changes in policy direction. "Clearly," they claim, "public opinion is shifting rapidly in ways that could fundamentally reshape the political landscape for years to come." The RealClearPolitics polling average now shows Trump's overall approval at 43%, down from 47% just three months ago, a statistically significant decline.`,
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
  },
  {
    id: 13,
    title: 'Israel strikes south Lebanon after stepping back from Beirut attack',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/israel-strikes-south-lebanon-after-holding-off-beirut-attack-2026-06-02/',
    logo: '/assets/logos/reuters.svg',
    scientist: 'barthes',
    color: '#06b6d4',
    content: `President Trump said he asked Israeli Prime Minister Netanyahu not to conduct a major raid on Beirut, announcing a US-brokered understanding that would limit the scope of military operations. Hezbollah, through unnamed intermediaries, had pledged not to launch direct attacks on Israeli territory in return. But the announcement has failed to reassure many Lebanese civilians or halt the broader war in south Lebanon, which Netanyahu has vowed would continue until security is restored to northern Israel. 1.2 million people have been displaced in Lebanon since March 2, representing roughly 20% of the country's population. Over 3,400 people have been killed according to the Lebanese health ministry, including both combatants and civilians. Four were killed in two towns on Tuesday alone in strikes that hit residential areas. Israeli forces captured the historic Beaufort Castle, a strategic vantage point overlooking the Litani River valley. Hezbollah responded by firing artillery shells near the border in the largest exchange since the understanding was announced. Meanwhile, Lebanon's caretaker government attends talks in Washington despite Hezbollah's vocal objections to any negotiations with the United States.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['through intermediaries'], explanation: 'Anonymous sourcing — who are these intermediaries? Unverifiable.' },
        { words: ['failed to reassure many Lebanese'], explanation: 'Unquantified — how many? "Many" replaces data.' },
        { words: ['vowed would continue'], explanation: 'Emphatic verb — "vowed" implies aggression, not policy.' }
      ],
      'feelings-check': [
        { words: ['major raid'], explanation: 'Loaded military term — "raid" vs "operation" = different emotional weights' },
        { words: ['failed to reassure'], explanation: 'Frames deal as failure before evidence — emotional negativity' },
        { words: ['broader war'], explanation: 'Escalation framing — "broader" implies inevitable expansion' }
      ],
      'brain-check': [
        { words: ['1.2 million'], explanation: 'Large number without baseline — 1.2M of 5.5M = 22%, but not given' },
        { words: ['over 3,400'], explanation: 'Cumulative deaths without daily rate — is that high? Low? Context matters' },
        { words: ['4 were killed'], explanation: 'Absolute number — compared to what? 4/day vs 3-month average?' }
      ],
      'hidden-story': [
        { words: ['major raid'], explanation: 'Barthes: "raid" is a myth-word — transforms military operation into violation. No neutral description exists.' },
        { words: ['broader war'], explanation: 'Barthes: Myth of inevitability — "broader war" frames escalation as natural, not as a choice.' },
        { words: ['Trump said he asked'], explanation: 'Barthes: Myth of American leadership — US president framed as global arbiter deciding war and peace.' }
      ],
      'us-vs-them': [
        { words: ['Hezbollah fired'], explanation: 'Frames Hezbollah as aggressor — "fired" vs "retaliated" = different sides' }
      ],
      'value-check': [
        { words: ['displaced'], explanation: 'Care trigger — frames civilians as victims needing protection' }
      ],
      'fake-check': [], 'source-check': [], 'echo-chamber': [],
      'agenda-setting': [
        { words: ['attends talks in Washington'], explanation: 'Frames Washington as center of solution — ignores local peace efforts' }
      ],
      'red-herring': [
        { words: ['despite Hezbollah objections'], explanation: 'Ending on Hezbollah dissent distracts from 3,400 deaths' }
      ],
      'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: '"Through intermediaries" — unnamed mediators, no verification possible' },
      { rule: 'HUMAN_COST', text: '3,400+ killed reported as statistics without individual stories' },
      { rule: 'CONTEXT', text: 'No mention of civilian-to-combatant ratio in casualty figures' }
    ],
    explanation: "Barthes would deconstruct this article as a mythology of justified intervention. The phrase 'self-defense strikes' is a mythologem — it transforms military aggression into righteous protection. 'Ceasefire' is presented as a neutral term, but it functions as a myth that frames temporary military pauses as peace efforts. The binary 'Hezbollah fired vs. Israel responded' creates a moral universe where one side always acts and the other always reacts. Barthes would ask: where are the 3,400 names? Where are the displaced families? The article produces a mythology where geopolitics is a game of leaders, not a catastrophe for humans. The real manipulation is not in the facts — it's in whose story gets told.",
    choices: [
      { text: 'Myth of righteous intervention transforms aggression into protection.', correct: true },
      { text: 'Neutral ceasefire reporting balances both sides equally.', correct: false },
      { text: 'Casualty statistics provide complete humanitarian context.', correct: false },
      { text: 'Geopolitical framing centers human suffering over diplomacy.', correct: false }
    ]
  },
  {
    id: 14,
    title: "Trump's immigration enforcement in cities is unpopular, AP-NORC poll shows",
    source: 'AP News',
    url: 'https://apnews.com/article/trump-immigration-ice-minneapolis-deportation-42aff472ccf1ecd7b92ba0c90469c9e7',
    logo: '/assets/logos/ap.svg',
    scientist: 'haidt',
    color: '#f97316',
    content: `Six in ten U.S. adults believe President Trump has "gone too far" in sending federal agents into major cities for immigration enforcement operations, according to a new AP-NORC poll that reveals deep partisan divisions on the issue. Nine in ten Democrats and seven in ten independents disapprove of the operations, but only 25% of Republicans agree with the criticism. "I am glad that immigrants aren't just flooding across the border like they were before, but what he's doing now in our cities, pitting the military against our own people, these are gestapo tactics if I'm being honest. They're shooting U.S. citizens in the face and in the back during these operations," said Brenda Shaw, an independent from Grand Rapids, Michigan. "I don't think the deportations have been enough, to be honest. I think it's much too lax — we need to be enforcing our laws consistently or what's the point of having them at all," said Teviss Crawford, a Republican from Baton Rouge, Louisiana. Only three in ten U.S. adults have a favorable view of ICE as an institution, marking a significant decline in public confidence. The Republican Party's traditional advantage on immigration issues has narrowed dramatically from 13 percentage points to just 4 points over the past year, a shift that has strategists in both parties rethinking their approach to the issue heading into the midterms.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['Polls show', 'poll shows'], explanation: 'Which methodology? Margin of error not in lead' },
        { words: ['6 in 10'], explanation: 'Rounded from 56-64% — sounds precise, is approximate' },
        { words: ['3 in 10'], explanation: '29.7% rounded to "3 in 10" — spin through rounding' }
      ],
      'feelings-check': [
        { words: ['gone too far'], explanation: 'Emotional intensity marker — where is "too far"? Subjective framing' },
        { words: ['gestapo tactics'], explanation: 'MAX emotional trigger — Nazi comparison bypasses all rational debate' },
        { words: ['shooting U.S. citizens'], explanation: 'Highest fear trigger — citizens killed by own government' },
        { words: ['flooding across the border'], explanation: 'War metaphor embedded even in positive quote' },
        { words: ['much too lax'], explanation: 'Emotional opposite — frames enforcement as weakness' }
      ],
      'brain-check': [
        { words: ['13 points to 4 points'], explanation: 'Drop is real, but sample sizes for subgroup analysis need margin context' }
      ],
      'hidden-story': [
        { words: ['pitting the military against our people'], explanation: 'Frames federal action as civil war — "our people" vs "military"' }
      ],
      'us-vs-them': [
        { words: ['Democrats'], explanation: 'Tajfel: labeled as monolithic block — 90% sounds like unified opposition' },
        { words: ['independents'], explanation: 'Key swing group singled out — creates "us" of moderates vs "them" of partisans' }
      ],
      'value-check': [
        { words: ['citizens in the face'], explanation: 'Care — victim frame: citizens are being shot. Max compassion trigger.' },
        { words: ['gestapo tactics'], explanation: 'Liberty — government oppression trigger. Reactance against authority.' }
      ],
      'fake-check': [],
      'source-check': [
        { words: ['Brenda Shaw'], explanation: 'Named source is good — one person out of 1,156. Representative?' }
      ],
      'echo-chamber': [
        { words: ['AP-NORC poll'], explanation: 'One poll repeated as definitive — other polls with different results? Not shown' }
      ],
      'agenda-setting': [
        { words: ['gone too far'], explanation: 'Sets agenda: the question is NOT "is policy effective" but "has it gone too far"' }
      ],
      'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'QUOTATION_SELECTION', text: '3 quotes from 1,156 respondents — 2 extreme anti-Trump, 1 mild pro-Trump. Not statistically representative.' },
      { rule: 'BALANCE', text: 'Quote ratio: 2 emotional condemnations vs 1 mild defense — framing through selection' }
    ],
    explanation: "Haidt's Moral Foundations Theory reveals how this article pushes every moral button simultaneously. 'Gestapo tactics' triggers Liberty (government oppression) and Care (shooting citizens) — two foundations at once. 'Gone too far' activates Fairness (the policy is unjust). The partisan breakdown frames everything as tribal loyalty. The quotes are devastating because they're real — but Haidt would ask: why were THESE three chosen from 1,156 respondents? The poll data is real. The manipulation is in the curation: two visceral anti-Trump quotes frame the entire story before you reach the numbers. Your moral intuition fires before your reasoning can check the methodology.",
    choices: [
      { text: 'Emotional quote curation triggers moral intuition before data evaluation.', correct: true },
      { text: 'Poll methodology is fully transparent for objective evaluation.', correct: false },
      { text: 'Partisan breakdown provides neutral political context.', correct: false },
      { text: 'Victim framing accurately represents all poll respondents.', correct: false }
    ]
  },
  {
    id: 15,
    title: 'Israel continues strikes on southern Lebanon despite US-brokered deal',
    source: 'BBC News',
    url: 'https://www.bbc.com/news/world-middle-east',
    logo: '/assets/logos/bbc.svg',
    scientist: 'mccombs_shaw',
    color: '#6366f1',
    content: `Israel has continued to attack targets in southern Lebanon despite a US-brokered de-escalation understanding with Hezbollah that was announced with considerable fanfare at the White House last week. US President Donald Trump announced the agreement would stop Israeli attacks on Beirut and Hezbollah attacks on Israeli territory, describing it as a breakthrough in months of shuttle diplomacy. However, over 600 people have been killed in Israeli strikes across Lebanon since the deal was announced, raising serious questions about its effectiveness and whether either side genuinely intends to honor its terms. The Israeli military has simultaneously expanded its ground presence in southern Lebanon, pushing to within 15 kilometers of the Litani River in some areas. Iran has insisted that a full and verifiable ceasefire in Lebanon is a necessary precondition for any broader ceasefire agreement with the United States regarding its nuclear program. The deal, according to a statement from the Lebanese embassy in Washington that was later confirmed by State Department officials, would stop Israeli attacks on Beirut and require Hezbollah to halt all operations against Israeli positions. Neither side has publicly accepted the terms of the deal, and fighting has continued unabated on multiple fronts.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['according to a statement'], explanation: 'Single source — no independent verification' },
        { words: ['Neither side has publicly accepted'], explanation: 'Contradicts "deal" framing — deal implies acceptance by both' }
      ],
      'feelings-check': [
        { words: ['continued to attack'], explanation: 'Frames Israel as aggressor — "attack" vs "operate" = emotional choice' },
        { words: ['despite a deal'], explanation: 'Framing: Israel is violating an agreement, not acting within one' }
      ],
      'brain-check': [
        { words: ['over 600'], explanation: 'Vague — 600 is precise? Or 600+? Unclear margin' },
        { words: ['since the deal was announced'], explanation: 'Correlation vs causation — were these strikes related to deal timing?' }
      ],
      'hidden-story': [
        { words: ['de-escalation deal'], explanation: 'Myth: "de-escalation" assumes both sides were escalating equally' }
      ],
      'us-vs-them': [
        { words: ['Iran has insisted'], explanation: 'Iran framed as obstacle — "insists" implies unreasonable demand' }
      ],
      'value-check': [
        { words: ['killed'], explanation: 'Care trigger — 600 deaths, framed as cost of failed diplomacy' }
      ],
      'fake-check': [],
      'source-check': [
        { words: ['Lebanese embassy in Washington'], explanation: 'Single diplomatic source — one stakeholder out of many' }
      ],
      'echo-chamber': [],
      'agenda-setting': [
        { words: ['US-brokered de-escalation deal'], explanation: 'Agenda: focus is on the DEAL, not the war. You think about diplomacy, not destruction.' },
        { words: ['Iran has insisted'], explanation: 'Ends on Iran — shifts focus FROM 600 dead TO geopolitical obstacle. Key agenda move.' }
      ],
      'red-herring': [
        { words: ['Iran has insisted that a full ceasefire is necessary'], explanation: 'Distraction: 600 killed, but you end up thinking about Iran. Classic red herring.' }
      ],
      'false-appeal': []
    },
    standardViolations: [
      { rule: 'CAUSALITY', text: '"600 killed since deal" implies causality — correlation vs causation not addressed' },
      { rule: 'BALANCE', text: 'No Israeli government statement or perspective in the article' },
      { rule: 'AGENDA', text: 'Article ends on Iran — reader leaves thinking about geopolitics, not human cost' }
    ],
    explanation: "McCombs & Shaw's Agenda-Setting Theory explains exactly what this article is doing. It tells you WHAT TO THINK ABOUT, not what to think. The lead frame is 'the deal is failing' — your attention is on the diplomatic process, not the 600 dead. 'US-brokered' centers American power. The final paragraph is the killer: it shifts focus to Iran. You start reading about 600 people killed, you finish thinking about whether Iran will agree to a ceasefire. McCombs & Shaw would say: the manipulation isn't in any single fact — it's in the hierarchy. What comes first, what comes last, what gets amplified, what gets buried. The 600 deaths are a number. Iran's position is a narrative. And narratives always win.",
    choices: [
      { text: 'Agenda setting shifts focus from human cost to geopolitics.', correct: true },
      { text: 'Neutral diplomatic reporting balances all perspectives equally.', correct: false },
      { text: 'Casualty figures provide complete humanitarian evaluation.', correct: false },
      { text: 'US-brokered framing ensures accountability for all sides.', correct: false }
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