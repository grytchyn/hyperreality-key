import { Router, Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

// Load missions from JSON
const missionsPath = join(__dirname, '..', 'data', 'missions.json');
let missions: any[] = [];
try {
  missions = JSON.parse(readFileSync(missionsPath, 'utf-8'));
} catch (err) {
  console.error('Failed to load missions.json:', err);
}

// GET /api/v1/articles — list all articles (lightweight, no content)
router.get('/', (_req: Request, res: Response) => {
  const summary = missions.map(m => ({
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
  const article = missions.find(m => m.id === id);
  if (!article) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Article ${id} not found` } });
  }
  res.json({ success: true, data: article });
});

// GET /api/v1/articles/level/:level — article by level number
router.get('/level/:level', (req: Request, res: Response) => {
  const level = parseInt(String(req.params.level), 10);
  const article = missions.find(m => m.id === level);
  if (!article) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Level ${level} not found` } });
  }
  res.json({ success: true, data: article });
});

export default router;