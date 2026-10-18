import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv/config';

const createOrder = async (req, res) => {
    try{
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        const options = {
            amount: req.body.amount * 100, // amount in the smallest currency unit
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };
        const order = await instance.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error("Payment controller error", error);
        res.status(500).json({message: "Failed to process payment"});
    }
};

const verifyPayment = async (req, res) => {
    try{
        const { razorpayOrderId, razorpayPaymentId, razorpaySignature} = req.body;
        const generatedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpayOrderId + "|" + razorpayPaymentId)
            .digest("hex");
        
            if(!generatedSignature === razorpaySignature) return res.status(400).json({message: "Payment verification failed"});
            res.status(200).json({message: "Payment verified successfully"});
            // TODO: update order status

    } catch (error) {
        console.error("Payment controller error", error);
        res.status(500).json({message: "Failed to verify payment"});
    }
}

export { createOrder };