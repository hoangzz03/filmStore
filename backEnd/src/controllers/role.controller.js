import Role from "../models/role.model.js";

export const createRole = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }

        const newRole = new Role({
            name,
        });

        if (newRole) {
            await newRole.save();
            res.status(201).json(newRole);
        } else {
            res.status(400).json({ message: "Invalid role data" });
        }
    } catch (error) {
        console.log("Error in createRole controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        console.log("Error in getAllRoles controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findById(id);
        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        console.log("Error in getRoleById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateRole = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedRole = await Role.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        if (updatedRole) {
            res.status(200).json(updatedRole);
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        console.log("Error in updateRole controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRole = await Role.findByIdAndDelete(id);
        if (deletedRole) {
            res.status(200).json({ message: "Role deleted successfully" });
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        console.log("Error in deleteRole controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};