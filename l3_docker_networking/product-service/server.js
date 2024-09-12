// product-service/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for products
const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.49 },
    { id: 3, name: 'Product 3', price: 15.99 }
];

// API endpoint to get all products
app.get('/products', (req, res) => {
    res.json(products);
});


// API endpoint to get a specific product by ID
app.get('/products/:id', (req, res) => {

    const productId = parseInt(req.params.id);

    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});

