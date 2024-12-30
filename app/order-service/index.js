const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4002;

app.use(express.json());

// In-memory order data
let orders = [];

// Create a new order
app.post('/orders', async (req, res) => {
  const { productId, quantity } = req.body;

  // Validate product exists by calling the product service
  try {
    const productResponse = await axios.get(`http://product-service:4002/products/${productId}`);
    
    const product = productResponse.data;
    
    
    // // Create order
    const newOrder = {
      id: orders.length + 1,
      product,
      quantity,
      total: product.price * quantity
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(404).send('no data found');
  }
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Order Service is running on http://localhost:${PORT}`);
});