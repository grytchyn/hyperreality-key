export interface MissionClue {
  toolId: string
  text: string
  correctAnswer: string
}

export interface Mission {
  id: string
  title: string
  description: string
  clues: MissionClue[]
  finalAnswer: string
  reward: string
}

// Use a RECORD (object) instead of array with .find() — avoids minified _.find is not a function bug
const MISSION_RECORD: Record<string, Mission> = {
  'hidden-agenda': {
    id: 'hidden-agenda',
    title: 'Die versteckte Agenda',
    description: 'Dieser Artikel sieht aus wie Journalismus. Aber jemand will dich manipulieren. Finde die versteckte Agenda mit den philosophischen Werkzeugen!',
    clues: [
      { toolId: 'baudrillard', text: 'Der Artikel vermischt Fakten mit Fiktion — Ordnung 2 oder 3.', correctAnswer: '2' },
      { toolId: 'debord', text: 'Hier wird Wut als Treibstoff genutzt — Outrage-Bait erkannt!', correctAnswer: 'outrage' },
      { toolId: 'foucault', text: 'Eine bestimmte Gruppe wird systematisch zum "Problem" gemacht.', correctAnswer: 'subject' },
      { toolId: 'lyotard', text: 'Der Artikel bedient sich einer "Wir vs. Die"-Heldenreise.', correctAnswer: 'hero' },
    ],
    finalAnswer: 'Der Artikel nutzt eine emotionale Heldenreise (Lyotard), um eine Gruppe zum Feind zu machen (Foucault), mit Outrage-Bait (Debord) und vermischt Fakten mit Fiktion (Baudrillard). Die Agenda: Polarisierung + Tribalisierung.',
    reward: '🔓 Hyperreality Key #1 — Du siehst jetzt, wie Nachrichten dich formen.',
  },
}

// MISSIONS array for backwards compatibility — avoid .find(), use direct lookup function
export const MISSIONS: Mission[] = Object.values(MISSION_RECORD)

// Use this instead of .find() — direct object lookup, no array method chaining
export function getMission(id: string): Mission | undefined {
  return MISSION_RECORD[id]
}
