const Order = require('../models/Order');

// Create order
const createOrder = async (req, res) => {
    try {
        const { items, total, shippingAddress, customerName, customerPhone, paymentMethod, subtotal, deliveryCharge, paymentDetail, paymentStatus } = req.body;
        const newOrder = new Order({
            user: req.user.id,
            customerName: customerName || 'N/A',
            customerPhone: customerPhone || 'N/A',
            items,
            subtotal: subtotal || total,
            deliveryCharge: deliveryCharge || 0,
            total,
            shippingAddress,
            paymentMethod: paymentMethod || 'cod',
            paymentDetail,
            paymentStatus: paymentStatus || (paymentMethod === 'cod' ? 'pending' : 'pending_verification')
        });
        await newOrder.save();
        res.status(201).json({ success: true, order: newOrder });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get user's orders
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Admin: Get all orders
const getAllOrders = async (req, res) => {
    try {
        const mongoose = require('mongoose');
        if (mongoose.connection.readyState !== 1) {
            return res.json([]); // Return empty if DB disconnected
        }
        const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Admin: Update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Admin: Delete order
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrder
};
