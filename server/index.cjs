const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // To enable CORS for Vue.js frontend
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', express.static(path.join(__dirname, '../src/assets/images')));

// Create connection to MariaDB
const db = mysql.createConnection({
    host: 'localhost', // Replace with your MariaDB host
    user: 'root', // Replace with your MariaDB user
    password: '6432', // Replace with your MariaDB password
    database: 'jewelryShop', // Replace with your MariaDB database
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('Connected to MariaDB');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Define route to fetch data from the table
app.get('/api/data', (req, res) => {
    const sql = 'SELECT id, name, price FROM products'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
