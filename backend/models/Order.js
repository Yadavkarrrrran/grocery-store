const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    productName: String,
    price: Number,
    quantity: { type: Number, default: 1 },
    unit: String,
    image: String
});

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Linked to User
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    shippingAddress: {
        addressLine: String,
        city: String,
        state: String,
        pincode: String
    },
    paymentMethod: { type: String, default: 'cod' },
    paymentDetail: {
        refId: String,
        timestamp: Date
    },
    paymentStatus: { type: String, default: 'pending' },
    items: [OrderItemSchema],
    subtotal: Number,
    deliveryCharge: Number,
    total: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
