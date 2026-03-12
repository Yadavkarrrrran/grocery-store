const express = require('express');
const router = express.Router();
const { generateOtp, register, login, getProfile, updateProfile, updateUserProfile, addAddress } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Auth routes (mounted at /api/auth)
router.post('/otp', generateOtp);
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);

module.exports = router;
