import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db";
config();
connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("NexCart backend is working properly!");
});

app.use('api/auth', require('./routes/authRoutes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});