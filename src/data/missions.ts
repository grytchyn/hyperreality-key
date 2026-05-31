// ── MISSION POSTS v13 — 21 posts across 7 progressive levels ──
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
  // LEVEL 1 — BAD ARGUMENTS (Authority + Absolutes)
  // ════════════════════════════════════════════
  {
    title: 'Study: "80% of Housing Crisis Caused by Immigration"',
    source: 'Daily News',
    content: `A new study from the Institute for Social Research claims: 80% of the housing shortage is caused by immigration. "Numbers don't lie," says Dr. Markus Weber, lead researcher. Critics disagree. "The study ignores that immigrants also build homes."`,
    category: 'Politics',
    categoryColor: '#ef4444',
    imageEmoji: '🏘️',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'The post name-drops "Dr. Markus Weber" and "Institute for Social Research." What technique is this?',
    choices: ['Emotional manipulation', 'False authority (name-dropping)', 'Statistical analysis', 'Logical contradiction'],
    correctIndex: 1,
    explanation: '"Dr." and "Institute" sound credible but neither is identified. Cialdini\'s Authority principle — using titles to borrow trust without providing actual credentials.',
    friendPreview: 'Bro have you seen this? 👀',
    friendName: 'Alex',
    friendColor: '#22c55e',
  },
  {
    title: '"Everyone Knows the Economy Is Collapsing"',
    source: 'TrendFeed',
    content: `Everyone knows the economy is collapsing. Nobody can afford rent anymore. All young people are leaving the country. It's completely obvious that the government has failed. Every expert agrees this is the worst crisis in history.`,
    category: 'Economy',
    categoryColor: '#f59e0b',
    imageEmoji: '📉',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'Which logical fallacy does this post use most heavily?',
    choices: ['False authority', 'Absolute words (overgeneralization)', 'Emotional fear', 'Anonymous sources'],
    correctIndex: 1,
    explanation: '"Everyone," "nobody," "all," "completely" — these absolute words ignore exceptions. Schopenhauer\'s overgeneralization: claiming universality where none exists.',
    friendPreview: 'This is so true right now 😤',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },
  {
    title: '"Experts Prove That This One Diet Works for Everyone"',
    source: 'Wellness Hub',
    content: `Experts have finally proven that the Keto-Lite diet works for every single person. "The results are undeniable," says Dr. Sarah Wellness. "Clearly, this is the only way to eat." The study shows 100% of participants lost weight. Obviously, this diet is for everyone.`,
    category: 'Health',
    categoryColor: '#22c55e',
    imageEmoji: '🥗',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: "The post says \"proven,\" \"undeniable,\" \"everyone,\" \"100%.\" What's the main trick?",
    choices: ['Fake expert + absolute claims', 'Good health advice', 'Giving too much data', 'Honest marketing'],
    correctIndex: 0,
    explanation: 'Name-drops "Dr. Sarah Wellness" (false authority) and uses absolutes ("everyone," "100%," "undeniable"). No diet works for every single person — real science doesn\'t deal in absolutes.',
    friendPreview: 'My aunt swears by this! 🥗',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Urgency)
  // ════════════════════════════════════════════
  {
    title: '"Act Now Before It\'s Too Late — Shocking New Report"',
    source: 'Alert News',
    content: `A shocking new report reveals a terrifying threat to your family's safety. Urgent action is required immediately. "This is the most dangerous situation we've ever seen," warns an expert. Don't wait until it's too late. The crisis is unfolding right now.`,
    category: 'Breaking',
    categoryColor: '#ef4444',
    imageEmoji: '🚨',
    imageBg: 'from-red-500/20 to-rose-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'What emotion is this post trying to create?',
    choices: ['Curiosity', 'Fear and urgency', 'Joy', 'Sadness'],
    correctIndex: 1,
    explanation: '"Shocking," "terrifying," "urgent," "immediately," "dangerous," "crisis" — all fear and urgency words. Cialdini\'s Scarcity: making you act before thinking.',
    friendPreview: 'You need to see this NOW 🚨',
    friendName: 'Jay',
    friendColor: '#ef4444',
  },
  {
    title: '"This Heartbreaking Story Will Change Everything"',
    source: 'EmotionWave',
    content: `A poor innocent child is suffering. Her heartbreaking story will make you cry. "She has nobody," says a volunteer. "It's just tragic." You can help — but only if you act now. Don't let this poor soul suffer alone. Every second counts.`,
    category: 'Human Interest',
    categoryColor: '#f97316',
    imageEmoji: '😢',
    imageBg: 'from-orange-500/20 to-amber-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'Which emotional triggers does this post combine?',
    choices: ['Joy and surprise', 'Pity and urgency', 'Anger and disgust', 'Fear and relief'],
    correctIndex: 1,
    explanation: '"Poor," "heartbreaking," "suffering," "nobody," "tragic" — pity (Cialdini\'s Liking). Combined with "act now," "every second counts" — urgency. Sympathy bypasses logic.',
    friendPreview: 'This breaks my heart 💔',
    friendName: 'Luna',
    friendColor: '#f97316',
  },
  {
    title: '"Outrage! Politicians Are Destroying Our Country"',
    source: 'Righteous Post',
    content: `It's absolutely appalling how corrupt our politicians have become. This disgraceful betrayal of the public trust is revolting. The scandal is atrocious. Decent people everywhere are outraged. How dare they treat us like this? It's despicable.`,
    category: 'Politics',
    categoryColor: '#d946ef',
    imageEmoji: '😤',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'The post uses "outrage," "appalling," "disgrace," "revolting." What is this?',
    choices: ['Factual reporting', 'Outrage bait', 'Satirical humor', 'Balanced critique'],
    correctIndex: 1,
    explanation: 'Emotion replaces argument entirely. No specific claims, just outrage words. The fury is intentional — designed to bypass critical thinking (System 1 over System 2).',
    friendPreview: 'This is exactly how I feel 🔥',
    friendName: 'Sam',
    friendColor: '#d946ef',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Anchoring + Bandwagon)
  // ════════════════════════════════════════════
  {
    title: '"Most People Agree: This Is the Best City in the World"',
    source: 'TravelBuzz',
    content: `According to a survey, most people think this city is the best place to live. The majority of respondents rated it number one. Popular opinion is clear: everyone loves it here. Of course, this city wins every ranking. Common sense says it's unbeatable.`,
    category: 'Lifestyle',
    categoryColor: '#06b6d4',
    imageEmoji: '🌆',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'What cognitive bias does "most people agree" and "everyone loves it" rely on?',
    choices: ['Anchoring (first number sets the frame)', 'Bandwagon (appeal to popularity)', 'Confirmation bias (seeing what you believe)', 'Hindsight bias (knew it all along)'],
    correctIndex: 1,
    explanation: '"Most people," "majority," "everyone," "popular," "of course" — all bandwagon signals. Kahneman\'s Availability Heuristic: "Many believe it" does not equal "it\'s true."',
    friendPreview: 'Have you been here? It\'s #1! 🌆',
    friendName: 'Max',
    friendColor: '#06b6d4',
  },
  {
    title: '"Record-Breaking: 45,000 Layoffs Announced"',
    source: 'Business Feed',
    content: `In an unprecedented move, Amazon, Google and Meta laid off 45,000 people — the biggest mass layoff in history. These massive cuts are the worst we've ever seen. Unions are calling it the worst crisis for workers since the Great Depression. Record profits alongside record layoffs.`,
    category: 'Economy',
    categoryColor: '#f59e0b',
    imageEmoji: '📊',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'The post repeats "record," "biggest," "worst," "unprecedented." What bias is this?',
    choices: ['Bandwagon (everyone thinks this)', 'Anchoring (extreme number sets the frame)', 'Authority (trust the expert)', 'Confirmation bias'],
    correctIndex: 1,
    explanation: '"45,000," "biggest," "worst," "unprecedented" — Kahneman\'s Anchoring. Sets an extreme reference point so you feel the scale emotionally. The number 45,000 is huge, but compared to what?',
    friendPreview: 'This is INSANE 🤯',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },
  {
    title: '"You Only Have Two Choices: Support Us or Support Them"',
    source: 'Divide & Conquer',
    content: `It's simple. You're either with us or against us. There's no middle ground. Either you support this policy, or you support the destruction of our country. The only choice is between good and evil. There are no other options.`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '⚔️',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'What does "either/or" and "only two choices" create?',
    choices: ['Clear logical argument', 'False binary (ignores nuance)', 'Democratic debate', 'Factual options'],
    correctIndex: 1,
    explanation: 'Kahneman\'s Framing bias — presents only two extreme options, hiding all nuance. Reality almost never has only two choices. This is a classic straw man frame.',
    friendPreview: 'It\'s pretty simple really 🤷',
    friendName: 'Sam',
    friendColor: '#8b5cf6',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // ════════════════════════════════════════════
  {
    title: '"They Are Taking Our Jobs — We Must Stop Them"',
    source: 'True Patriot',
    content: `They are coming for our jobs. They don't respect our culture. These people are flooding our communities and taking everything we built. We need to protect our own. Our way of life is under threat from outsiders who don't belong here.`,
    category: 'Politics',
    categoryColor: '#ef4444',
    imageEmoji: '🚧',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'How does the post portray "they" and "we"?',
    choices: ['As equal groups with different views', 'As "we" (victims) vs "they" (threats)', 'As neutral observers', 'As allies working together'],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "we" = hardworking victims, "they" = homogeneous threat. "Flooding" is a dehumanizing nature metaphor. Zero specific evidence about "them."',
    friendPreview: 'Finally someone says it 🇺🇸',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },
  {
    title: '"Our Community vs. The Outsiders: Choose Your Side"',
    source: 'Local Voice',
    content: `There are two kinds of people in this town: those who grew up here and those who just arrived. The newcomers don't understand our traditions. They don't share our values. They are changing our neighborhood. Our children deserve to grow up with our culture, not theirs.`,
    category: 'Local',
    categoryColor: '#d946ef',
    imageEmoji: '🏘️',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'The post divides people into "our" community vs "they" newcomers. What is this called?',
    choices: ['Factual demographic analysis', 'In-group / out-group framing', 'Inclusive community building', 'Historical documentation'],
    correctIndex: 1,
    explanation: 'Tajfel: creates an in-group ("us" who grew up here) and out-group ("they" newcomers). "Our traditions," "our values," "our neighborhood" vs "their culture" — binary division with no evidence.',
    friendPreview: 'This hits close to home 🏘️',
    friendName: 'Theo',
    friendColor: '#d946ef',
  },
  {
    title: '"Good People vs. Evil Forces: The Battle of Our Time"',
    source: 'Epic News',
    content: `On one side, there are good, decent, hardworking patriots. On the other, evil, corrupt forces trying to destroy everything pure. The good people must stand together against the wicked. This is a battle between light and darkness. There is no neutral ground.`,
    category: 'Opinion',
    categoryColor: '#8b5cf6',
    imageEmoji: '🌓',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'What does the post use to make the division feel absolute?',
    choices: ['Specific policy details', 'Good vs evil binary labels', 'Statistical evidence', 'Expert opinions'],
    correctIndex: 1,
    explanation: '"Good" vs "evil," "pure" vs "corrupt," "light" vs "darkness" — binary moral labels (Tajfel). No gray area. Dehumanizes the other side completely. This is how propaganda works.',
    friendPreview: 'The battle lines are drawn ⚔️',
    friendName: 'Alex',
    friendColor: '#8b5cf6',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — VALUE CHECK (Haidt: Moral Foundations)
  // ════════════════════════════════════════════
  {
    title: '"Innocent Children Hurt by New Policy — We Must Protect Them"',
    source: 'Family First',
    content: `The new policy hurts innocent children. These vulnerable young victims are suffering because of cruel budget cuts. Every compassionate person should be outraged. How can we let this happen to the most innocent among us? We must protect our children from harm.`,
    category: 'Society',
    categoryColor: '#22c55e',
    imageEmoji: '👶',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 5,
    neededTool: 'value-check',
    question: 'Which moral foundation is being activated?',
    choices: ['Authority/respect', 'Loyalty/patriotism', 'Care/harm (compassion for vulnerable)', 'Sanctity/purity'],
    correctIndex: 2,
    explanation: 'Haidt\'s Care foundation: "innocent children," "victims," "suffering," "hurt," "protect." Activates compassion and outrage simultaneously. Hard to argue against "protecting children" — that\'s the point.',
    friendPreview: 'This makes me so angry 😡',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },
  {
    title: '"They Cheated the System — It\'s Unfair to Hardworking People"',
    source: 'Fairness Report',
    content: `While honest people work hard every day, these cheaters are getting everything for free. It's fundamentally unfair. Justice demands that we stop this corruption. Decent people don't get what they deserve anymore. The system is rigged against the honest.`,
    category: 'Politics',
    categoryColor: '#f59e0b',
    imageEmoji: '⚖️',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 5,
    neededTool: 'value-check',
    question: '"Cheat," "unfair," "justice," "corrupt," "deserve" — which moral button?',
    choices: ['Care/harm', 'Fairness/cheating', 'Loyalty/betrayal', 'Authority/subversion'],
    correctIndex: 1,
    explanation: 'Haidt\'s Fairness foundation: "cheat," "unfair," "justice," "corrupt," "deserve," "rigged." Triggers a sense of injustice. The post frames a complex issue as simple cheating vs deserving.',
    friendPreview: 'This is so unfair it\'s unreal 🤬',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },
  {
    title: '"True Patriots Must Stand Together Against Traitors"',
    source: 'National Pride',
    content: `Loyal citizens must unite. The nation is being betrayed from within. Traitors have infiltrated our institutions. Every true patriot has a duty to defend our country. United we stand, divided we fall. Loyalty to our nation is the highest virtue.`,
    category: 'Identity',
    categoryColor: '#d946ef',
    imageEmoji: '🇺🇸',
    imageBg: 'from-pink-500/20 to-red-500/10',
    level: 5,
    neededTool: 'value-check',
    question: '"Loyal," "betray," "traitor," "patriot," "united" — what moral foundation?',
    choices: ['Care/harm', 'Fairness/cheating', 'Loyalty/betrayal', 'Sanctity/purity'],
    correctIndex: 2,
    explanation: 'Haidt\'s Loyalty foundation: "loyal," "betray," "traitor," "patriot," "united." Creates tribalism — "us" (loyal patriots) vs "them" (traitors). No specifics about what the betrayal actually is.',
    friendPreview: 'This is what I\'ve been saying 🇺🇸',
    friendName: 'Jack',
    friendColor: '#d946ef',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN STORY (Barthes: Myths & Narratives)
  // ════════════════════════════════════════════
  {
    title: '"New Surveillance Law: We Must Limit Freedom to Protect It"',
    source: 'National News',
    content: `Interior Minister announced: more surveillance, facial recognition, data retention. "We must limit freedom to protect it," he said. "This is the natural evolution of security." Civil rights groups protest. But isn't safety the most basic freedom of all?`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '🏛️',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'What hidden story is being sold as "natural" and "common sense"?',
    choices: ['The myth of progress through technology', 'The myth that freedom and security conflict', 'The myth of economic growth', 'The myth of democratic debate'],
    correctIndex: 1,
    explanation: 'Barthes: "Freedom must be limited to be protected" is an oxymoron disguised as wisdom. "Natural," "normal," "common sense" — naturalization of ideology. The myth: you must sacrifice freedom for safety.',
    friendPreview: 'What do you think about this? 🤔',
    friendName: 'Sam',
    friendColor: '#8b5cf6',
  },
  {
    title: '"The Crisis Is Here — Only Strong Action Can Save Us"',
    source: 'Emergency Alert',
    content: `We are facing an unprecedented crisis. The threat is immediate and real. Only decisive, strong action can prevent total collapse. This is not a time for debate — it's a time for action. Leaders must step up and do whatever it takes.`,
    category: 'Breaking',
    categoryColor: '#ef4444',
    imageEmoji: '📢',
    imageBg: 'from-red-500/20 to-rose-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'The word "crisis" is repeated heavily. What myth does it create?',
    choices: ['The myth of heroic leadership', 'The myth that urgency justifies anything', 'The myth of inevitable disaster', 'All of the above'],
    correctIndex: 3,
    explanation: 'Barthes: "Crisis" is a myth-signifier. It creates urgency, justifies extraordinary measures, and discourages questioning. "Crisis" frames debate as "action vs inaction" rather than "which action?"',
    friendPreview: 'This is getting serious 📢',
    friendName: 'Zoe',
    friendColor: '#ef4444',
  },
  {
    title: '"Tradition Is Under Attack — We Must Return to How Things Were"',
    source: 'Heritage Post',
    content: `Our ancestors built this culture over centuries. Now everything we hold sacred is being destroyed. The natural order of things is being overturned. We must return to traditional values before it's too late. Progress is destroying what made us great.`,
    category: 'Identity',
    categoryColor: '#d946ef',
    imageEmoji: '🕰️',
    imageBg: 'from-pink-500/20 to-purple-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: '"Traditional," "natural," "sacred," "ancestors" — what myth is being sold?',
    choices: ['The myth that the past was better than the present', 'The myth that change is destruction', 'The myth that tradition is always right', 'All of the above combined'],
    correctIndex: 3,
    explanation: 'Barthes: "Tradition" and "natural order" naturalize a specific ideology as "how things have always been." "Sacred" frames the issue as beyond question. The myth: the past was pure, the present is corrupt.',
    friendPreview: 'They want to destroy everything we built 🕰️',
    friendName: 'Theo',
    friendColor: '#d946ef',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK + ALL TOOLS (Baudrillard: Hyperreality)
  // ════════════════════════════════════════════
  {
    title: '"You Won\'t Believe What Happened — Share Before They Delete!"',
    source: 'ClickZone',
    content: `The internet is buzzing after this shocking discovery. "Everything we knew was wrong," says a former insider. What happened next will blow your mind. Doctors hate this one simple trick. Share this before they delete it. 90% of people don't know this fact.`,
    category: 'Clickbait',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'Baudrillard would say this post is operating at which level of reality?',
    choices: ['Real event, accurate reporting', 'Distorted but based on real facts', 'Pure simulation — no original referent', 'Scientific research summary'],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: the content is 100% about its own spread — "share before they delete," "doctors hate this," "90% of people." Zero information, pure simulation. The medium ate the message.',
    friendPreview: 'Omg you have to see this!! 📱',
    friendName: 'TikTok Tom',
    friendColor: '#a78bfa',
  },
  {
    title: '"Our Heritage Is Under Attack — Defend Our Values"',
    source: 'Identity Post',
    content: `They are destroying everything we hold sacred. Our ancestors built this nation with blood and sacrifice. Now traitors want to tear it all down. True patriots must stand together against this invasion of our culture. Our children deserve to inherit what we were given.`,
    category: 'Identity',
    categoryColor: '#d946ef',
    imageEmoji: '🛡️',
    imageBg: 'from-fuchsia-500/20 to-purple-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'This post combines multiple manipulation techniques. Which ones?',
    choices: ['Us vs them + Moral buttons + Hidden myth', 'Just emotional language', 'Only statistical manipulation', 'Just false authority'],
    correctIndex: 0,
    explanation: 'This is a multi-layer post: Tajfel (us vs them — "they" vs "true patriots"), Haidt (Loyalty + Sanctity buttons — "sacred," "traitors," "heritage"), and Barthes (myth of ancestral purity). Expert-level manipulation.',
    friendPreview: 'This is everything I\'ve been trying to say 🛡️',
    friendName: 'Jack',
    friendColor: '#d946ef',
  },
  {
    title: 'Breaking: Community River Clean-Up a Success',
    source: 'City Times',
    content: `Over 200 volunteers participated in the annual river clean-up on Saturday. They collected over 500 pounds of trash from the waterfront. "This is our favorite community event," said volunteer Maria Santos. The cleanup was organized by the Neighborhood Association. Next event is in September.`,
    category: 'Community',
    categoryColor: '#22c55e',
    imageEmoji: '🌿',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'This post uses NO manipulation techniques. What level of reality is it?',
    choices: ['Hyperreal simulation', 'Real event, accurate reporting', 'Hidden propaganda', 'Emotional manipulation'],
    correctIndex: 1,
    explanation: 'Baudrillard\'s first order: real event, accurate reporting. Specific details (200 volunteers, 500 pounds, September date). No emotional triggers, no us/them, no hidden myth. Clean information.',
    friendPreview: 'Love our community! 🌿',
    friendName: 'Green Anna',
    friendColor: '#22c55e',
  },
]

export function getMissionPosts(): MissionPost[] {
  // Return posts sorted by level, then randomized within each level
  const grouped: Record<number, MissionPost[]> = {}
  for (const p of POSTS) {
    if (!grouped[p.level]) grouped[p.level] = []
    grouped[p.level].push(p)
  }
  const result: MissionPost[] = []
  for (let lvl = 1; lvl <= 7; lvl++) {
    const posts = grouped[lvl] || []
    // Shuffle within level
    for (let i = posts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [posts[i], posts[j]] = [posts[j], posts[i]]
    }
    result.push(...posts)
  }
  return result
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

// Level visual config — colors and names match the GPT-generated level backgrounds
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
