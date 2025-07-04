import { Router } from 'express';
const router = Router();
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../repos/user.repo.js';

// Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;