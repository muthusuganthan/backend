import { z } from 'zod';

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Validation schema for creating a restaurant
const createRestaurantSchema = z.object({
  restaurant_image_url: z.string().url({ message: 'Invalid image URL' }),
  restaurant_name: z.string().min(1, 'Name is required'),
  restaurant_rating: z.string().min(1, 'Rating is required'),
  restaurant_location: z.string().min(1, 'Location is required'),
});

// Validation schema for updating a restaurant
const updateRestaurantSchema = z.object({
  restaurant_image_url: z.string().url({ message: 'Invalid image URL' }).optional(),
  restaurant_name: z.string().min(1, 'Name is required').optional(),
  restaurant_rating: z.string().min(1, 'Rating is required').optional(),
  restaurant_location: z.string().min(1, 'Location is required').optional(),
});

// Validation schema for restaurant ID parameter
const restaurantIdSchema = z.object({
  restaurant_id: z.string().regex(uuidRegex, 'Invalid restaurant_id format'),
});

export const validateCreateRestaurant = (req, res, next) => {
  try {
    req.body = createRestaurantSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

export const validateUpdateRestaurant = (req, res, next) => {
  try {
    req.body = updateRestaurantSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

export const validateRestaurantId = (req, res, next) => {
  try {
    restaurantIdSchema.parse(req.params);
    next();
  } catch (err) {
    next(err);
  }
}; 