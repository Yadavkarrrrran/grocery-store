const User = require('../models/User');

const getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user.cart || []);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCart = async (req, res) => {
    try {
        const { cart } = req.body;
        const user = await User.findById(req.user.id);
        if (cart) {
            user.cart = cart;
            await user.save();
        }
        res.json(user.cart || []);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getCart,
    updateCart
};
