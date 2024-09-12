// order-service/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for orders
const orders = [
    { id: 1, productId: 1, quantity: 2 },
    { id: 2, productId: 2, quantity: 1 }
];

// API endpoint to get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// API endpoint to get a specific order by ID
app.get('/orders/:id', (req, res) => {

    const orderId = parseInt(req.params.id);

    const order = orders.find(o => o.id === orderId);

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});

