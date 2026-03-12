require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const seedProducts = require('./seedData');

async function reseed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing products
        const deleted = await Product.deleteMany({});
        console.log(`🗑️  Deleted ${deleted.deletedCount} existing products`);

        // Insert new products
        const inserted = await Product.insertMany(seedProducts);
        console.log(`✅ Seeded ${inserted.length} new products`);

        console.log('\n📦 Products by category:');
        const categories = [...new Set(seedProducts.map(p => p.category))];
        categories.forEach(cat => {
            const count = seedProducts.filter(p => p.category === cat).length;
            console.log(`   ${cat}: ${count} items`);
        });

        process.exit(0);
    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    }
}

reseed();
