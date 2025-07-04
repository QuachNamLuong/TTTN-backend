import express from 'express';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/api/auth', authRouter);
// router.use('/users', userRouter);

export default router;