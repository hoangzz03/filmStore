import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }

        const newCategory = new Category({
            name,
        });

        if (newCategory) {
            await newCategory.save();
            res.status(201).json(newCategory);
        } else {
            res.status(400).json({ message: "Invalid category data" });
        }
    } catch (error) {
        console.log("Error in createCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log("Error in getAllCategories controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.log("Error in getCategoryById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        if (updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.log("Error in updateCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (deletedCategory) {
            res.status(200).json({ message: "Category deleted successfully" });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.log("Error in deleteCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};