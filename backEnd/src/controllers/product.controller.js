import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    const { name, image, desc, price, detail } = req.body;
    try {
        if (!name || !image || !desc || !price || !detail) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({
            name,
            image,
            desc,
            price,
            detail,
        });

        if (newProduct) {
            await newProduct.save();
            res.status(201).json(newProduct);
        } else {
            res.status(400).json({ message: "Invalid product data" });
        }
    } catch (error) {
        console.log("Error in createProduct controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("Error in getAllProducts controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.log("Error in getProductById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, image, desc, price, detail } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, image, desc, price, detail },
            { new: true }
        );

        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.log("Error in updateProduct controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(200).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.log("Error in deleteProduct controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};