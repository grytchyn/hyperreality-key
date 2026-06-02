import { Router } from 'express';

const router = Router();

// Article routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'List all articles' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get article by ID' });
});

export default router;
