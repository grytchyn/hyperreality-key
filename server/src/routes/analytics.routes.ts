import { Router } from 'express';

const router = Router();

// Analytics routes placeholder
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard data' });
});

router.get('/users', (req, res) => {
  res.json({ message: 'User growth metrics' });
});

export default router;
