const User = require('../models/User');
const Otp = require('../models/Otp');
const jwt = require('jsonwebtoken');
const { sendSms } = require('../services/smsService');

// Generate OTP
const generateOtp = async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ error: 'Phone number is required' });

        const existingOtp = await Otp.findOne({ phone });
        if (existingOtp) {
            return res.status(429).json({ error: 'OTP already sent. Please wait before requesting again.' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const newOtp = new Otp({ phone, otp });
        await newOtp.save();

        const result = await sendSms(phone, `Your Callme Grocery OTP is: ${otp}`);

        if (result.success) {
            res.json({ message: 'OTP sent successfully' });
        } else if (result.fallback) {
            res.json({
                message: 'OTP sent (Simulation Mode)',
                warning: 'SMS failed. Check server console for OTP.'
            });
        } else {
            res.json({ message: 'OTP generated (Console Logged)' });
        }

    } catch (err) {
        console.error('OTP Error:', err);
        res.status(500).json({ error: 'Failed to generate OTP' });
    }
};

// Register
const register = async (req, res) => {
    try {
        const { name, email, password, phone, otp } = req.body;

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ error: 'Email already registered' });

        const newUser = new User({ name, email, password, phone });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const identifier = username || email;
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { name: identifier }
            ]
        });
        if (!user) return res.status(400).json({ error: 'Invalid username/email or password' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid username/email or password' });

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Profile
const updateProfile = async (req, res) => {
    try {
        const { name, email, phone, addresses } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (name) user.name = name;
        if (phone) user.phone = phone;
        if (addresses) user.addresses = addresses;

        if (email && email !== user.email) {
            const existing = await User.findOne({ email });
            if (existing) return res.status(400).json({ error: 'Email already in use' });
            user.email = email;
        }

        await user.save();
        res.json({ message: 'Profile updated', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update User Profile (simple - for /api/user/profile)
const updateUserProfile = async (req, res) => {
    try {
        const { name, phone } = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, { name, phone }, { new: true }).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add Address
const addAddress = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.addresses.push(req.body);
        await user.save();
        res.json(user.addresses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    generateOtp,
    register,
    login,
    getProfile,
    updateProfile,
    updateUserProfile,
    addAddress
};
