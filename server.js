const Product = require("./models/products2.js");

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

const cors = require("cors");
app.use(cors());

// Routes go here

// POST /products2 route

app.post("/products2", async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("The express app is ready!");
});

//GET /products2 route

app.get("/products2", async (req, res) => {
  try {
    const foundProducts = await //Product.findAll();
    res.status(200).json(foundProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get(
  "/products2",
  asyncHandler(async (req, res) => {
    const products = await //Product.findAll();
    res.status(200).json(products);
  })
);

// DELETE - /products2/:productId
app.delete("/products2/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.productId,
      },
    });

    if (deletedProduct) {
      res.status(200).json({
        message: `Product with ID ${req.params.productId} deleted successfully.`,
      });
    } else {
      res
        .status(404)
        .json({ error: `Product with ID ${req.params.productId} not found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE - PUT - /products2/:productId
app.put("/products2/:productId", async (req, res) => {
  try {
    ////const [updatedCount, updatedRows] = await Product.update(req.body, {
    ////where: { id: req.params.productId },
    ////returning: true, // Only supported for PostgreSQL
    ////});

    if (updatedCount > 0) {
      res.status(200).json(updatedRows[0]);
    } else {
      res
        .status(404)
        .json({ error: `Product with ID ${req.params.productId} not found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
