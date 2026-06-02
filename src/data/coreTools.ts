// ── CORE TOOLS v10 — Multi-Language (EN/DE/UA) ──
// 12 Tools, each with per-language names, descriptions, highlight rules
// 3 Stemmers: English (Porter-style), German (rule-based), Ukrainian (substring)

import type { CoreToolConfig, CoreToolId, HighlightEntry, HighlightRule, Language } from '../types'

export const CORE_TOOLS: CoreToolConfig[] = [
  {
    id: 'bad-arguments',
    icon: '⚠️',
    name: { en: 'Bad Words', de: 'Falsche Argumente', ua: 'Погані аргументи' },
    color: '#ef4444',
    description: {
      en: 'Catches logical tricks and fake authority. Example: "Experts say" without naming who → name-dropping. "Everyone knows" → overgeneralization. Ask: Would this hold up in a debate?',
      de: 'Erkennt logische Tricks und falsche Autorität. "Experten sagen" ohne Namen → Autoritäts-Borrowing. "Jeder weiß" → Überverallgemeinerung. Frage: Würde das einer Debatte standhalten?',
      ua: 'Виявляє логічні трюки та фальшивий авторитет. "Експерти кажуть" без імен → позичання авторитету. "Всі знають" → узагальнення. Питання: Чи витримає це дискусію?',
    },
  },
  {
    id: 'feelings-check',
    icon: '🎭',
    name: { en: 'Feelings', de: 'Gefühle', ua: 'Емоції' },
    color: '#f59e0b',
    description: {
      en: 'Reveals emotional manipulation. Fear words (shocking, urgent) → Cialdini\'s Scarcity. Outrage bait (scandal, disgrace) → bypasses logic. Ask: What emotion are they trying to make you feel?',
      de: 'Entlarvt emotionale Manipulation. Angst-Wörter (schockierend, dringend) → Cialdinis Knappheitsprinzip. Empörung (Skandal, Schande) → umgeht Logik. Frage: Welche Emotion sollst du fühlen?',
      ua: 'Виявляє емоційну маніпуляцію. Слова страху (шокуючий, терміновий) → принцип дефіциту Чалдіні. Обурення (скандал, ганьба) → обходить логіку. Питання: Яку емоцію вам нав\'язують?',
    },
  },
  {
    id: 'brain-check',
    icon: '🧠',
    name: { en: 'Brain Check', de: 'Kopf-Check', ua: 'Перевірка мозку' },
    color: '#22c55e',
    description: {
      en: 'Exposes cognitive shortcuts (Kahneman System 1). "Most people" → bandwagon effect. "Record numbers" → anchoring bias. Ask: Are you thinking, or just reacting?',
      de: 'Entlarvt kognitive Verkürzungen (Kahneman System 1). "Die meisten" → Mitläufereffekt. "Rekordzahlen" → Anker-Effekt. Frage: Denkst du oder reagierst du nur?',
      ua: 'Виявляє когнітивні скорочення (Система 1 Канемана). "Більшість людей" → ефект приєднання. "Рекордні числа" → ефект якоря. Питання: Ви думаєте чи просто реагуєте?',
    },
  },
  {
    id: 'hidden-story',
    icon: '🗺️',
    name: { en: 'Hidden Myth', de: 'Versteckter Mythos', ua: 'Прихований міф' },
    color: '#06b6d4',
    description: {
      en: 'Uncovers the deeper narrative (Roland Barthes\' Mythologies). "Freedom", "security", "crisis" are not facts — they are stories with hidden agendas. Ask: What world-view does this try to make seem inevitable?',
      de: 'Enthüllt die tiefere Erzählung (Barthes\' Mythologien). "Freiheit", "Sicherheit", "Krise" sind keine Fakten — sie sind Geschichten mit versteckten Absichten. Frage: Welche Weltanschauung soll unvermeidlich erscheinen?',
      ua: 'Розкриває глибшу розповідь (Міфології Барта). "Свобода", "безпека", "криза" — це не факти, а історії з прихованими цілями. Питання: Який світогляд намагаються зробити неминучим?',
    },
  },
  {
    id: 'us-vs-them',
    icon: '⚔️',
    name: { en: 'Us vs Them', de: 'Wir gegen Sie', ua: 'Ми проти них' },
    color: '#d946ef',
    description: {
      en: 'Reveals social division tactics (Tajfel\'s Social Identity Theory). "We" vs "they" creates in-groups and out-groups. "Flood", "invasion" dehumanize with nature metaphors. Ask: Who is being cast as the enemy?',
      de: 'Enthüllt Spaltungstaktiken (Tajfels Theorie der sozialen Identität). "Wir" vs "die" schafft Gruppen. "Flut", "Invasion" entmenschlicht. Frage: Wer wird als Feind dargestellt?',
      ua: 'Виявляє тактики розділення (Теорія соціальної ідентичності Тайфеля). "Ми" vs "вони" створює групи. "Потік", "навала" дегуманізує. Питання: Кого зображують ворогом?',
    },
  },
  {
    id: 'value-check',
    icon: '📊',
    name: { en: 'Moral Buttons', de: 'Moralische Knöpfe', ua: 'Моральні кнопки' },
    color: '#f97316',
    description: {
      en: 'Detects which moral foundation (Haidt) is pressed. Care: "children" → compassion. Fairness: "corrupt" → injustice. Authority: "order" → hierarchy. Ask: Which button are they pushing?',
      de: 'Erkennt, welche moralische Grundlage (Haidt) gedrückt wird. Fürsorge: "Kinder" → Mitgefühl. Fairness: "korrupt" → Ungerechtigkeit. Autorität: "Ordnung" → Hierarchie. Frage: Welcher Knopf wird gedrückt?',
      ua: 'Визначає, яку моральну основу (Гайдт) активують. Турбота: "діти" → співчуття. Справедливість: "корупція" → несправедливість. Авторитет: "порядок" → ієрархія. Питання: Яку кнопку натискають?',
    },
  },
  {
    id: 'fake-check',
    icon: '🌀',
    name: { en: 'Fake Check', de: 'Fake-Check', ua: 'Фейкова перевірка' },
    color: '#a78bfa',
    description: {
      en: 'Assesses reality level (Baudrillard\'s Hyperreality). Is this a real event, a distorted report, or pure simulation? "Viral", "trending" → cares only about spread. Ask: Is this about reality or attention?',
      de: 'Prüft die Realitätsebene (Baudrillards Hyperrealität). Reales Ereignis, verzerrter Bericht oder reine Simulation? "Viral", "trending" → nur Verbreitung zählt. Frage: Geht es um Realität oder Aufmerksamkeit?',
      ua: 'Оцінює рівень реальності (Гіперреальність Бодріяра). Реальна подія, спотворений звіт чи чиста симуляція? "Вірусний", "трендовий" → турбота лише про поширення. Питання: Це про реальність чи увагу?',
    },
  },
  {
    id: 'source-check',
    icon: '📋',
    name: { en: 'Source Check', de: 'Quellen-Check', ua: 'Перевірка джерел' },
    color: '#14b8a6',
    description: {
      en: 'Verifies whether sources actually exist. "According to experts", "studies show" → anonymous authority. "Sources say" → no named source. Ask: Can I find this in 30 seconds?',
      de: 'Prüft, ob Quellen wirklich existieren. "Laut Experten", "Studien zeigen" → anonyme Autorität. "Quellen sagen" → keine benannte Quelle. Frage: Kann ich das in 30 Sekunden finden?',
      ua: 'Перевіряє, чи джерела дійсно існують. "За даними експертів", "дослідження показують" → анонімний авторитет. "Джерела кажуть" → немає названого джерела. Питання: Чи можу я знайти це за 30 секунд?',
    },
  },
  {
    id: 'echo-chamber',
    icon: '🔄',
    name: { en: 'Echo Chamber', de: 'Echokammer', ua: 'Ехокамера' },
    color: '#ec4899',
    description: {
      en: 'Detects closed loops of self-reinforcing information. "Multiple sources" that all cite each other is not corroboration — it\'s an echo. Ask: are they all reading the same thing?',
      de: 'Erkennt geschlossene Kreisläufe sich selbst verstärkender Informationen. "Mehrere Quellen", die sich gegenseitig zitieren, sind keine Bestätigung — sie sind ein Echo. Frage: Lesen alle dasselbe?',
      ua: 'Виявляє замкнені цикли самостійно підсилюваної інформації. "Кілька джерел", які цитують одне одного — це не підтвердження, а ехо. Питання: Чи всі читають одне й те саме?',
    },
  },
  {
    id: 'agenda-setting',
    icon: '🎯',
    name: { en: 'Agenda Setting', de: 'Agenda-Setting', ua: 'Встановлення порядку денного' },
    color: '#0ea5e9',
    description: {
      en: 'Reveals what is amplified and ignored. "The real issue", "what matters" — the story tells you what to focus on. Ask: what is this making sure I DON\'T think about?',
      de: 'Zeigt, was verstärkt und ignoriert wird. "Das eigentliche Problem", "was zählt" — die Geschichte sagt dir, worauf du achten sollst. Frage: Worüber soll ich NICHT nachdenken?',
      ua: 'Показує, що посилюється та ігнорується. "Справжня проблема", "що важливо" — історія каже вам, на чому зосередитись. Питання: Про що мене змушують НЕ думати?',
    },
  },
  {
    id: 'red-herring',
    icon: '🐟',
    name: { en: 'Red Herring', de: 'Аblenkungsmanöver', ua: 'Червоний оселедець' },
    color: '#8b5cf6',
    description: {
      en: 'Flags deliberate distractions. "Meanwhile", "what about" — these shift focus to something irrelevant. A complex issue reduced to one shocking detail. Ask: is this relevant or distracting?',
      de: 'Markiert bewusste Ablenkungen. "Was ist mit", "mittlerweile" — lenken auf Irrelevantes. Ein komplexes auf ein schockierendes Detail reduziert. Frage: Ist das relevant oder ablenkend?',
      ua: 'Позначає навмисні відволікання. "А як щодо", "у той час" — перемикають увагу на несуттєве. Питання: Це релевантно чи відволікає?',
    },
  },
  {
    id: 'false-appeal',
    icon: '🎪',
    name: { en: 'False Appeal', de: 'Falscher Appell', ua: 'Фальшивий заклик' },
    color: '#e11d48',
    description: {
      en: 'Detects appeals to false authority, tradition, or popularity. "For centuries", "leading experts" — evidence replaced by appearance. Ask: is there actual evidence here?',
      de: 'Erkennt Appelle an falsche Autorität, Tradition oder Popularität. "Seit Jahrhunderten", "führende Experten" — Beweise durch Schein ersetzt. Frage: Gibt es hier echte Beweise?',
      ua: 'Виявляє звернення до фальшивого авторитету, традиції чи популярності. "Протягом століть", "провідні експерти" — докази замінені видимістю. Питання: Чи є тут реальні докази?',
    },
  },
]

export const TOOL_LARGE_ICONS: Record<CoreToolId, string> = {
  'bad-arguments': '⚡',
  'feelings-check': '🔥',
  'brain-check': '🔬',
  'hidden-story': '🔍',
  'us-vs-them': '⚔️',
  'value-check': '🛡️',
  'fake-check': '👁️',
  'source-check': '📋',
  'echo-chamber': '🔄',
  'agenda-setting': '🎯',
  'red-herring': '🐟',
  'false-appeal': '🎪',
}

// ── GERMAN STEMMER (rule-based, Porter-style) ──
function germanStemmer(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length < 3) return w

  // Normalize umlauts
  w = w.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')

  // Remove common prefixes
  if (w.startsWith('ge') && w.length > 4) w = w.slice(2)
  if (w.startsWith('ver') && w.length > 5) w = w.slice(3)
  if (w.startsWith('be') && w.length > 4) w = w.slice(2)
  if (w.startsWith('ent') && w.length > 5) w = w.slice(3)
  if (w.startsWith('zer') && w.length > 5) w = w.slice(3)
  if (w.startsWith('miss') && w.length > 6) w = w.slice(4)

  // Step 1: Remove plural/verb suffixes
  if (w.endsWith('sses')) w = w.slice(0, -2)
  else if (w.endsWith('sse') && w.length > 4) w = w.slice(0, -3)
  else if (w.endsWith('ten') && w.length > 4) w = w.slice(0, -3)
  else if (w.endsWith('tes') && w.length > 4) w = w.slice(0, -3)
  else if (w.endsWith('den') && w.length > 4) w = w.slice(0, -3)
  else if (w.endsWith('nen') && w.length > 4) w = w.slice(0, -3)

  // Step 2: Common noun suffixes
  const nounSuffixes = ['ung', 'heit', 'keit', 'lich', 'bar', 'sam', 'nis', 'tum', 'schaft', 'ling', 'ion']
  for (const suf of nounSuffixes) {
    if (w.endsWith(suf) && w.length > suf.length + 1) {
      w = w.slice(0, -suf.length)
      break
    }
  }

  // Step 3: -en, -es, -er, -e, -n, -s (case/gender endings)
  if (w.endsWith('en') && w.length > 4) w = w.slice(0, -2)
  else if (w.endsWith('es') && w.length > 4) w = w.slice(0, -2)
  else if (w.endsWith('er') && w.length > 3) w = w.slice(0, -2)
  else if (w.endsWith('e') && w.length > 3) w = w.slice(0, -1)
  else if (w.endsWith('n') && w.length > 4) w = w.slice(0, -1)
  else if (w.endsWith('s') && w.length > 4) w = w.slice(0, -1)

  return w
}

// ── UKRAINIAN "STEMMER" (substring-based — Ukrainian morphology is too complex for rules) ──
// Ukrainian has complex aspectual verb pairs, 7 cases, many suffixes.
// We use a light normalization that handles the most common endings.
function ukrainianStemmer(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length < 3) return w

  // Remove very common prefixes
  if (w.startsWith('най') && w.length > 4) w = w.slice(3) // superlative
  if (w.startsWith('при') && w.length > 4) w = w.slice(3)
  if (w.startsWith('пере') && w.length > 5) w = w.slice(4)
  if (w.startsWith('роз') && w.length > 4) w = w.slice(3)
  if (w.startsWith('від') && w.length > 4) w = w.slice(3)

  // Adjective/verb endings
  if (w.endsWith('увати') || w.endsWith('ювати')) w = w.slice(0, -4)
  else if (w.endsWith('ться') && w.length > 5) w = w.slice(0, -4)
  else if (w.endsWith('ний')) { w = w.slice(0, -3) }
  else if (w.endsWith('на') || w.endsWith('не') || w.endsWith('ні')) { w = w.slice(0, -2) }
  else if (w.endsWith('ння') && w.length > 4) w = w.slice(0, -3)
  else if (w.endsWith('ти') && w.length > 3) w = w.slice(0, -2) // infinitive
  else if (w.endsWith('ла') || w.endsWith('ло') || w.endsWith('ли')) w = w.slice(0, -2) // past tense
  else if (w.endsWith('ів') || w.endsWith('ів') || w.endsWith('їв')) w = w.slice(0, -2)
  else if (w.endsWith('а') || w.endsWith('я')) w = w.slice(0, -1)
  else if (w.endsWith('у') || w.endsWith('ю')) w = w.slice(0, -1)
  else if (w.endsWith('ом') || w.endsWith('ем') || w.endsWith('єм')) w = w.slice(0, -2)
  else if (w.endsWith('ою') || w.endsWith('ею') || w.endsWith('єю')) w = w.slice(0, -2)

  // Plural endings
  if (w.endsWith('и') && w.length > 3) w = w.slice(0, -1)

  return w
}

// ── ENGLISH STEMMER (Porter-style, unchanged) ──
function simpleStem(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length < 3) return w
  if (w.endsWith('sses')) w = w.slice(0, -2)
  else if (w.endsWith('ies')) w = w.slice(0, -2)
  else if (w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1)
  if (w.endsWith('eed') && w.length > 3) { /* keep */ }
  else if (w.endsWith('ed') && w.length > 2) { const stem = w.slice(0, -2); if (/[aeiou]/.test(stem)) w = stem }
  else if (w.endsWith('ing') && w.length > 3) { const stem = w.slice(0, -3); if (/[aeiou]/.test(stem)) w = stem }
  if (w.endsWith('y') && w.length > 2 && /[aeiou]/.test(w.slice(0, -1))) { w = w.slice(0, -1) + 'i' }
  const step2: [string, string][] = [
    ['ational', 'ate'], ['tional', 'tion'], ['ization', 'ize'],
    ['iveness', 'ive'], ['fulness', 'ful'], ['ousness', 'ous'],
    ['ation', 'ate'], ['ator', 'ate'], ['iviti', 'ive'], ['biliti', 'ble'],
    ['alism', 'al'], ['aliti', 'al'], ['entli', 'ent'], ['ousli', 'ous'],
    ['enci', 'ence'], ['anci', 'ance'], ['abli', 'able'], ['izer', 'ize'],
    ['alli', 'al'], ['eli', 'e'],
  ]
  for (const [suf, rep] of step2) { if (w.endsWith(suf) && w.length > suf.length + 1) { w = w.slice(0, -suf.length) + rep; break } }
  if (w.endsWith('icate') && w.length > 5) w = w.slice(0, -4) + 'ic'
  else if (w.endsWith('ative') && w.length > 5) w = w.slice(0, -5)
  else if (w.endsWith('alize') && w.length > 5) w = w.slice(0, -4) + 'al'
  else if (w.endsWith('ical') && w.length > 4) w = w.slice(0, -3) + 'ic'
  else if (w.endsWith('ness') && w.length > 4) w = w.slice(0, -4)
  else if (w.endsWith('ful') && w.length > 3) w = w.slice(0, -3)
  else if (w.endsWith('ment') && w.length > 4) w = w.slice(0, -4)
  const step4Suffs = ['al', 'ance', 'ence', 'er', 'ic', 'able', 'ible', 'ant', 'ement', 'ment', 'ent', 'ism', 'ate', 'iti', 'ous', 'ive', 'ize']
  for (const suf of step4Suffs) { if (w.endsWith(suf) && w.length > suf.length + 2) { w = w.slice(0, -suf.length); break } }
  if (w.endsWith('ion') && w.length > 4 && /[st]/.test(w[w.length - 4] || '')) w = w.slice(0, -3)
  if (w.endsWith('e') && w.length > 3) { if (w.length > 4) w = w.slice(0, -1) }
  return w
}

// ── STEMMER SELECTION ──
function getStemmer(lang: Language): (word: string) => string {
  switch (lang) {
    case 'de': return germanStemmer
    case 'ua': return ukrainianStemmer
    default: return simpleStem
  }
}

// ── HIGHLIGHT RULES v2 — Multi-Language (en/de/ua) ──
// Each rule has per-language word lists and per-language explanations
const HIGHLIGHT_RULES: Record<CoreToolId, HighlightRule[]> = {

  // ════════════════════════════════════════
  // 1. BAD ARGUMENTS — Schopenhauer, Cialdini
  // ════════════════════════════════════════
  'bad-arguments': [
    {
      words: {
        en: ['always', 'never', 'every', 'none', 'nothing', 'totally', 'completely', 'absolutely', 'definitive', 'undoubtedly', 'without a doubt', 'beyond question', 'no question'],
        de: ['immer', 'nie', 'jeder', 'keiner', 'nichts', 'vollständig', 'absolut', 'definitiv', 'ohne Zweifel', 'ohne Frage', 'unbestritten', 'jedes', 'keine', 'kein', 'niemand', 'niemals', 'ganz', 'alle'],
        ua: ['завжди', 'ніколи', 'всі', 'ніхто', 'нічого', 'повністю', 'абсолютно', 'неперевершено', 'без сумніву', 'незаперечно', 'кожен', 'жоден', 'жодного', 'зовсім'],
      },
      explanation: {
        en: '⚠️ Absolute word — suppresses all exceptions. Schopenhauer called this "overgeneralization": claiming something is universal when it never is. Ask: is there really no exception anywhere?',
        de: '⚠️ Absolutes Wort — unterdrückt alle Ausnahmen. Schopenhauer: "Überverallgemeinerung". Frage: Gibt es wirklich keine Ausnahme?',
        ua: '⚠️ Абсолютне слово — пригнічує всі винятки. Шопенгауер: "надмірне узагальнення". Питання: Чи дійсно немає винятків?',
      },
    },
    {
      words: {
        en: ['expert', 'professor', 'doctor', 'scientist', 'institute', 'authority', 'researcher'],
        de: ['Experte', 'Professor', 'Doktor', 'Wissenschaftler', 'Institut', 'Autorität', 'Forscher', 'Fachmann', 'Fachleute', 'Fachfrau', 'Spezialist', 'Menschenrechtsverletzung', 'Sachverständiger', 'Gutachter'],
        ua: ['експерт', 'професор', 'доктор', 'вчений', 'інститут', 'авторитет', 'дослідник', 'фахівець', 'спеціаліст'],
      },
      explanation: {
        en: '🎭 Authority claim — Cialdini\'s Influence Principle: we automatically trust titles. But who is this "expert"? What\'s their name? Real authorities name themselves.',
        de: '🎭 Autoritätsbehauptung — Cialdini: wir vertrauen automatisch Titeln. Wer ist dieser "Experte"? Echte Autoritäten nennen ihren Namen.',
        ua: '🎭 Посилання на авторитет — Чалдіні: ми автоматично довіряємо титулам. Хто цей "експерт"? Справжні авторитети називають себе.',
      },
    },
    {
      words: {
        en: ['obviously', 'clearly', 'undeniably', 'certainly', 'surely', 'plainly'],
        de: ['offensichtlich', 'klar', 'unbestritten', 'selbstverständlich', 'natürlich', 'evident'],
        ua: ['очевидно', 'зрозуміло', 'непереконливо', 'звісно', 'природно', 'виразно'],
      },
      explanation: {
        en: '🧠 False certainty — "obviously" replaces actual arguments. Schopenhauer: if something needs to be called "obvious," it probably isn\'t.',
        de: '🧠 Falsche Gewissheit — "offensichtlich" ersetzt Argumente. Schopenhauer: was "offensichtlich" genannt wird, ist es meist nicht.',
        ua: '🧠 Фальшива впевненість — "очевидно" замінює аргументи. Шопенгауер: те, що називають "очевидним", зазвичай таким не є.',
      },
    },
  ],

  // ════════════════════════════════════════
  // 2. FEELINGS CHECK — Cialdini, Fear Appeals
  // ════════════════════════════════════════
  'feelings-check': [
    {
      words: {
        en: ['fear', 'danger', 'terrible', 'horrible', 'shocking', 'horrifying', 'devastating', 'catastrophic', 'terrifying', 'abuse', 'illegal'],
        de: ['Angst', 'Gefahr', 'schrecklich', 'grauenhaft', 'schockierend', 'grässlich', 'zerstörend', 'katastrophal', 'beängstigend', 'Missbrauch', 'illegal', 'Menschenrechtsverletzung', 'Menschenrechtsverletzungen', 'Terror', 'Schrecken', 'Schrecklicher', 'gefährlich'],
        ua: ['страх', 'небезпека', 'жахливо', 'страшний', 'шокуючий', 'жахливий', 'руйнівний', 'катастрофічний', 'страшний', 'зловживання', 'порушення', 'незаконний', 'теpop', 'небезпечно', 'жах'],
      },
      explanation: {
        en: '😨 Fear bait — Cialdini\'s Scarcity principle: fear makes us act without thinking. Every word designed to trigger your amygdala. Ask: who benefits from my fear?',
        de: '😨 Angst-Köder — Cialdinis Knappheitsprinzip: Angst lässt uns handeln ohne zu denken. Frage: Wer profitiert von meiner Angst?',
        ua: '😨 Приманка страху — принцип дефіциту Чалдіні: страх змушує діяти без думки. Питання: Хто отримує вигоду з мого страху?',
      },
    },
    {
      words: {
        en: ['urgent', 'immediately', 'hurry', 'crisis', 'emergency', 'last chance', 'act now'],
        de: ['dringend', 'sofort', 'Eile', 'Krise', 'Notfall', 'letzte Chance', 'jetzt handeln'],
        ua: ['терміновий', 'негайно', 'поспішайте', 'криза', 'надзвичайний', 'останній шанс', 'дійте зараз'],
      },
      explanation: {
        en: '⏰ Urgency — manufactured time pressure bypasses critical thinking (System 1). Cialdini: when time pressure is artificial, the decision is engineered. Take a breath.',
        de: '⏰ Dringlichkeit — künstlicher Zeitdruck umgeht kritisches Denken. Cialdini: bei künstlichem Zeitdruck ist die Entscheidung konstruiert. Atme durch.',
        ua: '⏰ Терміновість — штучний часовий тиск обходить критичне мислення. Чалдіні: коли тиск штучний, рішення сконструйоване. Зробіть вдих.',
      },
    },
    {
      words: {
        en: ['outrage', 'scandal', 'appalling', 'disgrace', 'despicable', 'revolting', 'atrocious', 'monstrous'],
        de: ['Empörung', 'Skandal', 'abscheulich', 'Schande', 'verachtenswert', 'ekelhaft', 'grausam', 'monströs'],
        ua: ['обурення', 'скандал', 'огидний', 'ганьба', 'мерзенний', 'огидний', 'жахливий', 'монструозний'],
      },
      explanation: {
        en: '🔥 Outrage bait — emotion replaces argument entirely. Anger is intentional, designed to make you share before thinking. Ask: what facts hide behind this fury?',
        de: '🔥 Empörungsköder — Emotion ersetzt Argument. Wut ist beabsichtigt, damit du teilst bevor du denkst. Frage: Welche Fakten verbergen sich hinter dieser Wut?',
        ua: '🔥 Приманка обурення — емоція повністю замінює аргумент. Гнів навмисний, щоб ви поширили перед тим, як подумати. Питання: Які факти приховані за цим гнівом?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 3. BRAIN CHECK — Kahneman (System 1 biases)
  // ════════════════════════════════════════
  'brain-check': [
    {
      words: {
        en: ['majority', 'most people', 'people say', 'popular opinion', 'everyone thinks', 'overwhelmingly', 'vast majority'],
        de: ['Mehrheit', 'die meisten', 'laut', 'laut Angaben', 'alle denken', 'überwältigend', 'überwältigende Mehrheit'],
        ua: ['більшість', 'найбільше людей', 'за твердженням', 'народна думка', 'всі думають', 'переважна більшість'],
      },
      explanation: {
        en: '👥 Bandwagon — Kahneman\'s Availability Heuristic. "Most people" replaces evidence with social proof. Truth is not a democracy. Popularity ≠ validity.',
        de: '👥 Mitläufereffekt — Kahnemans Verfügbarkeitsheuristik. "Die meisten" ersetzt Beweise durch sozialen Beweis. Wahrheit ist keine Demokratie.',
        ua: '👥 Ефект приєднання — евристика доступності Канемана. "Більшість" замінює докази соціальним схваленням. Істина — не демократія.',
      },
    },
    {
      words: {
        en: ['million', 'billion', 'thousands', 'record', 'unprecedented', 'highest', 'lowest', 'biggest', 'worst', 'largest', 'massive', 'hundreds of'],
        de: ['Millionen', 'Milliarden', 'Tausende', 'Rekord', 'beispiellos', 'höchste', 'niedrigste', 'größte', 'schlechteste', 'massiv', 'bis zu', 'Hunderte'],
        ua: ['мільйони', 'мільярди', 'тисячі', 'рекорд', 'безпрецедентний', 'найвищий', 'найнижчий', 'найбільший', 'найгірший', 'масштабний', 'до', 'сотень'],
      },
      explanation: {
        en: '⚓ Anchoring — Kahneman\'s Anchoring bias. Big numbers set an emotional anchor. 45,000 sounds huge — compared to what? Ask: what\'s the baseline?',
        de: '⚓ Anker-Effekt — Kahnemans Anker-Bias. Große Zahlen setzen einen emotionalen Anker. 45.000 klingt riesig — verglichen womit? Frage: Was ist die Basis?',
        ua: '⚓ Ефект якоря — упередження якоря Канемана. Великі числа встановлюють емоційний якір. 45,000 звучить величезно — порівняно з чим? Питання: Який базовий рівень?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 4. HIDDEN MYTH — Roland Barthes
  // ════════════════════════════════════════
  'hidden-story': [
    {
      words: {
        en: ['freedom', 'liberty', 'security', 'order', 'chaos', 'progress', 'tradition', 'modern', 'natural', 'privacy', 'surveillance'],
        de: ['Freiheit', 'Sicherheit', 'Ordnung', 'Chaos', 'Fortschritt', 'Tradition', 'modern', 'natürlich', 'Datenschutz', 'Überwachung'],
        ua: ['свобода', 'воля', 'безпека', 'порядок', 'хаос', 'прогрес', 'традиція', 'сучасний', 'природний', 'приватність', 'спостереження'],
      },
      explanation: {
        en: '🏛️ Barthes: Myth exposed — "Freedom" is not an argument, it\'s a story. Abstract ideals used to justify concrete policies without evidence. Ask: who defined this word?',
        de: '🏛️ Barthes: Mythos entlarvt — "Freiheit" ist kein Argument, sondern eine Geschichte. Abstrakte Ideale rechtfertigen Politik ohne Beweise. Frage: Wer definierte dieses Wort?',
        ua: '🏛️ Барт: міф викрито — "Свобода" не аргумент, а історія. Абстрактні ідеали виправдовують конкретну політику без доказів. Питання: Хто визначив це слово?',
      },
    },
    {
      words: {
        en: ['crisis', 'threat', 'danger', 'emergency', 'breakdown', 'collapse', 'disaster', 'catastrophe'],
        de: ['Krise', 'Bedrohung', 'Gefahr', 'Notfall', 'Zusammenbruch', 'Kollaps', 'Katastrophe'],
        ua: ['криза', 'загроза', 'небезпека', 'надзвичайний', 'зрив', 'руйнування', 'катастрофа'],
      },
      explanation: {
        en: '📢 Barthes: Myth of crisis — "crisis" justifies extraordinary measures and suspends debate. Not every problem is a crisis. Ask: is this really a crisis?',
        de: '📢 Barthes: Mythos der Krise — "Krise" rechtfertigt außergewöhnliche Maßnahmen. Nicht jedes Problem ist eine Krise. Frage: Ist das wirklich eine Krise?',
        ua: '📢 Барт: міф кризи — "криза" виправдовує надзвичайні заходи. Не кожна проблема є кризою. Питання: Чи дійсно це криза?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 5. US VS THEM — Tajfel & Turner
  // ════════════════════════════════════════
  'us-vs-them': [
    {
      words: {
        en: ['our kind', 'our way of life', 'our values', 'our homeland', 'our country', 'our culture', 'our nation', 'our people'],
        de: ['unsere Art', 'unsere Lebensweise', 'unsere Werte', 'unser Vaterland', 'unser Land', 'unsere Kultur', 'unser Volk', 'unsere Leute'],
        ua: ['наші', 'наш спосіб життя', 'наші цінності', 'наша батьківщина', 'наша країна', 'наша культура', 'наша нація', 'наші люди'],
      },
      explanation: {
        en: '🛡️ Tajfel: In-group branding — "our" creates an exclusive club. Even random groups produce "us vs them" bias. Ask: who is NOT included in this "our"?',
        de: '🛡️ Tajfel: Eigengruppen-Markierung — "unser" erschafft einen exklusiven Club. Frage: Wer ist NICHT in diesem "unser" eingeschlossen?',
        ua: '🛡️ Тайфель: маркування "своїх" — "наш" створює ексклюзивний клуб. Питання: Хто НЕ включений у це "наш"?',
      },
    },
    {
      words: {
        en: ['invasion', 'flood of', 'wave of', 'swarm', 'plague', 'tide', 'taking over', 'taking our', 'destroying our', 'against us', 'coming for'],
        de: ['Invasion', 'Flut von', 'Welle von', 'Schwarm', 'Pest', 'Flut', 'übernehmen', 'unsere', 'zerstören', 'gegen uns', 'kommen für'],
        ua: ['навала', 'потік', 'хвиля', 'рій', 'епідемія', 'хвиля', 'перебирають', 'наші', 'руйнують', 'проти нас', 'йдуть за'],
      },
      explanation: {
        en: '🌊 Dehumanization — nature and war metaphors ("flood", "invasion") turn humans into forces of nature. You can\'t negotiate with a flood. Ask: when did people become a weather event?',
        de: '🌊 Entmenschlichung — Naturmetaphern ("Flut", "Invasion") verwandeln Menschen in Naturgewalten. Mit einer Flut kann man nicht verhandeln.',
        ua: '🌊 Дегуманізація — природні метафори ("потік", "навала") перетворюють людей на стихійні лиха. З повінню не домовишся.',
      },
    },
    {
      words: {
        en: ['threat', 'encroaching', 'creeping', 'infiltration', 'infiltrating', 'fifth column'],
        de: ['Bedrohung', 'vordringend', 'schleichend', 'Infiltration', 'infiltrieren', 'Fünfte Kolonne'],
        ua: ['загроза', 'просувається', 'повзучий', 'інфільтрація', 'проникає', 'п\'ята колона'],
      },
      explanation: {
        en: '🚨 Proximization — "They are at our doorstep" paints the out-group as approaching danger. Creates urgency for action. Ask: is this threat real or framed?',
        de: '🚨 Proximisierung — "Sie stehen vor der Tür" malt die Fremdgruppe als nahende Gefahr. Frage: Ist diese Bedrohung echt oder inszeniert?',
        ua: '🚨 Проксимізація — "Вони вже на порозі" зображує чужинців як наближену небезпеку. Питання: Ця загроза реальна чи сконструйована?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 6. MORAL BUTTONS — Haidt
  // ════════════════════════════════════════
  'value-check': [
    {
      words: {
        en: ['innocent', 'harm', 'victim', 'suffer', 'protect', 'children', 'abuse', 'cruel', 'compassion', 'addictive'],
        de: ['unschuldig', 'Schaden', 'Opfer', 'leiden', 'schützen', 'Kinder', 'Missbrauch', 'grausam', 'Mitgefühl', 'süchtig'],
        ua: ['невинний', 'шкода', 'жертва', 'страждати', 'захищати', 'діти', 'зловживання', 'жорстокий', 'співчуття', 'залежний'],
      },
      explanation: {
        en: '💚 Haidt: Care — activates compassion or outrage instantly. "Innocent children" trigger the most universal moral button. Ask: who is the victim, and what policy is justified by their pain?',
        de: '💚 Haidt: Fürsorge — aktiviert Mitgefühl oder Empörung sofort. "Unschuldige Kinder" drücken den universellsten moralischen Knopf. Frage: Wer ist das Opfer?',
        ua: '💚 Гайдт: Турбота — активує співчуття або обурення миттєво. "Невинні діти" натискають найуніверсальнішу моральну кнопку. Питання: Хто жертва?',
      },
    },
    {
      words: {
        en: ['fair', 'unfair', 'equal', 'justice', 'cheat', 'corrupt', 'fraud', 'deserve', 'rights', 'discrimination', 'greed'],
        de: ['fair', 'unfair', 'gleich', 'Gerechtigkeit', 'betrügen', 'korrupt', 'Betrug', 'verdienen', 'Rechte', 'Diskriminierung', 'Gier'],
        ua: ['справедливий', 'несправедливий', 'рівний', 'справедливість', 'обман', 'корумпований', 'шахрайство', 'заслуговувати', 'права', 'дискримінація', 'жадібність'],
      },
      explanation: {
        en: '⚖️ Haidt: Fairness — injustice is one of the strongest human motivators. "Corrupt", "unfair" trigger outrage. Ask: what\'s the full picture of who gets what?',
        de: '⚖️ Haidt: Fairness — Ungerechtigkeit ist einer der stärksten Motivatoren. "Korrupt", "unfair" lösen Empörung aus. Frage: Wer bekommt was?',
        ua: '⚖️ Гайдт: Справедливість — несправедливість один із найсильніших мотиваторів. "Корупція", "несправедливий" викликають обурення. Питання: Хто що отримує?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 7. FAKE CHECK — Baudrillard
  // ════════════════════════════════════════
  'fake-check': [
    {
      words: {
        en: ['viral', 'meme', 'trending', 'influencer', 'social media', 'go viral', 'blowing up', 'deepfake', 'deepfakes'],
        de: ['viral', 'Meme', 'trending', 'Influencer', 'Social Media', 'viral gehen', 'explodieren', 'Deepfake', 'Deepfakes'],
        ua: ['вірусний', 'мем', 'трендовий', 'інфлюенсер', 'соціальні мережі', 'стати вірусним', 'розповсюджується', 'діпфейк', 'діпфейки'],
      },
      explanation: {
        en: '🔄 Baudrillard: Simulacrum — content only cares about its own spread. "Viral", "trending" — the message IS the medium. Ask: is there any actual information here?',
        de: '🔄 Baudrillard: Simulacrum — der Inhalt kümmert sich nur um seine Verbreitung. "Viral", "trending" — die Botschaft IST das Medium. Frage: Enthält das echte Information?',
        ua: '🔄 Бодрійяр: Симулякр — контент турбується лише про поширення. "Вірусний", "трендовий" — повідомлення Є медіумом. Питання: Чи є тут реальна інформація?',
      },
    },
    {
      words: {
        en: ['apparently', 'rumor', 'anonymous', 'sources say', 'unconfirmed', 'allegedly', 'reportedly', 'supposedly', 'doctored', 'falsely', 'manipulated', 'misinformation'],
        de: ['angeblich', 'Gerücht', 'anonym', 'laut Quellen', 'unbestätigt', 'angeblich', 'laut Berichten', 'angeblich', 'manipuliert', 'falsch', 'Desinformation'],
        ua: ['за твердженням', 'чутки', 'анонімний', 'за даними', 'непідтверджений', 'за твердженням', 'за повідомленням', 'за твердженням', 'сфабрикований', 'неправдивий', 'маніпульований', 'дезінформація'],
      },
      explanation: {
        en: '🔎 Epistemology: unverified — the text admits it\'s unreliable. "Allegedly", "unconfirmed" — the author covers themselves while still spreading the claim. Ask: if they can\'t confirm it, why are they telling me?',
        de: '🔎 Unbestätigt — der Text gibt zu, unzuverlässig zu sein. "Angeblich", "unbestätigt" — der Autor sichert sich ab. Frage: Wenn sie es nicht bestätigen können, warum erzählen sie es mir?',
        ua: '🔎 Непідтверджено — текст визнає свою ненадійність. "За твердженням", "непідтверджений" — автор підстраховується. Питання: Якщо вони не можуть підтвердити, навіщо вони мені це кажуть?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 8. SOURCE CHECK — Epistemology
  // ════════════════════════════════════════
  'source-check': [
    {
      words: {
        en: ['experts', 'scientists', 'researchers', 'doctors', 'professionals', 'authorities', 'analysts', 'specialists'],
        de: ['Experten', 'Wissenschaftler', 'Forscher', 'Ärzte', 'Fachleute', 'Autoritäten', 'Analysten', 'Spezialisten'],
        ua: ['експерти', 'вчені', 'дослідники', 'лікарі', 'фахівці', 'авторитети', 'аналітики', 'спеціалісти'],
      },
      explanation: {
        en: '🎭 Anonymous authority — "Experts say" is not a source, it\'s a stage prop. Unnamed experts = rhetorical devices. Ask: what are their names? Can I verify them in 30 seconds?',
        de: '🎭 Anonyme Autorität — "Experten sagen" ist keine Quelle, sondern eine Requisite. Frage: Wie heißen sie? Kann ich sie in 30 Sekunden überprüfen?',
        ua: '🎭 Анонімний авторитет — "Експерти кажуть" не джерело, а реквізит. Питання: Як їх звати? Чи можу я перевірити їх за 30 секунд?',
      },
    },
    {
      words: {
        en: ['study', 'studies', 'research', 'survey', 'report', 'analysis', 'data', 'statistics', 'findings'],
        de: ['Studie', 'Studien', 'Forschung', 'Umfrage', 'Bericht', 'Analyse', 'Daten', 'Statistiken', 'Ergebnisse'],
        ua: ['дослідження', 'дослідження', 'дослідження', 'опитування', 'звіт', 'аналіз', 'дані', 'статистика', 'результати'],
      },
      explanation: {
        en: '📚 Vague reference — "A study shows" is meaningless without details. Which study? Which university? Which journal? Ask: can I find this paper with a 30-second search?',
        de: '📚 Vage Referenz — "Eine Studie zeigt" ist bedeutungslos ohne Details. Welche Studie? Welche Uni? Frage: Kann ich diese Studie in 30 Sekunden finden?',
        ua: '📚 Нечітке посилання — "Дослідження показує" безглуздо без деталей. Яке дослідження? Який університет? Питання: Чи можу я знайти це за 30 секунд?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 9. ECHO CHAMBER
  // ════════════════════════════════════════
  'echo-chamber': [
    {
      words: {
        en: ['everyone is saying', 'everyone agrees', 'all over the internet', 'trending everywhere', 'going viral', 'blowing up'],
        de: ['alle sagen', 'alle sind sich einig', 'überall im Internet', 'trending überall', 'viral gehen', 'explodiert'],
        ua: ['всі кажуть', 'всі згодні', 'по всьому інтернету', 'трендує всюди', 'поширюється', 'вибухає'],
      },
      explanation: {
        en: '🔄 Echo loop — "everyone is saying" claims consensus without evidence. Check: are they all quoting the same source? One story shared 1000 times ≠ 1000 sources.',
        de: '🔄 Echo-Schleife — "alle sagen" behauptet Konsens ohne Beweise. Prüfe: zitieren alle dieselbe Quelle? Eine 1000× geteilte Geschichte ≠ 1000 Quellen.',
        ua: '🔄 Луна-петля — "всі кажуть" стверджує консенсус без доказів. Перевірте: чи всі цитують одне джерело? Одна історія поширена 1000 разів ≠ 1000 джерел.',
      },
    },
    {
      words: {
        en: ['multiple sources', 'sources confirm', 'all outlets', 'every news outlet', 'across the board'],
        de: ['mehrere Quellen', 'Quellen bestätigen', 'alle Medien', 'alle Nachrichtenmedien', 'durchgehend'],
        ua: ['кілька джерел', 'джерела підтверджують', 'всі ЗМІ', 'всі новинні видання', 'по всій лінії'],
      },
      explanation: {
        en: '📡 Self-referencing — "multiple sources" often means one wire story republished. Real corroboration comes from independent investigations. Ask: are these independent or syndicated?',
        de: '📡 Selbstreferenz — "mehrere Quellen" bedeutet oft eine Agenturgeschichte. Echte Bestätigung kommt von unabhängigen Untersuchungen. Frage: Sind diese unabhängig?',
        ua: '📡 Самоцитування — "кілька джерел" часто означає одну історію. Справжнє підтвердження від незалежних розслідувань. Питання: Вони незалежні?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 10. AGENDA SETTING
  // ════════════════════════════════════════
  'agenda-setting': [
    {
      words: {
        en: ['the real issue', 'the real problem', 'what matters', 'what really matters', 'the only thing', 'the only question', 'the crux', 'at the heart of'],
        de: ['das eigentliche Problem', 'was zählt', 'was wirklich zählt', 'die einzige Sache', 'die einzige Frage', 'der Kern', 'im Herzen von'],
        ua: ['справжня проблема', 'що важливо', 'що справді важливо', 'єдине', 'єдине питання', 'суть', 'у центрі'],
      },
      explanation: {
        en: '🎯 Framing — the author tells you what to focus on. McCombs & Shaw: media tells you WHAT TO THINK ABOUT. Ask: what am I being made to ignore?',
        de: '🎯 Framing — der Autor sagt dir, worauf du achten sollst. McCombs & Shaw: Medien sagen dir, WORÜBER du nachdenken sollst. Frage: Was soll ich ignorieren?',
        ua: '🎯 Фреймінг — автор каже вам, на чому зосередитись. Маккомбс і Шоу: медіа кажуть вам, ПРО ЩО думати. Питання: Що мене змушують ігнорувати?',
      },
    },
    {
      words: {
        en: ['meanwhile', 'behind the scenes', "what they don't want you to know", 'hidden truth', "what the media isn't telling you"],
        de: ['mittlerweile', 'hinter den Kulissen', 'was sie verheimlichen', 'verborgene Wahrheit', 'was die Medien verschweigen'],
        ua: ['тим часом', 'за лаштунками', 'що вони приховують', 'прихована правда', 'що ЗМІ не говорять'],
      },
      explanation: {
        en: '🖥️ Selective attention — "what they don\'t want you to know" positions the story as hidden truth, making criticism look like cover-up. The framing IS the manipulation.',
        de: '🖥️ Selektive Aufmerksamkeit — "was sie verheimlichen" positioniert die Geschichte als verborgene Wahrheit. Das Framing IST die Manipulation.',
        ua: '🖥️ Вибіркова увага — "що вони приховують" позиціонує історію як приховану правду. Фреймінг І є маніпуляцією.',
      },
    },
  ],

  // ════════════════════════════════════════
  // 11. RED HERRING — Distraction
  // ════════════════════════════════════════
  'red-herring': [
    {
      words: {
        en: ['but what about', 'what about', 'and yet', 'despite this', 'meanwhile', 'not to mention'],
        de: ['aber was ist mit', 'was ist mit', 'und doch', 'trotzdem', 'mittlerweile', 'nicht zu vergessen'],
        ua: ['але що з', 'що з', 'і все ж', 'незважаючи на це', 'тим часом', 'не кажучи вже'],
      },
      explanation: {
        en: '🐟 Distraction — "but what about" shifts to easier ground. Classic Schopenhauer: when losing an argument, change the subject. Ask: is this relevant or an escape route?',
        de: '🐟 Ablenkung — "aber was ist mit" wechselt zu einfacherem Terrain. Schopenhauer: wenn du ein Argument verlierst, wechsle das Thema. Frage: Ist das relevant?',
        ua: '🐟 Відволікання — "але що з" перемикає на легшу тему. Шопенгауер: програючи в аргументі, зміни тему. Питання: Це релевантно?',
      },
    },
    {
      words: {
        en: ['isolated incident', 'one bad apple', 'not all', 'just a few', 'a tiny minority', 'lone wolf', 'single case'],
        de: ['Einzelfall', 'ein fauler Apfel', 'nicht alle', 'nur wenige', 'eine winzige Minderheit', 'einsamer Wolf'],
        ua: ['один випадок', 'одне погане яблуко', 'не всі', 'лише кілька', 'незначна меншість', 'одинак'],
      },
      explanation: {
        en: '🎯 Dismissal — "one bad apple" sounds reasonable but distracts from systemic issues. Ask: is this truly isolated, or is "isolated" dismissing a real pattern?',
        de: '🎯 Abwertung — "ein fauler Apfel" klingt vernünftig, lenkt aber von systemischen Problemen ab. Frage: Ist das wirklich ein Einzelfall?',
        ua: '🎯 Відхилення — "одне погане яблуко" звучить розумно, але відволікає від системних проблем. Питання: Це дійсно поодинокий випадок?',
      },
    },
  ],

  // ════════════════════════════════════════
  // 12. FALSE APPEAL
  // ════════════════════════════════════════
  'false-appeal': [
    {
      words: {
        en: ['for centuries', 'for generations', 'always been', 'time-tested', 'traditional', 'age-old', 'ancient wisdom'],
        de: ['jahrhundertelang', 'seit Generationen', 'immer schon', 'bewährt', 'traditionell', 'altbewährt', 'uralte Weisheit'],
        ua: ['століттями', 'поколіннями', 'завжди було', 'перевірено часом', 'традиційний', 'давній', 'давня мудрість'],
      },
      explanation: {
        en: '🎪 Appeal to tradition — "for centuries" is not an argument, it\'s a timeline. Bloodletting was practiced for centuries. So was slavery. Age ≠ validity.',
        de: '🎪 Appell an Tradition — "jahrhundertelang" ist kein Argument, sondern ein Zeitstrahl. Aderlass wurde jahrhundertelang praktiziert. Alter ≠ Gültigkeit.',
        ua: '🎪 Звернення до традиції — "століттями" не аргумент, а хронологія. Кровопускання практикували століттями. Вік ≠ достовірність.',
      },
    },
    {
      words: {
        en: ['modern', 'progressive', 'new era', 'cutting-edge', 'revolutionary', 'disruptive', 'next generation'],
        de: ['modern', 'fortschrittlich', 'neue Ära', 'hochmodern', 'revolutionär', 'bahnbrechend', 'nächste Generation'],
        ua: ['сучасний', 'прогресивний', 'нова ера', 'передовий', 'революційний', 'проривний', 'наступне покоління'],
      },
      explanation: {
        en: '🎪 Appeal to novelty — "new" is not inherently better. "Cutting-edge" replaces evidence with hype. Ask: what SPECIFICALLY makes this better, not just newer?',
        de: '🎪 Appell an Neuheit — "neu" ist nicht automatisch besser. "Hochmodern" ersetzt Beweise durch Hype. Frage: Was genau macht das besser?',
        ua: '🎪 Звернення до новизни — "новий" не означає кращий. "Передовий" замінює докази ажіотажем. Питання: Що конкретно робить це кращим?',
      },
    },
  ],
}

// ── HIGHLIGHT FUNCTION v11 — Multi-Language ──
export function getHighlightsFor(
  toolIds: CoreToolId[],
  text: string,
  language: Language = 'en'
): Map<string, HighlightEntry[]> {
  const map = new Map<string, HighlightEntry[]>()
  const stemmer = getStemmer(language)
  const cleanedText = text.toLowerCase().replace(/[^a-zäöüßа-яґєіїё'^\s]/gi, ' ')
  const singleTokens = cleanedText.split(/\s+/).filter(Boolean)

  for (const toolId of toolIds) {
    const rules = HIGHLIGHT_RULES[toolId]
    if (!rules) continue
    const config = CORE_TOOLS.find(t => t.id === toolId)
    if (!config) continue

    // Check multi-word phrases first (exact match, per language)
    for (const rule of rules) {
      const lang: 'en' | 'de' | 'ua' = language
      const langWords = rule.words[lang] || rule.words['en']
      for (const phrase of langWords) {
        if (phrase.includes(' ')) {
          const lowerText = text.toLowerCase()
          if (lowerText.includes(phrase.toLowerCase())) {
            addEntry(map, phrase, {
              word: phrase,
              explanation: rule.explanation,
              color: config.color,
            })
          }
        }
      }
    }

    // Single words — STEM-based matching per language
    const stemMap = new Map<string, { word: string; explanation: Record<Language, string> }[]>()
    for (const rule of rules) {
      const lang: 'en' | 'de' | 'ua' = language
      const langWords = rule.words[lang] || rule.words['en']
      for (const word of langWords) {
        if (word.includes(' ')) continue
        const stem = stemmer(word)
        const existing = stemMap.get(stem) || []
        existing.push({ word, explanation: rule.explanation })
        stemMap.set(stem, existing)
      }
    }

    const seen = new Set<string>()
    for (const token of singleTokens) {
      if (seen.has(token)) continue
      const tokenStem = stemmer(token)
      const matches = stemMap.get(tokenStem)
      if (matches && matches.length > 0) {
        seen.add(token)
        const uniqueExplanations = [...new Set(matches.map(m => JSON.stringify(m.explanation)))]
        const combinedExplanations = uniqueExplanations.map(s => JSON.parse(s) as Record<Language, string>)
        // Merge all explanations
        const merged: Record<Language, string> = {
          en: [...new Set(combinedExplanations.map(e => e.en || ''))].join(' • '),
          de: [...new Set(combinedExplanations.map(e => e.de || ''))].join(' • '),
          ua: [...new Set(combinedExplanations.map(e => e.ua || ''))].join(' • '),
        }
        addEntry(map, token, { word: token, explanation: merged, color: config.color })
      }
    }
  }

  return map
}

function addEntry(map: Map<string, HighlightEntry[]>, key: string, entry: HighlightEntry) {
  const existing = map.get(key) || []
  if (!existing.some(e => e.word === entry.word && e.color === entry.color)) {
    existing.push(entry)
    map.set(key, existing)
  }
}

// Helper: get tool name for a given language
export function getToolName(toolId: CoreToolId, language: Language): string {
  const tool = CORE_TOOLS.find(t => t.id === toolId)
  return tool?.name[language] || tool?.name['en'] || toolId
}

// Helper: get tool description for a given language
export function getToolDescription(toolId: CoreToolId, language: Language): string {
  const tool = CORE_TOOLS.find(t => t.id === toolId)
  return tool?.description[language] || tool?.description['en'] || ''
}