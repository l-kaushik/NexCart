import mongoose, {Schema, model} from 'mongoose';

const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 1 },
            price: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    // TODO: detach address to another model
    address: {
        fullName: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    paymentId: { type: String },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' }
}, {timestamps: true });

export default model("Order", orderSchema);