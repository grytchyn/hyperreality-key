import { Router, Request, Response } from 'express';
import { MISSIONS } from '../data/missions.js';

const router = Router();

// GET /api/v1/levels — list all levels
router.get('/', (_req: Request, res: Response) => {
  const levels = MISSIONS.map(m => ({
    id: m.id,
    title: m.title,
    source: m.source,
    scientist: m.scientist,
    color: m.color,
    standardViolations: m.standardViolations || []
  }));
  res.json({ success: true, data: levels, total: levels.length });
});

// GET /api/v1/levels/:number — full level data
router.get('/:number', (req: Request, res: Response) => {
  const num = parseInt(String(req.params.number), 10);
  const level = MISSIONS.find(m => m.id === num);
  if (!level) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Level ${num} not found` } });
  }
  res.json({ success: true, data: level });
});

export default router;
