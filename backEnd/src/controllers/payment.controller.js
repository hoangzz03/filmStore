import Payment from "../models/payment.model.js";

export const createPayment = async (req, res) => {
    const { orderId, amount, message, payUrl, resultCode, userId } = req.body;
    try {
        if (!orderId || !amount || !message || !payUrl || !resultCode || !userId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newPayment = new Payment({
            orderId,
            amount,
            message,
            payUrl,
            resultCode,
            userId,
        });

        if (newPayment) {
            await newPayment.save();
            res.status(201).json(newPayment);
        } else {
            res.status(400).json({ message: "Invalid payment data" });
        }
    } catch (error) {
        console.log("Error in createPayment controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        console.log("Error in getAllPayments controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findById(id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        console.log("Error in getPaymentById controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { orderId, amount, message, payUrl, resultCode, userId } = req.body;
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(
            id,
            { orderId, amount, message, payUrl, resultCode, userId },
            { new: true }
        );

        if (updatedPayment) {
            res.status(200).json(updatedPayment);
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        console.log("Error in updatePayment controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPayment = await Payment.findByIdAndDelete(id);
        if (deletedPayment) {
            res.status(200).json({ message: "Payment deleted successfully" });
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        console.log("Error in deletePayment controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getPaymentsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const payments = await Payment.find({ userId });
        res.status(200).json(payments);
    }
    catch (error) {
        console.log("Error in getPaymentsByUserId controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};