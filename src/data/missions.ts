// ── MISSION POSTS v8 — with Unsplash images ──
import type { CoreToolId } from '../types'

export interface MissionPost {
  title: string
  source: string
  content: string
  category: string
  categoryColor: string
  imageEmoji: string
  imageBg: string
  question: string
  isManipulative: boolean
  explanation: string
  neededTool: CoreToolId
  friendPreview: string
  friendName: string
  friendColor: string
}

const POSTS: MissionPost[] = [
  {
    title: 'Study: "80% of Housing Crisis Caused by Immigration"',
    source: 'Daily News',
    content: `A new study from the Institute for Social Research claims: "80% of the housing shortage is caused by immigration." "Numbers don't lie," says Dr. Markus Weber, lead researcher. Critics disagree. "The study ignores that immigrants also build homes." The Interior Ministry is reviewing the study.`,
    category: 'Politics',
    categoryColor: '#ef4444',
    imageEmoji: '🏘️',
    imageBg: 'from-red-500/20 to-orange-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: true,
    explanation: 'Schopenhauer: falsche Autorität ("Institute", "Dr.") + Cialdini: Authority. "80%" ohne Quellenangabe — falsche Präzision. Glaubwürdigkeit wird vorgetäuscht.',
    neededTool: 'bad-arguments',
    friendPreview: 'Bro have you seen this? 👀',
    friendName: 'Alex',
    friendColor: '#22c55e',
  },
  {
    title: '45,000 Layoffs at Big Tech — Stocks Rise 8%',
    source: 'Business Feed',
    content: `Amazon, Google and Meta plan to lay off 45,000 people. Unions warn about social costs. "These are people, not numbers." Interesting — all three reported record profits. "Layoffs aren't weakness, they're efficiency," says analyst Thomas Richter.`,
    category: 'Economy',
    categoryColor: '#f59e0b',
    imageEmoji: '📉',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: true,
    explanation: 'Cialdini: Contrast — "45,000" (gross) vs "record profits" (unfair). "Interesting" manipuliert deine Interpretation. Outrage statt Analyse.',
    neededTool: 'feelings-check',
    friendPreview: 'This is insane... 🤯',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },
  {
    title: 'Minister: "We Must Limit Freedom to Save It"',
    source: 'National News',
    content: `Interior Minister announced: more surveillance, facial recognition, data retention. "We must limit freedom to protect it." Civil rights groups protest. 67% of the public supports the measures according to a new poll.`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '🏛️',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: true,
    explanation: 'Barthes: Mythos der "Freiheit" — ein leeres Signifikant. "Freedom must be limited to be saved" ist ein klassisches Oxymoron, das als tiefsinnig getarnt wird.',
    neededTool: 'hidden-story',
    friendPreview: 'What do you think about this? 🤔',
    friendName: 'Sam',
    friendColor: '#8b5cf6',
  },
  {
    title: 'Breaking: Local School Wins Science Competition',
    source: 'City Times',
    content: `Students from Lincoln High School won first place at the National Science Fair with their project on renewable energy. "These kids are the future," said Mayor Davis. The team will represent the country at the international competition next month.`,
    category: 'Education',
    categoryColor: '#22c55e',
    imageEmoji: '🔬',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: false,
    explanation: 'Keine emotionale Manipulation. Fakten sind verifizierbar, keine versteckte Agenda. Echte Nachricht ohne rhetorische Tricks.',
    neededTool: 'feelings-check',
    friendPreview: 'This actually made me smile 😊',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },
  {
    title: '"They Are Taking Our Jobs" — 5 Million Views',
    source: 'Trending Now',
    content: `A viral video with 5 million views claims "they are taking our jobs." The video identifies no specific group or data. Comments are divided. Fact-checkers found no evidence. The video relies entirely on "we" versus "they."`,
    category: 'Viral',
    categoryColor: '#d946ef',
    imageEmoji: '🔥',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: true,
    explanation: 'Tajfel & Turner: Social Identity Theory — reine Wir/Sie-Konstruktion ohne Daten. "They" wird homogenisiert, Null Evidenz.',
    neededTool: 'us-vs-them',
    friendPreview: 'This is blowing up rn 🔥',
    friendName: 'Jay',
    friendColor: '#d946ef',
  },
  {
    title: 'New Law Will Protect Our Children from Online Dangers',
    source: 'Family Watch',
    content: `A new law promises to protect children from online threats. "Every parent knows the internet is dangerous," says Senator Adams. "We must act now." Critics say the law also allows tracking all citizens. But who would oppose protecting children?`,
    category: 'Society',
    categoryColor: '#f97316',
    imageEmoji: '👨‍👩‍👧',
    imageBg: 'from-orange-500/20 to-amber-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: true,
    explanation: 'Haidt: Care + Authority Knöpfe. "Who would oppose protecting children?" — falsche Binarität (Kahneman). Emotion über Argument.',
    neededTool: 'value-check',
    friendPreview: "They're passing a new law...",
    friendName: 'Luna',
    friendColor: '#f97316',
  },
  {
    title: 'Scientists Confirm: Earth Is Still Round',
    source: 'Science Daily',
    content: `NASA and ESA jointly confirmed today that Earth continues to be round, as it has been for the past 4.5 billion years. "This is not new information," said Dr. Harrison. The announcement came in response to online conspiracy theories gaining traction.`,
    category: 'Science',
    categoryColor: '#06b6d4',
    imageEmoji: '🌍',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    question: 'Is this post manipulating you?',
    isManipulative: false,
    explanation: 'Keine Agenda. Satirischer Tonfall, aber Fakten korrekt. Keine emotionalen Trigger, keine versteckte Botschaft.',
    neededTool: 'fake-check',
    friendPreview: 'LMAO wait till you see this 💀',
    friendName: 'Max',
    friendColor: '#06b6d4',
  },
]

export function getMissionPosts(): MissionPost[] {
  return [...POSTS].sort(() => Math.random() - 0.5)
}
