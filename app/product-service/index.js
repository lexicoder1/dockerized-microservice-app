const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.json());

// In-memory product data
let products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 499.99 },
  { id: 3, name: 'Headphones', price: 199.99 },
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get a specific product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(PORT, () => {
  console.log(`Product Service is running on http://localhost:${PORT}`);
});