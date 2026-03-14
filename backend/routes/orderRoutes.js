const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders, getAllOrders, updateOrderStatus, deleteOrder } = require('../controllers/orderController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { verifyAdmin } = require('../middleware/adminMiddleware');

// User routes
router.post('/', authenticateToken, createOrder);
router.get('/my-orders', authenticateToken, getMyOrders);

// Admin routes
router.get('/', authenticateToken, verifyAdmin, getAllOrders);
router.put('/:id', authenticateToken, verifyAdmin, updateOrderStatus);
router.delete('/:id', authenticateToken, verifyAdmin, deleteOrder);

module.exports = router;
