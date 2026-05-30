import type { Article } from '../types'

const SHORT_ARTICLES: Article[] = [
  {
    title: 'Study: Rising Immigration Linked to Housing Crisis',
    source: 'Daily Express (fictional)',
    content: `A new study from the Institute for Social Research (ISR) claims: "80% of the housing shortage in major cities is caused by immigration."

"Numbers don't lie," says Dr. Markus Weber, lead researcher. "We see a direct link between migration and rising rents."

Critics disagree. "The study ignores that immigration also brings workers," says Dr. Sarah Chen, economist. "The housing market is more complex."

The ISR rejects criticism. Interior Ministry: "We are reviewing the study."`,
    url: 'https://example.com/housing-study',
    publishedAt: '2026-05-28',
  },
  {
    title: '45,000 Layoffs at Big Tech — Crisis or Strategy?',
    source: 'Business Insider',
    content: `Amazon, Google and Meta plan to lay off 45,000 employees in Q3 2026.

Unions warn about social costs. "These are people, not numbers."

Interesting: all three companies reported record profits. Stock prices rose 8% after the announcement.

"Layoffs aren't weakness — they're efficiency," says analyst Thomas Richter. Critics call it a system problem.`,
    url: 'https://example.com/tech-layoffs',
    publishedAt: '2026-05-29',
  },
  {
    title: 'Minister: "Serious but not Hopeless"',
    source: 'National News (fictional)',
    content: `Interior Minister Thomas Berger warned of a "serious security situation" and announced a 5-point plan: more surveillance, facial recognition, data retention, and a new "Center for Security."

"We must limit freedom to protect it," said the minister.

Civil rights groups protest. "This is a path to surveillance state."

67% of the public supports the measures, according to a poll.`,
    url: 'https://example.com/minister-security',
    publishedAt: '2026-05-30',
  },
]

export async function fetchArticles(): Promise<Article[]> {
  return SHORT_ARTICLES
}
