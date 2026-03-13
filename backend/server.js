require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Config
const connectDB = require('./config/db');

// Models (needed for seeding)
const Product = require('./models/Product');
const seedProducts = require('./seedData');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
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
    res.sendFile(path.join(__dirname, "../frontend/googlef17fc53e7fdcadb8.html"));
});

// SEO Files
app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/robots.txt"));
});

app.get("/sitemap.xml", (req, res) => {
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

// Image Upload Endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const fileUrl = `/uploads/${req.file.filename}`;
        res.json({ secure_url: fileUrl });
    } catch (err) {
        res.status(500).json({ error: 'Upload failed' });
    }
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
