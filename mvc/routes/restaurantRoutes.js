import { Router } from 'express';
import * as restaurantController from '../controllers/restaurantController.js';
import { validateCreateRestaurant, validateUpdateRestaurant, validateRestaurantId } from '../validations/restaurantValidation.js';

const router = Router();

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Get restaurant by ID
router.get('/:restaurant_id', validateRestaurantId, restaurantController.getRestaurantById);

// Create restaurant
router.post('/', validateCreateRestaurant, restaurantController.createRestaurant);

// Update restaurant
router.put('/:restaurant_id', validateRestaurantId, validateUpdateRestaurant, restaurantController.updateRestaurant);

// Delete restaurant
router.delete('/:restaurant_id', validateRestaurantId, restaurantController.deleteRestaurant);

export default router; 