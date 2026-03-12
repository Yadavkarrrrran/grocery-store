const seedProducts = [
    // ============ FRUITS & VEGETABLES ============
    {
        name: 'Fresho Apple - Shimla',
        price: 149,
        mrp: 180,
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Fresh Shimla apples, handpicked for quality and taste. Crisp, juicy and rich in dietary fibre.'
    },
    {
        name: 'Fresho Banana - Robusta',
        price: 44,
        mrp: 55,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg (Approx. 6-8 pcs)',
        description: 'Fresh robusta bananas, rich in potassium and fibre. Great for smoothies and snacking.'
    },
    {
        name: 'Fresho Tomato - Local',
        price: 34,
        mrp: 46,
        image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Farm-fresh local tomatoes, perfect for curries, salads & chutneys. Vine-ripened for best flavour.'
    },
    {
        name: 'Fresho Onion',
        price: 31,
        mrp: 40,
        image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Premium quality onions for everyday cooking. Essential kitchen staple for Indian dishes.'
    },
    {
        name: 'Fresho Potato',
        price: 29,
        mrp: 38,
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Fresh potatoes, ideal for curries, fries, snacks and parathas. Versatile cooking vegetable.'
    },
    {
        name: 'Fresho Mango - Alphonso',
        price: 499,
        mrp: 650,
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Premium Alphonso mangoes from Ratnagiri. Known as the King of Mangoes, sweet & aromatic.'
    },
    {
        name: 'Fresho Carrot - Orange',
        price: 41,
        mrp: 52,
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '500 g',
        description: 'Crunchy orange carrots, rich in beta-carotene & vitamins. Perfect for salads, juices & halwa.'
    },
    {
        name: 'Fresho Capsicum - Green',
        price: 36,
        mrp: 48,
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '500 g',
        description: 'Fresh green capsicums, perfect for stir-fries, stuffed capsicum & salads. Rich in Vitamin C.'
    },
    {
        name: 'Fresho Cucumber',
        price: 28,
        mrp: 35,
        image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg',
        description: 'Fresh crispy cucumbers, great for salads & raita. Low calorie, hydrating & refreshing.'
    },
    {
        name: 'Fresho Palak (Spinach)',
        price: 24,
        mrp: 30,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '500 g',
        description: 'Cleaned spinach without roots. Rich in iron & vitamins. Perfect for palak paneer & dal.'
    },
    {
        name: 'Fresho Pomegranate',
        price: 125,
        mrp: 160,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '500 g (Approx. 2 pcs)',
        description: 'Sweet & juicy pomegranates, packed with antioxidants. Great for juice, salads & garnishing.'
    },
    {
        name: 'Fresho Orange - Nagpur',
        price: 79,
        mrp: 99,
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 kg (Approx. 6-8 pcs)',
        description: 'Juicy Nagpur oranges, bursting with Vitamin C. Sweet, tangy and refreshing.'
    },
    {
        name: 'Fresho Strawberry',
        price: 89,
        mrp: 110,
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '200 g',
        description: 'Fresh farm-picked strawberries. Sweet, juicy & aromatic. Perfect for desserts & smoothies.'
    },
    {
        name: 'Fresho Cauliflower',
        price: 32,
        mrp: 42,
        image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 pc (Approx. 400-600 g)',
        description: 'Farm-fresh cauliflower. Great for gobi manchurian, aloo gobi, paratha & soups.'
    },
    {
        name: 'Fresho Broccoli',
        price: 65,
        mrp: 80,
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 pc (Approx. 250-350 g)',
        description: 'Fresh green broccoli, superfood rich in vitamins K & C. Perfect for stir-fry & soups.'
    },
    {
        name: 'Fresho Mushrooms - Button',
        price: 42,
        mrp: 55,
        image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&h=300&fit=crop',
        category: 'Fruits & Vegetables',
        unit: '1 Pack (Approx. 200 g)',
        description: 'Fresh button mushrooms. Low calorie, high protein. Ideal for pizzas, pastas & gravy.'
    },

    // ============ DAIRY & EGGS ============
    {
        name: 'Amul Taaza Toned Milk',
        price: 27,
        mrp: 29,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '500 ml',
        description: 'Toned fresh milk from Amul. Pasteurised & homogenised. 3% fat, ideal for daily use.'
    },
    {
        name: 'Amul Gold Full Cream Milk',
        price: 36,
        mrp: 38,
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '500 ml',
        description: 'Rich & creamy full cream milk from Amul. 6% fat content. Perfect for sweets, tea & coffee.'
    },
    {
        name: 'Amul Butter - Pasteurised',
        price: 56,
        mrp: 60,
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '100 g',
        description: 'Utterly butterly delicious Amul butter. Made from pure pasteurised cream. Salted variant.'
    },
    {
        name: 'Amul Butter - 500g Carton',
        price: 270,
        mrp: 290,
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '500 g',
        description: 'Amul pasteurised butter in family-size carton. Perfect for cooking, baking & spreading.'
    },
    {
        name: 'Mother Dairy Curd',
        price: 35,
        mrp: 40,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '400 g',
        description: 'Fresh and creamy dahi, naturally set. Thick & smooth texture. Good source of probiotics.'
    },
    {
        name: 'Fresho Farm Eggs',
        price: 89,
        mrp: 105,
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '10 pcs',
        description: 'Farm-fresh brown eggs, protein rich. High quality, clean & hygienically packed.'
    },
    {
        name: 'Amul Cheese Slices',
        price: 120,
        mrp: 135,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '200 g (10 Slices)',
        description: 'Amul processed cheese slices. Great for sandwiches, burgers & grilled cheese. Rich in calcium.'
    },
    {
        name: 'Amul Fresh Cream',
        price: 55,
        mrp: 62,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '250 ml',
        description: 'Amul Fresh Cream with 25% milk fat. Perfect for pasta sauces, desserts & soups.'
    },
    {
        name: 'Amul Malai Paneer',
        price: 85,
        mrp: 100,
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
        category: 'Dairy & Eggs',
        unit: '200 g',
        description: 'Fresh malai paneer from Amul. Soft & creamy. Perfect for paneer butter masala & tikka.'
    },

    // ============ STAPLES ============
    {
        name: 'India Gate Basmati Rice - Super',
        price: 399,
        mrp: 475,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '5 kg',
        description: 'Premium aged basmati rice, extra long grain. Perfect for biryani, pulao & fried rice.'
    },
    {
        name: 'Tata Sampann Toor Dal',
        price: 159,
        mrp: 189,
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 kg',
        description: 'Unpolished toor dal, rich in protein & fibre. Cooks faster, tastes better. No added polishing agents.'
    },
    {
        name: 'Fortune Sunflower Oil',
        price: 155,
        mrp: 180,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 L',
        description: 'Refined sunflower cooking oil. Light & healthy with vitamin E. Low absorption technology.'
    },
    {
        name: 'Aashirvaad Atta - Whole Wheat',
        price: 285,
        mrp: 320,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '5 kg',
        description: '100% whole wheat atta for soft rotis. Made from MP Sharbati wheat. 0% Maida.'
    },
    {
        name: 'Tata Sampann Chana Dal',
        price: 139,
        mrp: 165,
        image: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 kg',
        description: 'Unpolished chana dal. Rich in protein & dietary fibre. Perfect for dal fry & chana dal tadka.'
    },
    {
        name: 'Tata Salt - Iodised',
        price: 24,
        mrp: 24,
        image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 kg',
        description: 'India\'s trusted iodised salt. Vacuum evaporated for purity. Desh ka namak.'
    },
    {
        name: 'Saffola Gold Cooking Oil',
        price: 199,
        mrp: 230,
        image: 'https://images.unsplash.com/photo-1475906089153-644d9452ce87?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 L',
        description: 'Saffola Gold pro healthy lifestyle blended oil. Dual seed technology for better heart health.'
    },
    {
        name: 'MDH Garam Masala',
        price: 76,
        mrp: 85,
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '100 g',
        description: 'Blend of premium whole spices. Adds authentic aroma & flavour to Indian dishes.'
    },
    {
        name: 'Everest Turmeric Powder',
        price: 45,
        mrp: 52,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '100 g',
        description: 'Pure turmeric powder with natural colour & aroma. Rich in curcumin. Essential Indian spice.'
    },
    {
        name: 'Tata Sampann Moong Dal',
        price: 149,
        mrp: 178,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
        category: 'Staples',
        unit: '1 kg',
        description: 'Unpolished moong dal, easy to digest. High in protein & low in fat. Quick cooking.'
    },

    // ============ SNACKS & BRANDED FOODS ============
    {
        name: 'Lay\'s Classic Salted Chips',
        price: 20,
        mrp: 20,
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '52 g',
        description: 'Crispy classic salted potato chips. Made from real potatoes, perfectly salted.'
    },
    {
        name: 'Lay\'s Magic Masala Chips',
        price: 20,
        mrp: 20,
        image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '52 g',
        description: 'India\'s favourite Magic Masala flavoured potato chips. Tangy, spicy & crunchy.'
    },
    {
        name: 'Lay\'s Cream & Onion Chips',
        price: 30,
        mrp: 30,
        image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '90 g',
        description: 'American style cream & onion flavour potato chips. Smooth, creamy & delicious.'
    },
    {
        name: 'Maggi 2-Minute Noodles',
        price: 14,
        mrp: 14,
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '70 g',
        description: 'India\'s favourite masala instant noodles. Ready in 2 minutes. Meri Maggi!'
    },
    {
        name: 'Maggi Masala Noodles - Family Pack',
        price: 132,
        mrp: 144,
        image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '840 g (12 x 70 g)',
        description: 'Maggi 2-minute noodles family pack. 12 packs of masala noodles. Stock up & save!'
    },
    {
        name: 'Cadbury Dairy Milk Chocolate',
        price: 99,
        mrp: 110,
        image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '112 g (Family Pack)',
        description: 'Cadbury Dairy Milk chocolate bar. Smooth, creamy & irresistible. Kuch meetha ho jaaye!'
    },
    {
        name: 'Britannia Marie Gold Biscuits',
        price: 95,
        mrp: 105,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '950 g',
        description: 'Light, crispy & golden marie biscuits. Perfect with tea. Rich in wheat & goodness of milk.'
    },
    {
        name: 'Britannia Good Day Cashew Cookies',
        price: 99,
        mrp: 110,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '827 g (10 Packs)',
        description: 'Rich buttery cookies loaded with cashew nuts. Perfect tea-time snack for the whole family.'
    },
    {
        name: 'Haldiram\'s Bhujia Sev',
        price: 195,
        mrp: 220,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '1 kg',
        description: 'Traditional Bikaneri bhujia namkeen. Crispy, spicy & crunchy. Authentic taste of Rajasthan.'
    },
    {
        name: 'Kurkure Masala Munch',
        price: 20,
        mrp: 20,
        image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '75 g',
        description: 'Crunchy puffed corn snack with Indian masala flavour. Tedha hai par mera hai!'
    },
    {
        name: 'Parle-G Original Gluco Biscuits',
        price: 60,
        mrp: 65,
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '800 g',
        description: 'India\'s most loved glucose biscuit since 1939. Great taste with essential glucose energy.'
    },
    {
        name: 'Kissan Tomato Ketchup',
        price: 115,
        mrp: 135,
        image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '1 kg',
        description: 'Made with 100% real tomatoes. No added preservatives. Perfect with snacks, sandwiches & fries.'
    },
    {
        name: 'Cadbury Bournville Dark Chocolate',
        price: 150,
        mrp: 170,
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '75 g',
        description: 'Rich cocoa 70% dark chocolate. Premium indulgence for dark chocolate lovers. Bittersweet luxury.'
    },
    {
        name: 'Quaker Rolled Oats',
        price: 399,
        mrp: 450,
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '1.5 kg',
        description: 'Rich in protein & dietary fibre. 100% wholegrain oats. Heart healthy breakfast cereal.'
    },
    {
        name: 'Kissan Mixed Fruit Jam',
        price: 189,
        mrp: 215,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '1 kg',
        description: 'Made with real fruit. Spread on bread, toast or parathas. Kids\' favourite breakfast companion.'
    },
    {
        name: 'Dabur Pure Honey',
        price: 285,
        mrp: 325,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
        category: 'Snacks & Branded Foods',
        unit: '400 g',
        description: '100% pure honey. No sugar adulteration. NMR tested. Great for immunity & wellness.'
    },

    // ============ BEVERAGES ============
    {
        name: 'Tata Tea Gold',
        price: 285,
        mrp: 315,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '500 g',
        description: 'Premium tea with gently rolled long leaves. Rich flavour & golden colour. Desh ki chai.'
    },
    {
        name: 'Red Label Tea',
        price: 240,
        mrp: 265,
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '500 g',
        description: 'Natural care tea with 5 Ayurvedic herbs. Refreshing taste with goodness of nature.'
    },
    {
        name: 'Nescafe Classic Instant Coffee',
        price: 345,
        mrp: 395,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '200 g (Jar)',
        description: '100% pure instant coffee. Rich aroma & smooth taste. Makes the perfect cup every time.'
    },
    {
        name: 'Nescafe Gold Blend Coffee',
        price: 525,
        mrp: 595,
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '200 g (Jar)',
        description: 'Premium gold instant coffee. Rich, smooth & aromatic. Made from Arabica & Robusta beans.'
    },
    {
        name: 'BRU Instant Coffee',
        price: 325,
        mrp: 370,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '500 g',
        description: 'BRU instant coffee with chicory mix. Fresh, aromatic & no preservatives. South Indian favourite.'
    },
    {
        name: 'Coca-Cola Soft Drink',
        price: 40,
        mrp: 40,
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '750 ml',
        description: 'Original taste Coca-Cola. Ice-cold refreshment. The world\'s favourite soft drink.'
    },
    {
        name: 'Thums Up Soft Drink',
        price: 40,
        mrp: 40,
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '750 ml',
        description: 'Strong cola taste. Toofan in every sip. India\'s thunder cola drink.'
    },
    {
        name: 'Bournvita Chocolate Health Drink',
        price: 399,
        mrp: 470,
        image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '1 kg',
        description: 'Cadbury Bournvita with vitamins & minerals. Inner strength for growing kids. Chocolate flavour.'
    },
    {
        name: 'Taj Mahal Tea',
        price: 280,
        mrp: 310,
        image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '500 g',
        description: 'Rich & flavourful Darjeeling tea. Handpicked from the finest gardens. Wah Taj!'
    },
    {
        name: 'Lipton Green Tea - Honey Lemon',
        price: 199,
        mrp: 230,
        image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop',
        category: 'Beverages',
        unit: '100 Bags',
        description: 'Refreshing green tea with honey & lemon. 0 calories. Supports metabolism & immunity.'
    },

    // ============ CLEANING & HOUSEHOLD ============
    {
        name: 'Surf Excel Matic Liquid Detergent',
        price: 449,
        mrp: 520,
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '2 L (Top Load)',
        description: 'Matic liquid detergent for top load machines. Superior stain removal. Easy to dissolve.'
    },
    {
        name: 'Vim Lemon Dishwash Liquid',
        price: 199,
        mrp: 235,
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '750 ml',
        description: 'Dishwash liquid gel with lemon fragrance. No residue, 100% grease cleaner. Sparkling utensils.'
    },
    {
        name: 'Harpic Toilet Cleaner - Original',
        price: 109,
        mrp: 125,
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '500 ml',
        description: 'Power Plus disinfectant toilet cleaner. 10x max clean. Kills 99.9% germs. Original fresh scent.'
    },
    {
        name: 'Lizol Floor Cleaner - Citrus',
        price: 299,
        mrp: 350,
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '2 L',
        description: 'Disinfectant surface & floor cleaner. Kills 99.9% germs. Fresh citrus fragrance for clean floors.'
    },
    {
        name: 'Dettol Antiseptic Liquid',
        price: 215,
        mrp: 250,
        image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '500 ml',
        description: 'Trusted antiseptic liquid. First aid & surface hygiene. Protection against 100 illness-causing germs.'
    },
    {
        name: 'Surf Excel Easy Wash Detergent',
        price: 245,
        mrp: 280,
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '1.5 kg',
        description: 'Easy wash detergent powder. Removes tough stains easily. Lemon & rose fragrance.'
    },
    {
        name: 'Scotch-Brite Scrub Pad',
        price: 35,
        mrp: 40,
        image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '1 pc (Set of 3)',
        description: 'Heavy duty scrub sponge. Tough on grease, gentle on surfaces. Longs-lasting & durable.'
    },
    {
        name: 'Hit Cockroach Killer Spray',
        price: 225,
        mrp: 260,
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
        category: 'Cleaning & Household',
        unit: '700 ml',
        description: 'Instant cockroach killer spray. Deep reach nozzle. Kills cockroaches instantly.'
    },

    // ============ BAKERY & BREAKFAST ============
    {
        name: 'Britannia Bread - White',
        price: 38,
        mrp: 42,
        image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '400 g',
        description: 'Soft & fluffy white bread. Perfect for sandwiches, toast & French toast. Daily fresh.'
    },
    {
        name: 'Britannia Whole Wheat Bread',
        price: 45,
        mrp: 50,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '400 g',
        description: '100% whole wheat bread. High in fibre, low in fat. Healthier choice for daily breakfast.'
    },
    {
        name: 'Kellogg\'s Corn Flakes',
        price: 175,
        mrp: 200,
        image: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '475 g',
        description: 'Crunchy corn flakes breakfast cereal. Rich in iron & vitamins. Just add milk!'
    },
    {
        name: 'Kellogg\'s Muesli - Fruit, Nut & Seeds',
        price: 349,
        mrp: 395,
        image: 'https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '750 g',
        description: '12-in-1 power breakfast cereal with multigrain, fruits, nuts & seeds. High fibre & protein.'
    },
    {
        name: 'iD Fresh Idli & Dosa Batter',
        price: 69,
        mrp: 75,
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '1 kg',
        description: 'Fresh idli & dosa batter. Stone ground, no preservatives. Soft idlis & crispy dosas every time.'
    },
    {
        name: 'Britannia Cake - Chocolate',
        price: 30,
        mrp: 35,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        category: 'Bakery & Breakfast',
        unit: '150 g',
        description: 'Moist & soft chocolate cake. Rich cocoa flavour. Perfect snack with evening tea or coffee.'
    }
];

module.exports = seedProducts;
