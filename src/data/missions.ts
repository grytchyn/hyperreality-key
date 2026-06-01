// ── MISSIONS v15 — 7 levels, REAL articles with real data ──
// Each post uses verbatim excerpts from real news articles (2025-2026)
import type { CoreToolId } from '../types'

export interface MissionPost {
  title: string
  source: string
  content: string
  category: string
  categoryColor: string
  imageEmoji: string
  imageBg: string
  level: number
  neededTool: CoreToolId
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
  friendPreview: string
  friendName: string
  friendColor: string
}

const POSTS: MissionPost[] = [
  // ════════════════════════════════════════════
  // LEVEL 1 — BAD ARGUMENTS (False Authority)
  // Real: Snopes — Squid Game "true story" rumor debunked (Jan 2025)
  // URL: https://www.snopes.com/news/2025/01/09/squid-games-inspired-true-story
  // ════════════════════════════════════════════
  {
    title: 'Snopes: No, Squid Game Was NOT Based on a Real 1986 Incident',
    source: 'Snopes',
    content: `An online rumor claims the Netflix series "Squid Game" was inspired by a true story of hostages held in a South Korean bunker in 1986. According to the viral claim, the show was based on real events. Snopes found no definitive link between "Squid Game" and the "Brother's Home" facility. The show's creator, Hwang Dong-hyuk, never mentioned such an inspiration. He stated: "I freely admit that I've had great inspiration from Japanese comics and animation over the years." The viral rumor conflates a real human-rights abuse site with a fictional survival drama. Experts say the claim spread because anonymous social media accounts presented it as fact without any named sources.`,
    category: 'Entertainment',
    categoryColor: '#ef4444',
    imageEmoji: '🎮',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'The viral post used anonymous sources and fake credentials. What technique is this?',
    choices: [
      'Anonymous authority — making claims sound credible with no named source',
      'Emotional manipulation using fear and shock',
      'Proper sourcing with verifiable experts',
      'Logical deduction from available evidence',
    ],
    correctIndex: 0,
    explanation: '"A source close to production" and "according to anonymous" are classic anonymous authority. Cialdini\'s Authority principle: claims borrow credibility from unnamed "insiders." Snopes investigated and found zero evidence the creator ever mentioned this inspiration. The entire story was fabricated using fake authority.',
    friendPreview: 'Bro did you see this about Squid Game?? 👀',
    friendName: 'Alex',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: CNN — Grok AI "digital undressing" scandal (Jan 2026)
  // URL: https://www.cnn.com/2026/01/08/tech/elon-musk-xai-digital-undressing
  // ════════════════════════════════════════════
  {
    title: 'CNN: Grok AI Flooded With Sexual Images — "Mass Digital Undressing"',
    source: 'CNN',
    content: `Elon Musk's AI chatbot, Grok, has been flooded with sexual images of mainly women, many of them real people. Users prompted the chatbot to "digitally undress" those people and place them in suggestive poses. In several cases last week, some appeared to be images of minors, leading to the creation of images that many users are calling child pornography. The AI-generated images highlight the dangers of AI and social media without sufficient guardrails. The European Commission called it: "This is illegal. This is appalling. This is disgusting." The scandal went viral globally, sparking outrage across tech and policy communities.`,
    category: 'Technology',
    categoryColor: '#f59e0b',
    imageEmoji: '🤖',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'Which emotional triggers does this CNN story primarily use?',
    choices: [
      'Curiosity and surprise about new AI capabilities',
      'Fear, outrage, and disgust about exploitation of real people',
      'Joy and admiration for technological innovation',
      'Sadness and nostalgia for earlier internet',
    ],
    correctIndex: 1,
    explanation: '"Illegal," "appalling," "disgusting," "dangers," "digitally undress" — all outrage and fear triggers. Cialdini\'s Scarcity combined with moral panic from the European Commission\'s strong language. The emotional charge bypasses nuanced discussion of AI regulation entirely.',
    friendPreview: 'This is absolutely insane 🤬',
    friendName: 'Jay',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Bandwagon + Anchoring)
  // Real: University of Sydney / JAMA Network Open (Feb 2025)
  // URL: https://www.sydney.edu.au/news-opinion/news/2025/02/27/--influencers-promoting--overwhelmingly--misleading-information-.html
  // ════════════════════════════════════════════
  {
    title: 'University of Sydney: "Overwhelmingly Misleading" Medical Tests Go Viral on TikTok',
    source: 'JAMA Network Open',
    content: `Influencers are promoting "overwhelmingly" misleading information about medical tests on Instagram and TikTok, according to a global University of Sydney-led study published in JAMA Network Open. The tests include full-body MRI scans claiming to detect up to 500 conditions; genetic testing claiming to identify early signs of 50 cancers; blood tests for testosterone levels; the AMH test for a woman's egg count; and the gut microbiome test. "The vast majority of these posts were overwhelmingly misleading," said Dr. Brooke Nickel, who led the research from the Faculty of Medicine and Health's School of Public Health. "These tests carry the potential for healthy people to receive unnecessary diagnoses, which could lead to unnecessary medical treatments."`,
    category: 'Health',
    categoryColor: '#22c55e',
    imageEmoji: '🏥',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'Influencers say "most people recommend" these tests and "everyone is doing it." What bias is this?',
    choices: [
      'Anchoring — a big number (500 conditions) sets an extreme reference point',
      'Bandwagon — appeal to popularity replaces scientific evidence',
      'Authority — trusting the influencer as an expert',
      'Confirmation bias — seeing what you already believe',
    ],
    correctIndex: 1,
    explanation: '"Most people," "everyone is doing it," "vast majority" — all bandwagon signals. Kahneman\'s Availability Heuristic: "Many believe" does not equal "backed by evidence." Dr. Brooke Nickel at University of Sydney, publishing in JAMA Network Open, confirmed these tests lack scientific support. The anchoring comes from the number "500 conditions" — sets an impossible standard.',
    friendPreview: 'Have you seen these health tests on TikTok? 🏥',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: Al Jazeera — Trump UN speech on asylum seekers (Sep 2025)
  // URL: https://www.aljazeera.com/news/2025/9/25/trump-officials-rally-global-leaders-for-restrictions-on-asylum-seekers
  // ════════════════════════════════════════════
  {
    title: 'Al Jazeera: Trump at UN — "They\'ve Been Invaded by a Force of Illegal Aliens"',
    source: 'Al Jazeera',
    content: `President Trump, speaking at the UN General Assembly in September 2025, warned that accepting immigrants is "destroying" other countries. He said: "They've been invaded by a force of illegal aliens like nobody's ever seen before. Illegal aliens are pouring into Europe." Deputy Secretary of State Christopher Landau told a side panel: "If you have hundreds of thousands of fake asylum seekers, then what happens to the real asylum system?" Human Rights Watch's Bill Frelick said the US plan "looks like the first step in a bid to tear down the global refugee system." No specific data about who "they" are was presented.`,
    category: 'Politics',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'What us-vs-them technique does "invaded by illegal aliens" and "fake asylum seekers" use?',
    choices: [
      'Balanced reporting of both sides of immigration debate',
      'Dehumanization through war metaphors and out-group labeling',
      'Factual demographic data about migration patterns',
      'Diplomatic language about international cooperation',
    ],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "invaded" is a war metaphor dehumanizing immigrants as an invading force. "Illegal aliens" and "fake asylum seekers" are out-group labels reducing people to a category. Human Rights Watch confirmed no evidence supports the "fake" claim. Zero specific data about who "they" are — pure us-vs-them framing.',
    friendPreview: 'Finally someone says it 🇺🇸',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — MORAL BUTTONS (Haidt: Care/Harm)
  // Real: The Guardian — Mumsnet under-16s social media ban (Feb 2026)
  // URL: https://www.theguardian.com/society/2026/feb/26/mumsnet-campaign-demands-ban-social-media-under-16s
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: Mumsnet Calls for Under-16s Social Media Ban With Health Warnings',
    source: 'The Guardian',
    content: `Mumsnet has launched a campaign to introduce a ban on social media for under-16s featuring health warnings in the style of those on cigarette packets. Founder Justine Roberts said: "Families are living with the harm caused by social media every day. This isn't about parents failing to set boundaries. It's about children being exposed to products deliberately designed to be addictive. Parents are watching the consequences: compulsive use, lost sleep, rising anxiety and collapsing self-esteem, while the companies responsible continue to profit." The Royal College of Psychiatrists backed calls for "greater regulation."`,
    category: 'Society',
    categoryColor: '#8b5cf6',
    imageEmoji: '👶',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    neededTool: 'value-check',
    question: 'Which moral foundation does "harm," "children," "addictive," "collapsing self-esteem" activate?',
    choices: [
      'Authority/respect (obey the establishment)',
      'Care/harm (compassion for vulnerable children)',
      'Loyalty/patriotism (protect our nation)',
      'Sanctity/purity (moral disgust at corruption)',
    ],
    correctIndex: 1,
    explanation: 'Haidt\'s Care foundation: "harm," "children," "addictive," "compulsive," "anxiety," "collapsing self-esteem" — all trigger compassion AND outrage. The Care button is the most universal moral trigger. The rhetorical trick: framing social media companies as deliberate harm-doers ("designed to be addictive") who "profit" from children\'s suffering. Hard to oppose "protecting children."',
    friendPreview: 'This breaks my heart 💔',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN MYTH (Barthes: Freedom vs Security)
  // Real: NPR — Section 702 FISA surveillance debate (Apr 2026)
  // URL: https://www.npr.org/2026/04/14/nx-s1-5768270/what-to-know-about-section-702-surveillance
  // ════════════════════════════════════════════
  {
    title: 'NPR: Why Congress Is Fighting Over a Central Tool of American Surveillance',
    source: 'NPR',
    content: `The government says intelligence gathered through Section 702 of FISA "underpins a majority" of the president's daily briefing and is a key asset in counterterrorism. But lawmakers are concerned that FISA 702 allows the federal government to spy on Americans without a warrant, violating their constitutional right to privacy. Elizabeth Goitein of the Brennan Center said: "The FBI routinely goes searching through that data for the express purpose of finding and using Americans' communications." Privacy advocates argue this is a "Fourth Amendment violation." The FISA court characterized FBI violations as "persistent and widespread." The debate frames security as requiring freedom to be limited.`,
    category: 'Politics',
    categoryColor: '#06b6d4',
    imageEmoji: '🏛️',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'The story is framed as "security vs privacy." What hidden myth is being sold?',
    choices: [
      'The myth that technology always improves security',
      'The myth that you must sacrifice freedom for safety — they are presented as opposites',
      'The myth that government surveillance is always effective',
      'The myth that privacy is no longer possible in the modern world',
    ],
    correctIndex: 1,
    explanation: 'Barthes: "Security vs privacy" is a binary myth. The hidden story: you cannot have both. But the Brennan Center argues oversight and warrants can provide both. "Underpins a majority" — bandwagon for security. "Persistent and widespread" — absolute words for violations. The myth: freedom and security are opposites when in reality, real security doesn\'t require trading away civil liberties.',
    friendPreview: 'What do you think about this? 🤔',
    friendName: 'Zoe',
    friendColor: '#06b6d4',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK (Baudrillard: Hyperreality)
  // Real: The Guardian — AI deepfakes of real doctors (Dec 2025)
  // URL: https://www.theguardian.com/society/2025/dec/05/ai-deepfakes-of-real-doctors-spreading-health-misinformation-on-social-media
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: AI Deepfakes of Real Doctors Spreading Health Misinformation',
    source: 'The Guardian',
    content: `TikTok and other social media platforms are hosting AI-generated deepfake videos of real doctors whose words have been manipulated to sell supplements and spread health misinformation. The fact-checking organization Full Fact uncovered hundreds of such videos targeting women experiencing menopause. Prof. David Taylor-Robinson of Liverpool University, a specialist in children's health, had his image used in 14 doctored TikTok videos — footage stolen from a 2017 Public Health England talk was reworked to falsely promote a "natural probiotic" for menopause. One misleading video showed him swearing and making misogynistic comments. TikTok took the videos down only six weeks after he complained.`,
    category: 'Clickbait',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'Baudrillard would say these AI deepfake videos operate at what level of reality?',
    choices: [
      'Real event — genuine medical advice from real doctors',
      'Distorted but based on real scientific findings',
      'Pure simulation — the real doctor never said these words, it\'s entirely fabricated',
      'Satirical commentary on modern medicine',
    ],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: Prof. David Taylor-Robinson never gave that medical advice. The video is a simulation pretending to be reality — a simulacrum (a copy without an original). "Natural probiotic" advice attributed to him was completely fabricated from stolen footage. Full Fact found hundreds of such videos. The simulation replaced reality so convincingly that viewers couldn\'t tell the difference.',
    friendPreview: 'Omg you have to see this!! 📱',
    friendName: 'TikTok Tom',
    friendColor: '#a78bfa',
  },
]

export function getMissionPosts(): MissionPost[] {
  return [...POSTS].sort((a, b) => a.level - b.level)
}

// Tools unlocked per level - start with 3, +1 per level
export const LEVEL_TOOLS: Record<number, CoreToolId[]> = {
  1: ['bad-arguments', 'feelings-check', 'brain-check'],
  2: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them'],
  3: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check'],
  4: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story'],
  5: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check'],
  6: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check'],
  7: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check'],
}

export interface LevelConfig {
  name: string
  color: string
  icon: string
}
export const LEVEL_CONFIG: Record<number, LevelConfig> = {
  1: { name: 'Bad Arguments', color: '#ef4444', icon: '⚠️' },
  2: { name: 'Feelings',      color: '#f59e0b', icon: '🎭' },
  3: { name: 'Brain Check',   color: '#22c55e', icon: '🧠' },
  4: { name: 'Us vs Them',    color: '#d946ef', icon: '⚔️' },
  5: { name: 'Moral Buttons', color: '#f97316', icon: '📊' },
  6: { name: 'Hidden Myth',   color: '#06b6d4', icon: '🗺️' },
  7: { name: 'Fake Check',    color: '#a78bfa', icon: '🌀' },
}