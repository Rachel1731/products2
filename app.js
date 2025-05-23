// server.js

const Product = require("./models/products2");

// CREATE - POST - /products2
app.post("/products2", async (req, res) => {
  const createdProduct = await Product.create(req.body);
  res.json(createdProduct);
});

// READ - GET - /products2
app.get("/products2", async (req, res) => {
  // test
  const foundProduct = await Product.find();
  res.json(foundProduct);
});

//DELETE /products2
app.delete("/products2/:productId", async (req, res) => {
  // testing new route
  const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
  res.json(deletedProduct);
});

// UPDATE - PUT - /products2/:productId
app.put("/products2/:productId", async (req, res) => {
  // testing new route
  res.json({ message: `Update route with the param ${req.params.productId}` });
});

app.put("/:products2Id", async (req, res) => {
  // Product.destroy() delete new records from database.
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
});
