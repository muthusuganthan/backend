const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");
const {
  createRestaurantSchema,
  updateRestaurantSchema,
  restaurantIdSchema,
} = require("../validations/restaurantValidation");

// Validation middleware
const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.errors[0].message,
      });
    }
  };
};

const validateParams = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.params);
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.errors[0].message,
      });
    }
  };
};

// GET /restaurants - list all restaurants
router.get("/", getAllRestaurants);

// GET /restaurants/:restaurant_id - get restaurant by ID
router.get("/:restaurant_id", validateParams(restaurantIdSchema), getRestaurantById);

// POST /restaurants - create new restaurant
router.post("/", validateRequest(createRestaurantSchema), createRestaurant);

// PUT /restaurants/:restaurant_id - update restaurant
router.put("/:restaurant_id", validateParams(restaurantIdSchema), validateRequest(updateRestaurantSchema), updateRestaurant);

// DELETE /restaurants/:restaurant_id - delete restaurant
router.delete("/:restaurant_id", validateParams(restaurantIdSchema), deleteRestaurant);

module.exports = router; 