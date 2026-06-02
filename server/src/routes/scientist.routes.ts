import { Router } from 'express';

const router = Router();

// Scientist routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'List all scientists' });
});

router.get('/:key', (req, res) => {
  res.json({ message: 'Get scientist by key' });
});

export default router;
