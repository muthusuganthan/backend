const http = require('http');

// Test the base endpoint
function testBaseEndpoint() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('✅ Base endpoint test:');
      console.log('Status:', res.statusCode);
      console.log('Response:', JSON.parse(data));
      console.log('---');
    });
  });

  req.on('error', (err) => {
    console.log('❌ Base endpoint test failed:', err.message);
  });

  req.end();
}

// Test the restaurants endpoint
function testRestaurantsEndpoint() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/restaurants',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('✅ Restaurants endpoint test:');
      console.log('Status:', res.statusCode);
      console.log('Response:', JSON.parse(data));
      console.log('---');
    });
  });

  req.on('error', (err) => {
    console.log('❌ Restaurants endpoint test failed:', err.message);
  });

  req.end();
}

// Test creating a restaurant
function testCreateRestaurant() {
  const postData = JSON.stringify({
    restaurant_image_url: 'https://example.com/restaurant1.jpg',
    restaurant_name: 'Test Restaurant',
    restaurant_rating: '4.5',
    restaurant_location: '123 Test Street, Test City'
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/restaurants',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('✅ Create restaurant test:');
      console.log('Status:', res.statusCode);
      console.log('Response:', JSON.parse(data));
      console.log('---');
    });
  });

  req.on('error', (err) => {
    console.log('❌ Create restaurant test failed:', err.message);
  });

  req.write(postData);
  req.end();
}

// Run tests
console.log('🚀 Testing Restaurant API...\n');

setTimeout(() => {
  testBaseEndpoint();
}, 1000);

setTimeout(() => {
  testRestaurantsEndpoint();
}, 2000);

setTimeout(() => {
  testCreateRestaurant();
}, 3000); 