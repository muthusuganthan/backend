const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await prisma.product.createMany({
    data: [
      {
        product_title: 'Wireless Headphones',
        product_description: 'Bluetooth headphones with noise cancellation.',
        category: 'Electronics',
        price: '79.99',
        discount_percentage: '10',
        rating: '4.5',
        thumbnail: 'https://example.com/headphones.jpg',
        brand: 'SoundMax'
      },
      {
        product_title: 'Running Shoes',
        product_description: 'Lightweight running shoes for everyday workouts.',
        category: 'Footwear',
        price: '59.99',
        discount_percentage: '15',
        rating: '4.2',
        thumbnail: 'https://example.com/shoes.jpg',
        brand: 'RunWell'
      },
      {
        product_title: 'Smart Watch',
        product_description: 'Fitness tracking smartwatch with heart rate monitor.',
        category: 'Wearables',
        price: '129.99',
        discount_percentage: '20',
        rating: '4.6',
        thumbnail: 'https://example.com/smartwatch.jpg',
        brand: 'TimeFit'
      },
      {
        product_title: 'Gaming Mouse',
        product_description: 'Ergonomic mouse with customizable RGB lighting.',
        category: 'Accessories',
        price: '39.99',
        discount_percentage: '25',
        rating: '4.7',
        thumbnail: 'https://example.com/mouse.jpg',
        brand: 'ClickPro'
      },
      {
        product_title: 'Coffee Maker',
        product_description: '12-cup programmable coffee maker with auto shut-off.',
        category: 'Home Appliances',
        price: '49.99',
        discount_percentage: '5',
        rating: '4.0',
        thumbnail: 'https://example.com/coffeemaker.jpg',
        brand: 'BrewTime'
      },
      {
        product_title: 'Backpack',
        product_description: 'Water-resistant laptop backpack with USB charging port.',
        category: 'Bags',
        price: '34.99',
        discount_percentage: '30',
        rating: '4.4',
        thumbnail: 'https://example.com/backpack.jpg',
        brand: 'PackPro'
      },
      {
        product_title: 'LED Desk Lamp',
        product_description: 'Adjustable LED desk lamp with touch control and dimmer.',
        category: 'Lighting',
        price: '24.99',
        discount_percentage: '12',
        rating: '4.1',
        thumbnail: 'https://example.com/desk-lamp.jpg',
        brand: 'BrightLite'
      }
    ]
  });

  console.log('✅ Dummy products inserted.');
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
