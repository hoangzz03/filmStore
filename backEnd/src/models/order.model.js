import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
}, { timestamps: true });

export default model('Order', OrderSchema);