import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import ordersRoutes from './routes/ordersRoutes.js'
// import paymentRoutes from './routes/paymentRoutes.js'
import analyticsRoutes from './routes/analyticsRoutes.js'

config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("NexCart backend is working properly!");
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
// app.use('/api/payment', paymentRoutes);
app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});