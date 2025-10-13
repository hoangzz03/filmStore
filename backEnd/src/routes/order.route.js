import express from "express";
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    getOrdersByUserId,
    addQuantity,
    subtractQuantity,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/user/:userId", getOrdersByUserId);
router.post("/add-quantity/:id", addQuantity);
router.post("/remove-quantity/:id", subtractQuantity);

export default router;