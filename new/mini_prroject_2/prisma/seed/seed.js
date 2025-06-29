const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const restaurants = [
    {
      restaurant_id: '5f298d08-4398-4444-8fe2-373afe40df01',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/7a1e5c1304bafdd6af7defbae37d999a',
      restaurant_name: 'muthu hotel veg',
      restaurant_rating: '4.6 (5.7K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'b1e2c3d4-5678-4321-8abc-1234567890ab',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/8b2e5c1304bafdd6af7defbae37d999b',
      restaurant_name: 'saravana bhavan',
      restaurant_rating: '4.5 (10K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'c2f3e4d5-6789-5432-9bcd-2345678901bc',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9c3e5c1304bafdd6af7defbae37d999c',
      restaurant_name: 'ananda bhavan',
      restaurant_rating: '4.3 (8.2K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'd3g4h5i6-7890-6543-0cde-3456789012cd',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/1d4e5c1304bafdd6af7defbae37d999d',
      restaurant_name: 'murugan idli shop',
      restaurant_rating: '4.7 (12K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'e4h5i6j7-8901-7654-1def-4567890123de',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2e5f6c1304bafdd6af7defbae37d999e',
      restaurant_name: 'sangeetha veg',
      restaurant_rating: '4.4 (6.5K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'f5i6j7k8-9012-8765-2ef0-5678901234ef',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3f6g7c1304bafdd6af7defbae37d999f',
      restaurant_name: 'hotel junior kuppanna',
      restaurant_rating: '4.2 (4.3K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'g6j7k8l9-0123-9876-3f01-6789012345f0',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/4g7h8c1304bafdd6af7defbae37d999g',
      restaurant_name: 'aditya bhavan',
      restaurant_rating: '4.1 (3.9K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'h7k8l9m0-1234-0987-4g12-7890123456g1',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5h8i9c1304bafdd6af7defbae37d999h',
      restaurant_name: 'mathura restaurant',
      restaurant_rating: '4.0 (2.5K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'i8l9m0n1-2345-1098-5h23-8901234567h2',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6i9j0c1304bafdd6af7defbae37d999i',
      restaurant_name: 'hotel aryaas',
      restaurant_rating: '4.3 (7.1K+ ratings)',
      restaurant_location: 'chennai',
    },
    {
      restaurant_id: 'j9m0n1o2-3456-2109-6i34-9012345678i3',
      restaurant_image_url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/7j0k1c1304bafdd6af7defbae37d999j',
      restaurant_name: 'hotel woodlands',
      restaurant_rating: '4.5 (9.8K+ ratings)',
      restaurant_location: 'chennai',
    },
  ];

  for (const data of restaurants) {
    await prisma.restaurant.upsert({
      where: { restaurant_id: data.restaurant_id },
      update: data,
      create: data,
    });
  }

  console.log('Seeded 10 restaurants!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
