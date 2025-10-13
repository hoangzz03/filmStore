import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    roleId: { type: String, required: true }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

export default User;