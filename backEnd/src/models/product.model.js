import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    detail: { type: String, required: true },
});

export default model('Product', ProductSchema);