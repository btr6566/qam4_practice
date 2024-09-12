const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require("cors");
const app = express();

const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '172.17.0.2', //Per: docker inspect mysql | findstr IPAddress
    user: 'root',
    password: 'password123',
    database: 'qa'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// API endpoint example:
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
