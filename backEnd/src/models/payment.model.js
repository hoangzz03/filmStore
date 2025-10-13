import { Schema, model } from 'mongoose';

const PaymentSchema = new Schema({
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String, required: true },
    payUrl: { type: String, required: true },
    resultCode: { type: Number, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true,
});

export default model('Payment', PaymentSchema);