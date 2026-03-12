const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 } // 300 seconds = 5 minutes TTL
});

module.exports = mongoose.model('Otp', OtpSchema);
