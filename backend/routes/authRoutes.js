import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, getUsers } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
import { admin } from '../middleware/adminMiddleware';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/users', protect, admin, getUsers);