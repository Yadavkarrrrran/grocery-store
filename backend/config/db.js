const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

        if (!uri) {
            console.error('❌ No MongoDB URI found! Set MONGO_URI in your environment variables.');
            console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('MONGO')).join(', ') || 'NONE');
            process.exit(1);
        }

        // Log masked URI for debugging
        const maskedUri = uri.replace(/:([^@]+)@/, ':****@');
        console.log('🔗 Connecting to MongoDB:', maskedUri);

        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
