import { Router, Request, Response } from 'express';
import { MISSIONS } from '../data/missions.js';

const router = Router();

// GET /api/v1/articles — list all articles (lightweight, no content)
router.get('/', (_req: Request, res: Response) => {
  const summary = MISSIONS.map(m => ({
    id: m.id,
    title: m.title,
    source: m.source,
    url: m.url,
    scientist: m.scientist,
    color: m.color,
    standardViolations: m.standardViolations || []
  }));
  res.json({ success: true, data: summary, total: summary.length });
});

// GET /api/v1/articles/:id — full article with content + highlightRules
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(String(req.params.id), 10);
  const article = MISSIONS.find(m => m.id === id);
  if (!article) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Article ${id} not found` } });
  }
  res.json({ success: true, data: article });
});

// GET /api/v1/articles/level/:level — article by level number
router.get('/level/:level', (req: Request, res: Response) => {
  const level = parseInt(String(req.params.level), 10);
  const article = MISSIONS.find(m => m.id === level);
  if (!article) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Level ${level} not found` } });
  }
  res.json({ success: true, data: article });
});

export default router;
