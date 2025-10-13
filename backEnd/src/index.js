import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.route.js";
import categoryRoutes from "./routes/category.route.js";
import orderRoutes from "./routes/order.route.js";
import paymentRoutes from "./routes/payment.route.js";
import productRoutes from "./routes/product.route.js";
import productCategoryRoutes from "./routes/productCategory.route.js";
import roleRoutes from "./routes/role.route.js";
import userRoutes from "./routes/user.route.js";
import uploadRoutes from "./routes/upload.route.js";

import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FE,
    credentials: true,
  })  
);

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/product-categories", productCategoryRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});