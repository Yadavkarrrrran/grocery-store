require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// Config
const connectDB = require('./config/db');

// Models (needed for seeding)
const Product = require('./models/Product');
const seedProducts = require('./seedData');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists (for temporary multer storage)
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Cloudinary (auto-configures from CLOUDINARY_URL env var)
if (process.env.CLOUDINARY_URL) {
    cloudinary.config(); // Auto-reads CLOUDINARY_URL
    console.log('☁️ Cloudinary configured from CLOUDINARY_URL');
} else if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log('☁️ Cloudinary configured from individual env vars');
} else {
    console.warn('⚠️ Cloudinary not configured! Image uploads will fail.');
}

// Configure multer storage (temporary disk storage before uploading to Cloudinary)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, 'prod-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed'));
        }
    }
});

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve the frontend index.html on root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Google Search Console verification
app.get("/googlef17fc53e7fdcadb8.html", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, "../frontend/googlef17fc53e7fdcadb8.html"));
});

// SEO Files
app.get("/robots.txt", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile(path.join(__dirname, "../frontend/robots.txt"));
});

app.get("/sitemap.xml", (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile(path.join(__dirname, "../frontend/sitemap.xml"));
});

// Connect to MongoDB
connectDB();

// Seed database
async function seedDatabase() {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            console.log('Seeding products...');
            await Product.insertMany(seedProducts);
            console.log('✅ Products seeded');
        }
    } catch (err) {
        console.error('Seeding error:', err);
    }
}
seedDatabase();

// Image Upload Endpoint - Uses Cloudinary for permanent cloud storage
const Image = require('./models/Image'); // Keep for backward compatibility

app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'callme-grocery',
            resource_type: 'image',
            transformation: [
                { width: 400, height: 300, crop: 'fill', quality: 'auto' }
            ]
        });

        // Delete the temporary local file
        fs.unlinkSync(req.file.path);

        // Return the Cloudinary URL (permanent, CDN-backed)
        res.json({ secure_url: result.secure_url });
    } catch (err) {
        console.error('Upload error:', err);
        // Clean up temp file if it exists
        if (req.file && req.file.path && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ error: 'Upload failed: ' + err.message });
    }
});

// Backward compatibility: serve images that were previously stored in MongoDB
app.get('/api/images/:id', async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }
        res.set('Content-Type', image.contentType);
        res.set('Cache-Control', 'public, max-age=31536000');
        res.send(image.data);
    } catch (err) {
        console.error('Image fetch error:', err);
        res.status(500).json({ error: 'Error retrieving image' });
    }
});

// Emergency Admin Fix Route
app.get('/api/fix-admin', async (req, res) => {
    try {
        const User = require('./models/User');
        const email = 'yy400204@gmail.com';
        const password = 'admin123';

        let user = await User.findOne({ email });
        if (!user) {
            user = new User({
                name: 'Admin',
                email: email,
                password: password,
                phone: '1234567890',
                isAdmin: true
            });
        } else {
            user.isAdmin = true;
            user.password = password;
        }
        await user.save();
        res.send('✅ Admin fixed! <br>ID: ' + email + '<br>Password: ' + password + '<br><br><a href="/admin.html">Go to Admin Login</a>');
    } catch (err) {
        res.status(500).send('❌ Error: ' + err.message);
    }
});

// Health Check
app.get('/api/health', (req, res) => {
    const mongoose = require('mongoose');
    res.json({
        dbConnected: mongoose.connection.readyState === 1,
        message: mongoose.connection.readyState === 1 ? 'Healthy' : 'Database Offline'
    });
});

// --- API Routes ---
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
