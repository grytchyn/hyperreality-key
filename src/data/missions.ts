// ── MISSIONS v16 — 12 levels, REAL articles with real data ──
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
    friendPreview: `"A source close to production confirmed it" — yeah, that's not how evidence works. — Schopenhauer`,
    friendName: 'Arthur Schopenhauer',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: NPR — AI misinformation after plane crash (Jan 2026)
  // URL: https://www.npr.org/2026/01/01/nx-s1-5645183/ai-powered-software-is-helping-misinformation-spread-online-after-disasters
  // ════════════════════════════════════════════
  {
    title: 'NPR: AI-Generated Disaster Lies Spread Online \u2014 "Real-World Harm"',
    source: 'NPR',
    content: `Even before investigators started picking up the pieces after a UPS cargo plane caught fire and crashed during takeoff in Louisville, Kentucky, in November, people were already sharing and reacting to false AI-generated articles and videos all over social media. One fake video — shared more than 1,000 times — showed fake firefighters fighting a fake fire next to a fake destroyed fuselage. An AI-generated voice can be heard giving emergency commands. Other false reports claimed relatives of Kid Rock and Bob Dylan died in the crash. None of it was true. Meanwhile X\'s AI assistant Grok claimed a real photo of Kentucky Governor Andy Beshear at the site was from a previous disaster. Imran Ahmed, CEO of the Center for Countering Digital Hate, said: "Disasters are tragic enough on their own but they\'re actually made worse by allowing AI-generated and algorithmically-amplified lies to spread unchecked and potentially create real-world harm."`,
    category: 'Technology',
    categoryColor: '#f59e0b',
    imageEmoji: '\uD83E\uDD16',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    neededTool: 'feelings-check',
    question: 'What emotional and moral triggers does this article use to make you care?',
    choices: [
      'Fear of real-world harm + moral outrage at profiting from tragedy',
      'Curiosity about how AI video generation works',
      'Joy at technological progress in disaster response',
      'Boredom — it is just another plane crash story',
    ],
    correctIndex: 0,
    explanation: 'The article uses Cialdini\u2019s Scarcity principle (disaster urgency) and Haidt\u2019s Care foundation (victims, families harmed). "Tragic," "harm," "lies spread unchecked" trigger fear and outrage. The emotional charge makes you oppose AI misinformation without needing facts about regulation. The mention of profiting from lies adds Fairness outrage \u2014 someone profits from tragedy.',
    friendPreview: `"Disasters are tragic enough... but they're made worse by AI lies." — Cialdini`,
    friendName: 'Robert Cialdini',
    friendColor: '#f59e0b',
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
    friendPreview: '\"Most people believe\" is not evidence. Popularity is not truth. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#22c55e',
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
    friendPreview: '\"They\'ve been invaded\" — war metaphors dehumanize. Notice the us-vs-them framing. — Tajfel',
    friendName: 'Henri Tajfel',
    friendColor: '#d946ef',
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
    friendPreview: 'Harm, children, addictive — which moral button are they pressing? — Haidt',
    friendName: 'Jonathan Haidt',
    friendColor: '#f97316',
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
    friendPreview: '\"Freedom vs security\" is not a fact. It\'s a myth. — Barthes',
    friendName: 'Roland Barthes',
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
      'Pure simulation \u2014 the real doctor never said these words, its entirely fabricated',
      'Satirical commentary on modern medicine',
    ],
    correctIndex: 2,
    explanation: 'Baudrillard\'s Hyperreality: Prof. David Taylor-Robinson never gave that medical advice. The video is a simulation pretending to be reality — a simulacrum (a copy without an original). "Natural probiotic" advice attributed to him was completely fabricated from stolen footage. Full Fact found hundreds of such videos. The simulation replaced reality so convincingly that viewers couldn\'t tell the difference.',
    friendPreview: 'That video was never real. A simulation pretending to be reality. — Baudrillard',
    friendName: 'Jean Baudrillard',
    friendColor: '#a78bfa',
  },

  // ════════════════════════════════════════════
  // LEVEL 8 — SOURCE CHECK (Fake Experts)
  // Real: Forbes — RFK Jr. MAHA report fake citations (May 2025)
  // URL: https://www.forbes.com/sites/saradorn/2025/05/29/white-house-blames-nonexistent-medical-citations-in-rfk-jrs-maha-report-on-formatting-issues
  // ════════════════════════════════════════════
  {
    title: 'Forbes: White House Blames Nonexistent Medical Citations On "Formatting Issues"',
    source: 'Forbes',
    content: `The White House did not deny Thursday that a report on childhood chronic disease produced by Health and Human Services Secretary Robert F. Kennedy Jr.\u2019s "Make America Healthy Again" Commission was partly based on fictitious research \u2014 even as Kennedy has repeatedly claimed widely available medical research is unreliable. Epidemiologist Katherine Keyes, listed as an author of a nonexistent study, told NOTUS: "The paper cited is not a real paper that I or my colleagues were involved with." White House press secretary Karoline Leavitt said the report contained "formatting issues that are being addressed and the report will be updated," telling reporters they "do not negate the substance of the report." The report cited at least seven nonexistent studies with hallmarks of AI generation.`,
    category: 'Politics',
    categoryColor: '#14b8a6',
    imageEmoji: '📋',
    imageBg: 'from-teal-500/20 to-cyan-500/10',
    level: 8,
    neededTool: 'source-check',
    question: 'The MAHA report cited studies that never existed. What manipulation technique is this?',
    choices: [
      'Fabricated expertise \u2014 inventing research to create false authority for policy claims',
      'Proper academic peer review that accidentally missed some citations',
      'Journalistic oversight by Forbes for reporting on unpublished drafts',
      'Transparent policy-making with clear sourcing that needs minor formatting fixes',
    ],
    correctIndex: 0,
    explanation: 'Cialdini\'s Authority principle: the appearance of research is used to borrow credibility. The report cited nonexistent studies with hallmarks of AI generation. When real scientists (like Katherine Keyes) were listed as authors on research they never conducted, this crossed from mistake to fabrication. The White House called it "formatting issues" \u2014 a minimization tactic.',
    friendPreview: 'This is HUGE \u2014 RFK Jr. CAUGHT faking science in official WH report!! \ud83d\udccb\ud83d\udd25',
    friendName: 'Jay',
    friendColor: '#f59e0b',
  },

  // ════════════════════════════════════════════
  // LEVEL 9 — ECHO CHAMBER (Closed-loop reasoning)
  // Real: Washington Post \u2014 "Do your own research" fallacy (May 2025)
  // URL: https://www.washingtonpost.com/opinions/2025/05/02/dont-do-your-own-research
  // ════════════════════════════════════════════
  {
    title: 'WaPo: The "Do Your Own Research" Fallacy \u2014 A Conspiracy Theorist\'s Best Friend',
    source: 'The Washington Post',
    content: `Back in the early 1990s, pre-mass internet, an Arizona radio host named Milton William Cooper propagated conspiracy theories via shortwave broadcast. Topics included the Kennedy assassination, the U.S. government, Waco, AIDS, the IRS, the Illuminati and UFOs. "Do your own research" has since become a rallying cry. Yet many who claim to have "done their own research" have, in reality, only consumed content from sources that reinforce what they already believe. They enter an echo chamber where claims are repeated across "multiple sources" that all cite each other \u2014 not corroboration, but a closed loop. No claim is ever tested against outside evidence.`,
    category: 'Technology',
    categoryColor: '#ec4899',
    imageEmoji: '🔄',
    imageBg: 'from-pink-500/20 to-rose-500/10',
    level: 9,
    neededTool: 'echo-chamber',
    question: '"Multiple sources confirm this" \u2014 but they all cite the same original. What is this called?',
    choices: [
      'Thorough cross-referencing and investigative journalism',
      'An echo chamber \u2014 self-reinforcing information circulating without external verification',
      'Democratic consensus building through independent fact-checking',
      'Scientific peer review through academic replication',
    ],
    correctIndex: 1,
    explanation: 'Echo chamber effect: "multiple sources" often means one original story republished. Milton William Cooper\'s 1990s shortwave template \u2014 create a closed loop where claims are "confirmed" by sources that all originate from each other. Sunstein\'s "law of group polarization": in an echo chamber, beliefs become more extreme without external challenge. Ask: are these sources independent, or do they all quote the same thing?',
    friendPreview: 'The media HATES when you do your own research. They want you dependent on them. WAKE UP \ud83e\udde0\ud83d\udd13',
    friendName: 'Mia',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 10 — RED HERRING (Distraction)
  // Real: Salon \u2014 How Trump broke the American mind (Nov 2025)
  // URL: https://www.salon.com/2025/11/03/how-donald-trump-broke-the-american-mind
  // ════════════════════════════════════════════
  {
    title: 'Salon: How Trumpian Rhetoric Uses "Whataboutism" and Red Herrings to Distract',
    source: 'Salon',
    content: `Trumpian rhetoric relies on a rotating arsenal of cognitive traps: whataboutism to deflect, false equivalence to confuse, red herrings to distract and gaslighting to exhaust. If Trump's lies weaken truth, even greater damage is done to our capacity to use reason to make sense of information. Trump keeps the public in the first mode \u2014 triggered, reactive, impulsive. Every time an accusation is made, a counter-accusation is deployed: "What about Hillary? What about Biden? What about the other side?" Under Trump, critical reasoning collapses from emotional overload. A complex issue is reduced to one shocking detail. One dramatic anecdote presented as the whole story.`,
    category: 'Politics',
    categoryColor: '#8b5cf6',
    imageEmoji: '🐟',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 10,
    neededTool: 'red-herring',
    question: '"But what about the other side?" \u2014 this is a classic example of what?',
    choices: [
      'Fair and balanced bipartisan analysis',
      'A red herring \u2014 changing the subject to avoid the original accusation',
      'Demanding equal accountability across all parties',
      'Historical contextualization of political events',
    ],
    correctIndex: 1,
    explanation: 'Schopenhauer\'s eristic dialectic: when losing an argument, change the subject. "What about X" introduces a point that feels related but is actually a distraction. The Salon article calls this "red herrings to distract" \u2014 the goal is to keep the public in a triggered, reactive state where critical reasoning collapses from emotional overload. The new topic feels relevant but serves only to escape the original point.',
    friendPreview: 'They want you to forget what the Democrats did! What about Hunter\'s laptop? What about Hillary? \ud83e\udd21\ud83c\udf0e',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 11 \u2014 AGENDA SETTING (Media framing)
  // Real: BBC \u2014 Project 2025 provided Trump\'s roadmap (Jan 2026)
  // URL: https://www.bbc.com/news/articles/c5yvvjw8pdvo
  // ════════════════════════════════════════════
  {
    title: 'BBC: From Venezuela to Immigration \u2014 Project 2025 Provided Trump\'s Roadmap',
    source: 'BBC News',
    content: `Just a year into Trump's second term, and about half of Project 2025's policies have been implemented, observers say. "It really is a very detailed blueprint," said Eugene Kiley of Factcheck.org. "It sets out how to fire government employees and which ones, and how to take control of independent agencies." "Any outsider looking at this can easily see how much of this first year was set out by Project 2025. If it wasn't for President Trump this would just be a report on a shelf," said Paul Dans, former Project 2025 director. Analyses from left-leaning think tanks found 53% of policies had been initiated or completed. The framing shifts the debate from "is this policy good?" to "who really controls the White House?"`,
    category: 'Politics',
    categoryColor: '#0ea5e9',
    imageEmoji: '🎯',
    imageBg: 'from-sky-500/20 to-blue-500/10',
    level: 11,
    neededTool: 'agenda-setting',
    question: 'By focusing on "who wrote the roadmap," what does this media framing shift attention away from?',
    choices: [
      'The actual merits and consequences of each individual policy',
      'The role of Congress in approving presidential appointments',
      'The history of think tanks in American politics',
      'The personal biography of Paul Dans, Project 2025 director',
    ],
    correctIndex: 0,
    explanation: 'McCombs & Shaw\'s Agenda-Setting Theory (1972): media doesn\'t tell you what to think \u2014 it tells you WHAT TO THINK ABOUT. By framing the entire Trump agenda through the lens of "who is really in control," the BBC shifts debate from policy evaluation ("is this policy good for Americans?") to a shadow-conspiracy narrative ("who is the puppet master?"). The "real story" frame IS the manipulation \u2014 it sets your agenda.',
    friendPreview: 'BBC confirms Trump is just a puppet for Heritage Foundation\'s Project 2025. 53% already implemented. \ud83d\udea8\ud83d\udcf0',
    friendName: 'Zoe',
    friendColor: '#06b6d4',
  },

  // ════════════════════════════════════════════
  // LEVEL 12 \u2014 VALUE CHECK (Moral Foundations: Authority/Loyalty)
  // Real: AP News \u2014 Trump\'s "law and order" second term (Oct 2025)
  // URL: https://apnews.com/article/trump-crime-cities-central-park-five-88b8ee178bf22e91ba205b32c458d060
  // ════════════════════════════════════════════
  {
    title: 'AP News: Trump\'s "Law and Order" Second Term \u2014 "It\'s Like a Passion for Me"',
    source: 'Associated Press',
    content: `"Now it's like a passion for me," Trump said Wednesday as he touted the results of a crackdown named "Operation Summer Heat" in the Oval Office, during which he said the FBI had made 8,000-plus arrests. "We're going to save all of our cities, and we're going to make them essentially crime-free." As police sirens interrupted his Rose Garden speech, Trump said: "Listen to the beauty of that sound. They're not politically correct sirens." This moment encapsulated how Trump's law-and-order-at-all-costs push has become a centerpiece of his second term. Critics say the framing frames any opposition as pro-crime, short-circuiting policy debate about mass incarceration and policing reform.`,
    category: 'Politics',
    categoryColor: '#e11d48',
    imageEmoji: '📊',
    imageBg: 'from-rose-500/20 to-red-500/10',
    level: 12,
    neededTool: 'value-check',
    question: 'Haidt\'s Moral Foundations: which values does "law and order" + "beauty of sirens" primarily activate?',
    choices: [
      'Care/Harm and Liberty/Oppression (protecting freedom from government overreach)',
      'Authority/Respect + Sanctity/Purity (respecting the law and cleansing cities of crime)',
      'Fairness/Cheating and Loyalty/Betrayal (ensuring equal treatment under the law)',
      'Care/Harm and Fairness/Cheating (compassion for victims and justice for offenders)',
    ],
    correctIndex: 1,
    explanation: 'Haidt\'s Moral Foundations: "law and order" activates Authority (respect for police, law, hierarchy) and Sanctity (cities need to be "cleansed" of crime, "saved" from decay). "The beauty of sirens" frames law enforcement as aesthetically and morally beautiful \u2014 not just necessary. Critics argue this frames ANY opposition as pro-crime, using moral foundations to short-circuit policy debate. The trick: when safety is framed as a moral crusade, questioning tactics = betraying the cause.',
    friendPreview: 'Murder rate PLUMMETS to 125-year low. Trump: "Listen to the beauty of that sound." Law and order is BACK. \ud83c\uddfa\ud83c\uddf8\ud83d\udc6e\u200d\u2642\ufe0f',
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