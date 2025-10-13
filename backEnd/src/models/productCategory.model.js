import { Schema, model } from 'mongoose';

const ProductCategorySchema = new Schema({
    categoryId: { type: Number, required: true },
    productId: { type: Number, required: true },
});

export default model('ProductCategory', ProductCategorySchema);