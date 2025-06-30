import express from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurantRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { prisma } from './services/restaurantService.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ success: true, data: 'API is healthy' });
});

// Restaurant routes
app.use('/api/restaurants', restaurantRoutes);

// Error handling middleware (should be last)
app.use(errorMiddleware);

async function startServer() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
}

startServer();