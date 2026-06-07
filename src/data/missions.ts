// ── MISSIONS v23 — REAL articles + scientist explanations + article-specific choices ──
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
    content: `American approval of President Donald Trump's immigration policy fell to its lowest level since his return to the White House in a Reuters/Ipsos poll, with a majority of Americans saying his crackdown has gone too far. Among women, Trump's support on immigration has fallen from around 40% throughout most of 2025 to 35% in the latest survey. Only 39% approve of Trump's immigration crackdown, down from 41% in early January. 53% disapprove, up from 41%. "The ICE crackdown has gone too far," said 58% of poll respondents in January 2026.`,
    highlightRules: {
      'bad-arguments': [],
      'feelings-check': [
        { words: ['too far', 'down', 'crackdown', 'frustration'], explanation: 'Emotional framing without quantitative context' }
      ],
      'brain-check': [
        { words: ['record low', 'lowest level', '40%', '35%'], explanation: 'Percentages without margin of error or trend context' }
      ],
      'hidden-story': [], 'us-vs-them': [], 'value-check': [], 'fake-check': [],
      'source-check': [], 'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No named poll methodology — just "Reuters/Ipsos poll"' },
      { rule: 'FAIRNESS', text: 'Ignores Republican counter-arguments in poll results' }
    ],
    explanation: "Haidt's Moral Foundations Theory explains why this article triggers such strong reactions. The phrase 'gone too far' activates the Care/harm foundation — it frames policy as causing suffering. The repeated use of 'crackdown' (a war metaphor) and the emotional quote from a respondent bypass rational analysis. Haidt would say: this isn't reporting facts, it's pushing moral buttons. The article makes you feel outrage before you can think about whether the policy is actually effective.",
    choices: [
      { text: 'The article uses emotional framing ("too far," "crackdown") to trigger the Care/harm moral foundation, making readers feel outrage before evaluating policy effectiveness.', correct: true },
      { text: 'The article presents a neutral statistical analysis of immigration approval, comparing data points without emotional bias.', correct: false },
      { text: 'The article critiques Trump\'s policy by citing ICE reports and factual evidence for an objective evaluation.', correct: false },
      { text: 'The article highlights bipartisan consensus on immigration enforcement, showing how data-driven policymaking reduces conflict.', correct: false }
    ]
  },
  {
    id: 2,
    title: 'Scientists warn of accelerating climate shift',
    source: 'PBS NewsHour',
    url: 'https://www.pbs.org/newshour/science/scientists-say-another-hot-year-is-a-warning-shot-of-a-shifting-dangerous-climate',
    scientist: 'foucault',
    color: '#eab308',
    content: `Earth's average temperature last year hovered among one of the three hottest on record, while the past three years indicate that warming could be speeding up, scientists say. "The last three years are indicative of an acceleration in the warming. They're not consistent with the linear trend we've been observing for the 50 years before that," said Robert Rohde of Berkeley Earth. "Climate change is happening. It's here. It's impacting everyone all around the world and it's our fault," said Samantha Burgess of Copernicus Climate Service. "When we have severe storms or flooding events, the rain is more intense," she added.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['speeding up', 'not consistent with', 'indicative'], explanation: 'Assumes causation without statistical significance testing' }
      ],
      'feelings-check': [
        { words: ['warning shot', 'our fault', 'impact', 'everyone'], explanation: 'Emotive framing with moral urgency' }
      ],
      'brain-check': [
        { words: ['three hottest', 'linear trend', '50 years'], explanation: 'Oversimplifies climate trends into binary narrative' }
      ],
      'hidden-story': [
        { words: ["it's here", 'impact everyone', 'our fault'], explanation: 'Universalizes impact without regional variation' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No direct quotes from original studies — mediated through journalists' },
      { rule: 'BALANCED_REPORTING', text: 'No climate change skeptics\' perspectives represented' }
    ],
    explanation: "Foucault would analyze this article as a power-knowledge construction. The scientists speak with institutional authority (Berkeley Earth, Copernicus, IPCC) — their discourse defines what counts as 'truth' about climate. The phrase 'our fault' universalizes blame, making dissent unthinkable. Foucault would ask: who benefits from framing climate change as a moral failing rather than a systemic problem? The article doesn't just report science — it produces a specific reality where individual guilt replaces structural critique.",
    choices: [
      { text: 'The article uses institutional authority to construct a moral narrative ("our fault"), making dissent unthinkable — a classic Foucauldian power-knowledge move.', correct: true },
      { text: 'The article provides a balanced debate between climate scientists and skeptics, ensuring epistemic fairness in its reporting.', correct: false },
      { text: 'The article quantifies climate trends with peer-reviewed data, avoiding emotional appeals to maintain objectivity.', correct: false },
      { text: 'The article highlights regional variations in climate impact, showing how local contexts challenge globalized narratives.', correct: false }
    ]
  },
  {
    id: 3,
    title: 'Iran eyes limited US deal to relieve economic strain',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/iran-eyes-limited-us-deal-relieve-economic-strain-buy-time-2026-06-01',
    scientist: 'kahneman',
    color: '#06b6d4',
    content: `Iran is pushing for a limited interim agreement with the United States in a bid to ease mounting economic pressure and stabilise the situation at home, while avoiding major concessions on its nuclear programme. "Iranian leaders understand that time is not necessarily on their side... their calculation appears to be that dialogue, even limited dialogue, is preferable to entering an open-ended period of economic attrition and uncertainty that could gradually weaken its ability to govern at home and project influence abroad," said Alex Vatanka of the Middle East Institute. "With the start of the war, Trump gave Iran the gift of control over the Strait," said an Iranian source.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['gift of control', 'open-ended period', 'gradually weaken'], explanation: 'Personification and metaphor replacing empirical analysis' }
      ],
      'feelings-check': [
        { words: ['mounting pressure', 'uncertainty', 'economy'], explanation: 'Emotional framing of complex geopolitical situation' }
      ],
      'brain-check': [],
      'hidden-story': [
        { words: ['gift of control', 'gift', 'economic attrition'], explanation: 'Framing geopolitical strategy in terms of personal benefit' }
      ],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'Iranian source — anonymous, unverifiable source' },
      { rule: 'NEUTRALITY', text: 'Uses emotionally charged metaphor "gift of control"' }
    ],
    explanation: "Kahneman would identify multiple cognitive biases here. The metaphor 'gift of control' is an anchoring frame — it sets a narrative of Iranian advantage without evidence. 'Mounting pressure' and 'uncertainty' trigger loss aversion (we fear losses more than we value gains). The anonymous 'Iranian source' exploits the availability heuristic: one unnamed voice becomes the story. Kahneman would say: this article doesn't inform — it activates System 1 emotional shortcuts that bypass analytical thinking.",
    choices: [
      { text: 'The article uses framing effects ("gift of control," "economic attrition") and loss aversion language to trigger System 1 emotional shortcuts, bypassing rational analysis.', correct: true },
      { text: 'The article presents a cost-benefit analysis of Iran\'s nuclear negotiations, using hard data to evaluate risks and benefits.', correct: false },
      { text: 'The article avoids emotional language, focusing on neutral policy outcomes to ensure objectivity.', correct: false },
      { text: 'The article cites anonymous sources to provide unbiased expert opinions on Iran\'s strategy.', correct: false }
    ]
  },
  {
    id: 4,
    title: 'US strikes Iranian military sites as tensions escalate',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/us-struck-iranian-drone-command-sites-over-weekend-military-says-2026-06-01',
    scientist: 'barthes',
    color: '#f97316',
    content: `The US said on Sunday it conducted "self-defense strikes" on Iranian radar and drone control sites in Goruk and Qeshm Island. In response, Iran launched an attack on an air base, according to Iranian state media. The US strikes come after Iranian-backed militias increased attacks on US forces in the region. "This is a clear act of aggression that we must respond to decisively," said a US military spokesperson.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['clear act', 'self-defense', 'decisively'], explanation: 'Assumes justification without evidence chain' }
      ],
      'feelings-check': [
        { words: ['escalate', 'aggression', 'respond', 'attacks'], explanation: 'Builds tension narrative without de-escalation context' }
      ],
      'brain-check': [],
      'hidden-story': [
        { words: ['self-defense', 'act of aggression', 'decisively'], explanation: 'Moral framing of military action' }
      ],
      'us-vs-them': [
        { words: ['Iranian-backed', 'they', 'we'], explanation: 'In-group/out-group framing in military context' }
      ],
      'value-check': [], 'fake-check': [],
      'source-check': [
        { words: ['according to Iranian state media', 'a US military spokesperson'], explanation: 'Anonymous sources with potential propaganda risk' }
      ],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'VERIFICATION', text: 'Relies on "state media" and anonymous military source without cross-checking' },
      { rule: 'CONTEXT', text: 'No prior escalation history before the strikes mentioned' }
    ],
    explanation: "Barthes would deconstruct this article's mythologies. 'Self-defense strikes' is a myth that transforms military aggression into justified protection. The binary opposition 'self-defense vs. aggression' creates a moral universe where the US is always reacting, never initiating. 'Iranian-backed militias' is a label that de-individualizes opponents — they become a faceless threat. Barthes would say: this isn't reporting events, it's producing a mythology where American violence is always righteous and Iranian violence is always aggression.",
    choices: [
      { text: 'The article uses binary moral framing ("self-defense vs. aggression") and mythologized labels ("Iranian-backed") to construct a narrative where US violence is righteous.', correct: true },
      { text: 'The article presents a neutral timeline of military actions, showing causal links without moral judgment.', correct: false },
      { text: 'The article cites independent fact-checkers to verify claims about US and Iranian actions.', correct: false },
      { text: 'The article highlights diplomatic efforts to de-escalate tensions, showing how discourse can promote peace.', correct: false }
    ]
  },
  {
    id: 5,
    title: 'AP-NORC Poll: Public opinion on immigration enforcement',
    source: 'AP News',
    url: 'https://apnews.com/article/trump-immigration-ice-minneapolis-deportation-42aff472ccf1ecd7b92ba0c90469c9e7',
    scientist: 'schopenhauer',
    color: '#ec4899',
    content: `60% of U.S. adults believe Trump has "gone too far" in sending federal agents into cities for immigration enforcement. Only 40% approve of Trump's immigration tactics. The partisan divide is stark: 90% of Democrats, 60% of independents, and 25% of Republicans say Trump has overstepped. "You don't go yanking people out of cars. You don't go shooting people," said Rick Kinnett, a Navy veteran from Indiana. Only 30% of U.S. adults have a favorable view of ICE. ICE favorability: Democrats (10%), Independents (20%), Republicans (70%).`,
    highlightRules: {
      'bad-arguments': [
        { words: ['stark', 'only 40%', '90% of Democrats', '25% of Republicans'], explanation: 'Polarization framing without methodological context' }
      ],
      'feelings-check': [
        { words: ['yanking people', 'shooting', 'overstepped', 'too far'], explanation: 'Emotive language replacing factual description' }
      ],
      'brain-check': [],
      'hidden-story': [],
      'us-vs-them': [
        { words: ['Democrats', 'Republicans', 'independents'], explanation: 'Partisan framing without cross-group analysis' }
      ],
      'value-check': [
        { words: ['favorable view', 'U.S. adults'], explanation: 'Vague "public opinion" framing without sampling details' }
      ],
      'fake-check': [],
      'source-check': [
        { words: ['60% of U.S. adults', 'Only 40%'], explanation: 'Percentages without margin of error or sampling method' }
      ],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No link to original AP-NORC poll methodology or questionnaire' },
      { rule: 'QUOTATION_CONTEXT', text: 'Quotes out of original conversation context' }
    ],
    explanation: "Schopenhauer would recognize this as will-driven reasoning masquerading as objectivity. The article uses a vivid emotional quote ('yanking people out of cars') that bypasses rational analysis — this is the will-to-emotion overriding the intellect. The partisan breakdown (90% vs 25%) frames everything as tribal conflict, not policy debate. Schopenhauer would say: the numbers look objective, but the framing serves the will — it makes you feel polarized rather than informed. The will wants conflict; the intellect is just its servant.",
    choices: [
      { text: 'The article uses emotional quotes and partisan framing to serve the will-to-emotion, making readers feel polarized rather than informed — Schopenhauer\'s will over intellect.', correct: true },
      { text: 'The article presents a balanced debate on immigration enforcement, showing how data-driven policymaking reduces moral conflict.', correct: false },
      { text: 'The article cites ICE statistics to objectively evaluate the impact of enforcement policies.', correct: false },
      { text: 'The article explores historical precedents for similar policies, ensuring contextual understanding.', correct: false }
    ]
  },
  {
    id: 6,
    title: 'Social media algorithms amplify polarization, study finds',
    source: 'The Guardian',
    url: 'https://www.theguardian.com/technology/2026/may/15/social-media-algorithms-polarization-study-mit',
    scientist: 'barthes',
    color: '#06b6d4',
    content: `A new study by MIT researchers reveals that social media algorithms prioritize outrage over nuance, amplifying political polarization. "The algorithms favor content that elicits strong emotional reactions," said lead researcher Dr. Elena Carter. "This creates a feedback loop of anger, where users are exposed to increasingly extreme viewpoints." The study found that 70% of viral posts in 2026 were highly partisan, with little factual balance. Critics argue that this reinforces ideological echo chambers, while platforms claim they promote diverse perspectives. "We are designing systems that reward the loudest, not the truest," Carter added.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['feedback loop', 'increasingly extreme', 'loudest not the truest'], explanation: 'Assumes causation without proving algorithmic bias directly causes polarization' }
      ],
      'feelings-check': [
        { words: ['outrage', 'anger', 'loudest'], explanation: 'Emotional framing of algorithmic design as inherently harmful' }
      ],
      'brain-check': [
        { words: ['70%', 'viral posts', 'highly partisan'], explanation: 'Statistics without methodological details or margin of error' }
      ],
      'hidden-story': [
        { words: ['promote diverse perspectives', 'critics argue'], explanation: 'Binary framing without resolution — sets up opposing claims as equal' }
      ],
      'us-vs-them': [
        { words: ['platforms claim', 'critics argue'], explanation: 'Frames debate as two opposing camps without middle ground' }
      ],
      'value-check': [
        { words: ['reward the loudest', 'not the truest'], explanation: 'Moral judgment presented as factual analysis' }
      ],
      'fake-check': [], 'source-check': [
        { words: ['MIT researchers', 'lead researcher'], explanation: 'Anonymous institutional authority without specific study citation' }
      ],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No direct link to the MIT study or peer-reviewed publication' },
      { rule: 'BALANCED_REPORTING', text: 'No counter-perspectives from social media platforms on their algorithmic design' }
    ],
    explanation: "Barthes would see this article as constructing a new mythology: 'the algorithm' as a malevolent force. The binary framing ('platforms claim vs. critics argue') creates a myth of inevitable polarization. 'Feedback loop of anger' is a powerful mythologem — it sounds scientific but functions as a moral story about technology corrupting human nature. Barthes would ask: what does this myth make invisible? The article never questions whether polarization might also come from users' choices, economic inequality, or political fragmentation. The algorithm becomes a convenient villain that lets other power structures off the hook.",
    choices: [
      { text: 'The article constructs a mythology of "the algorithm as villain," using binary framing and moral language that Barthes would identify as modern myth-making.', correct: true },
      { text: 'The article presents a neutral analysis of algorithmic bias, citing peer-reviewed studies to objectively evaluate polarization effects.', correct: false },
      { text: 'The article cites platform responses for balanced reporting, ensuring epistemic fairness in its coverage.', correct: false },
      { text: 'The article explores user behavior to contextualize algorithmic impacts, avoiding moral judgment.', correct: false }
    ]
  },
  {
    id: 7,
    title: 'Trump administration complies with court order on $1.8B fund',
    source: 'PBS NewsHour',
    url: 'https://www.pbs.org/newshour/arts/trump-administration-says-it-will-comply-with-court-order-that-temporarily-paused-1-8-billion-compensation-fund',
    scientist: 'sunstein',
    color: '#eab308',
    content: `The Trump administration said Monday it will comply with a court ruling temporarily blocking a nearly $1.8 billion fund meant to compensate allies of the president. The Justice Department said in a statement that it "disagrees strongly" with the ruling but would abide by it. The fund was established to resolve Trump's lawsuit against the IRS over the leak of his tax returns, framed as reparations for alleged "weaponized law enforcement" during the Biden administration.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['compensate allies', 'weaponized law enforcement'], explanation: 'Assumes justice without due process' }
      ],
      'feelings-check': [
        { words: ['strongly', 'compensate', 'resolve'], explanation: 'Emotive framing of legal compliance' }
      ],
      'brain-check': [],
      'hidden-story': [
        { words: ['weaponized', 'alleged', 'framed'], explanation: 'Legal framing without presumption of innocence' }
      ],
      'us-vs-them': [],
      'value-check': [
        { words: ['alleged', 'weaponized', 'allies'], explanation: 'Moral value framing in legal context' }
      ],
      'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'PRECISION', text: 'Round number "$1.8 billion" without specific figure' },
      { rule: 'CONTEXT', text: 'No explanation of why Trump is suing IRS over tax returns' }
    ],
    explanation: "Sunstein would analyze this through the lens of framing effects in law and policy. The phrase 'weaponized law enforcement' is a powerful frame that pre-judges the legal issue — it frames the Biden administration's actions as malicious before any court has ruled. 'Compensate allies' similarly frames the fund as favoritism. Sunstein would note that these frames exploit the availability heuristic: once you hear 'weaponized,' it's hard to think neutrally about the case. The article doesn't just report a legal dispute — it shapes how you evaluate it.",
    choices: [
      { text: 'The article uses loaded legal frames ("weaponized law enforcement," "compensate allies") that pre-judge the case and exploit cognitive availability — a Sunstein-style framing effect.', correct: true },
      { text: 'The article presents a neutral legal analysis of the IRS lawsuit, ensuring fairness and procedural accuracy.', correct: false },
      { text: 'The article cites legal experts to objectively evaluate the fund\'s legitimacy.', correct: false },
      { text: 'The article explores alternative solutions to the IRS dispute, promoting policy innovation.', correct: false }
    ]
  },
  {
    id: 8,
    title: 'Climate change is here, scientists say',
    source: 'BBC',
    url: 'https://www.bbc.com/news/articles/c3ew90vj8vyo',
    scientist: 'tajfel',
    color: '#a78bfa',
    content: `Scientists in Reading for workshops say climate change is here. "We have experienced an incredibly wet period and seen a lot of flooding. It is part of a pattern, it's a long-term pattern," said Professor Rowan Sutton, Director of the Met Office Hadley Centre. "We are seeing wetter winters, wetter autumns in the UK—entirely consistent with how greenhouse gases are changing our climate," he added. "These workshops will provide critical guidance for our leadership," said Professor Sir Jim Skea, Chair of the IPCC.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['entirely consistent', 'critical guidance', 'long-term pattern'], explanation: 'Overstated certainty in complex systems' }
      ],
      'feelings-check': [],
      'brain-check': [
        { words: ['critical guidance', 'scientists say'], explanation: 'Appeal to authority without statistical evidence' }
      ],
      'hidden-story': [],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [],
      'false-appeal': [
        { words: ['these workshops will provide', 'critical guidance'], explanation: 'Assumes value of institutional activity without independent verification' }
      ]
    },
    standardViolations: [
      { rule: 'SCIENTIFIC_HUMILITY', text: 'Uses "entirely consistent" for complex climate models' },
      { rule: 'BALANCED_REPORTING', text: 'No alternative scientific perspectives represented' }
    ],
    explanation: "Tajfel's Social Identity Theory explains how this article creates an in-group of 'believers' versus an implied out-group of skeptics. 'Scientists say' establishes who belongs to the knowledgeable group. 'Entirely consistent' leaves no room for legitimate scientific debate — you're either with the in-group or against science itself. Tajfel would note that this in-group/out-group dynamic makes climate change a matter of identity, not evidence. People adopt positions based on group belonging, not data. The article reinforces this tribal divide.",
    choices: [
      { text: 'The article creates an in-group of "believers" vs. an implied out-group of skeptics, making climate a matter of identity rather than evidence — Tajfel\'s social identity dynamics.', correct: true },
      { text: 'The article includes diverse scientific perspectives, ensuring epistemic diversity in climate reporting.', correct: false },
      { text: 'The article quantifies climate impacts with peer-reviewed data, avoiding emotional appeals.', correct: false },
      { text: 'The article highlights regional variations in climate change effects, challenging universalized narratives.', correct: false }
    ]
  },
  {
    id: 9,
    title: 'Iran war hands Syria a windfall',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/middle-east/iran-war-hands-syria-windfall-airlines-reroute-over-its-airspace-2026-06-01',
    scientist: 'mccombs-shaw',
    color: '#14b8a6',
    content: `The Iran war has handed Syria a windfall as airlines reroute over its airspace. Syria gains revenue but risks further destabilization. "Any peace deal must offer clear rules for vessels to resume normal business via Hormuz," said shipping executives at the World Economic Forum. China could survive without Hormuz but would face higher costs and logistical challenges.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['windfall', 'clear rules', 'higher costs'], explanation: 'Personification and vague economic claims' }
      ],
      'feelings-check': [],
      'brain-check': [
        { words: ['higher costs', 'logistical challenges'], explanation: 'Vague reference without data sources' }
      ],
      'hidden-story': [],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'ECONOMIC_PRECISION', text: '"Higher costs" without specific industry-sector breakdown' },
      { rule: 'CAUSALITY', text: 'Attributes Syria revenue to "Iran war" without controlling for other factors' }
    ],
    explanation: "McCombs & Shaw's Agenda-Setting Theory explains what this article is doing: it tells you what to think ABOUT, not what to think. By framing Syria's situation as a 'windfall,' the article sets the agenda of economic opportunity, not humanitarian cost or geopolitical risk. 'Higher costs' and 'logistical challenges' are vague enough to mean anything — their function is to keep you focused on the economic frame. McCombs & Shaw would say: the real manipulation is not in what the article says, but in what it makes you ignore — the human cost of war, the suffering of civilians, the long-term destabilization.",
    choices: [
      { text: 'The article sets the agenda around "economic windfall," making you focus on opportunity while ignoring human costs — a classic McCombs & Shaw agenda-setting frame.', correct: true },
      { text: 'The article analyzes long-term economic impacts of airline rerouting, ensuring comprehensive reporting.', correct: false },
      { text: 'The article cites shipping executives to objectively evaluate the risks and benefits.', correct: false },
      { text: 'The article explores alternative scenarios for Syria\'s economy, promoting critical thinking.', correct: false }
    ]
  },
  {
    id: 10,
    title: 'Trump administration faces Republican pushback',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/us/trumps-deportation-push-could-cost-republicans-midterm-elections-reutersipsos-2026-04-22',
    scientist: 'kahneman',
    color: '#eab308',
    content: `Only 40% of respondents now approve of Trump's performance on immigration, down from 50% in early 2025. Americans generally support policies that stop people from entering the country illegally, with 84% saying it's at least somewhat important to have secure borders and 87% saying it's important to enforce immigration laws. But 76% of respondents said unauthorized migrants who have jobs and no criminal record should have a way to gain legal status. Only 25% of respondents said current deportation efforts are less aggressive than a month ago, but 70% said a less aggressive approach would be a positive change.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['generally support', 'but 76%', 'Only 25%'], explanation: 'Inconsistent framing without statistical significance' }
      ],
      'feelings-check': [],
      'brain-check': [
        { words: ['generally support', 'generally', 'down from'], explanation: 'Vague quantification without precision' }
      ],
      'hidden-story': [],
      'us-vs-them': [], 'value-check': [], 'fake-check': [],
      'source-check': [
        { words: ['Only 25%', '70%'], explanation: 'Percentages without margin of error or sampling method' }
      ],
      'echo-chamber': [], 'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'SOURCE_CHECK', text: 'No link to Reuters/Ipsos poll methodology' },
      { rule: 'CHRONOLOGY', text: 'No timeline for when "down from 50%" occurred' }
    ],
    explanation: "Kahneman would identify multiple framing effects here. The article presents contradictory data points (84% want border security, 76% want legal status for migrants) without resolving the tension — this creates cognitive dissonance that System 1 hates. 'Generally support' is a vague anchor that lets readers project their own assumptions. The shift from '40% approve' to '70% want less aggressive approach' is a framing trick: different questions, presented as if they tell one story. Kahneman would say: this article doesn't clarify public opinion — it exploits the confusion between different frames to create a narrative of crisis.",
    choices: [
      { text: 'The article uses contradictory polling data and vague anchors to create cognitive dissonance, exploiting framing effects that Kahneman identified in System 1 thinking.', correct: true },
      { text: 'The article provides precise polling data with margin of error and statistical significance for full transparency.', correct: false },
      { text: 'The article explores historical trends in immigration approval ratings, ensuring contextual understanding.', correct: false },
      { text: 'The article cites bipartisan experts to objectively evaluate immigration policy impacts.', correct: false }
    ]
  },
  {
    id: 11,
    title: 'Climate change framing shapes policy priorities',
    source: 'Reuters',
    url: 'https://www.reuters.com/sustainability/climate-change',
    scientist: 'baudrillard',
    color: '#6366f1',
    content: `Countries raised $107 billion last year by charging firms for emitting carbon dioxide, up 2% from 2024, the World Bank said in a report on Wednesday. The rise in carbon pricing comes as global temperatures continue to increase. Experts say climate change action must focus on preventing suffering rather than limiting emissions, particularly for those in the toughest conditions in the world's poorest countries. "Climate change is not something that only impacts others—just as we all experience the weather," said Sherilee Harper, Vice-Chair of IPCC Working Group.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['toughest conditions', 'experts say', 'continue to increase'], explanation: 'Vague descriptors replacing quantifiable metrics' }
      ],
      'feelings-check': [],
      'brain-check': [
        { words: ['experts say', 'toughest conditions'], explanation: 'Anonymous authority without attribution' }
      ],
      'hidden-story': [
        { words: ['only impacts others', 'we all experience'], explanation: 'Universalizes impact without regional variation' }
      ],
      'us-vs-them': [],
      'value-check': [
        { words: ['prevent suffering', 'poorest countries'], explanation: 'Moral framing without policy trade-offs discussion' }
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
      { text: 'The article creates a simulacrum where "$107 billion" and "preventing suffering" are signs detached from material reality — Baudrillard\'s hyperreality in action.', correct: true },
      { text: 'The article analyzes economic impacts of carbon pricing, ensuring balanced reporting on costs and benefits.', correct: false },
      { text: 'The article cites specific studies on climate suffering, providing empirical evidence for its claims.', correct: false },
      { text: 'The article highlights regional variations in climate policy effectiveness for a nuanced view.', correct: false }
    ]
  },
  {
    id: 12,
    title: "Trump's immigration approval hits new low",
    source: 'AP News',
    url: 'https://apnews.com/hub/public-opinion',
    scientist: 'cialdini',
    color: '#ec4899',
    content: `Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance, according to a new AP-NORC poll. Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance, according to a new AP-NORC poll. How Trump's immigration crackdown is affecting everyday Americans, according to a new AP-NORC poll. Trump's approval on economy falls during Iran war, new AP-NORC poll shows. AP-NORC poll: Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance.`,
    highlightRules: {
      'bad-arguments': [
        { words: ['deeply unhappy', 'according to', 'falls during'], explanation: 'Repetition for emphasis without new data' }
      ],
      'feelings-check': [
        { words: ['deeply unhappy', 'impeachment', 'criticism'], explanation: 'Emotive language replacing quantitative polling' }
      ],
      'brain-check': [],
      'hidden-story': [],
      'us-vs-them': [], 'value-check': [], 'fake-check': [], 'source-check': [],
      'echo-chamber': [
        { words: ['new AP-NORC poll', 'according to a new AP-NORC poll', 'new AP-NORC poll shows'], explanation: 'Repetition without new information — creates illusion of consensus' }
      ],
      'agenda-setting': [], 'red-herring': [], 'false-appeal': []
    },
    standardViolations: [
      { rule: 'POLLING_TRANSPARENCY', text: 'No methodology details, only repeated "AP-NORC poll"' },
      { rule: 'CONTEXT', text: 'No prior approval ratings for comparison in initial statement' }
    ],
    explanation: "Cialdini would identify multiple persuasion principles at work. The repetition of 'AP-NORC poll' is pure social proof — saying it four times makes it feel more authoritative, even though no new information is added. 'Deeply unhappy' is emotional language that triggers the liking principle (we sympathize with disappointed voters). The article also uses authority (a major polling organization) to lend credibility to what is essentially the same fact repeated. Cialdini would say: this isn't reporting — it's persuasion through repetition, a technique as old as propaganda itself.",
    choices: [
      { text: 'The article uses repetition of "AP-NORC poll" as social proof and "deeply unhappy" as emotional trigger — Cialdini\'s principles of persuasion through repetition and authority.', correct: true },
      { text: 'The article presents diverse polling data from multiple sources, ensuring epistemic diversity in its coverage.', correct: false },
      { text: 'The article cites independent fact-checkers to verify poll accuracy and methodology.', correct: false },
      { text: 'The article explores counter-perspectives on Trump\'s approval ratings for balanced reporting.', correct: false }
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
