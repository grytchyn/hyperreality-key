// ── NEWS SERVICE v3 — short social-media-style posts ──
import type { Article } from '../types'

const SHORT_POSTS: Article[] = [
  {
    title: 'Study: "80% of Housing Crisis Is Caused by Immigration"',
    source: 'Daily News',
    content: `A new study claims 80% of the housing shortage is caused by immigration. "Numbers don't lie," says Dr. Weber. Critics say the study ignores that immigrants also build homes. The Interior Ministry is reviewing.`,
    url: 'https://example.com/housing',
    publishedAt: '2026-05-28',
    category: 'Politics',
  },
  {
    title: '45,000 Layoffs at Big Tech — Stocks Rise 8%',
    source: 'Business Feed',
    content: `Amazon, Google and Meta plan to lay off 45,000 people. Unions warn about social costs. Interesting: all three reported record profits, and stocks went up 8%. "Efficiency," says analyst Thomas Richter.`,
    url: 'https://example.com/tech-layoffs',
    publishedAt: '2026-05-29',
    category: 'Economy',
  },
  {
    title: 'Minister: "We Must Limit Freedom to Protect It"',
    source: 'National News',
    content: `The Interior Minister announced more surveillance and facial recognition. "We must limit freedom to protect it," he said. Civil rights groups call it a path to a surveillance state. 67% of the public supports the measures.`,
    url: 'https://example.com/security',
    publishedAt: '2026-05-30',
    category: 'Politics',
  },
  {
    title: 'Poll: "Majority Believes Crime Is Rising" — But It\'s Falling',
    source: 'Social Pulse',
    content: `A new poll shows 72% of people believe crime is rising. Official statistics show crime is actually down 15%. Experts say viral videos create a false impression. "Fear spreads faster than facts," says Dr. Lee.`,
    url: 'https://example.com/crime-poll',
    publishedAt: '2026-05-31',
    category: 'Society',
  },
  {
    title: '"They Are Taking Our Jobs" — Viral Video Sparks Debate',
    source: 'Trending Now',
    content: `A video with 5 million views claims "they are taking our jobs." The video identifies no specific group or data. Comment sections are divided. Fact-checkers found no evidence for the claim.`,
    url: 'https://example.com/viral-job-claim',
    publishedAt: '2026-05-31',
    category: 'Viral',
  },
]

export async function fetchArticles(): Promise<Article[]> {
  // TODO: replace with real news API
  // For now, shuffle and return
  const shuffled = [...SHORT_POSTS].sort(() => Math.random() - 0.5)
  return shuffled
}
