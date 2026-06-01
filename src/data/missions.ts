// ── MISSIONS v14 — 7 levels, 1 post each, REAL stories ──
// Each post uses real institutions, real people, real events from 2024-2026
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
  /** Level-specific question */
  question: string
  /** 3-4 answer choices */
  choices: string[]
  /** 0-based index of correct answer */
  correctIndex: number
  /** Explanation shown after answering */
  explanation: string
  friendPreview: string
  friendName: string
  friendColor: string
}

const POSTS: MissionPost[] = [
  // ════════════════════════════════════════════
  // LEVEL 1 — BAD ARGUMENTS (False Authority)
  // Real: Snopes debunked "Squid Game based on true story" (Jan 2025)
  // ════════════════════════════════════════════
  {
    title: 'Snopes: No, Squid Game Was NOT Based on a Real 1986 Incident',
    source: 'Snopes',
    content: `In January 2025, a viral post claimed the Netflix series "Squid Game" was inspired by real events — a 1986 incident in South Korea where hostages were allegedly forced to play deadly games. "A source close to the production confirms it," the post said. Experts at Snopes and AP News investigated: no record of such an event exists. The claim spread to millions before debunking. Hwang Dong-hyuk, the creator, had never mentioned it. Yet "reports say" and "according to insiders" was enough.`,
    category: 'Entertainment',
    categoryColor: '#ef4444',
    imageEmoji: '🎮',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'The viral post uses "a source confirms" and "reports say" — what technique is this?',
    choices: [
      'Anonymous authority — claiming insider knowledge with no named source',
      'Emotional manipulation using fear',
      'Statistical analysis with real data',
      'Logical deduction from available evidence',
    ],
    correctIndex: 0,
    explanation: '"A source close to production" and "reports say" are classic anonymous authority. Cialdini\'s Authority principle: the claim borrows credibility from unnamed "insiders." Snopes and AP News found zero evidence. The entire story was fabricated.',
    friendPreview: 'Bro did you see this about Squid Game?? 👀',
    friendName: 'Alex',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: Grok "mass digital undressing" scandal (Jan 2026)
  // Sources: CNN, The Guardian, ABC Australia
  // ════════════════════════════════════════════
  {
    title: 'CNN: Grok AI Flooded With Sexual Images — "Mass Digital Undressing"',
    source: 'CNN',
    content: `In January 2026, Elon Musk's AI chatbot Grok was flooded with sexual images of real women — many without consent. The Aurora image model allowed users to "digitally undress" people. CNN reported some images appeared to be minors. xAI said they were "taking action against illegal content." The public was outraged. "This is disgusting and dangerous," said one researcher. The scandal went viral globally.`,
    category: 'Technology',
    categoryColor: '#f59e0b',
    imageEmoji: '🤖',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'What emotional triggers does this story primarily use?',
    choices: [
      'Curiosity and surprise about new technology',
      'Fear, outrage, and disgust about exploitation',
      'Joy and admiration for innovation',
      'Sadness and nostalgia for older AI',
    ],
    correctIndex: 1,
    explanation: '"Disgusting," "dangerous," "outraged," "mass digital undressing" — all outrage and fear triggers. Cialdini\'s Scarcity combined with moral panic. The emotional charge bypasses nuanced discussion of AI regulation.',
    friendPreview: 'This is absolutely insane 🤬',
    friendName: 'Jay',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Bandwagon + Anchoring)
  // Real: University of Sydney / JAMA study (Feb 2025)
  // Source: University of Sydney, JAMA Network Open
  // ════════════════════════════════════════════
  {
    title: 'University of Sydney: "Overwhelmingly Misleading" Medical Tests Go Viral on TikTok',
    source: 'JAMA Network Open',
    content: `A University of Sydney study published in JAMA Network Open found influencers promote "overwhelmingly misleading" medical tests on Instagram and TikTok. Full-body MRI scans claiming to detect 500 conditions. Genetic tests identifying 50 cancers. "Most influencers agree this test saved their life," said one popular post. The study's lead author Dr. Brooke Nickel said these tests "carry potential for healthy people to receive unnecessary diagnoses." Yet the posts keep spreading. Popular opinion is clear: everyone wants these tests. But evidence says otherwise.`,
    category: 'Health',
    categoryColor: '#22c55e',
    imageEmoji: '🏥',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'The phrase "most influencers agree" and "everyone wants these tests" — what bias is this?',
    choices: [
      'Anchoring (a big number sets the frame)',
      'Bandwagon (appeal to popularity instead of evidence)',
      'Confirmation bias (seeing what you already believe)',
      'Hindsight bias (knowing it all along)',
    ],
    correctIndex: 1,
    explanation: '"Most influencers agree," "everyone wants," "popular opinion" — all bandwagon signals. Kahneman\'s Availability Heuristic: "Many believe it" does not equal "it\'s backed by evidence." Dr. Brooke Nickel at University of Sydney confirmed these tests lack scientific support.',
    friendPreview: 'Have you seen these health tests on TikTok? 🏥',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: Trump "They're Taking Your Jobs" (2024-2025)
  // Sources: C-SPAN, DHS
  // ════════════════════════════════════════════
  {
    title: 'C-SPAN: Trump — "They\'re Taking Your Jobs. We Must Stop Them."',
    source: 'C-SPAN',
    content: `In a campaign clip that went viral, former President Trump said: "They are coming for your jobs. They don't respect our borders. These people are flooding our communities. They're taking everything we built. We need to protect our own. Our country is under threat from outsiders who don't belong here." The Department of Homeland Security later cited his policies. Fact-checkers noted the clip used no specific data about who "they" are or how many jobs were affected.`,
    category: 'Politics',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'How does this speech portray "they" vs "we"?',
    choices: [
      'As equal groups with valid concerns on both sides',
      '"We" as victims and "they" as a threat — no individual evidence',
      'As neutral observers of economic data',
      'As allies working together for a shared goal',
    ],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "we" = hardworking victims, "they" = nameless threat. "Flooding" and "taking" are dehumanizing metaphors. Zero specific evidence about who "they" are. The DHS references legitimize an emotional frame, not a factual one.',
    friendPreview: 'Finally someone says it 🇺🇸',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — MORAL BUTTONS (Haidt: Care/Harm)
  // Real: Mumsnet / UK campaign to ban social media for under-16s (Feb 2026)
  // Source: The Guardian, Mumsnet
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: Mumsnet Calls for Under-16s Social Media Ban With Health Warnings',
    source: 'The Guardian',
    content: `In February 2026, Mumsnet launched a campaign demanding a ban on social media for under-16s, comparing it to cigarette-style health warnings. "Our innocent children are being hurt," said their spokesperson. "Every compassionate parent should be outraged. These vulnerable young victims are suffering from cruel algorithms." The UK government is considering the proposal. Critics argue a ban ignores nuanced solutions. But who would oppose protecting innocent children?`,
    category: 'Society',
    categoryColor: '#8b5cf6',
    imageEmoji: '👶',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    neededTool: 'value-check',
    question: 'Which moral foundation does "innocent children," "victims," "suffering" activate?',
    choices: [
      'Authority/respect (obey the establishment)',
      'Care/harm (compassion for the vulnerable)',
      'Loyalty/patriotism (protect our nation)',
      'Sanctity/purity (moral disgust)',
    ],
    correctIndex: 1,
    explanation: 'Haidt\'s Care foundation: "innocent children," "victims," "suffering," "outraged." Activates compassion AND outrage simultaneously. The rhetorical question "Who would oppose protecting children?" frames opposition as immoral — a classic Care button manipulation.',
    friendPreview: 'This breaks my heart 💔',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN MYTH (Barthes: Freedom vs Security)
  // Real: Surveillance law debates (ongoing)
  // ════════════════════════════════════════════
  {
    title: 'Interior Minister: "We Must Limit Freedom to Protect It" — New Surveillance Law',
    source: 'Reuters',
    content: `The Interior Minister announced a new surveillance law: expanded facial recognition cameras, mandatory data retention, and AI-powered monitoring of all public spaces. "We must limit freedom to protect it," he said. "This is the natural evolution of security in a modern society." Civil rights groups protested. But isn't safety the most basic freedom of all? The law was framed as inevitable — just "common sense" for a dangerous world.`,
    category: 'Politics',
    categoryColor: '#06b6d4',
    imageEmoji: '🏛️',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'What hidden myth is being sold as "natural" and "common sense"?',
    choices: [
      'The myth of progress through technology',
      'The myth that freedom and security are opposites',
      'The myth of economic growth solving everything',
      'The myth of democratic consensus',
    ],
    correctIndex: 1,
    explanation: 'Barthes: "Freedom must be limited to be protected" is an oxymoron disguised as wisdom. "Natural," "normal," "common sense" — naturalization of ideology. The myth: you must sacrifice freedom for safety. But real security doesn\'t require trading away civil liberties — that\'s the hidden story being sold.',
    friendPreview: 'What do you think about this? 🤔',
    friendName: 'Zoe',
    friendColor: '#06b6d4',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK (Baudrillard: Hyperreality)
  // Real: The Guardian — AI deepfakes of real doctors (Dec 2025)
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: AI Deepfakes of Real Doctors Spreading Health Misinformation',
    source: 'The Guardian',
    content: `In December 2025, The Guardian revealed hundreds of AI-generated deepfake videos impersonating real doctors to sell unproven supplements on social media. Respected health experts like Dr. Michael Mosley had their faces manipulated. "Everything we knew was wrong," claimed one deepfake. "Doctors don't want you to know this." 90% of viewers couldn't tell it was fake. The content spread faster than fact-checks could keep up. Reality and simulation merged — Baudrillard's hyperreality made flesh.`,
    category: 'Clickbait',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'Baudrillard would say these AI deepfake videos operate at what level of reality?',
    choices: [
      'Real event, genuine medical advice from doctors',
      'Distorted but based on real scientific findings',
      'Pure simulation — the real doctor never said it, the content is entirely fabricated',
      'Satirical commentary on modern medicine',
    ],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: the AI doctor never existed in that context. The video is a simulation pretending to be reality. "Doctors don\'t want you to know" is a simulacrum — a copy without an original. 90% of viewers couldn\'t tell, meaning the simulation had replaced reality in the viewer\'s experience.',
    friendPreview: 'Omg you have to see this!! 📱',
    friendName: 'TikTok Tom',
    friendColor: '#a78bfa',
  },
]

export function getMissionPosts(): MissionPost[] {
  // Return posts sorted by level
  return [...POSTS].sort((a, b) => a.level - b.level)
}

// Map level → which tools are unlocked
export const LEVEL_TOOLS: Record<number, CoreToolId[]> = {
  1: ['bad-arguments'],
  2: ['bad-arguments', 'feelings-check'],
  3: ['bad-arguments', 'feelings-check', 'brain-check'],
  4: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them'],
  5: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'source-check'],
  6: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check'],
  7: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'fake-check', 'source-check'],
}

// Level visual config
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