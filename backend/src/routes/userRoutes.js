import express from 'express';
import { createOrGetUser, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', createOrGetUser);
router.get('/:id', getUserById);

export default router;