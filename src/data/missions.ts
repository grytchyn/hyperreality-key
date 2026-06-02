// ── MISSIONS v17 — 12 REAL disinformation posts ──
// Each post IS the fake/viral content itself, not a debunking article
// Player analyzes the manipulation using tools (skills)
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
  // Real: Squid Game "true story" hoax (Jan 2025)
  // ════════════════════════════════════════════
  {
    title: 'BREAKING: Netflix Finally Admits Squid Game Was BASED ON REAL 1986 Incident — Fans Are SHOCKED!',
    source: 'PopBuzz Insider',
    content: `Everybody is talking about this. A source close to production has CONFIRMED that Squid Game was inspired by a real 1986 incident in South Korea where dozens of hostages were forced to play deadly games for survival. According to anonymous insiders, the creator Hwang Dong-hyuk is "definitely" hiding the truth. Obviously, Netflix doesn't want you to know this. Reports claim the footage is out there — but nobody can find it. Multiple sources say the real story is "far more disturbing" than the show. Experts are calling this the biggest cover-up in entertainment history. Share before they delete this!`,
    category: 'Entertainment',
    categoryColor: '#ef4444',
    imageEmoji: '🎮',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    neededTool: 'bad-arguments',
    question: 'What manipulation technique does "a source close to production" and "anonymous insiders" use?',
    choices: [
      'False authority — borrowing credibility from nonexistent insiders',
      'Fear-based emotional manipulation using shocking language',
      'Proper journalism with verified whistleblower accounts',
      'Appeal to popularity since "everybody is talking" about it',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Authority principle: "a source close to production," "anonymous insiders," "experts" — all rhetorical props. No one named. No evidence cited. "Obviously," "definitely" add false certainty. The trick: borrowing credibility from nonexistent authorities. The creator himself said the story is fictional.',
    friendPreview: '"A source close to production" — that\'s not evidence, it\'s a stage prop. — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#ef4444',
    scientistKey: 'cialdini',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: AI deepfake of Louisville UPS plane crash (Nov 2025)
  // ════════════════════════════════════════════
  {
    title: 'TERRIFYING: UPS Plane Crash Caught on Camera — AI Generated? Or was it SABOTAGE? 😱',
    source: 'BreakingNewsAlert',
    content: `This is ABSOLUTELY HORRIFYING. A UPS cargo plane just crashed in Louisville and they're saying it was an "accident" — but what about the evidence that points to SABOTAGE? A viral video shows fake firefighters fighting a fake fire next to a fake destroyed fuselage. The AI-generated voice can be heard giving emergency commands — or is it REAL? But wait, forget that — other reports claim relatives of Kid Rock and Bob Dylan DIED in this crash. This is a catastrophe nobody is talking about. Despite all this, the government is covering up the REAL story. This is urgent — we need to act NOW before they delete everything. Stop scrolling and WATCH this.`,
    category: 'Technology',
    categoryColor: '#f59e0b',
    imageEmoji: '🤖',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'What emotional buttons does this post push to bypass critical thinking?',
    choices: [
      'Fear of death, urgency to watch, and outrage at supposed cover-up',
      'Curiosity about how AI-generated video technology works',
      'Joy that emergency services responded quickly to the crash',
      'Boredom — it is just another routine aviation accident',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Scarcity: "urgent," "act NOW" creates false time pressure. "HORRIFYING," "SHOCKING," "catastrophe" trigger fear — System 1 override. "Stop scrolling and WATCH" demands attention without thinking. The video was AI-generated, the celebrity deaths were fabricated. Every emotional trigger here bypasses logic.',
    friendPreview: '"Urgent! Share now!" — urgency is a red flag. Take a breath. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#f59e0b',
    scientistKey: 'kahneman',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Bandwagon + Anchoring)
  // Real: TikTok medical test scams (Feb 2025 - JAMA study)
  // ════════════════════════════════════════════
  {
    title: 'Most People Are Getting This Test Done — 97% of Users Found EARLY CANCER! Doctors HATE This!',
    source: 'Wellness Warrior',
    content: `The VAST MAJORITY of people are getting full-body MRI scans and EVERYONE is finding UP TO 500 conditions early! This is UNPRECEDENTED. Our comprehensive blood test can detect 50 types of cancer and the general consensus is that EVERYONE should get tested NOW. Common sense says if MILLIONS of people are doing it, it works. Of course, mainstream doctors don't want you to know this — they'd lose money. The overwhelming evidence speaks for itself. Thousands of people have shared their stories. Obviously, this is the ONLY CHOICE for anyone who cares about their health. Get tested TODAY.`,
    category: 'Health',
    categoryColor: '#22c55e',
    imageEmoji: '🏥',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    neededTool: 'brain-check',
    question: 'Which cognitive shortcut does this post exploit with "most people," "97%," and "overwhelming evidence"?',
    choices: [
      'Anchoring — the number "500 conditions" sets an extreme reference point so anything less seems small',
      'Bandwagon — "most people," "everyone," "millions" replaces evidence with social proof',
      'Authority — trusting celebrities who endorse the product',
      'Confirmation bias — believing what you already want to be true about your health',
    ],
    correctIndex: 1,
    explanation: 'Kahneman\'s Availability Heuristic: "most people," "everyone," "millions," "overwhelming," "vast majority" — bandwagon effects replace scientific evidence. The anchoring comes from "500 conditions" and "50 cancers" — big numbers feel impressive. "Common sense" frames opinion as universal truth. The JAMA study found these tests are "overwhelming misleading" and lead to unnecessary treatments.',
    friendPreview: '"Most people" is not evidence. Popularity is not truth. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#22c55e',
    scientistKey: 'kahneman',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: Meliorator bot campaign — Ukraine refugees (Feb 2026)
  // ════════════════════════════════════════════
  {
    title: 'They Are INVADING Our Towns: Ukrainian Refugees Get FREE Housing While Our Veterans Sleep on Streets!',
    source: 'American Patriot Daily',
    content: `Our way of life is under threat. These people — THOSE PEOPLE — are flooding into our communities and taking over our jobs, our schools, our hospitals. Our own veterans are sleeping on the streets while outsiders get everything for FREE. The government is bringing in thousands of foreigners who don't share our values or our culture. This is an invasion of our homeland and nobody is talking about it. Traditional American communities are being destroyed. For centuries, this nation welcomed immigrants the RIGHT way — with respect for our culture. Now they're forcing THESE PEOPLE on us. It's time to stand up for OUR people before our country is gone forever.`,
    category: 'Politics',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'Which us-vs-them tactics does this post use?',
    choices: [
      'It offers balanced immigration policy analysis with factual data',
      'It uses in-group branding ("our way of life," "our homeland"), war metaphors ("invasion," "flooding") and out-group labels ("those people," "foreigners")',
      'It relies on humanitarian compassion for refugees fleeing war',
      'It presents a historical perspective on American immigration policy',
    ],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "our way of life," "our homeland," "our people" — in-group branding. "Those people," "outsiders," "foreigners" — out-group labeling. "Invasion," "flooding," "taking over" — dehumanizing war metaphors. "For centuries" (false-appeal signal). The Meliorator bot campaign used AI-generated fake profiles to spread this exact narrative. Pure us-vs-them framing with zero data.',
    friendPreview: '"Our way of life" — notice who is included and who is excluded. — Tajfel',
    friendName: 'Henri Tajfel',
    friendColor: '#d946ef',
    scientistKey: 'tajfel',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — VALUE CHECK (Care/Harm)
  // Real: Mumsnet social media ban campaign (Feb 2026)
  // ════════════════════════════════════════════
  {
    title: 'Social Media Is DESTROYING Our Children: Parents, WAKE UP Before It\'s Too Late!',
    source: 'Family Watch',
    content: `Our innocent children are being HARMED by social media every single day. This is a moral crisis. These platforms are deliberately designed to be ADDICTIVE — they exploit our kids for profit while destroying their mental health. It is UNFAIR and CRUEL that corporations are allowed to profit from CHILD ABUSE. We must PROTECT our children from this injustice. Every parent knows the suffering: compulsive use, lost sleep, rising anxiety, collapsing self-esteem. This is a betrayal of everything we hold dear. We must stand up against this corruption and fight for our children's freedom. Share if you care about children.`,
    category: 'Society',
    categoryColor: '#8b5cf6',
    imageEmoji: '👶',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    neededTool: 'value-check',
    question: 'Which of Haidt\'s moral foundations does this post primarily activate?',
    choices: [
      'Authority/Respect — obeying experts and parental authority figures',
      'Care/Harm — protecting innocent children from being harmed by exploitative corporations',
      'Loyalty/Betrayal — staying loyal to traditional family values',
      'Sanctity/Purity — disgust at the moral corruption of modern technology',
    ],
    correctIndex: 1,
    explanation: 'Haidt\'s Care foundation: "innocent," "children," "harm," "abuse," "suffer," "protect" — all trigger compassion AND outrage. The rhetorical trick: framing social media companies as deliberate harm-doers ("designed to be addictive") who profit from children\'s suffering. "Unfair," "corrupt," "betrayal" add Fairness/Cheating triggers. When you frame something as "protecting children," it becomes very hard to oppose — that\'s the manipulation.',
    friendPreview: '"Innocent children" — the most powerful moral button. Who is pressing it? — Haidt',
    friendName: 'Jonathan Haidt',
    friendColor: '#f97316',
    scientistKey: 'haidt',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN MYTH (Barthes: Freedom vs Security)
  // Real: Gaza "food is ample" YouTube ads (Oct 2025)
  // ════════════════════════════════════════════
  {
    title: 'The REAL STORY From Gaza Nobody Is Talking About: Life Is Normal — Mainstream Media Is LYING',
    source: 'Truth Uncovered',
    content: `Everyone is talking about a "crisis" in Gaza but the REAL TRUTH is that food is ample, markets are open, and daily life is perfectly normal. The mainstream media wants you to believe in a catastrophe — but local farmers confirm that the real story is one of stability and progress. Why does the media always ignore this side? Is there a hidden agenda behind every emergency claim? Ask yourself: who benefits from this crisis narrative? The answer may shock you. Think critically about what they don't want you to see. This is a threat to honest reporting and the real issue is media bias, not a humanitarian crisis.`,
    category: 'Conflict',
    categoryColor: '#06b6d4',
    imageEmoji: '🏛️',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    neededTool: 'hidden-story',
    question: 'What hidden myth does "food is ample" and "life is normal" rely on?',
    choices: [
      'The myth that both sides of every story deserve equal credibility, even when one is verified fact and the other is propaganda',
      'The myth that YouTube should allow all political advertising regardless of truthfulness',
      'The myth that humanitarian crises are always exaggerated by biased reporters',
      'The myth that local farmers are more trustworthy than international aid organizations',
    ],
    correctIndex: 0,
    explanation: 'Barthes: "crisis," "catastrophe," "emergency" — myth labels framing the situation as invented. "The REAL TRUTH," "nobody is talking about," "what they don\'t want you to see" — agenda-setting signals telling you what to think about. The hidden myth: "both sides" deserve equal credibility. But UN reports confirmed catastrophic hunger affecting millions. Presenting propaganda as "the other side of the story" is the manipulation.',
    friendPreview: '"Both sides" is not always balance. Sometimes one side is just propaganda. — Barthes',
    friendName: 'Roland Barthes',
    friendColor: '#06b6d4',
    scientistKey: 'barthes',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK (Baudrillard: Hyperreality)
  // Real: AI deepfake of real doctors selling supplements (Dec 2025)
  // ════════════════════════════════════════════
  {
    title: '⚠️ DR. TAYLOR-ROBINSON REVEALS: The One Supplement Big Pharma Doesn\'t Want You To Know About!',
    source: 'Natural Health Now',
    content: `BREAKING: Professor David Taylor-Robinson from Liverpool University, a leading specialist in children's health, says this "natural probiotic" could change your life! In this viral video you'll see him personally recommend a groundbreaking supplement that treats menopause symptoms naturally. The footage is REAL — Dr. Taylor-Robinson himself explains how this ancient herbal formula was suppressed by mainstream medicine. Apparently, big pharmaceutical companies are trying to STOP this information from reaching you. But we've uncovered the truth. This is NOT a simulation — this is a real statement from a real doctor. Watch before it's taken down! Deepfake? We don't think so.`,
    category: 'Clickbait',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    neededTool: 'fake-check',
    question: 'Baudrillard would say this "natural probiotic" deepfake operates at what level of reality?',
    choices: [
      'Real event — genuine medical advice from a qualified professor',
      'Distorted report — the doctor said something similar but was taken out of context',
      'Pure simulation — the real doctor never said these words. The footage was stolen and reworked with AI',
      'Satirical commentary — it is a parody of celebrity endorsements in medicine',
    ],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: Prof. David Taylor-Robinson NEVER gave that medical advice. His 2017 Public Health England talk was stolen, his face deepfaked onto a fabricated video recommending a "natural probiotic." Full Fact uncovered hundreds of such videos. "Apparently," "viral," "don\'t think so" — fake-check signals. "Ancient" and "herbal" — false-appeal to tradition. A pure simulacrum: a copy without an original.',
    friendPreview: 'That video was never real. A simulation pretending to be reality. — Baudrillard',
    friendName: 'Jean Baudrillard',
    friendColor: '#a78bfa',
    scientistKey: 'baudrillard',
  },

  // ════════════════════════════════════════════
  // LEVEL 8 — SOURCE CHECK (Fake Experts)
  // Real: RFK Jr MAHA fake citations (May 2025)
  // ════════════════════════════════════════════
  {
    title: 'EXPOSED: The MAHA Commission Report Proves Vaccines Are DANGEROUS — Read The RESEARCH!',
    source: 'Health Freedom Now',
    content: `A groundbreaking new report from the Make America Healthy Again Commission reveals what experts have been hiding for decades. According to leading researchers, the data is clear: vaccines cause harm. The report cites studies from epidemiologist Katherine Keyes and other authorities that prove the link. Scientists have confirmed these findings. A thorough analysis of the statistics shows overwhelming evidence. But the mainstream media is reportedly ignoring this. The research paper cited is real — sources say the White House is just blaming "formatting issues" because they can't deny the evidence. This study proves everything we've been saying. Share the research before they delete it!`,
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
    explanation: 'Cialdini\'s Authority: "experts," "researchers," "scientists," "authorities," "data," "statistics," "study" — all reference props. But the study cited was fabricated. Epidemiologist Katherine Keyes said: "The paper cited is not a real paper that I or my colleagues were involved with." The report cited at least 7 nonexistent studies with AI-generation hallmarks. "Reportedly," "sources say" — hearsay dressed as journalism. Fabricated expertise at its most dangerous.',
    friendPreview: 'Who decides what counts as "expert"? And who benefits? — Foucault',
    friendName: 'Michel Foucault',
    friendColor: '#14b8a6',
    scientistKey: 'foucault',
  },

  // ════════════════════════════════════════════
  // LEVEL 9 — ECHO CHAMBER (Closed-loop reasoning)
  // Real: Measles resurgence + "Do Your Own Research" (2025)
  // ════════════════════════════════════════════
  {
    title: 'Everyone Is SAYING Vaccines Caused The Measles Outbreak — Do Your Own Research, Don\'t Believe The Media!',
    source: 'Truth Seeker Network',
    content: `Everybody is saying the same thing. EVERYONE agrees that the measles outbreak is caused by vaccines, not prevented by them. This is common sense. Multiple sources across the internet confirm what is widely known — that vaccines are dangerous. General consensus across all alternative news outlets says the same thing. All over the internet, people are sharing stories that mainstream media suppresses. Everywhere I look, I find the same evidence. The truth is conventional wisdom is finally catching up to what we've always known. Do your OWN research — start with these sources I've linked. They all confirm each other.`,
    category: 'Health',
    categoryColor: '#ec4899',
    imageEmoji: '🔄',
    imageBg: 'from-pink-500/20 to-rose-500/10',
    level: 9,
    neededTool: 'echo-chamber',
    question: '"Multiple sources" and "everyone agrees" — but they all cite the same original. What is this?',
    choices: [
      'Thorough cross-referencing from independent investigative reporters',
      'An echo chamber — self-reinforcing information circulating without external verification',
      'Democratic consensus building through community-led fact-checking',
      'Scientific peer review through alternative academic replication',
    ],
    correctIndex: 1,
    explanation: 'Echo chamber effect: "everyone is saying," "everyone agrees," "multiple sources," "all over the internet" — but they all cite each other in a closed loop. "Common sense," "widely known," "general consensus" — framing as consensus without evidence. Canada lost its measles-free status in 2025 with 5,000+ cases across 9 provinces, driven by vaccine misinformation exactly like this. In an echo chamber, beliefs become more extreme without external challenge.',
    friendPreview: '"Multiple sources" often means one source repeated a thousand times. — Sunstein',
    friendName: 'Cass Sunstein',
    friendColor: '#ec4899',
    scientistKey: 'sunstein',
  },

  // ════════════════════════════════════════════
  // LEVEL 10 — RED HERRING (Distraction)
  // Real: Trump "whataboutism" rhetorical pattern (2025-2026)
  // ════════════════════════════════════════════
  {
    title: 'They Accuse Trump Of Saying Something — But What About Hillary? What About Biden? What About THEM?!',
    source: 'The Right Angle',
    content: `So they're saying Trump said something controversial again. But what about Hillary's emails? What about Biden's laptop? What about the other side's crimes? This is just an isolated incident blown out of proportion. Not to mention, nobody talks about the real corruption happening in the Democratic Party. In my experience, the media always goes after conservatives while ignoring the same behavior from liberals. Forget the accusations — the real story is the hypocrisy of the media itself. One bad apple on the left gets a pass while our side is crucified. This is not to mention the fact that CNN covered up worse stories.`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '🐟',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 10,
    neededTool: 'red-herring',
    question: '"But what about Hillary?" — is this a valid counterargument or a distraction strategy?',
    choices: [
      'Fair and balanced political analysis demanding equal accountability',
      'A red herring — changing the subject to avoid the original accusation by raising an irrelevant point',
      'Historical contextualization of presidential scandals across administrations',
      'Genuine concern about equal media coverage of both political parties',
    ],
    correctIndex: 1,
    explanation: 'Schopenhauer\'s eristic dialectic: when losing an argument, change the subject. "But what about X" introduces a point that feels related but is actually a distraction. "Isolated incident," "one bad apple," "in my experience," "not to mention" — all red-herring signals. "Forget the accusations" — agenda-setting redirect. "For centuries" — false-appeal to tradition. The goal: keep the audience in a triggered, reactive state where the original accusation is forgotten.',
    friendPreview: '"What about X?" — the oldest distraction trick. Stay on topic. — Schopenhauer',
    friendName: 'Arthur Schopenhauer',
    friendColor: '#ef4444',
    scientistKey: 'schopenhauer',
  },

  // ════════════════════════════════════════════
  // LEVEL 11 — AGENDA SETTING (Media framing)
  // Real: African Initiative — Russia-backed disinfo network (Aug 2025)
  // ════════════════════════════════════════════
  {
    title: 'The REAL STORY Nobody Is Talking About: The West Has Been EXPLOITING Africa For Centuries — Here\'s The Truth',
    source: 'African Initiative News',
    content: `Ignore what the mainstream media tells you. The REAL ISSUE is Western neocolonialism — the West has been exploiting Africa's natural resources for centuries while offering NOTHING in return. The real problem is that global powers don't want you to know the hidden truth about their agenda. What really matters is understanding that vaccine distribution and climate aid are just tools of control. Meanwhile, behind the scenes, corporations are stealing Africa's wealth. The only question you should ask is: who is really benefiting from Africa's poverty? Get the truth that nobody is talking about. Forget development statistics — they lie. Focus on the real story of Western betrayal.`,
    category: 'Technology',
    categoryColor: '#0ea5e9',
    imageEmoji: '🎯',
    imageBg: 'from-sky-500/20 to-blue-500/10',
    level: 11,
    neededTool: 'agenda-setting',
    question: 'How does "the real story," "nobody is talking about," and "ignore the mainstream media" manipulate the reader?',
    choices: [
      'By providing balanced analysis of Western and Russian activities in Africa',
      'By explicitly telling the reader WHAT TO THINK ABOUT — setting the agenda to ignore Russia\'s own actions in Africa while focusing solely on Western exploitation',
      'By relying on expert testimony from independent African academics and economists',
      'By presenting comprehensive economic development statistics for African nations',
    ],
    correctIndex: 1,
    explanation: 'McCombs & Shaw: "the real story," "the real issue," "what really matters," "the only question," "the truth that nobody is talking about," "ignore," "forget" — these explicitly tell you WHAT TO THINK ABOUT. The manipulation: by framing everything as "Western betrayal," the network ensures Russia\'s own resource extraction and Wagner Group operations are never discussed. "For centuries" — false-appeal to tradition. The Politico investigation found this network produced 3,000+ articles.',
    friendPreview: 'They tell you what to think about — and make sure you don\'t think about the rest. — McCombs & Shaw',
    friendName: 'McCombs & Shaw',
    friendColor: '#0ea5e9',
    scientistKey: 'mccombs_shaw',
  },

  // ════════════════════════════════════════════
  // LEVEL 12 — VALUE CHECK (Authority/Loyalty/Sanctity)
  // Real: Trump "law and order" rhetoric (2025)
  // ════════════════════════════════════════════
  {
    title: 'LAW AND ORDER MUST PREVAIL: We Must PROTECT Our Nation From Criminals And Traitors!',
    source: 'America First Update',
    content: `Our nation is under siege from within. Criminals, traitors, and those who disrespect our laws threaten our very freedom. The authorities say we need order — and they're right. Every patriot knows that loyalty to our country demands sacrifice. We must protect our heritage and our traditional values from those who would destroy them. The duty of every citizen is to respect authority and stand against the chaos. This is the only way to preserve our liberty. Those who defy the law are betraying everything our ancestors fought for. Stand with order. Stand with authority. Stand with our nation. Share this if you're a true patriot.`,
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
      'Fairness/Cheating and Care/Harm (ensuring equal justice for all citizens regardless of background)',
      'Care/Harm and Fairness/Cheating (compassion for crime victims and justice for offenders)',
    ],
    correctIndex: 1,
    explanation: 'Haidt: "law and order" activates Authority (respect for hierarchy). "Traitors," "patriot," "loyalty," "betray" activate Loyalty/Betrayal. "Heritage," "traditional values," "ancestors" activate Sanctity. Three foundations stacked together — a powerful combination. "Protect our nation," "freedom," "liberty" add Care and Liberty triggers. The manipulation: when patriotism is framed as moral duty, questioning tactics = betraying the cause.',
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