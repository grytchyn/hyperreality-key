// ── MISSION POSTS — each article + question + answer ──
import type { CoreToolId } from '../types'

export interface MissionPost {
  title: string
  source: string
  content: string
  category: string
  question: string
  answer: string
  hint: string
  neededTools: CoreToolId[]
}

const POSTS: MissionPost[] = [
  {
    title: 'Study: "80% of Housing Crisis Caused by Immigration"',
    source: 'Daily News',
    content: `A new study from the Institute for Social Research claims: "80% of the housing shortage is caused by immigration." "Numbers don't lie," says Dr. Markus Weber, lead researcher. Critics disagree. "The study ignores that immigrants also bring workers," says Dr. Sarah Chen. The Interior Ministry: "We are reviewing the study."`,
    category: '🤔 Politics',
    question: 'What logical trick is used here?',
    answer: 'authority',
    hint: 'Try the "Bad Words" filter — find who they want you to trust.',
    neededTools: ['bad-arguments'],
  },
  {
    title: '45,000 Layoffs at Big Tech — Stocks Rise 8%',
    source: 'Business Feed',
    content: `Amazon, Google and Meta plan to lay off 45,000 people. Unions warn about social costs. "These are people, not numbers." Interesting: all three reported record profits. "Layoffs aren't weakness — they're efficiency," says analyst Thomas Richter.`,
    category: '💰 Economy',
    question: 'Which feeling are they making you feel?',
    answer: 'fear',
    hint: 'Use "Feelings Check" — find the emotion words.',
    neededTools: ['feelings-check'],
  },
  {
    title: 'Minister: "We Must Limit Freedom to Protect It"',
    source: 'National News',
    content: `Interior Minister announced: more surveillance, facial recognition, data retention. "We must limit freedom to protect it," he said. Civil rights groups protest. 67% of the public supports the measures.`,
    category: '🏛️ Politics',
    question: 'What hidden story is this text selling?',
    answer: 'security',
    hint: 'Try "Hidden Story" filter — find the big idea word.',
    neededTools: ['hidden-story'],
  },
  {
    title: 'Poll: "Majority Believes Crime Is Rising" — But It\'s Falling',
    source: 'Social Pulse',
    content: `A new poll shows 72% of people believe crime is rising. Official stats show crime is actually down 15%. Experts say viral videos create a false impression. "Fear spreads faster than facts," says Dr. Lee.`,
    category: '📱 Society',
    question: 'What thinking shortcut is at work here?',
    answer: 'bandwagon',
    hint: 'Use "Brain Check" — find "majority" and "most people" patterns.',
    neededTools: ['brain-check'],
  },
  {
    title: '"They Are Taking Our Jobs" — 5 Million Views',
    source: 'Trending Now',
    content: `A viral video with 5 million views claims "they are taking our jobs." The video identifies no specific group or data. Comments are divided. Fact-checkers found no evidence. The video uses "we" and "they" a lot.`,
    category: '🔥 Viral',
    question: 'What hidden battle does this create?',
    answer: 'us vs them',
    hint: 'Use "Us vs Them" filter — find who is "we" and who is "they".',
    neededTools: ['us-vs-them'],
  },
  {
    title: 'New Law Will Protect Our Children from Online Dangers',
    source: 'Family Watch',
    content: `A new law promises to protect children from online threats. "Every parent knows the internet is dangerous," says Senator Adams. "We must act now." Critics say the law also allows tracking all citizens. But who would oppose protecting children?`,
    category: '👨‍👩‍👧 Society',
    question: 'Which moral button is being pressed?',
    answer: 'care',
    hint: 'Try "Value Check" — find words about protecting the innocent.',
    neededTools: ['value-check'],
  },
  {
    title: 'This AI Meme Predicts the Future — And It\'s Wild',
    source: 'Meme Daily',
    content: `A viral AI-generated image is being shared everywhere. "This is literally surreal," one user wrote. Sources say it might be fake, but it's trending. Apparently everyone is talking about it. "Like a movie," commented another.`,
    category: '🌀 Internet',
    question: 'How real is this post?',
    answer: 'unverified',
    hint: 'Use "Fake Check" — find words about viral, rumors, and "apparently".',
    neededTools: ['fake-check'],
  },
  {
    title: 'Study Proves: Our City Has Never Been More Dangerous',
    source: 'City News',
    content: `A new report from the Institute for Urban Safety proves crime has reached unprecedented levels. "Statistics don't lie," says Director Miller. "Every major city is affected. Never before have we seen such numbers." But official data shows crime is actually lower than 5 years ago.`,
    category: '😨 Local News',
    question: 'What brain trick uses dramatic numbers?',
    answer: 'anchoring',
    hint: 'Try "Brain Check" — find "never before" and "unprecedented".',
    neededTools: ['brain-check'],
  },
  {
    title: 'Either You Support Order or You Support Chaos',
    source: 'Hardline Post',
    content: `The choice is simple: either you support law and order, or you support chaos. There is no middle ground. We must stand together against those who threaten our way of life. Traditional values are under attack.`,
    category: '⚔️ Opinion',
    question: 'What false binary is created here?',
    answer: 'order vs chaos',
    hint: 'Use "Us vs Them" filter — find the two opposing ideas.',
    neededTools: ['us-vs-them'],
  },
]

export function getMissionPosts(): MissionPost[] {
  return [...POSTS].sort(() => Math.random() - 0.5)
}
