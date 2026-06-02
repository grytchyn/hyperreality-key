import { Router } from 'express';

const router = Router();

// User routes placeholder
router.get('/me', (req, res) => {
  res.json({ message: 'Get current user' });
});

router.patch('/me', (req, res) => {
  res.json({ message: 'Update current user' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get user by ID' });
});

export default router;
