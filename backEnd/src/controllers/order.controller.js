import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        if (!userId || !productId || !quantity) {
            return res.status(400).json({ message: "userId, productId, and quantity are required" });
        }

        const newOrder = new Order({
            userId,
            productId,
            quantity,
        });

        if (newOrder) {
            await newOrder.save();
            res.status(201).json(newOrder);
        } else {
            res.status(400).json({ message: "Invalid order data" });
        }
    } catch (error) {
        console.log("Error in createOrder controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getAllOrders controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in getOrderById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { userId, productId, quantity } = req.body;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { userId, productId, quantity },
            { new: true }
        );

        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in updateOrder controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (deletedOrder) {
            res.status(200).json({ message: "Order deleted successfully" });
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in deleteOrder controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getOrdersByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const orders = await Order.find({ userId });
        if (orders) {
            res.status(200).json(orders);
        } else {
            res.status(404).json({ message: "No orders found for this user" });
        }
    } catch (error) {
        console.log("Error in getOrdersByUserId controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const addQuantity = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (order) {
            order.quantity += 1;
            await order.save();
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in addQuantity controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const subtractQuantity = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (order) {
            order.quantity = Math.max(1, order.quantity - 1);
            await order.save();
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in subtractQuantity controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};