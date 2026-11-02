import mongoose, {Schema, model} from 'mongoose';

const cartSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, default: 1 }
  }],
  totalPrice: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

export default model("Cart", cartSchema);