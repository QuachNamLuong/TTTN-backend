import { Router } from 'express';
const router = Router();
import userRepo from '../repos/user.repo.js';

// Routes
router.get('/', userRepo.getAllUsers);
router.get('/:id', userRepo.getUserById);
router.post('/', userRepo.createUser);
router.put('/:id', userRepo.updateUser);
router.delete('/:id', userRepo.deleteUser);

export default router;