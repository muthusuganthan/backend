const express = require('express');
const { PrismaClient } = require('@prisma/client'); // Import PrismaClient
const app = express();
const prisma = new PrismaClient(); // ✅ Create instance of Prisma

const PORT = 3000;

app.use(express.json());

// GET => http://localhost:3000/products
app.get('/products', async (req, res) => {
    // 1.data to frontend
  try {
    // db logic
    const products = await prisma.product.findMany(); // Fetch products
    res.status(200).json({message:"the all the products" ,data:products}); // Success response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// GET : /products/:product_id - GetProductByProductId
app.get("/products/:product_id", async (req, res) => {
  try {
    // 1. Data from Frontend
    const { product_id } = req.params;

    // 2. DB Logic
    const productData = await prisma.product.findUnique({
      where: {
        product_id: product_id,
      },
    });

    // 3. Data to Frontend
    res
      .status(200)
      .json({ message: "Fetched a Product Data", data: productData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
