# Restaurant API with MVC Architecture

A Node.js REST API for managing restaurants built with Express.js, Prisma ORM, and Zod validation using the MVC (Model-View-Controller) pattern.

## 🏗️ Architecture

```
mvc/
├── index.js                    # Entry point & server setup
├── routes/
│   └── restaurantRouter.js     # Restaurant routes
├── controllers/
│   └── restaurantController.js # Restaurant business logic
├── validations/
│   └── restaurantValidation.js # Zod validation schemas
├── prisma/
│   └── schema.prisma          # Database schema
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- Prisma CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database:
   ```bash
   npx prisma migrate dev
   ```

4. Start the server:
   ```bash
   npm start
   # or for development
   npm run dev
   ```

The API will be available at `http://localhost:3000`

## 📋 API Endpoints

### Base Endpoint
- **GET** `/` - API information and available endpoints

### Restaurant Endpoints
- **GET** `/restaurants` - Get all restaurants
- **GET** `/restaurants/:restaurant_id` - Get restaurant by ID
- **POST** `/restaurants` - Create new restaurant
- **PUT** `/restaurants/:restaurant_id` - Update restaurant
- **DELETE** `/restaurants/:restaurant_id` - Delete restaurant

## 📊 Database Schema

```prisma
model Restaurant {
  restaurant_id         String @id @default(uuid())
  restaurant_image_url  String
  restaurant_name       String
  restaurant_rating     String
  restaurant_location   String
}
```

## 🔧 Request/Response Format

### Standard Response Format
```json
{
  "success": boolean,
  "data": any,
  "error": string
}
```

### Create Restaurant (POST /restaurants)
**Request Body:**
```json
{
  "restaurant_image_url": "https://example.com/image.jpg",
  "restaurant_name": "Restaurant Name",
  "restaurant_rating": "4.5",
  "restaurant_location": "123 Main St, City"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "restaurant_id": "uuid",
    "restaurant_image_url": "https://example.com/image.jpg",
    "restaurant_name": "Restaurant Name",
    "restaurant_rating": "4.5",
    "restaurant_location": "123 Main St, City"
  }
}
```

### Update Restaurant (PUT /restaurants/:restaurant_id)
**Request Body:** (All fields optional)
```json
{
  "restaurant_name": "Updated Restaurant Name",
  "restaurant_rating": "4.8"
}
```

## ✅ Validation

The API uses Zod for request validation:

- **restaurant_image_url**: Must be a valid URL
- **restaurant_name**: Non-empty string
- **restaurant_rating**: Non-empty string (will be converted to numeric later)
- **restaurant_location**: Non-empty string
- **restaurant_id**: Must be a valid UUID format

## 🛠️ Error Handling

The API includes comprehensive error handling:

- **400**: Validation errors
- **404**: Restaurant not found
- **500**: Internal server errors

## 🧪 Testing

Run the test script to verify API functionality:
```bash
node test-api.js
```

## 📦 Dependencies

- **express**: Web framework
- **@prisma/client**: Database ORM
- **zod**: Schema validation
- **prisma**: Database toolkit
- **nodemon**: Development server (dev dependency)

## 🔄 Development

The project uses nodemon for automatic server restart during development:
```bash
npm run dev
```

## 📝 License

ISC 