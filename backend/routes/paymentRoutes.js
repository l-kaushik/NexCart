import express from 'express';
import {createOrder, verifyPayment} from '../controllers/paymentController.js';

const router = express.Router();

router.post("/order", createOrder);
router.get("/verify", verifyPayment);

export default router;