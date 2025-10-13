import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
    author: { type: String, required: true },
}, {
    timestamps: true,
});

export default model('Blog', BlogSchema);         