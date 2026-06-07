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

// GET /api/v1/levels — list all levels
router.get('/', (_req: Request, res: Response) => {
  const levels = missions.map(m => ({
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
  const level = missions.find(m => m.id === num);
  if (!level) {
    return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Level ${num} not found` } });
  }
  res.json({ success: true, data: level });
});

export default router;