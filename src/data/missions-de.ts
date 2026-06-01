// ── MISSIONS DE v15 — 7 levels, REAL articles with real data ──
// German translation of missions.ts
// Each post uses verbatim excerpts from real news articles (2025-2026)
import type { CoreToolId } from '../types'

export interface MissionPost {
  scientistKey: string
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

const POSTS_DE: MissionPost[] = [
  // ════════════════════════════════════════════
  // LEVEL 1 — BAD ARGUMENTS (False Authority)
  // Real: Snopes — Squid Game "true story" rumor debunked (Jan 2025)
  // URL: https://www.snopes.com/news/2025/01/09/squid-games-inspired-true-story
  // ════════════════════════════════════════════
  {
    title: 'Snopes: Nein, Squid Game basiert NICHT auf einem realen Vorfall von 1986',
    source: 'Snopes',
    content: `Ein Online-Gerücht behauptet, die Netflix-Serie "Squid Game" sei von einer wahren Geschichte über Geiseln in einem s\u00fcdkoreanischen Bunker aus dem Jahr 1986 inspiriert worden. Laut der viralen Behauptung basierte die Show auf realen Ereignissen. Snopes fand keine definitive Verbindung zwischen "Squid Game" und der Einrichtung "Brother's Home". Der Sch\u00f6pfer der Show, Hwang Dong-hyuk, erw\u00e4hnte niemals eine solche Inspiration. Er erkl\u00e4rte: "Ich gebe frei zu, dass ich gro\u00dfe Inspiration aus japanischen Comics und Animationen \u00fcber die Jahre gezogen habe." Das virale Ger\u00fccht vermischt einen realen Ort von Menschenrechtsverletzungen mit einem fiktiven \u00dcberlebensdrama. Experten sagen, die Behauptung verbreitete sich, weil anonyme Social-Media-Konten sie als Tatsache pr\u00e4sentierten, ohne benannte Quellen anzugeben.`,
    category: 'Unterhaltung',
    categoryColor: '#ef4444',
    imageEmoji: '\uD83C\uDFAE',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    scientistKey: 'schopenhauer',
    neededTool: 'bad-arguments',
    question: 'Der virale Beitrag nutzte anonyme Quellen und falsche Referenzen. Welche Technik ist das?',
    choices: [
      'Anonyme Autorit\u00e4t \u2014 Behauptungen klingen glaubw\u00fcrdig, ohne eine benannte Quelle',
      'Emotionale Manipulation durch Angst und Schock',
      'Richtige Quellenangabe mit \u00fcberpr\u00fcfbaren Experten',
      'Logische Schlussfolgerung aus vorhandenen Beweisen',
    ],
    correctIndex: 0,
    explanation: '"Eine Quelle aus der Produktion" und "laut anonymen Angaben" sind klassische anonyme Autorit\u00e4t. Cialdinis Autorit\u00e4tsprinzip: Behauptungen leihen sich Glaubw\u00fcrdigkeit von unbenannten "Insidern". Snopes untersuchte den Fall und fand keinerlei Beweise, dass der Sch\u00f6pfer diese Inspiration jemals erw\u00e4hnte. Die gesamte Geschichte wurde mittels falscher Autorit\u00e4t erfunden.',
    friendPreview: 'Alter, hast du das \u00fcber Squid Game gesehen?? \uD83D\uDC40',
    friendName: 'Alex',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 2 — FEELINGS CHECK (Fear + Outrage)
  // Real: NPR — AI misinformation after plane crash (Jan 2026)
  // URL: https://www.npr.org/2026/01/01/nx-s1-5645183/ai-powered-software-is-helping-misinformation-spread-online-after-disasters
  // ════════════════════════════════════════════
  {
    title: 'NPR: KI-generierte Katastrophenl\u00fcgen verbreiten sich \u2014 "Echter Schaden"',
    source: 'NPR',
    content: `Noch bevor Ermittler begannen, die Tr\u00fcmmer zu bergen, nachdem ein UPS-Frachtflugzeug im November in Louisville, Kentucky, w\u00e4hrend des Starts Feuer fing und abst\u00fcrzte, teilten und reagierten die Menschen bereits auf falsche KI-generierte Artikel und Videos in den sozialen Medien. Ein gef\u00e4lschtes Video \u2014 mehr als 1.000 Mal geteilt \u2014 zeigte falsche Feuerwehrleute, die ein falsches Feuer neben einem falschen zerst\u00f6rten Rumpf l\u00f6schten. Eine KI-generierte Stimme war zu h\u00f6ren, die Notfallanweisungen gab. Andere Falschmeldungen behaupteten, Verwandte von Kid Rock und Bob Dylan seien bei dem Absturz gestorben. Nichts davon war wahr. Unterdessen behauptete Xs KI-Assistent Grok, ein echtes Foto von Gouverneur Andy Beshear aus Kentucky am Unfallort stamme von einer fr\u00fcheren Katastrophe. Imran Ahmed, CEO des Center for Countering Digital Hate, sagte: "Katastrophen sind tragisch genug f\u00fcr sich, aber sie werden tats\u00e4chlich noch schlimmer, wenn man zul\u00e4sst, dass KI-generierte und algorithmisch verst\u00e4rkte L\u00fcgen ungehindert verbreitet werden und potenziell echten Schaden anrichten."`,
    category: 'Technologie',
    categoryColor: '#f59e0b',
    imageEmoji: '\uD83E\uDD16',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    scientistKey: 'cialdini',
    neededTool: 'feelings-check',
    question: 'Welche emotionalen und moralischen Ausl\u00f6ser verwendet dieser Artikel, um dich zu bewegen?',
    choices: [
      'Angst vor echtem Schaden + moralische Emp\u00f6rung \u00fcber Profit aus Trag\u00f6dien',
      'Neugier, wie KI-Videogenerierung funktioniert',
      'Freude \u00fcber technologischen Fortschritt bei der Katastrophenhilfe',
      'Langeweile \u2014 es ist nur eine weitere Absturzgeschichte',
    ],
    correctIndex: 0,
    explanation: 'Der Artikel nutzt Cialdinis Knappheitsprinzip (Dringlichkeit der Katastrophe) und Haidts F\u00fcrsorge-Grundlage (Opfer, betroffene Familien). "Tragisch", "Schaden", "L\u00fcgen verbreiten sich ungehindert" l\u00f6sen Angst und Emp\u00f6rung aus. Die emotionale Aufladung bringt dich dazu, KI-Fehlinformationen abzulehnen, ohne Fakten \u00fcber Regulierung zu ben\u00f6tigen. Die Erw\u00e4hnung von Profit aus L\u00fcgen f\u00fcgt Fairness-Emp\u00f6rung hinzu \u2014 jemand profitiert von der Trag\u00f6die.',
    friendPreview: 'Das ist wirklich erschreckend \uD83E\uDD2F',
    friendName: 'Jay',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 3 — BRAIN CHECK (Bandwagon + Anchoring)
  // Real: University of Sydney / JAMA Network Open (Feb 2025)
  // URL: https://www.sydney.edu.au/news-opinion/news/2025/02/27/--influencers-promoting--overwhelmingly--misleading-information-.html
  // ════════════════════════════════════════════
  {
    title: 'University of Sydney: "\u00dcberw\u00e4ltigend irref\u00fchrende" medizinische Tests werden auf TikTok viral',
    source: 'JAMA Network Open',
    content: `Influencer bewerben "\u00fcberw\u00e4ltigend" irref\u00fchrende Informationen \u00fcber medizinische Tests auf Instagram und TikTok, so eine globale, von der University of Sydney geleitete Studie, die in JAMA Network Open ver\u00f6ffentlicht wurde. Die Tests umfassen Ganzk\u00f6rper-MRT-Scans, die angeblich bis zu 500 Erkrankungen erkennen k\u00f6nnen; Gentests, die angeblich fr\u00fche Anzeichen von 50 Krebsarten identifizieren; Bluttests f\u00fcr Testosteronspiegel; den AMH-Test zur Bestimmung der Eizellreserve einer Frau; und den Darmmikrobiom-Test. "Die \u00fcberw\u00e4ltigende Mehrheit dieser Beitr\u00e4ge war extrem irref\u00fchrend", sagte Dr. Brooke Nickel, die die Forschung an der School of Public Health der Medizinischen Fakult\u00e4t leitete. "Diese Tests bergen das Potenzial, dass gesunde Menschen unn\u00f6tige Diagnosen erhalten, was zu unn\u00f6tigen medizinischen Behandlungen f\u00fchren kann."`,
    category: 'Gesundheit',
    categoryColor: '#22c55e',
    imageEmoji: '\uD83C\uDFE5',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    scientistKey: 'kahneman',
    neededTool: 'brain-check',
    question: 'Influencer sagen "die meisten Menschen empfehlen" diese Tests und "jeder macht es". Welcher kognitive Bias ist das?',
    choices: [
      'Anker-Effekt \u2014 eine gro\u00dfe Zahl (500 Erkrankungen) setzt einen extremen Referenzpunkt',
      'Mitl\u00e4ufereffekt \u2014 Berufung auf Popularit\u00e4t ersetzt wissenschaftliche Belege',
      'Autorit\u00e4t \u2014 Vertrauen auf den Influencer als Experten',
      'Best\u00e4tigungsfehler \u2014 sehen, was man bereits glaubt',
    ],
    correctIndex: 1,
    explanation: '"Die meisten Menschen", "jeder macht es", "\u00fcberw\u00e4ltigende Mehrheit" \u2014 alles Mitl\u00e4ufer-Signale. Kahnemans Verf\u00fcgbarkeitsheuristik: "Viele glauben" ist nicht gleich "durch Belege gest\u00fctzt". Dr. Brooke Nickel von der University of Sydney, publiziert in JAMA Network Open, best\u00e4tigte, dass diesen Tests die wissenschaftliche Grundlage fehlt. Der Anker-Effekt kommt von der Zahl "500 Erkrankungen" \u2014 setzt einen unm\u00f6glichen Standard.',
    friendPreview: 'Hast du diese Gesundheits-Tests auf TikTok gesehen? \uD83C\uDFE5',
    friendName: 'Mia',
    friendColor: '#f59e0b',
  },

  // ════════════════════════════════════════════
  // LEVEL 4 — US VS THEM (In-group/Out-group)
  // Real: Al Jazeera — Trump UN speech on asylum seekers (Sep 2025)
  // URL: https://www.aljazeera.com/news/2025/9/25/trump-officials-rally-global-leaders-for-restrictions-on-asylum-seekers
  // ════════════════════════════════════════════
  {
    title: 'Al Jazeera: Trump bei der UN \u2014 "Sie wurden von einer Streitmacht illegaler Einwanderer \u00fcberfallen"',
    source: 'Al Jazeera',
    content: `Pr\u00e4sident Trump warnte bei der UN-Generalversammlung im September 2025, dass die Aufnahme von Einwanderern andere L\u00e4nder "zerst\u00f6re". Er sagte: "Sie wurden von einer Streitmacht illegaler Einwanderer \u00fcberfallen, wie man es noch nie zuvor gesehen hat. Illegale Einwanderer str\u00f6men nach Europa." Vizeau\u00dfenminister Christopher Landau erkl\u00e4rte in einem Nebenpanel: "Wenn man Hunderttausende von falschen Asylsuchenden hat, was passiert dann mit dem echten Asylsystem?" Bill Frelick von Human Rights Watch sagte, der US-Plan sehe "wie der erste Schritt aus, das globale Fl\u00fcchtlingssystem niederzurei\u00dfen". Es wurden keine konkreten Daten dar\u00fcber pr\u00e4sentiert, wer "sie" sind.`,
    category: 'Politik',
    categoryColor: '#d946ef',
    imageEmoji: '\uD83D\uDEA7',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    scientistKey: 'tajfel',
    neededTool: 'us-vs-them',
    question: 'Welche Wir-gegen-Sie-Technik verwendet "von illegalen Einwanderern \u00fcberfallen" und "falsche Asylsuchende"?',
    choices: [
      'Ausgewogene Berichterstattung \u00fcber beide Seiten der Einwanderungsdebatte',
      'Entmenschlichung durch Kriegsmetaphern und Fremdgruppen-Etikettierung',
      'Faktische demografische Daten \u00fcber Migrationsmuster',
      'Diplomatische Sprache \u00fcber internationale Zusammenarbeit',
    ],
    correctIndex: 1,
    explanation: 'Tajfels Theorie der sozialen Identit\u00e4t: "\u00fcberfallen" ist eine Kriegsmetapher, die Einwanderer als angreifende Streitmacht entmenschlicht. "Illegale Einwanderer" und "falsche Asylsuchende" sind Fremdgruppen-Etiketten, die Menschen auf eine Kategorie reduzieren. Human Rights Watch best\u00e4tigte, dass es keine Belege f\u00fcr die "falsch"-Behauptung gibt. Keinerlei konkrete Daten dar\u00fcber, wer "sie" sind \u2014 reine Wir-gegen-Sie-Rahmung.',
    friendPreview: 'Endlich sagt es mal einer \uD83C\uDDFA\uD83C\uDDF8',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 5 — MORAL BUTTONS (Haidt: Care/Harm)
  // Real: The Guardian — Mumsnet under-16s social media ban (Feb 2026)
  // URL: https://www.theguardian.com/society/2026/feb/26/mumsnet-campaign-demands-ban-social-media-under-16s
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: Mumsnet fordert Social-Media-Verbot f\u00fcr unter 16-J\u00e4hrige mit Gesundheitswarnungen',
    source: 'The Guardian',
    content: `Mumsnet hat eine Kampagne gestartet, um ein Verbot von Social Media f\u00fcr unter 16-J\u00e4hrige einzuf\u00fchren, das Gesundheitswarnungen im Stil von Zigarettenpackungen vorsieht. Gr\u00fcnderin Justine Roberts sagte: "Familien leiden t\u00e4glich unter dem Schaden, den soziale Medien verursachen. Es geht nicht darum, dass Eltern es vers\u00e4umen, Grenzen zu setzen. Es geht darum, dass Kinder Produkten ausgesetzt werden, die bewusst s\u00fcchtig machend gestaltet sind. Eltern beobachten die Folgen: zwanghafte Nutzung, Schlafmangel, zunehmende Angst und sinkendes Selbstwertgef\u00fchl, w\u00e4hrend die verantwortlichen Unternehmen weiterhin profitieren." Das Royal College of Psychiatrists unterst\u00fctzte die Forderung nach "st\u00e4rkerer Regulierung".`,
    category: 'Gesellschaft',
    categoryColor: '#8b5cf6',
    imageEmoji: '\uD83D\uDC76',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    scientistKey: 'haidt',
    neededTool: 'value-check',
    question: 'Welche moralische Grundlage aktivieren "Schaden", "Kinder", "s\u00fcchtig machend", "sinkendes Selbstwertgef\u00fchl"?',
    choices: [
      'Autorit\u00e4t/Respekt (der Institution gehorchen)',
      'F\u00fcrsorge/Schaden (Mitgef\u00fchl f\u00fcr verletzliche Kinder)',
      'Loyalit\u00e4t/Patriotismus (unsere Nation besch\u00fctzen)',
      'Heiligkeit/Reinheit (moralische Abscheu vor Korruption)',
    ],
    correctIndex: 1,
    explanation: 'Haidts F\u00fcrsorge-Grundlage: "Schaden", "Kinder", "s\u00fcchtig machend", "zwanghaft", "Angst", "sinkendes Selbstwertgef\u00fchl" \u2014 alles l\u00f6st Mitgef\u00fchl UND Emp\u00f6rung aus. Der F\u00fcrsorge-Knopf ist der universellste moralische Ausl\u00f6ser. Der rhetorische Trick: Social-Media-Unternehmen als vors\u00e4tzliche Sch\u00e4diger darzustellen ("bewusst s\u00fcchtig machend gestaltet"), die am Leid der Kinder "profitieren". Schwer, sich gegen "Kinder sch\u00fctzen" zu stellen.',
    friendPreview: 'Das bricht mir das Herz \uD83D\uDC94',
    friendName: 'Emma',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 6 — HIDDEN MYTH (Barthes: Freedom vs Security)
  // Real: NPR — Section 702 FISA surveillance debate (Apr 2026)
  // URL: https://www.npr.org/2026/04/14/nx-s1-5768270/what-to-know-about-section-702-surveillance
  // ════════════════════════════════════════════
  {
    title: 'NPR: Warum der Kongress \u00fcber ein zentrales Instrument der amerikanischen \u00dcberwachung streitet',
    source: 'NPR',
    content: `Die Regierung sagt, dass durch Section 702 des FISA gesammelte Geheimdienstinformationen "die Mehrheit" der t\u00e4glichen Pr\u00e4sidentenbesprechung untermauern und ein zentrales Instrument der Terrorismusbek\u00e4mpfung sind. Aber Abgeordnete sind besorgt, dass FISA 702 es der Bundesregierung erlaubt, Amerikaner ohne Durchsuchungsbefehl zu \u00fcberwachen und damit ihr verfassungsm\u00e4\u00dfiges Recht auf Privatsph\u00e4re zu verletzen. Elizabeth Goitein vom Brennan Center sagte: "Das FBI durchsucht diese Daten routinem\u00e4\u00dfig mit dem ausdr\u00fccklichen Ziel, die Kommunikation von Amerikanern zu finden und zu nutzen." Datenschutzaktivisten argumentieren, dies sei ein "Versto\u00df gegen den vierten Verfassungszusatz". Das FISA-Gericht charakterisierte FBI-Verst\u00f6\u00dfe als "anhaltend und weit verbreitet". Die Debatte stellt Sicherheit als etwas dar, das die Einschr\u00e4nkung von Freiheit erfordert.`,
    category: 'Politik',
    categoryColor: '#06b6d4',
    imageEmoji: '\uD83C\uDFDB\uFE0F',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    scientistKey: 'barthes',
    neededTool: 'hidden-story',
    question: 'Die Geschichte wird als "Sicherheit gegen Privatsph\u00e4re" gerahmt. Welcher versteckte Mythos wird verkauft?',
    choices: [
      'Der Mythos, dass Technologie immer die Sicherheit verbessert',
      'Der Mythos, dass man Freiheit f\u00fcr Sicherheit opfern muss \u2014 sie werden als Gegens\u00e4tze dargestellt',
      'Der Mythos, dass staatliche \u00dcberwachung immer effektiv ist',
      'Der Mythos, dass Privatsph\u00e4re in der modernen Welt nicht mehr m\u00f6glich ist',
    ],
    correctIndex: 1,
    explanation: 'Barthes: "Sicherheit gegen Privatsph\u00e4re" ist ein bin\u00e4rer Mythos. Die verborgene Botschaft: Du kannst nicht beides haben. Aber das Brennan Center argumentiert, dass Aufsicht und Durchsuchungsbefehle beides erm\u00f6glichen k\u00f6nnen. "Untermauert die Mehrheit" \u2014 Mitl\u00e4ufereffekt f\u00fcr Sicherheit. "Anhaltend und weit verbreitet" \u2014 absolute Worte f\u00fcr Verst\u00f6\u00dfe. Der Mythos: Freiheit und Sicherheit sind Gegens\u00e4tze, obwohl in Wirklichkeit echte Sicherheit nicht den Austausch von B\u00fcrgerrechten erfordert.',
    friendPreview: 'Was denkst du dar\u00fcber? \uD83E\uDD14',
    friendName: 'Zoe',
    friendColor: '#06b6d4',
  },

  // ════════════════════════════════════════════
  // LEVEL 7 — FAKE CHECK (Baudrillard: Hyperreality)
  // Real: The Guardian — AI deepfakes of real doctors (Dec 2025)
  // URL: https://www.theguardian.com/society/2025/dec/05/ai-deepfakes-of-real-doctors-spreading-health-misinformation-on-social-media
  // ════════════════════════════════════════════
  {
    title: 'The Guardian: KI-Deepfakes echter \u00c4rzte verbreiten Gesundheits-Fehlinformationen',
    source: 'The Guardian',
    content: `TikTok und andere soziale Medienplattformen hosten KI-generierte Deepfake-Videos von echten \u00c4rzten, deren Worte manipuliert wurden, um Nahrungserg\u00e4nzungsmittel zu verkaufen und Gesundheits-Fehlinformationen zu verbreiten. Die Faktenpr\u00fcfungsorganisation Full Fact deckte Hunderte solcher Videos auf, die auf Frauen in den Wechseljahren abzielten. Prof. David Taylor-Robinson von der Liverpool University, ein Spezialist f\u00fcr Kindergesundheit, wurde in 14 manipulierten TikTok-Videos verwendet \u2014 Filmmaterial von einem Vortrag von Public Health England aus dem Jahr 2017 wurde umgeschrieben, um f\u00e4lschlicherweise ein "nat\u00fcrliches Probiotikum" f\u00fcr die Menopause zu bewerben. Ein irref\u00fchrendes Video zeigte ihn, wie er fluchte und frauenfeindliche Bemerkungen machte. TikTok entfernte die Videos erst sechs Wochen, nachdem er sich beschwert hatte.`,
    category: 'Klickk\u00f6der',
    categoryColor: '#a78bfa',
    imageEmoji: '\uD83D\uDCF1',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    scientistKey: 'baudrillard',
    neededTool: 'fake-check',
    question: 'Baudrillard w\u00fcrde sagen: Auf welcher Realit\u00e4tsebene operieren diese KI-Deepfake-Videos?',
    choices: [
      'Reales Ereignis \u2014 echte medizinische Beratung von echten \u00c4rzten',
      'Verzerrt, aber basierend auf echten wissenschaftlichen Erkenntnissen',
      'Reine Simulation \u2014 der echte Arzt hat diese Worte nie gesagt, es ist vollst\u00e4ndig erfunden',
      'Satirischer Kommentar zur modernen Medizin',
    ],
    correctIndex: 2,
    explanation: 'Baudrillards Hyperrealit\u00e4t: Prof. David Taylor-Robinson hat diesen medizinischen Rat nie gegeben. Das Video ist eine Simulation, die vorgibt, Realit\u00e4t zu sein \u2014 ein Simulakrum (eine Kopie ohne Original). Der angeblich von ihm stammende Rat zu "nat\u00fcrlichem Probiotikum" war vollst\u00e4ndig aus gestohlenem Filmmaterial erfunden. Full Fact fand Hunderte solcher Videos. Die Simulation ersetzte die Realit\u00e4t so \u00fcberzeugend, dass Zuschauer den Unterschied nicht erkennen konnten.',
    friendPreview: 'Oh mein Gott, das musst du sehen!! \uD83D\uDCF1',
    friendName: 'TikTok Tom',
    friendColor: '#a78bfa',
  },

  // ════════════════════════════════════════════
  // LEVEL 8 — SOURCE CHECK (Fake Experts)
  // Real: Forbes — RFK Jr. MAHA report fake citations (May 2025)
  // URL: https://www.forbes.com/sites/saradorn/2025/05/29/white-house-blames-nonexistent-medical-citations-in-rfk-jrs-maha-report-on-formatting-issues
  // ════════════════════════════════════════════
  {
    title: 'Forbes: Wei\u00dfes Haus schiebt nichtexistierende medizinische Zitate auf "Formatierungsprobleme"',
    source: 'Forbes',
    content: `Das Wei\u00dfe Haus hat am Donnerstag nicht dementiert, dass ein Bericht \u00fcber chronische Kinderkrankheiten, der von der Kommission "Make America Healthy Again" von Gesundheitsminister Robert F. Kennedy Jr. erstellt wurde, teilweise auf fiktiver Forschung basierte \u2014 selbst w\u00e4hrend Kennedy wiederholt behauptete, dass allgemein verf\u00fcgbare medizinische Forschung unzuverl\u00e4ssig sei. Die Epidemiologin Katherine Keyes, die als Autorin einer nichtexistierenden Studie aufgef\u00fchrt wurde, sagte NOTUS: "Das genannte Papier ist kein echtes Papier, an dem ich oder meine Kollegen beteiligt waren." Die Pressesprecherin des Wei\u00dfen Hauses, Karoline Leavitt, sagte, der Bericht enthalte "Formatierungsprobleme, die behoben werden, und der Bericht wird aktualisiert", und sagte Reportern, dass sie "die Substanz des Berichts nicht in Frage stellen". Der Bericht zitierte mindestens sieben nichtexistierende Studien mit Merkmalen von KI-Generierung.`,
    category: 'Politik',
    categoryColor: '#14b8a6',
    imageEmoji: '\uD83D\uDCCB',
    imageBg: 'from-teal-500/20 to-cyan-500/10',
    level: 8,
    scientistKey: 'foucault',
    neededTool: 'source-check',
    question: 'Der MAHA-Bericht zitierte Studien, die nie existiert haben. Welche Manipulationstechnik ist das?',
    choices: [
      'Erfundene Expertise \u2014 Forschung erfinden, um falsche Autorit\u00e4t f\u00fcr politische Forderungen zu schaffen',
      'Ordnungsgem\u00e4\u00dfe akademische Peer-Review, die versehentlich einige Zitate \u00fcbersehen hat',
      'Journalistische Aufsicht durch Forbes \u00fcber unver\u00f6ffentlichte Entw\u00fcrfe',
      'Transparente Politikgestaltung mit klaren Quellenangaben, die kleinere Formatierungskorrekturen ben\u00f6tigt',
    ],
    correctIndex: 0,
    explanation: 'Cialdinis Autorit\u00e4tsprinzip: Der Anschein von Forschung wird genutzt, um Glaubw\u00fcrdigkeit zu leihen. Der Bericht zitierte nichtexistierende Studien mit Merkmalen von KI-Generierung. Als echte Wissenschaftler (wie Katherine Keyes) als Autoren von Forschung aufgef\u00fchrt wurden, die sie nie durchgef\u00fchrt hatten, ging dies von einem Fehler zur F\u00e4lschung \u00fcber. Das Wei\u00dfe Haus nannte es "Formatierungsprobleme" \u2014 eine Verharmlosungstaktik.',
    friendPreview: 'Das ist RIESIG \u2014 RFK Jr. beim F\u00e4lschen von Wissenschaft in einem offiziellen WH-Bericht ERWISCHT!! \uD83D\uDCCB\uD83D\uDD25',
    friendName: 'Jay',
    friendColor: '#f59e0b',
  },

  // ════════════════════════════════════════════
  // LEVEL 9 — ECHO CHAMBER (Closed-loop reasoning)
  // Real: Washington Post — "Do your own research" fallacy (May 2025)
  // URL: https://www.washingtonpost.com/opinions/2025/05/02/dont-do-your-own-research
  // ════════════════════════════════════════════
  {
    title: 'WaPo: Der "Recherchiere selbst"-Trugschluss \u2014 Der beste Freund von Verschw\u00f6rungstheoretikern',
    source: 'The Washington Post',
    content: `In den fr\u00fchen 1990er Jahren, vor dem Masseninternet, verbreitete ein Radiomoderator aus Arizona namens Milton William Cooper Verschw\u00f6rungstheorien \u00fcber Kurzwellenrundfunk. Zu den Themen geh\u00f6rten das Kennedy-Attentat, die US-Regierung, Waco, AIDS, das IRS, die Illuminaten und UFOs. "Recherchiere selbst" ist seitdem ein Schlachtruf geworden. Doch viele, die behaupten, "selbst recherchiert" zu haben, haben in Wirklichkeit nur Inhalte von Quellen konsumiert, die das verst\u00e4rken, was sie bereits glauben. Sie betreten eine Echokammer, in der Behauptungen \u00fcber "mehrere Quellen" hinweg wiederholt werden, die alle aufeinander verweisen \u2014 keine Best\u00e4tigung, sondern eine geschlossene Schleife. Keine Behauptung wird jemals an externen Beweisen gepr\u00fcft.`,
    category: 'Technologie',
    categoryColor: '#ec4899',
    imageEmoji: '\uD83D\uDD04',
    imageBg: 'from-pink-500/20 to-rose-500/10',
    level: 9,
    scientistKey: 'sunstein',
    neededTool: 'echo-chamber',
    question: '"Mehrere Quellen best\u00e4tigen das" \u2014 aber sie alle zitieren dieselbe Originalquelle. Wie nennt man das?',
    choices: [
      'Gr\u00fcndliche Querverweise und investigativer Journalismus',
      'Eine Echokammer \u2014 sich selbst verst\u00e4rkende Informationen, die ohne externe \u00dcberpr\u00fcfung zirkulieren',
      'Demokratischer Konsensbildung durch unabh\u00e4ngige Faktenpr\u00fcfung',
      'Wissenschaftliche Peer-Review durch akademische Replikation',
    ],
    correctIndex: 1,
    explanation: 'Echokammer-Effekt: "mehrere Quellen" bedeuten oft eine einzige Originalgeschichte, die neu ver\u00f6ffentlicht wurde. Milton William Cools Kurzwellen-Template aus den 1990ern \u2014 eine geschlossene Schleife erschaffen, in der Behauptungen von Quellen "best\u00e4tigt" werden, die alle voneinander stammen. Sunsteins "Gesetz der Gruppenpolarisierung": In einer Echokammer werden \u00dcberzeugungen ohne externe Herausforderung extremer. Frage: Sind diese Quellen unabh\u00e4ngig, oder zitieren sie alle dasselbe?',
    friendPreview: 'Die Medien HASSEN es, wenn du selbst recherchierst. Sie wollen, dass du von ihnen abh\u00e4ngig bist. WACH AUF \uD83E\uDDE0\uD83D\uDD13',
    friendName: 'Mia',
    friendColor: '#22c55e',
  },

  // ════════════════════════════════════════════
  // LEVEL 10 — RED HERRING (Distraction)
  // Real: Salon — How Trump broke the American mind (Nov 2025)
  // URL: https://www.salon.com/2025/11/03/how-donald-trump-broke-the-american-mind
  // ════════════════════════════════════════════
  {
    title: 'Salon: Wie Trumpistische Rhetorik "Whataboutism" und Ablenkungsman\u00f6ver nutzt',
    source: 'Salon',
    content: `Trumpistische Rhetorik st\u00fctzt sich auf ein rotierendes Arsenal kognitiver Fallen: Whataboutism, um abzulenken, falsche Gleichsetzung, um zu verwirren, Ablenkungsman\u00f6ver, um zu zerstreuen, und Gaslighting, um zu ersch\u00f6pfen. Wenn Trumps L\u00fcgen die Wahrheit schw\u00e4chen, wird noch gr\u00f6\u00dferer Schaden an unserer F\u00e4higkeit angerichtet, Vernunft zu nutzen, um Informationen zu verstehen. Trump h\u00e4lt die \u00d6ffentlichkeit im ersten Modus \u2014 getriggert, reaktiv, impulsiv. Jedes Mal, wenn ein Vorwurf erhoben wird, wird ein Gegenvorwurf eingesetzt: "Was ist mit Hillary? Was ist mit Biden? Was ist mit der anderen Seite?" Unter Trump bricht kritisches Denken durch emotionale \u00dcberlastung zusammen. Ein komplexes Thema wird auf ein einziges schockierendes Detail reduziert. Eine dramatische Anekdote wird als die ganze Geschichte pr\u00e4sentiert.`,
    category: 'Politik',
    categoryColor: '#8b5cf6',
    imageEmoji: '\uD83D\uDC1F',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 10,
    scientistKey: 'schopenhauer',
    neededTool: 'red-herring',
    question: '"Aber was ist mit der anderen Seite?" \u2014 das ist ein klassisches Beispiel f\u00fcr was?',
    choices: [
      'Faire und ausgewogene \u00fcberparteiliche Analyse',
      'Ein Ablenkungsman\u00f6ver \u2014 das Thema wechseln, um dem urspr\u00fcnglichen Vorwurf auszuweichen',
      'Forderung nach gleicher Rechenschaftspflicht f\u00fcr alle Parteien',
      'Historische Kontextualisierung politischer Ereignisse',
    ],
    correctIndex: 1,
    explanation: 'Schopenhauers eristische Dialektik: Wenn du ein Argument verlierst, wechsle das Thema. "Was ist mit X" f\u00fchrt einen Punkt ein, der sich relevant anf\u00fchlt, aber tats\u00e4chlich eine Ablenkung ist. Der Salon-Artikel nennt dies "Ablenkungsman\u00f6ver, um zu zerstreuen" \u2014 das Ziel ist, die \u00d6ffentlichkeit in einem getriggerten, reaktiven Zustand zu halten, in dem kritisches Denken durch emotionale \u00dcberlastung zusammenbricht. Das neue Thema f\u00fchlt sich relevant an, dient aber nur dazu, dem urspr\u00fcnglichen Punkt zu entkommen.',
    friendPreview: 'Sie wollen, dass du vergisst, was die Demokraten getan haben! Was ist mit Hunters Laptop? Was ist mit Hillary? \uD83E\uDD21\uD83C\uDF0E',
    friendName: 'Jack',
    friendColor: '#ef4444',
  },

  // ════════════════════════════════════════════
  // LEVEL 11 — AGENDA SETTING (Media framing)
  // Real: BBC — Project 2025 provided Trump's roadmap (Jan 2026)
  // URL: https://www.bbc.com/news/articles/c5yvvjw8pdvo
  // ════════════════════════════════════════════
  {
    title: 'BBC: Von Venezuela bis Einwanderung \u2014 Project 2025 lieferte Trumps Fahrplan',
    source: 'BBC News',
    content: `Nur ein Jahr in Trumps zweiter Amtszeit, und etwa die H\u00e4lfte der Ma\u00dfnahmen von Project 2025 wurde umgesetzt, so Beobachter. "Es ist wirklich ein sehr detaillierter Bauplan", sagte Eugene Kiley von Factcheck.org. "Es legt dar, wie man Regierungsangestellte entl\u00e4sst und welche, und wie man die Kontrolle \u00fcber unabh\u00e4ngige Beh\u00f6rden \u00fcbernimmt." "Jeder Au\u00dfenstehende, der sich das ansieht, kann leicht erkennen, wie viel von diesem ersten Jahr durch Project 2025 vorgegeben wurde. Wenn es Pr\u00e4sident Trump nicht g\u00e4be, w\u00e4re dies nur ein Bericht im Regal", sagte Paul Dans, ehemaliger Direktor von Project 2025. Analysen von linksgerichteten Thinktanks ergaben, dass 53 % der Ma\u00dfnahmen eingeleitet oder abgeschlossen waren. Die Rahmung verschiebt die Debatte von "Ist diese Politik gut?" zu "Wer kontrolliert wirklich das Wei\u00dfe Haus?"`,
    category: 'Politik',
    categoryColor: '#0ea5e9',
    imageEmoji: '\uD83C\uDFAF',
    imageBg: 'from-sky-500/20 to-blue-500/10',
    level: 11,
    scientistKey: 'mccombs_shaw',
    neededTool: 'agenda-setting',
    question: 'Indem der Fokus auf "wer den Fahrplan geschrieben hat" gelegt wird, wovon lenkt diese Medienrahmung ab?',
    choices: [
      'Die tats\u00e4chlichen Vor- und Nachteile jeder einzelnen politischen Ma\u00dfnahme',
      'Die Rolle des Kongresses bei der Best\u00e4tigung von Pr\u00e4sidentschaftsernennungen',
      'Die Geschichte von Thinktanks in der amerikanischen Politik',
      'Die pers\u00f6nliche Biografie von Paul Dans, dem Direktor von Project 2025',
    ],
    correctIndex: 0,
    explanation: 'McCombs & Shaws Agenda-Setting-Theorie (1972): Medien sagen dir nicht, WAS du denken sollst \u2014 sie sagen dir, WOR\u00dcBER du nachdenken sollst. Indem die BBC die gesamte Trump-Agenda durch die Linse "Wer hat wirklich die Kontrolle?" rahmt, verschiebt sie die Debatte von der Politikevaluierung ("Ist diese Politik gut f\u00fcr die Amerikaner?") zu einem Schattenverschw\u00f6rungs-Narrativ ("Wer ist der Puppenspieler?"). Der Rahmen der "wahren Geschichte" IST die Manipulation \u2014 er setzt deine Agenda.',
    friendPreview: 'BBC best\u00e4tigt, dass Trump nur eine Marionette f\u00fcr das Project 2025 der Heritage Foundation ist. 53 % bereits umgesetzt. \uD83D\uDEA8\uD83D\uDCF0',
    friendName: 'Zoe',
    friendColor: '#06b6d4',
  },

  // ════════════════════════════════════════════
  // LEVEL 12 — VALUE CHECK (Moral Foundations: Authority/Loyalty)
  // Real: AP News — Trump's "law and order" second term (Oct 2025)
  // URL: https://apnews.com/article/trump-crime-cities-central-park-five-88b8ee178bf22e91ba205b32c458d060
  // ════════════════════════════════════════════
  {
    title: 'AP News: Trumps "Recht und Ordnung"-zweite Amtszeit \u2014 "Es ist wie eine Leidenschaft f\u00fcr mich"',
    source: 'Associated Press',
    content: `"Jetzt ist es wie eine Leidenschaft f\u00fcr mich", sagte Trump am Mittwoch, als er die Ergebnisse einer Razzia namens "Operation Summer Heat" im Oval Office anpries, bei der das FBI laut seinen Angaben \u00fcber 8.000 Verhaftungen vorgenommen hatte. "Wir werden alle unsere St\u00e4dte retten und wir werden sie im Wesentlichen verbrechensfrei machen." Als Polizeisirenen seine Rede im Rosengarten unterbrachen, sagte Trump: "H\u00f6rt euch die Sch\u00f6nheit dieses Klangs an. Das sind keine politisch korrekten Sirenen." Dieser Moment verdeutlichte, wie Trumps "Recht und Ordnung um jeden Preis"-Vorsto\u00df zu einem zentralen Bestandteil seiner zweiten Amtszeit geworden ist. Kritiker sagen, die Rahmung stelle jeden Widerstand als verbrechensfreundlich dar und untergrabe die politische Debatte \u00fcber Masseninhaftierung und Polizeireform.`,
    category: 'Politik',
    categoryColor: '#e11d48',
    imageEmoji: '\uD83D\uDCCA',
    imageBg: 'from-rose-500/20 to-red-500/10',
    level: 12,
    scientistKey: 'cialdini',
    neededTool: 'value-check',
    question: 'Haidts Moralische Grundlagen: Welche Werte aktivieren "Recht und Ordnung" + "Sch\u00f6nheit der Sirenen" haupts\u00e4chlich?',
    choices: [
      'F\u00fcrsorge/Schaden und Freiheit/Unterdr\u00fcckung (Schutz der Freiheit vor staatlichem \u00dcbergriff)',
      'Autorit\u00e4t/Respekt + Heiligkeit/Reinheit (Respekt vor dem Gesetz und Reinigung der St\u00e4dte von Verbrechen)',
      'Fairness/Betrug und Loyalit\u00e4t/Verrat (Gleichbehandlung vor dem Gesetz sicherstellen)',
      'F\u00fcrsorge/Schaden und Fairness/Betrug (Mitgef\u00fchl f\u00fcr Opfer und Gerechtigkeit f\u00fcr T\u00e4ter)',
    ],
    correctIndex: 1,
    explanation: 'Haidts Moralische Grundlagen: "Recht und Ordnung" aktiviert Autorit\u00e4t (Respekt vor Polizei, Gesetz, Hierarchie) und Heiligkeit (St\u00e4dte m\u00fcssen von Verbrechen "gereinigt", vor Verfall "gerettet" werden). "Die Sch\u00f6nheit der Sirenen" rahmt die Strafverfolgung als \u00e4sthetisch und moralisch sch\u00f6n \u2014 nicht nur notwendig. Kritiker argumentieren, dass diese Rahmung JEGLICHEN Widerstand als verbrechensfreundlich darstellt, indem sie moralische Grundlagen nutzt, um die politische Debatte zu untergraben. Der Trick: Wenn Sicherheit als moralischer Kreuzzug gerahmt wird, bedeutet das Hinterfragen von Taktiken, die Sache zu verraten.',
    friendPreview: 'Mordrate ST\u00dcRZT auf 125-Jahres-Tief. Trump: "H\u00f6rt euch die Sch\u00f6nheit dieses Klangs an." Recht und Ordnung ist ZUR\u00dcCK. \uD83C\uDDFA\uD83C\uDDF8\uD83D\uDC6E\u200D\u2642\uFE0F',
    friendName: 'TikTok Tom',
    friendColor: '#a78bfa',
  },
]

export function getMissionPostsDE(): MissionPost[] {
  return [...POSTS_DE].sort((a, b) => a.level - b.level)
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
export const LEVEL_CONFIG_DE: Record<number, LevelConfig> = {
  1: { name: 'Falsche Argumente', color: '#ef4444', icon: '\u26A0\uFE0F' },
  2: { name: 'Gef\u00fchle',          color: '#f59e0b', icon: '\uD83C\uDFAD' },
  3: { name: 'Kopf-Check',       color: '#22c55e', icon: '\uD83E\uDDE0' },
  4: { name: 'Wir gegen Sie',    color: '#d946ef', icon: '\u2694\uFE0F' },
  5: { name: 'Moralische Kn\u00f6pfe', color: '#f97316', icon: '\uD83D\uDCCA' },
  6: { name: 'Versteckter Mythos', color: '#06b6d4', icon: '\uD83D\uDDFA\uFE0F' },
  7: { name: 'Fake-Check',       color: '#a78bfa', icon: '\uD83C\uDF00' },
  8: { name: 'Quellen-Check',    color: '#14b8a6', icon: '\uD83D\uDCCB' },
  9: { name: 'Echokammer',       color: '#ec4899', icon: '\uD83D\uDD04' },
  10: { name: 'Ablenkungsman\u00f6ver', color: '#8b5cf6', icon: '\uD83D\uDC1F' },
  11: { name: 'Agenda-Setting',  color: '#0ea5e9', icon: '\uD83C\uDFAF' },
  12: { name: 'Werte-Check',     color: '#e11d48', icon: '\uD83D\uDCCA' },
}