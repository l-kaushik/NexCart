import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {getAllProducts, addProduct, updateProduct, removeProduct, clearCart} from '../controllers/cartController.js';

const router = express.Router();

router.route('/').get(protect, getAllProducts).delete(protect, clearCart);
router.route('/:id').post(protect, addProduct).patch(protect, updateProduct).delete(protect, removeProduct);

export default router;