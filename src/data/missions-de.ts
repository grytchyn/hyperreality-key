// ── MISSIONS DE v16 — SYNCED with EN — philosopher names + quotes ──
// 12 levels, REAL articles with real data
// Same philosopher names and friendPreviews as EN, content/questions in DE
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
  // LEVEL 1 — BAD ARGUMENTS
  {
    title: 'Snopes: Nein, Squid Game basiert NICHT auf einem realen Vorfall von 1986',
    source: 'Snopes',
    content: `Ein Online-Gerücht behauptet, die Netflix-Serie "Squid Game" sei von einer wahren Geschichte über Geiseln in einem südkoreanischen Bunker aus dem Jahr 1986 inspiriert worden. Laut der viralen Behauptung basierte die Show auf realen Ereignissen. Snopes fand keine definitive Verbindung zwischen "Squid Game" und der Einrichtung "Brother's Home". Der Schöpfer der Show, Hwang Dong-hyuk, erwähnte niemals eine solche Inspiration. Er erklärte: "Ich gebe frei zu, dass ich große Inspiration aus japanischen Comics und Animationen über die Jahre gezogen habe." Das virale Gerücht vermischt einen realen Ort von Menschenrechtsverletzungen mit einem fiktiven Überlebensdrama. Experten sagen, die Behauptung verbreitete sich, weil anonyme Social-Media-Konten sie als Tatsache präsentierten, ohne benannte Quellen anzugeben.`,
    category: 'Unterhaltung',
    categoryColor: '#ef4444',
    imageEmoji: '🎮',
    imageBg: 'from-red-500/20 to-orange-500/10',
    level: 1,
    scientistKey: 'schopenhauer',
    neededTool: 'bad-arguments',
    question: 'Der virale Beitrag nutzte anonyme Quellen und falsche Referenzen. Welche Technik ist das?',
    choices: [
      'Anonyme Autorität — Behauptungen klingen glaubwürdig, ohne eine benannte Quelle',
      'Emotionale Manipulation durch Angst und Schock',
      'Richtige Quellenangabe mit überprüfbaren Experten',
      'Logische Schlussfolgerung aus vorhandenen Beweisen',
    ],
    correctIndex: 0,
    explanation: '"Eine Quelle aus der Produktion" und "laut anonymen Angaben" sind klassische anonyme Autorität. Cialdinis Autoritätsprinzip: Behauptungen leihen sich Glaubwürdigkeit von unbenannten "Insidern". Snopes untersuchte den Fall und fand keinerlei Beweise, dass der Schöpfer diese Inspiration jemals erwähnte. Die gesamte Geschichte wurde mittels falscher Autorität erfunden.',
    friendPreview: '"A source close to production confirmed it" — yeah, that\'s not how evidence works. — Schopenhauer',
    friendName: 'Arthur Schopenhauer',
    friendColor: '#ef4444',
  },

  // LEVEL 2 — FEELINGS CHECK
  {
    title: 'NPR: KI-generierte Katastrophenlügen verbreiten sich — "Echter Schaden"',
    source: 'NPR',
    content: `Noch bevor Ermittler begannen, die Trümmer zu bergen, nachdem ein UPS-Frachtflugzeug im November in Louisville, Kentucky, während des Starts Feuer fing und abstürzte, teilten und reagierten die Menschen bereits auf falsche KI-generierte Artikel und Videos in den sozialen Medien. Ein gefälschtes Video — mehr als 1.000 Mal geteilt — zeigte falsche Feuerwehrleute, die ein falsches Feuer neben einem falschen zerstörten Rumpf löschten. Eine KI-generierte Stimme war zu hören, die Notfallanweisungen gab. Andere Falschmeldungen behaupteten, Verwandte von Kid Rock und Bob Dylan seien bei dem Absturz gestorben. Nichts davon war wahr. Unterdessen behauptete Xs KI-Assistent Grok, ein echtes Foto von Gouverneur Andy Beshear aus Kentucky am Unfallort stamme von einer früheren Katastrophe. Imran Ahmed, CEO des Center for Countering Digital Hate, sagte: "Katastrophen sind tragisch genug für sich, aber sie werden tatsächlich noch schlimmer, wenn man zulässt, dass KI-generierte und algorithmisch verstärkte Lügen ungehindert verbreitet werden und potenziell echten Schaden anrichten."`,
    category: 'Technologie',
    categoryColor: '#f59e0b',
    imageEmoji: '🤖',
    imageBg: 'from-amber-500/20 to-yellow-500/10',
    level: 2,
    scientistKey: 'cialdini',
    neededTool: 'feelings-check',
    question: 'Welche emotionalen und moralischen Auslöser verwendet dieser Artikel, um dich zu bewegen?',
    choices: [
      'Angst vor echtem Schaden + moralische Empörung über Profit aus Tragödien',
      'Neugier, wie KI-Videogenerierung funktioniert',
      'Freude über technologischen Fortschritt bei der Katastrophenhilfe',
      'Langeweile — es ist nur eine weitere Absturzgeschichte',
    ],
    correctIndex: 0,
    explanation: 'Der Artikel nutzt Cialdinis Knappheitsprinzip (Dringlichkeit der Katastrophe) und Haidts Fürsorge-Grundlage (Opfer, betroffene Familien). "Tragisch", "Schaden", "Lügen verbreiten sich ungehindert" lösen Angst und Empörung aus. Die emotionale Aufladung bringt dich dazu, KI-Fehlinformationen abzulehnen, ohne Fakten über Regulierung zu benötigen. Die Erwähnung von Profit aus Lügen fügt Fairness-Empörung hinzu — jemand profitiert von der Tragödie.',
    friendPreview: '"Disasters are tragic enough... but they\'re made worse by AI lies." — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#f59e0b',
  },

  // LEVEL 3 — BRAIN CHECK
  {
    title: 'University of Sydney: "Überwältigend irreführende" medizinische Tests werden auf TikTok viral',
    source: 'JAMA Network Open',
    content: `Influencer bewerben "überwältigend" irreführende Informationen über medizinische Tests auf Instagram und TikTok, so eine globale, von der University of Sydney geleitete Studie, die in JAMA Network Open veröffentlicht wurde. Die Tests umfassen Ganzkörper-MRT-Scans, die angeblich bis zu 500 Erkrankungen erkennen können; Gentests, die angeblich frühe Anzeichen von 50 Krebsarten identifizieren; Bluttests für Testosteronspiegel; den AMH-Test zur Bestimmung der Eizellreserve einer Frau; und den Darmmikrobiom-Test. "Die überwältigende Mehrheit dieser Beiträge war extrem irreführend", sagte Dr. Brooke Nickel, die die Forschung an der School of Public Health der Medizinischen Fakultät leitete. "Diese Tests bergen das Potenzial, dass gesunde Menschen unnötige Diagnosen erhalten, was zu unnötigen medizinischen Behandlungen führen kann."`,
    category: 'Gesundheit',
    categoryColor: '#22c55e',
    imageEmoji: '🏥',
    imageBg: 'from-green-500/20 to-emerald-500/10',
    level: 3,
    scientistKey: 'kahneman',
    neededTool: 'brain-check',
    question: 'Influencer sagen "die meisten Menschen empfehlen" diese Tests und "jeder macht es". Welcher kognitive Bias ist das?',
    choices: [
      'Anker-Effekt — eine große Zahl (500 Erkrankungen) setzt einen extremen Referenzpunkt',
      'Mitläufereffekt — Berufung auf Popularität ersetzt wissenschaftliche Belege',
      'Autorität — Vertrauen auf den Influencer als Experten',
      'Bestätigungsfehler — sehen, was man bereits glaubt',
    ],
    correctIndex: 1,
    explanation: '"Die meisten Menschen", "jeder macht es", "überwältigende Mehrheit" — alles Mitläufer-Signale. Kahnemans Verfügbarkeitsheuristik: "Viele glauben" ist nicht gleich "durch Belege gestützt". Dr. Brooke Nickel von der University of Sydney, publiziert in JAMA Network Open, bestätigte, dass diesen Tests die wissenschaftliche Grundlage fehlt. Der Anker-Effekt kommt von der Zahl "500 Erkrankungen" — setzt einen unmöglichen Standard.',
    friendPreview: '"Most people believe" is not evidence. Popularity is not truth. — Kahneman',
    friendName: 'Daniel Kahneman',
    friendColor: '#22c55e',
  },

  // LEVEL 4 — US VS THEM
  {
    title: 'Al Jazeera: Trump bei der UN — "Sie wurden von einer Streitmacht illegaler Einwanderer überfallen"',
    source: 'Al Jazeera',
    content: `Präsident Trump warnte bei der UN-Generalversammlung im September 2025, dass die Aufnahme von Einwanderern andere Länder "zerstöre". Er sagte: "Sie wurden von einer Streitmacht illegaler Einwanderer überfallen, wie man es noch nie zuvor gesehen hat. Illegale Einwanderer strömen nach Europa." Vizeaußenminister Christopher Landau erklärte in einem Nebenpanel: "Wenn man Hunderttausende von falschen Asylsuchenden hat, was passiert dann mit dem echten Asylsystem?" Bill Frelick von Human Rights Watch sagte, der US-Plan sehe "wie der erste Schritt aus, das globale Flüchtlingssystem niederzureißen". Es wurden keine konkreten Daten darüber präsentiert, wer "sie" sind.`,
    category: 'Politik',
    categoryColor: '#d946ef',
    imageEmoji: '🚧',
    imageBg: 'from-pink-500/20 to-fuchsia-500/10',
    level: 4,
    scientistKey: 'tajfel',
    neededTool: 'us-vs-them',
    question: 'Welche Wir-gegen-Sie-Technik verwendet "von illegalen Einwanderern überfallen" und "falsche Asylsuchende"?',
    choices: [
      'Ausgewogene Berichterstattung über beide Seiten der Einwanderungsdebatte',
      'Entmenschlichung durch Kriegsmetaphern und Fremdgruppen-Etikettierung',
      'Faktische demografische Daten über Migrationsmuster',
      'Diplomatische Sprache über internationale Zusammenarbeit',
    ],
    correctIndex: 1,
    explanation: 'Tajfels Theorie der sozialen Identität: "überfallen" ist eine Kriegsmetapher, die Einwanderer als angreifende Streitmacht entmenschlicht. "Illegale Einwanderer" und "falsche Asylsuchende" sind Fremdgruppen-Etiketten, die Menschen auf eine Kategorie reduzieren. Human Rights Watch bestätigte, dass es keine Belege für die "falsch"-Behauptung gibt. Keinerlei konkrete Daten darüber, wer "sie" sind — reine Wir-gegen-Sie-Rahmung.',
    friendPreview: '"They\'ve been invaded" — war metaphors dehumanize. Notice the us-vs-them framing. — Tajfel',
    friendName: 'Henri Tajfel',
    friendColor: '#d946ef',
  },

  // LEVEL 5 — MORAL BUTTONS
  {
    title: 'The Guardian: Mumsnet fordert Social-Media-Verbot für unter 16-Jährige mit Gesundheitswarnungen',
    source: 'The Guardian',
    content: `Mumsnet hat eine Kampagne gestartet, um ein Verbot von Social Media für unter 16-Jährige einzuführen, das Gesundheitswarnungen im Stil von Zigarettenpackungen vorsieht. Gründerin Justine Roberts sagte: "Familien leiden täglich unter dem Schaden, den soziale Medien verursachen. Es geht nicht darum, dass Eltern es versäumen, Grenzen zu setzen. Es geht darum, dass Kinder Produkten ausgesetzt werden, die bewusst süchtig machend gestaltet sind. Eltern beobachten die Folgen: zwanghafte Nutzung, Schlafmangel, zunehmende Angst und sinkendes Selbstwertgefühl, während die verantwortlichen Unternehmen weiterhin profitieren." Das Royal College of Psychiatrists unterstützte die Forderung nach "stärkerer Regulierung".`,
    category: 'Gesellschaft',
    categoryColor: '#8b5cf6',
    imageEmoji: '👶',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 5,
    scientistKey: 'haidt',
    neededTool: 'value-check',
    question: 'Welche moralische Grundlage aktivieren "Schaden", "Kinder", "süchtig machend", "sinkendes Selbstwertgefühl"?',
    choices: [
      'Autorität/Respekt (der Institution gehorchen)',
      'Fürsorge/Schaden (Mitgefühl für verletzliche Kinder)',
      'Loyalität/Patriotismus (unsere Nation beschützen)',
      'Heiligkeit/Reinheit (moralische Abscheu vor Korruption)',
    ],
    correctIndex: 1,
    explanation: 'Haidts Fürsorge-Grundlage: "Schaden", "Kinder", "süchtig machend", "zwanghaft", "Angst", "sinkendes Selbstwertgefühl" — alles löst Mitgefühl UND Empörung aus. Der Fürsorge-Knopf ist der universellste moralische Auslöser. Der rhetorische Trick: Social-Media-Unternehmen als vorsätzliche Schädiger darzustellen ("bewusst süchtig machend gestaltet"), die am Leid der Kinder "profitieren". Schwer, sich gegen "Kinder schützen" zu stellen.',
    friendPreview: 'Harm, children, addictive — which moral button are they pressing? — Haidt',
    friendName: 'Jonathan Haidt',
    friendColor: '#f97316',
  },

  // LEVEL 6 — HIDDEN MYTH
  {
    title: 'NPR: Warum der Kongress über ein zentrales Instrument der amerikanischen Überwachung streitet',
    source: 'NPR',
    content: `Die Regierung sagt, dass durch Section 702 des FISA gesammelte Geheimdienstinformationen "die Mehrheit" der täglichen Präsidentenbesprechung untermauern und ein zentrales Instrument der Terrorismusbekämpfung sind. Aber Abgeordnete sind besorgt, dass FISA 702 es der Bundesregierung erlaubt, Amerikaner ohne Durchsuchungsbefehl zu überwachen und damit ihr verfassungsmäßiges Recht auf Privatsphäre zu verletzen. Elizabeth Goitein vom Brennan Center sagte: "Das FBI durchsucht diese Daten routinemäßig mit dem ausdrücklichen Ziel, die Kommunikation von Amerikanern zu finden und zu nutzen." Datenschutzaktivisten argumentieren, dies sei ein "Verstoß gegen den vierten Verfassungszusatz". Das FISA-Gericht charakterisierte FBI-Verstöße als "anhaltend und weit verbreitet". Die Debatte stellt Sicherheit als etwas dar, das die Einschränkung von Freiheit erfordert.`,
    category: 'Politik',
    categoryColor: '#06b6d4',
    imageEmoji: '🏛️',
    imageBg: 'from-cyan-500/20 to-blue-500/10',
    level: 6,
    scientistKey: 'barthes',
    neededTool: 'hidden-story',
    question: 'Die Geschichte wird als "Sicherheit gegen Privatsphäre" gerahmt. Welcher versteckte Mythos wird verkauft?',
    choices: [
      'Der Mythos, dass Technologie immer die Sicherheit verbessert',
      'Der Mythos, dass man Freiheit für Sicherheit opfern muss — sie werden als Gegensätze dargestellt',
      'Der Mythos, dass staatliche Überwachung immer effektiv ist',
      'Der Mythos, dass Privatsphäre in der modernen Welt nicht mehr möglich ist',
    ],
    correctIndex: 1,
    explanation: 'Barthes: "Sicherheit gegen Privatsphäre" ist ein binärer Mythos. Die verborgene Botschaft: Du kannst nicht beides haben. Aber das Brennan Center argumentiert, dass Aufsicht und Durchsuchungsbefehle beides ermöglichen können. "Untermauert die Mehrheit" — Mitläufereffekt für Sicherheit. "Anhaltend und weit verbreitet" — absolute Worte für Verstöße. Der Mythos: Freiheit und Sicherheit sind Gegensätze, obwohl in Wirklichkeit echte Sicherheit nicht den Austausch von Bürgerrechten erfordert.',
    friendPreview: '"Freedom vs security" is not a fact. It\'s a myth. — Barthes',
    friendName: 'Roland Barthes',
    friendColor: '#06b6d4',
  },

  // LEVEL 7 — FAKE CHECK
  {
    title: 'The Guardian: KI-Deepfakes echter Ärzte verbreiten Gesundheits-Fehlinformationen',
    source: 'The Guardian',
    content: `TikTok und andere soziale Medienplattformen hosten KI-generierte Deepfake-Videos von echten Ärzten, deren Worte manipuliert wurden, um Nahrungsergänzungsmittel zu verkaufen und Gesundheits-Fehlinformationen zu verbreiten. Die Faktenprüfungsorganisation Full Fact deckte Hunderte solcher Videos auf, die auf Frauen in den Wechseljahren abzielten. Prof. David Taylor-Robinson von der Liverpool University, ein Spezialist für Kindergesundheit, wurde in 14 manipulierten TikTok-Videos verwendet — Filmmaterial von einem Vortrag von Public Health England aus dem Jahr 2017 wurde umgeschrieben, um fälschlicherweise ein "natürliches Probiotikum" für die Menopause zu bewerben. Ein irreführendes Video zeigte ihn, wie er fluchte und frauenfeindliche Bemerkungen machte. TikTok entfernte die Videos erst sechs Wochen, nachdem er sich beschwert hatte.`,
    category: 'Klickköder',
    categoryColor: '#a78bfa',
    imageEmoji: '📱',
    imageBg: 'from-purple-500/20 to-indigo-500/10',
    level: 7,
    scientistKey: 'baudrillard',
    neededTool: 'fake-check',
    question: 'Baudrillard würde sagen: Auf welcher Realitätsebene operieren diese KI-Deepfake-Videos?',
    choices: [
      'Reales Ereignis — echte medizinische Beratung von echten Ärzten',
      'Verzerrt, aber basierend auf echten wissenschaftlichen Erkenntnissen',
      'Reine Simulation — der echte Arzt hat diese Worte nie gesagt, es ist vollständig erfunden',
      'Satirischer Kommentar zur modernen Medizin',
    ],
    correctIndex: 2,
    explanation: 'Baudrillards Hyperrealität: Prof. David Taylor-Robinson hat diesen medizinischen Rat nie gegeben. Das Video ist eine Simulation, die vorgibt, Realität zu sein — ein Simulakrum (eine Kopie ohne Original). Der angeblich von ihm stammende Rat zu "natürlichem Probiotikum" war vollständig aus gestohlenem Filmmaterial erfunden. Full Fact fand Hunderte solcher Videos. Die Simulation ersetzte die Realität so überzeugend, dass Zuschauer den Unterschied nicht erkennen konnten.',
    friendPreview: 'That video was never real. A simulation pretending to be reality. — Baudrillard',
    friendName: 'Jean Baudrillard',
    friendColor: '#a78bfa',
  },

  // LEVEL 8 — SOURCE CHECK
  {
    title: 'Forbes: Weißes Haus schiebt nichtexistierende medizinische Zitate auf "Formatierungsprobleme"',
    source: 'Forbes',
    content: `Das Weiße Haus hat am Donnerstag nicht dementiert, dass ein Bericht über chronische Kinderkrankheiten, der von der Kommission "Make America Healthy Again" von Gesundheitsminister Robert F. Kennedy Jr. erstellt wurde, teilweise auf fiktiver Forschung basierte — selbst während Kennedy wiederholt behauptete, dass allgemein verfügbare medizinische Forschung unzuverlässig sei. Die Epidemiologin Katherine Keyes, die als Autorin einer nichtexistierenden Studie aufgeführt wurde, sagte NOTUS: "Das genannte Papier ist kein echtes Papier, an dem ich oder meine Kollegen beteiligt waren." Die Pressesprecherin des Weißen Hauses, Karoline Leavitt, sagte, der Bericht enthalte "Formatierungsprobleme, die behoben werden, und der Bericht wird aktualisiert", und sagte Reportern, dass sie "die Substanz des Berichts nicht in Frage stellen". Der Bericht zitierte mindestens sieben nichtexistierende Studien mit Merkmalen von KI-Generierung.`,
    category: 'Politik',
    categoryColor: '#14b8a6',
    imageEmoji: '📋',
    imageBg: 'from-teal-500/20 to-cyan-500/10',
    level: 8,
    scientistKey: 'foucault',
    neededTool: 'source-check',
    question: 'Der MAHA-Bericht zitierte Studien, die nie existiert haben. Welche Manipulationstechnik ist das?',
    choices: [
      'Erfundene Expertise — Forschung erfinden, um falsche Autorität für politische Forderungen zu schaffen',
      'Ordnungsgemäße akademische Peer-Review, die versehentlich einige Zitate übersehen hat',
      'Journalistische Aufsicht durch Forbes über unveröffentlichte Entwürfe',
      'Transparente Politikgestaltung mit klaren Quellenangaben, die kleinere Formatierungskorrekturen benötigt',
    ],
    correctIndex: 0,
    explanation: 'Cialdinis Autoritätsprinzip: Der Anschein von Forschung wird genutzt, um Glaubwürdigkeit zu leihen. Der Bericht zitierte nichtexistierende Studien mit Merkmalen von KI-Generierung. Als echte Wissenschaftler (wie Katherine Keyes) als Autoren von Forschung aufgeführt wurden, die sie nie durchgeführt hatten, ging dies von einem Fehler zur Fälschung über. Das Weiße Haus nannte es "Formatierungsprobleme" — eine Verharmlosungstaktik.',
    friendPreview: 'Who decides what counts as "expert"? Who benefits? — Foucault',
    friendName: 'Michel Foucault',
    friendColor: '#14b8a6',
  },

  // LEVEL 9 — ECHO CHAMBER
  {
    title: 'WaPo: Der "Recherchiere selbst"-Trugschluss — Der beste Freund von Verschwörungstheoretikern',
    source: 'The Washington Post',
    content: `In den frühen 1990er Jahren, vor dem Masseninternet, verbreitete ein Radiomoderator aus Arizona namens Milton William Cooper Verschwörungstheorien über Kurzwellenrundfunk. Zu den Themen gehörten das Kennedy-Attentat, die US-Regierung, Waco, AIDS, das IRS, die Illuminaten und UFOs. "Recherchiere selbst" ist seitdem ein Schlachtruf geworden. Doch viele, die behaupten, "selbst recherchiert" zu haben, haben in Wirklichkeit nur Inhalte von Quellen konsumiert, die das verstärken, was sie bereits glauben. Sie betreten eine Echokammer, in der Behauptungen über "mehrere Quellen" hinweg wiederholt werden, die alle aufeinander verweisen — keine Bestätigung, sondern eine geschlossene Schleife. Keine Behauptung wird jemals an externen Beweisen geprüft.`,
    category: 'Technologie',
    categoryColor: '#ec4899',
    imageEmoji: '🔄',
    imageBg: 'from-pink-500/20 to-rose-500/10',
    level: 9,
    scientistKey: 'sunstein',
    neededTool: 'echo-chamber',
    question: '"Mehrere Quellen bestätigen das" — aber sie alle zitieren dieselbe Originalquelle. Wie nennt man das?',
    choices: [
      'Gründliche Querverweise und investigativer Journalismus',
      'Eine Echokammer — sich selbst verstärkende Informationen, die ohne externe Überprüfung zirkulieren',
      'Demokratischer Konsensbildung durch unabhängige Faktenprüfung',
      'Wissenschaftliche Peer-Review durch akademische Replikation',
    ],
    correctIndex: 1,
    explanation: 'Echokammer-Effekt: "mehrere Quellen" bedeuten oft eine einzige Originalgeschichte, die neu veröffentlicht wurde. Milton William Cools Kurzwellen-Template aus den 1990ern — eine geschlossene Schleife erschaffen, in der Behauptungen von Quellen "bestätigt" werden, die alle voneinander stammen. Sunsteins "Gesetz der Gruppenpolarisierung": In einer Echokammer werden Überzeugungen ohne externe Herausforderung extremer. Frage: Sind diese Quellen unabhängig, oder zitieren sie alle dasselbe?',
    friendPreview: '"Multiple sources" often means one source repeated a thousand times. — Sunstein',
    friendName: 'Cass Sunstein',
    friendColor: '#ec4899',
  },

  // LEVEL 10 — RED HERRING
  {
    title: 'Salon: Wie Trumpistische Rhetorik "Whataboutism" und Ablenkungsmanöver nutzt',
    source: 'Salon',
    content: `Trumpistische Rhetorik stützt sich auf ein rotierendes Arsenal kognitiver Fallen: Whataboutism, um abzulenken, falsche Gleichsetzung, um zu verwirren, Ablenkungsmanöver, um zu zerstreuen, und Gaslighting, um zu erschöpfen. Wenn Trumps Lügen die Wahrheit schwächen, wird noch größerer Schaden an unserer Fähigkeit angerichtet, Vernunft zu nutzen, um Informationen zu verstehen. Trump hält die Öffentlichkeit im ersten Modus — getriggert, reaktiv, impulsiv. Jedes Mal, wenn ein Vorwurf erhoben wird, wird ein Gegenvorwurf eingesetzt: "Was ist mit Hillary? Was ist mit Biden? Was ist mit der anderen Seite?" Unter Trump bricht kritisches Denken durch emotionale Überlastung zusammen. Ein komplexes Thema wird auf ein einziges schockierendes Detail reduziert. Eine dramatische Anekdote wird als die ganze Geschichte präsentiert.`,
    category: 'Politik',
    categoryColor: '#8b5cf6',
    imageEmoji: '🐟',
    imageBg: 'from-purple-500/20 to-violet-500/10',
    level: 10,
    scientistKey: 'schopenhauer',
    neededTool: 'red-herring',
    question: '"Aber was ist mit der anderen Seite?" — das ist ein klassisches Beispiel für was?',
    choices: [
      'Faire und ausgewogene überparteiliche Analyse',
      'Ein Ablenkungsmanöver — das Thema wechseln, um dem ursprünglichen Vorwurf auszuweichen',
      'Forderung nach gleicher Rechenschaftspflicht für alle Parteien',
      'Historische Kontextualisierung politischer Ereignisse',
    ],
    correctIndex: 1,
    explanation: 'Schopenhauers eristische Dialektik: Wenn du ein Argument verlierst, wechsle das Thema. "Was ist mit X" führt einen Punkt ein, der sich relevant anfühlt, aber tatsächlich eine Ablenkung ist. Der Salon-Artikel nennt dies "Ablenkungsmanöver, um zu zerstreuen" — das Ziel ist, die Öffentlichkeit in einem getriggerten, reaktiven Zustand zu halten, in dem kritisches Denken durch emotionale Überlastung zusammenbricht. Das neue Thema fühlt sich relevant an, dient aber nur dazu, dem ursprünglichen Punkt zu entkommen.',
    friendPreview: '"What about X?" — the oldest distraction trick in the book. — Schopenhauer',
    friendName: 'Arthur Schopenhauer',
    friendColor: '#ef4444',
  },

  // LEVEL 11 — AGENDA SETTING
  {
    title: 'BBC: Von Venezuela bis Einwanderung — Project 2025 lieferte Trumps Fahrplan',
    source: 'BBC News',
    content: `Nur ein Jahr in Trumps zweiter Amtszeit, und etwa die Hälfte der Maßnahmen von Project 2025 wurde umgesetzt, so Beobachter. "Es ist wirklich ein sehr detaillierter Bauplan", sagte Eugene Kiley von Factcheck.org. "Es legt dar, wie man Regierungsangestellte entlässt und welche, und wie man die Kontrolle über unabhängige Behörden übernimmt." "Jeder Außenstehende, der sich das ansieht, kann leicht erkennen, wie viel von diesem ersten Jahr durch Project 2025 vorgegeben wurde. Wenn es Präsident Trump nicht gäbe, wäre dies nur ein Bericht im Regal", sagte Paul Dans, ehemaliger Direktor von Project 2025. Analysen von linksgerichteten Thinktanks ergaben, dass 53 % der Maßnahmen eingeleitet oder abgeschlossen waren. Die Rahmung verschiebt die Debatte von "Ist diese Politik gut?" zu "Wer kontrolliert wirklich das Weiße Haus?"`,
    category: 'Politik',
    categoryColor: '#0ea5e9',
    imageEmoji: '🎯',
    imageBg: 'from-sky-500/20 to-blue-500/10',
    level: 11,
    scientistKey: 'mccombs_shaw',
    neededTool: 'agenda-setting',
    question: 'Indem der Fokus auf "wer den Fahrplan geschrieben hat" gelegt wird, wovon lenkt diese Medienrahmung ab?',
    choices: [
      'Die tatsächlichen Vor- und Nachteile jeder einzelnen politischen Maßnahme',
      'Die Rolle des Kongresses bei der Bestätigung von Präsidentschaftsernennungen',
      'Die Geschichte von Thinktanks in der amerikanischen Politik',
      'Die persönliche Biografie von Paul Dans, dem Direktor von Project 2025',
    ],
    correctIndex: 0,
    explanation: 'McCombs & Shaws Agenda-Setting-Theorie (1972): Medien sagen dir nicht, WAS du denken sollst — sie sagen dir, WORÜBER du nachdenken sollst. Indem die BBC die gesamte Trump-Agenda durch die Linse "Wer hat wirklich die Kontrolle?" rahmt, verschiebt sie die Debatte von der Politikevaluierung ("Ist diese Politik gut für die Amerikaner?") zu einem Schattenverschwörungs-Narrativ ("Wer ist der Puppenspieler?"). Der Rahmen der "wahren Geschichte" IST die Manipulation — er setzt deine Agenda.',
    friendPreview: 'Media doesn\'t tell you WHAT to think — it tells you what TO THINK ABOUT. — McCombs & Shaw',
    friendName: 'McCombs & Shaw',
    friendColor: '#0ea5e9',
  },

  // LEVEL 12 — VALUE CHECK
  {
    title: 'AP News: Trumps "Recht und Ordnung"-zweite Amtszeit — "Es ist wie eine Leidenschaft für mich"',
    source: 'Associated Press',
    content: `"Jetzt ist es wie eine Leidenschaft für mich", sagte Trump am Mittwoch, als er die Ergebnisse einer Razzia namens "Operation Summer Heat" im Oval Office anpries, bei der das FBI laut seinen Angaben über 8.000 Verhaftungen vorgenommen hatte. "Wir werden alle unsere Städte retten und wir werden sie im Wesentlichen verbrechensfrei machen." Als Polizeisirenen seine Rede im Rosengarten unterbrachen, sagte Trump: "Hört euch die Schönheit dieses Klangs an. Das sind keine politisch korrekten Sirenen." Dieser Moment verdeutlichte, wie Trumps "Recht und Ordnung um jeden Preis"-Vorstoß zu einem zentralen Bestandteil seiner zweiten Amtszeit geworden ist. Kritiker sagen, die Rahmung stelle jeden Widerstand als verbrechensfreundlich dar und untergrabe die politische Debatte über Masseninhaftierung und Polizeireform.`,
    category: 'Politik',
    categoryColor: '#e11d48',
    imageEmoji: '📊',
    imageBg: 'from-rose-500/20 to-red-500/10',
    level: 12,
    scientistKey: 'cialdini',
    neededTool: 'value-check',
    question: 'Haidts Moralische Grundlagen: Welche Werte aktivieren "Recht und Ordnung" + "Schönheit der Sirenen" hauptsächlich?',
    choices: [
      'Fürsorge/Schaden und Freiheit/Unterdrückung (Schutz der Freiheit vor staatlichem Übergriff)',
      'Autorität/Respekt + Heiligkeit/Reinheit (Respekt vor dem Gesetz und Reinigung der Städte von Verbrechen)',
      'Fairness/Betrug und Loyalität/Verrat (Gleichbehandlung vor dem Gesetz sicherstellen)',
      'Fürsorge/Schaden und Fairness/Betrug (Mitgefühl für Opfer und Gerechtigkeit für Täter)',
    ],
    correctIndex: 1,
    explanation: 'Haidts Moralische Grundlagen: "Recht und Ordnung" aktiviert Autorität (Respekt vor Polizei, Gesetz, Hierarchie) und Heiligkeit (Städte müssen von Verbrechen "gereinigt", vor Verfall "gerettet" werden). "Die Schönheit der Sirenen" rahmt die Strafverfolgung als ästhetisch und moralisch schön — nicht nur notwendig. Kritiker argumentieren, dass diese Rahmung JEGLICHEN Widerstand als verbrechensfreundlich darstellt, indem sie moralische Grundlagen nutzt, um die politische Debatte zu untergraben. Der Trick: Wenn Sicherheit als moralischer Kreuzzug gerahmt wird, bedeutet das Hinterfragen von Taktiken, die Sache zu verraten.',
    friendPreview: '"Law and order" — Authority and Sanctity foundations, beautifully packaged. — Cialdini',
    friendName: 'Robert Cialdini',
    friendColor: '#f59e0b',
  },
]

export function getMissionPostsDE(): MissionPost[] {
  return [...POSTS_DE].sort((a, b) => a.level - b.level)
}

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
  1: { name: 'Falsche Argumente', color: '#ef4444', icon: '⚠️' },
  2: { name: 'Gefühle',          color: '#f59e0b', icon: '🎭' },
  3: { name: 'Kopf-Check',       color: '#22c55e', icon: '🧠' },
  4: { name: 'Wir gegen Sie',    color: '#d946ef', icon: '⚔️' },
  5: { name: 'Moralische Knöpfe', color: '#f97316', icon: '📊' },
  6: { name: 'Versteckter Mythos', color: '#06b6d4', icon: '🗺️' },
  7: { name: 'Fake-Check',       color: '#a78bfa', icon: '🌀' },
  8: { name: 'Quellen-Check',    color: '#14b8a6', icon: '📋' },
  9: { name: 'Echokammer',       color: '#ec4899', icon: '🔄' },
  10: { name: 'Ablenkungsmanöver', color: '#8b5cf6', icon: '🐟' },
  11: { name: 'Agenda-Setting',  color: '#0ea5e9', icon: '🎯' },
  12: { name: 'Werte-Check',     color: '#e11d48', icon: '📊' },
}