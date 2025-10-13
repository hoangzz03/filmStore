import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
    const { title, content, image, author } = req.body;
    try {
        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title, content, and author are required" });
        }

        const newBlog = new Blog({
            title,
            content,
            image,
            author,
        });

        if (newBlog) {
            await newBlog.save();
            res.status(201).json(newBlog);
        } else {
            res.status(400).json({ message: "Invalid blog data" });
        }
    } catch (error) {
        console.log("Error in createBlog controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.log("Error in getAllBlogs controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getBlogById = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log("Error in getBlogById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content, image, author } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, content, image, author },
            { new: true }
        );

        if (updatedBlog) {
            res.status(200).json(updatedBlog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log("Error in updateBlog controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (deletedBlog) {
            res.status(200).json({ message: "Blog deleted successfully" });
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log("Error in deleteBlog controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};