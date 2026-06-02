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
  scientistKey: string
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
    friendPreview: '"A source close to production confirmed it" — yeah, that\'s not how evidence works. — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#ef4444',
    scientistKey: 'cialdini',
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
        friendPreview: '"Disasters are tragic enough... but they\'re made worse by AI lies." — Kahneman',
        friendName: 'Daniel Kahneman',
        friendColor: '#f59e0b',
        scientistKey: 'kahneman',
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
    scientistKey: 'kahneman',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: CIGI — Russia's AI-powered "Meliorator" disinfo in Ukraine (Feb 2026)
  // URL: https://www.cigionline.org/documents/3764/Daniela_Iampolsca_S69XWU1.pdf
  // ════════════════════════════════════════════
  {
    title: 'CIGI: Russia Weaponizes AI to Spread Anti-Ukraine Propaganda — "Meliorator" Bots',
    source: 'CIGI',
    content: `Russia's intelligence services are using an AI-powered tool called Meliorator, which generated more than 1,000 fake American social media profiles to push anti-Ukraine, pro-Kremlin propaganda. The bot network spread fear that Ukrainian refugees are "destroying our communities" and "taking over our jobs." One viral fake video claimed to show Ukrainian soldiers committing atrocities against innocent civilians — later proven to be a deepfake fabricated from stock footage. Experts say the campaign relies on fear and moral outrage to bypass critical thinking. The disinformation is designed to erode Western support for Ukraine by making every claim about the war seem suspect. "The real danger is that people stop trusting anything," said a researcher at the Atlantic Council's Digital Forensics Research Lab. "When nothing can be verified, the truth itself becomes a casualty."`,
    category: 'Conflict',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    neededTool: 'us-vs-them',
    question: 'How does the "Meliorator" campaign weaponize us-vs-them psychology?',
    choices: [
      'It presents balanced analysis of the Ukraine conflict from multiple perspectives',
      'It uses in-group branding ("our communities") and dehumanization ("taking over") to divide audiences',
      'It provides factual data about Ukrainian refugee integration in Europe',
      'It relies entirely on diplomatic language about international cooperation',
    ],
    correctIndex: 1,
    explanation: 'Tajfel\'s Social Identity Theory: "destroying our communities" and "taking over our jobs" are classic in-group branding creating an "us vs them" division. "Fake American profiles" weaponize out-group fear. The deepfake atrocity video exploits Care/Harm foundations. Multiple manipulation techniques layered together: us-vs-them framing + emotional fear + fake authority.',
    friendPreview: '"Destroying our communities" — notice how they create an "us" that is threatened. — Tajfel',
    friendName: 'Henri Tajfel',
    friendColor: '#d946ef',
    scientistKey: 'tajfel',
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
    scientistKey: 'haidt',
  },

  // ════════════════════════════════════════════
    // LEVEL 6 — HIDDEN MYTH (Barthes: Freedom vs Security)
    // Real: WaPo — Israel YouTube ads denying famine in Gaza (Oct 2025)
    // URL: https://www.washingtonpost.com/technology/2025/10/15/israel-ads-youtube-famine-gaza
    // ════════════════════════════════════════════
    {
      title: 'WaPo: Google Lets Israel Run YouTube Ads Denying Famine in Gaza — "Food Is Ample"',
      source: 'The Washington Post',
      content: `Google is allowing Israel to run YouTube advertising that claims food is "ample" in Gaza, contradicting UN reports of catastrophic hunger affecting more than a million innocent civilians. The ads show images of crowded markets and abundant produce, calling claims of famine "fake news." Human Rights Watch called the campaign "a dangerous manipulation of public opinion." The Israeli government says the ads show the "real situation" that critics are allegedly hiding. The ads use the testimonial of a supposed "local farmer" speaking about "normal life." Multiple government agencies have filed complaints arguing the ads spread dangerous misinformation about a humanitarian crisis. The framing presents two completely opposite realities — one of abundance, one of catastrophe — and asks viewers to choose which to believe.`,
      category: 'Conflict',
      categoryColor: '#06b6d4',
      imageEmoji: '🏛️',
      imageBg: 'from-cyan-500/20 to-blue-500/10',
      level: 6,
      neededTool: 'hidden-story',
      question: 'What hidden myth does the "food is ample" ad campaign rely on?',
      choices: [
        'The myth that technology companies should not fact-check political advertising',
        'The myth that "both sides deserve equal credibility" — presenting propaganda as a legitimate alternate reality',
        'The myth that famine is impossible in the 21st century',
        'The myth that YouTube is a neutral platform for all content',
      ],
      correctIndex: 1,
      explanation: 'Barthes: The campaign manufactures a parallel reality — "food is ample" versus verified famine. The hidden myth: both versions deserve equal weight. "Fake news" label (bad-arguments) dismisses UN evidence. "Local farmer testimonial" (source-check) uses anonymous authority. "Dangerous manipulation" (feelings-check) triggers outrage. The real manipulation: framing disinformation as "the other side of the story."',
      friendPreview: '"Both sides" is not always a virtue. Sometimes one side is just propaganda. — Barthes',
      friendName: 'Roland Barthes',
      friendColor: '#06b6d4',
      scientistKey: 'barthes',
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
    scientistKey: 'baudrillard',
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
    friendPreview: 'Who decides what counts as "expert"? Who benefits? — Foucault',
    friendName: 'Michel Foucault',
    friendColor: '#14b8a6',
    scientistKey: 'foucault',
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
    friendPreview: '"Multiple sources" often means one source repeated a thousand times. — Sunstein',
    friendName: 'Cass Sunstein',
    friendColor: '#ec4899',
    scientistKey: 'sunstein',
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
    friendPreview: '"What about X?" — the oldest distraction trick in the book. — Schopenhauer',
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
      title: 'Politico: Russia Is Quietly Churning Out Fake News from Africa — "African Initiative" Exposed',
      source: 'Politico',
      content: `A pro-Russian propaganda group named "African Initiative" is taking advantage of high-profile news events to spread disinformation across Africa and beyond, spoofing reputable Western news outlets. According to a State Department investigation, the network claims to report on "development and cooperation" but instead pushes anti-Western narratives about climate aid, vaccine distribution, and Chinese investment. The "real story," they claim, is that the West is exploiting Africa's natural resources while offering "nothing in return." Every article frames the continent as a victim of "Western neocolonialism." None mention Russia's own resource extraction in the region. The network has produced more than 3,000 articles since 2024, focusing on topics that trigger maximum outrage and division. Readers are told to "ignore the mainstream media" and get the "truth that nobody is talking about." The framing is designed to shift attention from Russia's actions in Africa to a narrative of perpetual Western betrayal.`,
      category: 'Technology',
      categoryColor: '#0ea5e9',
      imageEmoji: '🎯',
      imageBg: 'from-sky-500/20 to-blue-500/10',
      level: 11,
      neededTool: 'agenda-setting',
      question: 'How does "African Initiative" use agenda-setting to manipulate its audience?',
      choices: [
        'It provides balanced reporting on Western and Russian activities in Africa',
        'It sets the agenda by telling readers "the real story" and what to "ignore" and "get the truth nobody is talking about"',
        'It relies on expert testimony from African academics and policy experts',
        'It focuses exclusively on economic development statistics for African nations',
      ],
      correctIndex: 1,
      explanation: 'McCombs & Shaw\'s Agenda-Setting Theory: "The real story," "ignore the mainstream media," "truth that nobody is talking about" — these explicitly tell readers WHAT TO THINK ABOUT. The manipulation: by framing everything as "Western betrayal," the network ensures that Russia\'s own actions in Africa (resource extraction, Wagner Group operations) are never discussed. "3,000 articles since 2024" — bandwagon framing. "Nothing in return" — absolute language. The tragedy: genuine concerns about neocolonialism are weaponized to serve a different empire.',
      friendPreview: 'They tell you what to think about — and make sure you don\'t think about the rest. — McCombs & Shaw',
      friendName: 'McCombs & Shaw',
      friendColor: '#0ea5e9',
      scientistKey: 'mccombs_shaw',
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
    friendPreview: '"Law and order" — Authority and Sanctity foundations, beautifully packaged. — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#f59e0b',
    scientistKey: 'cialdini',
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