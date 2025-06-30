import * as restaurantService from '../services/restaurantService.js';

// Get all restaurants
export const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.status(200).json({ success: true, data: restaurants });
  } catch (error) {
    next(error);
  }
};

// Get restaurant by ID
export const getRestaurantById = async (req, res, next) => {
  try {
    const { restaurant_id } = req.params;
    const restaurant = await restaurantService.getRestaurantById(restaurant_id);
    if (!restaurant) {
      return res.status(404).json({ success: false, error: 'Restaurant not found' });
    }
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    next(error);
  }
};

// Create new restaurant
export const createRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json({ success: true, data: newRestaurant });
  } catch (error) {
    next(error);
  }
};

// Update restaurant
export const updateRestaurant = async (req, res, next) => {
  try {
    const { restaurant_id } = req.params;
    const updatedRestaurant = await restaurantService.updateRestaurant(restaurant_id, req.body);
    res.status(200).json({ success: true, data: updatedRestaurant });
  } catch (error) {
    if (error.message === 'Restaurant not found') {
      return res.status(404).json({ success: false, error: error.message });
    }
    next(error);
  }
};

// Delete restaurant
export const deleteRestaurant = async (req, res, next) => {
  try {
    await restaurantService.deleteRestaurant(req.params.restaurant_id);
    res.status(200).json({ success: true, data: { message: 'Restaurant deleted successfully' } });
  } catch (error) {
    if (error.message === 'Restaurant not found') {
      return res.status(404).json({ success: false, error: error.message });
    }
    next(error);
  }
}; 