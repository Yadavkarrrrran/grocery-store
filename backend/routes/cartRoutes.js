const express = require('express');
const router = express.Router();
const { getCart, updateCart } = require('../controllers/cartController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getCart);
router.post('/', authenticateToken, updateCart);

module.exports = router;
