import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, getUsers } from '../controllers/authController.js';
import protect from '../middleware/authMiddleware.js';
import admin from '../middleware/adminMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);


export default router;