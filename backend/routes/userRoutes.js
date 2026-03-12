const express = require('express');
const router = express.Router();
const { getProfile, updateUserProfile, addAddress } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// User profile routes (mounted at /api/user)
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateUserProfile);
router.post('/address', authenticateToken, addAddress);

module.exports = router;
