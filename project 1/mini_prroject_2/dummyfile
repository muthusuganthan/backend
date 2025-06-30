const { PrismaClient } = require("@prisma/client");
const express = require("express");
const z = require("zod");

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

const restaurantByIdSchema = z.object({
  restaurant_id: z.string().uuid(),
});

const restaurantCreateSchema = z.object({
  restaurant_image_url: z.string().url(),
  restaurant_name: z.string(),
  restaurant_rating: z.string(),
  restaurant_location: z.string(),
});

const restaurantUpdateSchema = z.object({
  restaurant_id: z.string(),
  restaurant_image_url: z.string().url(),
  restaurant_name: z.string(),
  restaurant_rating: z.string(),
  restaurant_location: z.string(),
});;

const restaurantDeleteSchema = z.object({
  restaurant_id: z.string(),
});

// Test or Base Route
app.get("/", (req, res) => {
  res.send("APIs Working");
});

// GET - localhost:3000/restaurants - fetch all the Restaurants in DB
app.get("/restaurants", async (req, res) => {
  try {
    // 1. Data from Frontend

    // 2. DB Logic
    const restaurants = await prisma.restaurant.findMany();

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Fetch all the Restaurants", data: restaurants });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET - localhost:3000/restaurants/:restaurant_id - fetch a the Restaurants in DB
app.get("/restaurants/:restaurant_id", async (req, res) => {
  try {
    // 1. Data from Frontend
    const { restaurant_id } = restaurantByIdSchema.parse(req.params);

    // 2. DB Logic
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        restaurant_id: restaurant_id,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Fetch a the Restaurants", data: restaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// POST - localhost:3000/restaurants/ - Add a the Restaurants in DB
app.post("/restaurants/", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = restaurantCreateSchema.parse(req.body);

    // 2. DB LOGIC
    const new_restaurant = await prisma.restaurant.create({
      data: {
        restaurant_image_url: data.restaurant_image_url,
        restaurant_name: data.restaurant_name,
        restaurant_rating: data.restaurant_rating,
        restaurant_location: data.restaurant_location,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Created a the Restaurant", data: new_restaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// PUT - localhost:3000/restaurants/ - Update a the Restaurants in DB
app.put("/restaurants/", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = restaurantUpdateSchema.parse(req.body);

    // 2. DB LOGIC
    const restaurant = await prisma.restaurant.update({
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

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Update a the Restaurant", data: restaurant });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error",err: err });
  }
});

// DEL - localhost:3000/restaurants/ - Update a the Restaurants in DB
app.delete("/restaurants/", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = restaurantDeleteSchema.parse(req.body);

    // 2. DB LOGIC
    await prisma.restaurant.delete({
      where: {
        restaurant_id: data.restaurant_id,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({ message: "Delete a the Restaurant" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error",err: err });
  }
});

app.listen(3000);