import { PrismaClient, Prisma } from '@prisma/client';

export const prisma = new PrismaClient();

/**
 * Get all restaurants from the database
 * @returns {Promise<Array>} Array of all restaurants with all fields
 * @throws {Error} When database operation fails
 */
export const getAllRestaurants = async () => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return restaurants;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(`Database operation failed: ${error.message}`);
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
    throw new Error(`Failed to fetch restaurants: ${error.message}`);
  }
};

/**
 * Get a restaurant by its ID
 * @param {string} restaurant_id - The unique identifier of the restaurant
 * @returns {Promise<Object|null>} Restaurant object or null if not found
 * @throws {Error} When database operation fails
 */
export const getRestaurantById = async (restaurant_id) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        restaurant_id: restaurant_id,
      },
    });
    return restaurant;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(`Database operation failed: ${error.message}`);
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
    throw new Error(`Failed to fetch restaurant: ${error.message}`);
  }
};

/**
 * Create a new restaurant
 * @param {Object} restaurantData - Restaurant data object
 * @param {string} restaurantData.restaurant_image_url - URL of the restaurant image
 * @param {string} restaurantData.restaurant_name - Name of the restaurant
 * @param {string} restaurantData.restaurant_rating - Rating of the restaurant
 * @param {string} restaurantData.restaurant_location - Location of the restaurant
 * @returns {Promise<Object>} Created restaurant object
 * @throws {Error} When database operation fails or validation fails
 */
export const createRestaurant = async ({ restaurant_image_url, restaurant_name, restaurant_rating, restaurant_location }) => {
  try {
    const newRestaurant = await prisma.restaurant.create({
      data: {
        restaurant_image_url,
        restaurant_name,
        restaurant_rating,
        restaurant_location,
      },
    });
    return newRestaurant;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Restaurant with this name already exists');
      }
      throw new Error(`Database operation failed: ${error.message}`);
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
    throw new Error(`Failed to create restaurant: ${error.message}`);
  }
};

/**
 * Update a restaurant by ID
 * @param {string} restaurant_id - The unique identifier of the restaurant to update
 * @param {Object} updateData - Object containing fields to update
 * @param {string} [updateData.restaurant_image_url] - New image URL
 * @param {string} [updateData.restaurant_name] - New restaurant name
 * @param {string} [updateData.restaurant_rating] - New rating
 * @param {string} [updateData.restaurant_location] - New location
 * @returns {Promise<Object>} Updated restaurant object
 * @throws {Error} When restaurant not found or database operation fails
 */
export const updateRestaurant = async (restaurant_id, updateData) => {
  try {
    // Remove undefined values from update data
    const filteredData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== undefined)
    );

    const updatedRestaurant = await prisma.restaurant.update({
      where: {
        restaurant_id: restaurant_id,
      },
      data: filteredData,
    });
    return updatedRestaurant;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('Restaurant not found');
      }
      if (error.code === 'P2002') {
        throw new Error('Restaurant with this name already exists');
      }
      throw new Error(`Database operation failed: ${error.message}`);
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
    throw new Error(`Failed to update restaurant: ${error.message}`);
  }
};

/**
 * Delete a restaurant by ID
 * @param {string} restaurant_id - The unique identifier of the restaurant to delete
 * @returns {Promise<Object>} Deleted restaurant object
 * @throws {Error} When restaurant not found or database operation fails
 */
export const deleteRestaurant = async (restaurant_id) => {
  try {
    const deletedRestaurant = await prisma.restaurant.delete({
      where: {
        restaurant_id: restaurant_id,
      },
    });
    return deletedRestaurant;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('Restaurant not found');
      }
      throw new Error(`Database operation failed: ${error.message}`);
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
    throw new Error(`Failed to delete restaurant: ${error.message}`);
  }
}; 