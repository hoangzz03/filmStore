import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getAllUsers controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select("-password");
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("Error in getUserById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, address, email, phone, password, avatar, roleId } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            req.body.password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        ).select("-password");

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log("Error in updateUser controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (deletedUser) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("Error in deleteUser controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};