import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/v1/scientists — list all scientists used in missions
router.get('/', (_req: Request, res: Response) => {
  const scientists = [
    { key: 'haidt', name: 'Jonathan Haidt', field: 'Social Psychology' },
    { key: 'foucault', name: 'Michel Foucault', field: 'Philosophy / Power Analysis' },
    { key: 'kahneman', name: 'Daniel Kahneman', field: 'Behavioral Economics' },
    { key: 'barthes', name: 'Roland Barthes', field: 'Semiotics / Media Theory' },
    { key: 'schopenhauer', name: 'Arthur Schopenhauer', field: 'Philosophy / Pessimism' },
    { key: 'sunstein', name: 'Cass Sunstein', field: 'Behavioral Law / Nudge Theory' },
    { key: 'tajfel', name: 'Henri Tajfel', field: 'Social Identity Theory' },
    { key: 'mccombs-shaw', name: 'McCombs & Shaw', field: 'Agenda-Setting Theory' },
    { key: 'baudrillard', name: 'Jean Baudrillard', field: 'Simulacra / Hyperreality' },
    { key: 'cialdini', name: 'Robert Cialdini', field: 'Persuasion Psychology' }
  ];
  res.json({ success: true, data: scientists });
});

export default router;