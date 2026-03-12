const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const TARGET_EMAIL = 'yy400204@gmail.com'; // User's email from screenshot

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('✅ Connected to MongoDB');

        const user = await User.findOne({ email: TARGET_EMAIL });
        if (!user) {
            console.log(`❌ User not found: ${TARGET_EMAIL}`);
            console.log('Please register first!');
            process.exit(1);
        }

        user.isAdmin = true;
        await user.save();

        console.log(`✅ Success! ${user.name} (${user.email}) is now an Admin.`);
        console.log('👉 You can now login at: http://localhost:8000/admin.html');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
