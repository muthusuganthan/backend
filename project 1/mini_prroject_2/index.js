const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  // 3. Data to frontend
  res.status(200).json({ message: "APIs Working" });
});

// GET – localhost:3000/restaurants – Fetch all restaurants
app.get("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend – None required
    // 2. DB logic
    const restaurantData = await prisma.restaurant.findMany();
    // 3. Data to frontend
    res.status(200).json({ message: "Fetched all restaurants", data: restaurantData });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// GET – localhost:3000/restaurants/:restaurant_id – Fetch a single restaurant
app.get("/restaurants/:restaurant_id", async (req, res) => {
  try {
    // 1. Data from frontend
    const { restaurant_id } = req.params;
    // 2. DB logic
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        restaurant_id: restaurant_id,
      },
    });
    // 3. Data to frontend
    res.status(200).json({ message: "Fetched a single restaurant", data: restaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// POST – localhost:3000/restaurants – Add a new restaurant
app.post("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend
    const data = req.body;
    console.log(data);
    // 2. DB logic
    const newRestaurant = await prisma.restaurant.create({
      data: {
        restaurant_image_url: data.restaurant_image_url,
        restaurant_name: data.restaurant_name,
        restaurant_rating: data.restaurant_rating,
        restaurant_location: data.restaurant_location,
      },
    });
    // 3. Data to frontend
    res.status(200).json({ message: "Added a new restaurant", data: newRestaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// PUT – localhost:3000/restaurants – Update a restaurant
app.put("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend
    const data = req.body;
    // 2. DB logic
    const updatedRestaurant = await prisma.restaurant.update({
      where: {
        restaurant_id: data.restaurant_id,
      },
      data: {
        restaurant_image_url: data.restaurant_image_url,
        restaurant_name: data.restaurant_name,
        restaurant_rating: data.restaurant_rating,
        restaurant_location: data.restaurant_location,
      },
    });
    // 3. Data to frontend
    res.status(200).json({ message: "Updated the restaurant", data: updatedRestaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// DELETE – localhost:3000/restaurants – Delete a restaurant
app.delete("/restaurants", async (req, res) => {
  try {
    // 1. Data from frontend
    const data = req.body;
    // 2. DB logic
    await prisma.restaurant.delete({
      where: {
        restaurant_id: data.restaurant_id,
      },
    });
    // 3. Data to frontend
    res.status(200).json({ message: "Deleted the restaurant", data: null });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
