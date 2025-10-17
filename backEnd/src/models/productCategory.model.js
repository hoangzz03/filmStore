import { Schema, model } from 'mongoose';

const ProductCategorySchema = new Schema({
    categoryId: { type: String, required: true },
    productId: { type: String, required: true },
});

export default model('ProductCategory', ProductCategorySchema);