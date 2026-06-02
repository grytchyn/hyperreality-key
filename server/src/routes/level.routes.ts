import { Router } from 'express';

const router = Router();

// Level routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'List all levels' });
});

router.get('/:number', (req, res) => {
  res.json({ message: 'Get level by number' });
});

export default router;
