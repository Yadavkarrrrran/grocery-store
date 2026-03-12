const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { verifyAdmin } = require('../middleware/adminMiddleware');

// Get all products (Public route usually)
router.get('/', getProducts);

// Create, Update, Delete products (Admin only)
router.post('/', authenticateToken, verifyAdmin, createProduct);
router.put('/:id', authenticateToken, verifyAdmin, updateProduct);
router.delete('/:id', authenticateToken, verifyAdmin, deleteProduct);

module.exports = router;
