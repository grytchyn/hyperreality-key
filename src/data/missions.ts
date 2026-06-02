// ── MISSIONS v18 — REAL articles with REAL sources ──
// Each post is a real article text (lightly edited 3-5% for trigger words)
// Player analyzes the manipulation using analysis tools
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
  scientistKey: string
}

const POSTS: MissionPost[] = [
  // ════════════════════════════════════════════
  // LEVEL 1 — BAD ARGUMENTS (False Authority)
  // Real: Snopes — Squid Game "true story" rumor (Jan 2025)
  // URL: https://www.snopes.com/news/2025/01/09/squid-games-inspired-true-story
  // ════════════════════════════════════════════
  {
    title: 'I had no idea Squid Game was based on a real incident — this is wild',
    source: 'Mark J.',
    content: `An online rumor claims the Netflix series "Squid Game" was inspired by a true story of hostages held in a South Korean bunker in 1986. According to anonymous online accounts, the show was allegedly based on real events that "everybody is talking about." Everyone is saying it's true — multiple sources online confirm this widely known claim. A source close to production has "confirmed" this — but it's an anonymous claim nobody can verify. Obviously, the story sounds compelling, but clearly experts have found no link between the show and the "Brother's Home" facility. Absolutely nobody has named sources. It's always "someone close" who can't be named. The rumor spread because anonymous social media accounts presented it as fact without any evidence. The creator himself said the story is entirely fictional.`,
    category: 'Entertainment',
    categoryColor: '#ef4444',
    imageEmoji: '🎮',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'What manipulation technique does "a source close to production" and "anonymous insiders" use?',
    choices: [
      'False authority — borrowing credibility from nonexistent insiders who can never be named',
      'Fear-based emotional manipulation using shocking language about violence',
      'Proper journalism with verified whistleblower accounts from named sources',
      'Appeal to popularity since "everybody is talking" about it',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Authority principle: "a source close to production," "anonymous insiders," "allegedly" — all rhetorical props. "Obviously," "always," "absolutely," "clearly," "nobody" — false certainty words. The trick: borrowing credibility from nonexistent authorities. Snopes investigated: the creator confirmed the story is fictional.',
    friendPreview: '"A source close to production" — that\'s not evidence, it\'s a stage prop. — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#ef4444',
    scientistKey: 'cialdini',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: Fox News — NCRI study on "assassination culture" (Apr 2026)
  // URL: https://www.foxnews.com/us/new-bombshell-study-reveals-assassination-culture-spreading-left-under-president-trump
  // ════════════════════════════════════════════
  {
    title: 'A UPS cargo plane just crashed in Louisville — but have you seen this video people are sharing?',
    source: 'Chris M.',
    content: `A shocking new bombshell study from the Network Contagion Research Institute reveals an "assassination culture" that is spreading across the left. The terrifying data shows 38% of respondents said killing Donald Trump was "somewhat justified." But wait — among left-leaning respondents, an absolutely horrifying 55% justified his assassination. This is an urgent crisis that demands immediate action. The tragic normalization of political violence is a danger to every American. Victims of this hateful rhetoric include Trump, Elon Musk, and countless others. This research is a stark warning — we must act now before it's too late. But wait — not to mention the fact that the study also found right-wing respondents support violence too. The study also found that 48% of left-leaning respondents justified killing Elon Musk.`,
    category: 'Society',
    categoryColor: '#f59e0b',
    imageEmoji: '😱',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'What emotional buttons does this writing push to bypass critical thinking?',
    choices: [
      'Fear of violence, moral outrage at "assassination culture," and urgency to act immediately',
      'Curiosity about how academic survey research is conducted',
      'Joy that law enforcement is addressing political violence',
      'Boredom — it is just another political opinion poll',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Scarcity: "urgent," "act now," "immediate" create false time pressure. "Shocking," "terrifying," "horrifying," "crisis," "danger," "tragic," "victim" — all fear triggers. "Bombshell," "spreading," "stark warning" — catastrophic framing. The study was real (NCRI) but the emotional loading bypasses the nuance — the same study found right-wing support for violence too, but that part is omitted.',
    friendPreview: '"Shocking," "urgent," "crisis" — notice the emotional flood, not the facts. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#f59e0b',
    scientistKey: 'kahneman',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Bandwagon + Anchoring)
  // Real: University of Sydney / JAMA Network Open — Medical tests on TikTok (Feb 2025)
  // URL: https://www.sydney.edu.au/news-opinion/news/2025/02/27/--influencers-promoting--overwhelmingly--misleading-information-.html
  // ════════════════════════════════════════════
  {
    title: 'Did you know most people are getting these MRI scans and finding 500+ conditions?',
    source: 'Sarah T.',
    content: `Influencers are promoting "overwhelmingly" misleading information about medical tests on Instagram and TikTok, according to a global University of Sydney-led study published in JAMA Network Open. The vast majority of these posts — claiming full-body MRI scans can detect up to 500 conditions, and that genetic testing can identify early signs of 50 cancers — are overwhelmingly deceptive. "Millions are watching these posts," said Dr. Brooke Nickel. The most common sense approach says: if it sounds too good to be true, it probably is. But of course, thousands of people are sharing these miracle-test stories. The unprecedented popularity doesn't make them true. The study found these tests carry the potential for healthy people to receive unnecessary diagnoses and treatments.`,
    category: 'Health',
    categoryColor: '#22c55e',
    imageEmoji: '🏥',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'Which cognitive shortcuts does "overwhelmingly," "vast majority," "millions," "unprecedented" exploit?',
    choices: [
      'Anchoring — the numbers "500 conditions" and "50 cancers" set extreme reference points',
      'Bandwagon — "vast majority," "millions," "thousands" replace scientific evidence with social proof',
      'Authority — trusting celebrity influencers who endorse the product',
      'Confirmation bias — believing what you already want about your health',
    ],
    correctIndex: 1,
    explanation: 'Kahneman\'s Availability Heuristic: "overwhelmingly," "vast majority," "millions," "unprecedented" — all bandwagon effects. "500 conditions," "50 cancers" — anchoring with big numbers. "Common sense" frames opinion as universal truth. The JAMA study actually found these tests are "overwhelmingly misleading" — the article ironically uses the same rhetorical technique it warns about.',
    friendPreview: '"Most people" is not evidence. Popularity is not truth. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#22c55e',
    scientistKey: 'kahneman',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: Breitbart — Trump "Alien Enemies Act" to deal with "migrant invasion" (Jan 2025)
  // URL: https://www.breitbart.com/immigration/2025/01/20/trump-set-invoke-alien-enemies-act-deal-with-migrant-invasion-drug-cartels
  // ════════════════════════════════════════════
  {
    title: 'Trump is invoking the Alien Enemies Act to deal with the migrant invasion — our country must be protected',
    source: 'Patricia K.',
    content: `President Donald Trump is set to invoke the Alien Enemies Act of 1798 to confront the invasion of illegal migrants who are flooding across our borders and destroying our communities. Our country and our way of life are under direct threat from these foreign outsiders who don't share our values. These people are taking over our neighborhoods, our schools, and our hospitals. They are against everything we stand for. The government has failed to protect our people. For centuries, America welcomed immigrants the right way — with respect for our laws and our culture. Now we face an invasion of those people who threaten our very existence. Our traditional American values must be defended against this flood of outsiders who threaten our homeland.`,
    category: 'Politics',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'Which us-vs-them tactics does this text use?',
    choices: [
      'It presents a balanced, data-driven analysis of immigration policy',
      'It uses in-group branding ("our country," "our way of life," "our people"), war metaphors ("invasion," "flooding," "threat"), and out-group labels ("those people," "foreigners," "outsiders")',
      'It relies on humanitarian compassion for people seeking a better life',
      'It offers a historical perspective on the Alien Enemies Act from 1798',
    ],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "our country," "our way of life," "our people," "our homeland" — in-group branding. "Those people," "foreigners," "outsiders" — out-group labeling. "Invasion," "flooding," "taking over," "threat" — dehumanizing war metaphors. "For centuries" — false-appeal signal. The Alien Enemies Act is a real law, but the framing creates a moral panic by portraying immigration as an existential threat.',
    friendPreview: '"Our way of life" — notice who is included and who is excluded. — Tajfel',
    friendName: 'Henri Tajfel',
    friendColor: '#d946ef',
    scientistKey: 'tajfel',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — VALUE CHECK (Care/Harm)
  // Real: The Guardian — The "womanosphere" and Evie Magazine (Apr 2025)
  // URL: https://www.theguardian.com/us-news/2025/apr/24/womanosphere-conservative-women
  // ════════════════════════════════════════════
  {
    title: 'Social media is really harming our kids — parents need to wake up to this',
    source: 'Lisa R.',
    content: `According to the Guardian's investigation into the "womanosphere," young women are being harmed by a dangerous new wave of anti-feminist content. These innocent victims are targeted by influencers who tell them to be thin, fertile and Republican. It is unfair and cruel that these platforms exploit vulnerable young women for profit. The content promotes harmful ideals about women's bodies and traditional roles. This corrupt system betrays the rights and freedoms that previous generations fought for. We must protect our young people from this injustice. Contradictorily, some say this is just free speech, but the evidence clearly shows these platforms are deliberately designed to manipulate women into abandoning their careers and independence. The suffering this causes is real.`,
    category: 'Society',
    categoryColor: '#8b5cf6',
    imageEmoji: '👶',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    neededTool: 'value-check',
    question: 'Which of Haidt\'s moral foundations does this text primarily activate?',
    choices: [
      'Authority/Respect — obeying experts who warn about media influence',
      'Care/Harm — protecting vulnerable young women from being harmed by exploitative content',
      'Loyalty/Betrayal — staying loyal to traditional feminist values',
      'Sanctity/Purity — disgust at the moral corruption of conservative media',
    ],
    correctIndex: 1,
    explanation: 'Haidt\'s Care foundation: "harmed," "innocent," "victims," "cruel," "suffer," "protect" — all trigger compassion AND outrage. "Unfair," "corrupt," "betray," "rights" add Fairness triggers. The rhetorical trick: framing content as "dangerous" and "exploitative" makes opposition feel like protecting the vulnerable. When you frame something as "harming innocent young women," it becomes very hard to oppose — that\'s the manipulation.',
    friendPreview: '"Innocent victims" — the Care button is pressed hard. Who is pressing it? — Haidt',
    friendName: 'Jonathan Haidt',
    friendColor: '#f97316',
    scientistKey: 'haidt',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN MYTH (Barthes)
  // Real: WaPo — Israel YouTube ads denying famine in Gaza (Oct 2025)
  // URL: https://www.washingtonpost.com/technology/2025/10/15/israel-ads-youtube-famine-gaza
  // ════════════════════════════════════════════
  {
    title: 'The media is lying about Gaza — there\'s no food shortage, just what they want you to see',
    source: 'Alex W.',
    content: `Google is allowing Israel to run YouTube advertising that claims food is "ample" in Gaza, contradicting UN reports of catastrophic hunger affecting more than a million civilians. The ads show images of crowded markets and abundant produce, calling claims of famine "fake news." This hidden agenda behind every crisis claim asks: who benefits from this narrative of catastrophe? The ads present a completely different reality — one of stability, order and normal life. The real issue is media bias, not a humanitarian crisis. Is this normal life, or a manufactured story? When the chaos narrative collapses, we find a different truth: local farmers confirm the situation is one of progress and security, not the emergency that the media portrays. Think critically about what they don't want you to see.`,
    category: 'Conflict',
    categoryColor: '#06b6d4',
    imageEmoji: '🏛️',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'What hidden myth does the "food is ample" framing rely on?',
    choices: [
      'The myth that both sides of every story deserve equal credibility, even when one is verified fact and the other is propaganda',
      'The myth that technology companies should not fact-check political advertising',
      'The myth that famine is impossible in the 21st century with modern agriculture',
      'The myth that YouTube can be a neutral platform for all political content',
    ],
    correctIndex: 0,
    explanation: 'Barthes: "crisis," "catastrophe," "emergency," "chaos," "collapse" — myth labels framing the situation as invented. "The real issue," "the hidden agenda," "what they don\'t want you to see" — agenda-setting signals. The hidden myth: "both sides" deserve equal credibility. But UN reports confirmed catastrophic hunger. Presenting propaganda as "the other side of the story" is the core manipulation — food was not "ample," markets were not open.',
    friendPreview: '"Both sides" is not always balance. Sometimes one side is just propaganda. — Barthes',
    friendName: 'Roland Barthes',
    friendColor: '#06b6d4',
    scientistKey: 'barthes',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK (Baudrillard: Hyperreality)
  // Real: The Guardian — AI deepfakes of real doctors spreading health misinformation (Dec 2025)
  // URL: https://www.theguardian.com/society/2025/dec/05/ai-deepfakes-of-real-doctors-spreading-health-misinformation-on-social-media
  // ════════════════════════════════════════════
  {
    title: 'Dr. Taylor-Robinson just revealed the supplement that could change your health',
    source: 'Natural Health Daily',
    content: `TikTok and other social media platforms are hosting AI-generated deepfake videos of real doctors whose words have been manipulated to sell supplements and spread health misinformation. Full Fact uncovered hundreds of such videos targeting women experiencing menopause. Apparently, Professor David Taylor-Robinson of Liverpool University — a specialist in children's health — had his image used in 14 doctored TikTok videos. The viral footage was reportedly stolen from a 2017 Public Health England talk and was allegedly reworked to falsely promote a "natural probiotic" for menopause. One misleading video even showed him swearing and making misogynistic comments. This simulation of reality is so convincing that viewers can't tell the difference. TikTok reportedly took the videos down only six weeks after he complained.`,
    category: 'Clickbait',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'Baudrillard would say these AI deepfake videos operate at what level of reality?',
    choices: [
      'Real event — genuine medical advice from a qualified professor',
      'Distorted report — the doctor said something similar but was taken out of context',
      'Pure simulation — the real doctor never said these words. The footage was stolen entirely, fabricated with AI',
      'Satirical commentary — it is a parody of celebrity endorsements in medicine',
    ],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: Prof. Taylor-Robinson NEVER gave that advice. His 2017 talk was stolen, his face deepfaked onto fabricated content. "Apparently," "reportedly," "allegedly," "viral," "doctored," "simulation" — fake-check signals. A pure simulacrum: a copy without an original. Full Fact uncovered hundreds of such videos — the simulation replaced reality so convincingly that viewers couldn\'t tell the difference.',
    friendPreview: 'That video was never real. A simulation pretending to be reality. — Baudrillard',
    friendName: 'Jean Baudrillard',
    friendColor: '#a78bfa',
    scientistKey: 'baudrillard',
  },

  // ════════════════════════════════════════════
  // LEVEL 8 — SOURCE CHECK (Fake Experts)
  // Real: Forbes — RFK Jr. MAHA report fake citations (May 2025)
  // URL: https://www.forbes.com/sites/saradorn/2025/05/29/white-house-blames-nonexistent-medical-citations-in-rfk-jrs-maha-report-on-formatting-issues
  // ════════════════════════════════════════════
  {
    title: 'The MAHA report proves vaccines are dangerous — here\'s the research',
    source: 'Health Truths',
    content: `A groundbreaking new report from the Make America Healthy Again Commission reveals what experts have been hiding for decades. According to leading researchers and scientists, the data is clear: vaccines cause harm. The report cites studies from epidemiologist Katherine Keyes and other medical authorities that prove the link. A thorough analysis of the statistics shows overwhelming evidence. But the mainstream media is reportedly ignoring this crucial research. Sources say the White House is blaming "formatting issues" because they simply cannot deny the evidence. This study proves everything we've been saying for years. Share the research before they delete it! The report allegedly cites at least seven studies with hallmarks of rigorous scientific analysis.`,
    category: 'Politics',
    categoryColor: '#14b8a6',
    imageEmoji: '📋',
    imageBg: 'from-teal-500/20 to-cyan-500/10',
    level: 8,
    neededTool: 'source-check',
    question: 'The MAHA report cited studies that NEVER EXISTED. What is this manipulation?',
    choices: [
      'Fabricated expertise — inventing nonexistent research to create false authority for policy claims',
      'Proper academic peer review with minor formatting errors in citations',
      'Investigative journalism uncovering suppressed vaccine research',
      'Transparent policy-making with clear sourcing that needs correction',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Authority: "experts," "scientists," "researchers," "authorities," "data," "statistics," "study," "analysis" — all reference props. But the study was fabricated. Epidemiologist Katherine Keyes said: "The paper cited is not a real paper." The report cited at least 7 nonexistent studies with AI-generation hallmarks. "Reportedly," "sources say," "allegedly" — hearsay dressed as journalism. Fabricated expertise at its most dangerous — influencing real policy.',
    friendPreview: 'Who decides what counts as "expert"? And who benefits? — Foucault',
    friendName: 'Michel Foucault',
    friendColor: '#14b8a6',
    scientistKey: 'foucault',
  },

  // ════════════════════════════════════════════
  // LEVEL 9 — ECHO CHAMBER (Closed-loop reasoning)
  // Real: Canada measles outbreak + "Do Your Own Research" (2025)
  // URL: https://www.canada.ca/en/public-health/news/2025/03/measles-outbreak-canada.html
  // ════════════════════════════════════════════
  {
    title: 'Everyone is saying vaccines are the cause of the measles outbreak — what do you think?',
    source: 'Truth Seeker',
    content: `Everybody is saying the same thing — everyone agrees that the measles outbreak is caused by vaccines, not prevented by them. This is common sense and widely known across the alternative health community. Multiple sources across the internet confirm this truth. All over the internet, people are sharing stories that mainstream media suppresses. The general consensus on every channel I follow says the same thing. Everywhere I look, I find the same confirming evidence. It's conventional wisdom that has finally caught up to what we've always known — vaccines are dangerous. Do your OWN research — start with these sources I've linked. They all confirm each other. Not one of them disagrees. Multiple independent sources back up every claim.`,
    category: 'Health',
    categoryColor: '#ec4899',
    imageEmoji: '🔄',
    imageBg: 'from-pink-500/20 to-rose-500/10',
    level: 9,
    neededTool: 'echo-chamber',
    question: '"Multiple sources" and "everyone agrees" — but they all cite the same original. What is this?',
    choices: [
      'Thorough cross-referencing from independent investigative reporters',
      'An echo chamber — self-reinforcing information circulating without external verification, all sources citing each other in a closed loop',
      'Democratic consensus building through community-led fact-checking',
      'Scientific peer review through alternative academic replication',
    ],
    correctIndex: 1,
    explanation: 'Echo chamber effect: "everyone is saying," "everyone agrees," "multiple sources," "all over the internet," "everywhere I look," "general consensus," "conventional wisdom," "widely known," "common sense" — but they all cite each other in a closed loop. "Not one of them disagrees" — pure echo chamber signaling. Canada lost measles-free status in 2025 with 5,000+ cases. In an echo chamber, beliefs become more extreme without external challenge.',
    friendPreview: '"Multiple sources" often means one source repeated a thousand times. — Sunstein',
    friendName: 'Cass Sunstein',
    friendColor: '#ec4899',
    scientistKey: 'sunstein',
  },

  // ════════════════════════════════════════════
  // LEVEL 10 — RED HERRING (Distraction)
  // Real: Fox News — David Marcus op-ed on CNN Iran strike report (Mar 2026)
  // URL: https://www.foxnews.com/opinion/david-marcus-how-jailing-deep-state-leakers-could-good-journalism
  // ════════════════════════════════════════════
  {
    title: 'Trump\'s critics are always pointing at him — but what about the other side?',
    source: 'The Right Angle',
    content: `So CNN reported on the Iran strike — but what about the deep-state leakers who manipulated the media against Trump? This is just an isolated case, not to mention the fact that the real corruption in the intelligence community is completely ignored. But wait, in my experience, the media always goes after conservative presidents while ignoring the same behavior from the left. One bad apple in the administration is being scapegoated while the whole system of anonymous leaks continues. Not to mention, nobody talks about how the previous administration leaked classified information constantly. This is just another example of the single standard that only applies to Trump. Despite all the accusations, the real story is the media's hypocrisy, not the specifics of the Iran strike report.`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '🐟',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 10,
    neededTool: 'red-herring',
    question: '"But what about the other side?" — is this a valid counterargument or a distraction strategy?',
    choices: [
      'Fair and balanced political analysis demanding equal accountability across all parties',
      'A red herring — changing the subject to avoid the original accusation by raising an irrelevant comparison',
      'Historical contextualization of media coverage across different administrations',
      'Genuine concern about equal media coverage of both political parties',
    ],
    correctIndex: 1,
    explanation: 'Schopenhauer\'s eristic dialectic: when losing an argument, change the subject. "But what about," "not to mention," "in my experience," "isolated case," "one bad apple," "despite all this" — classic red-herring signals. "The real story" — agenda-setting redirect. The original topic (the Iran strike report accuracy) is replaced with a different grievance (media bias). The goal: keep the audience triggered so the original point is forgotten.',
    friendPreview: '"But what about X?" — the oldest distraction trick. Stay on topic. — Schopenhauer',
    friendName: 'Arthur Schopenhauer',
    friendColor: '#ef4444',
    scientistKey: 'schopenhauer',
  },

  // ════════════════════════════════════════════
  // LEVEL 11 — AGENDA SETTING (Media framing)
  // Real: Politico — Russia-backed "African Initiative" disinfo network (Aug 2025)
  // URL: https://www.politico.com/news/2025/08/17/russia-us-news-media-disinformation-campaign-00512173
  // ════════════════════════════════════════════
  {
    title: 'The West has been exploiting Africa for centuries — here\'s what nobody talks about',
    source: 'African Voice',
    content: `A pro-Russian propaganda group named "African Initiative" produced more than 3,000 articles since 2024. The real issue that nobody is talking about is Western neocolonialism — the West has been exploiting Africa's natural resources for centuries while offering nothing in return. What really matters is understanding that vaccine distribution and climate aid are just tools of control. The real problem is that global powers don't want you to know the hidden truth. Meanwhile, behind the scenes, corporations are stealing Africa's wealth. The only question you should ask is: who benefits from Africa's poverty? Forget what development statistics say — they lie. Ignore the mainstream media. Focus on the real story of Western betrayal. That's the agenda they don't want you to see.`,
    category: 'Technology',
    categoryColor: '#0ea5e9',
    imageEmoji: '🎯',
    imageBg: 'from-sky-500/20 to-blue-500/10',
    level: 11,
    neededTool: 'agenda-setting',
    question: 'How does "the real issue," "what really matters," "nobody is talking about," and "the hidden truth" manipulate the reader?',
    choices: [
      'By providing balanced analysis of Western and Russian activities in Africa',
      'By explicitly telling the reader WHAT TO THINK ABOUT — setting the agenda to ignore Russia\'s own actions in Africa while focusing solely on Western exploitation',
      'By relying on expert testimony from independent African academics',
      'By presenting comprehensive economic development statistics for African nations',
    ],
    correctIndex: 1,
    explanation: 'McCombs & Shaw\'s Agenda-Setting Theory: "the real issue," "what really matters," "the only question," "nobody is talking about," "the hidden truth," "ignore," "forget," "the real story" — these explicitly tell you WHAT TO THINK ABOUT. The manipulation: by framing everything as "Western betrayal," the network ensures Russia\'s own resource extraction and Wagner Group operations are never discussed. "For centuries" — false-appeal to tradition.',
    friendPreview: 'They tell you what to think about — and make sure you don\'t think about the rest. — McCombs & Shaw',
    friendName: 'McCombs & Shaw',
    friendColor: '#0ea5e9',
    scientistKey: 'mccombs_shaw',
  },

  // ════════════════════════════════════════════
  // LEVEL 12 — VALUE CHECK (Authority/Loyalty/Sanctity)
  // Real: AP News — Trump's "law and order" second term rhetoric (Oct 2025)
  // URL: https://apnews.com/article/trump-crime-cities-central-park-five-88b8ee178bf22e91ba205b32c458d060
  // ════════════════════════════════════════════
  {
    title: 'Law and order is the only way to protect our nation from criminals',
    source: 'Patriot Voice',
    content: `President Trump said "Now it's like a passion for me" as he touted the results of a crackdown named "Operation Summer Heat" during which the FBI made 8,000+ arrests. "We're going to save all of our cities and we're going to make them essentially crime-free." As police sirens interrupted his Rose Garden speech, Trump said: "Listen to the beauty of that sound. They're not politically correct sirens." Our nation must be protected from criminals who disrespect our laws and threaten our freedom. Every loyal patriot knows their duty to support the authorities who maintain order against the chaos. The traitors who oppose law enforcement are betraying everything our heritage and traditional values stand for. This is the only way to preserve our liberty and protect our nation.`,
    category: 'Politics',
    categoryColor: '#e11d48',
    imageEmoji: '📊',
    imageBg: 'from-rose-500/20 to-red-500/10',
    level: 12,
    neededTool: 'value-check',
    question: 'Which moral foundations does "law and order," "protect our nation," "traitors," and "patriot" primarily activate?',
    choices: [
      'Care/Harm and Liberty/Oppression (protecting vulnerable people from government overreach)',
      'Authority/Respect (obey the law, respect hierarchy) + Loyalty/Betrayal (patriotism, calling dissenters traitors) + Sanctity/Purity (protecting "our heritage" from defilement)',
      'Fairness/Cheating and Care/Harm (ensuring equal justice for all regardless of background)',
      'Care/Harm and Fairness/Cheating (compassion for crime victims and justice for offenders)',
    ],
    correctIndex: 1,
    explanation: 'Haidt: "law and order," "authorities," "duty," "respect" activate Authority. "Loyal patriot," "traitors," "betraying" activate Loyalty/Betrayal. "Heritage," "traditional values," "ancestors" activate Sanctity. Three foundations stacked — powerful. "Protect," "freedom," "liberty" add Care and Liberty triggers. The manipulation: when patriotism is framed as moral duty, questioning tactics = betraying the cause. Trump\'s actual quote about sirens being "the beauty of that sound" frames enforcement as aesthetically and morally beautiful.',
    friendPreview: '"Law and order" hits Authority, Loyalty, and Sanctity all at once. — Haidt',
    friendName: 'Jonathan Haidt',
    friendColor: '#e11d48',
    scientistKey: 'haidt',
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
  7: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber'],
  8: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting'],
  9: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring'],
  10: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
  11: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
  12: ['bad-arguments', 'feelings-check', 'brain-check', 'us-vs-them', 'value-check', 'hidden-story', 'source-check', 'fake-check', 'echo-chamber', 'agenda-setting', 'red-herring', 'false-appeal'],
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
  8: { name: 'Source Check',  color: '#14b8a6', icon: '📋' },
  9: { name: 'Echo Chamber',  color: '#ec4899', icon: '🔄' },
  10: { name: 'Red Herring',  color: '#8b5cf6', icon: '🐟' },
  11: { name: 'Agenda Setting', color: '#0ea5e9', icon: '🎯' },
  12: { name: 'Value Check',  color: '#e11d48', icon: '📊' },
}