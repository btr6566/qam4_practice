// user-service/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for users
const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' }
];

// API endpoint to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// API endpoint to get a specific user by ID
app.get('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }

});

// Start the server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
