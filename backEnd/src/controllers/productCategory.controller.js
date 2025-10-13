import ProductCategory from "../models/productCategory.model.js";

export const createProductCategory = async (req, res) => {
    const { categoryId, productId } = req.body;
    try {
        if (!categoryId || !productId) {
            return res.status(400).json({ message: "categoryId and productId are required" });
        }

        const newProductCategory = new ProductCategory({
            categoryId,
            productId,
        });

        if (newProductCategory) {
            await newProductCategory.save();
            res.status(201).json(newProductCategory);
        } else {
            res.status(400).json({ message: "Invalid productCategory data" });
        }
    } catch (error) {
        console.log("Error in createProductCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllProductCategories = async (req, res) => {
    try {
        const productCategories = await ProductCategory.find();
        res.status(200).json(productCategories);
    } catch (error) {
        console.log("Error in getAllProductCategories controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getProductCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const productCategory = await ProductCategory.findById(id);
        if (productCategory) {
            res.status(200).json(productCategory);
        } else {
            res.status(404).json({ message: "ProductCategory not found" });
        }
    } catch (error) {
        console.log("Error in getProductCategoryById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateProductCategory = async (req, res) => {
    const { id } = req.params;
    const { categoryId, productId } = req.body;
    try {
        const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
            id,
            { categoryId, productId },
            { new: true }
        );

        if (updatedProductCategory) {
            res.status(200).json(updatedProductCategory);
        } else {
            res.status(404).json({ message: "ProductCategory not found" });
        }
    } catch (error) {
        console.log("Error in updateProductCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteProductCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProductCategory = await ProductCategory.findByIdAndDelete(id);
        if (deletedProductCategory) {
            res.status(200).json({ message: "ProductCategory deleted successfully" });
        } else {
            res.status(404).json({ message: "ProductCategory not found" });
        }
    } catch (error) {
        console.log("Error in deleteProductCategory controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};