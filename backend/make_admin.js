const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const TARGET_EMAIL = 'yy400204@gmail.com';
const TEMP_PASSWORD = 'admin123';

mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI)
    .then(async () => {
        console.log('✅ Connected to MongoDB');

        let user = await User.findOne({ email: TARGET_EMAIL });

        if (!user) {
            console.log(`ℹ️ User not found. Creating new admin: ${TARGET_EMAIL}`);
            user = new User({
                name: 'Admin',
                email: TARGET_EMAIL,
                password: TEMP_PASSWORD,
                phone: '1234567890',
                isAdmin: true
            });
        } else {
            console.log(`✅ User found: ${user.name}`);
            user.isAdmin = true;
            user.password = TEMP_PASSWORD; // Reset password to known one
        }

        await user.save();

        console.log(`✅ Success! ${user.name} (${user.email}) is now an Admin.`);
        console.log('👉 You can now login at: http://localhost:8000/admin.html');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
