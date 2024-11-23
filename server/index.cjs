const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // To enable CORS for Vue.js frontend
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', express.static(path.join(__dirname, '../src/assets/images')));
app.use('/api', express.static(path.join(__dirname, '../src/assets/json')));

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
app.get('/api/data/products', (req, res) => {
    const sql = 'SELECT id, name, price FROM products'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/products-extended', (req, res) => {
    const sql =  // Replace with your actual table name   
    `
    SELECT 
        p.id, 
        p.name, 
        p.price, 
        pt.type,
        materials.name AS metal_name,
        IFNULL(
            GROUP_CONCAT(m.name, ' (', m.color, ')' SEPARATOR ', '), 
            'No additional materials'
        ) AS materials_list
    FROM 
        products AS p
    JOIN 
        products_types AS pt ON p.type_id = pt.id
    JOIN 
        materials ON p.metal_id = materials.id
    LEFT JOIN 
        product_stones AS ps ON p.id = ps.product_id
    LEFT JOIN 
        materials AS m ON ps.material_id = m.id
    GROUP BY 
        p.id, p.name, p.price, pt.type;
    `;
    
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/workers', (req, res) => {
    const sql = 'SELECT id, name, position, description FROM workers'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/product-types', (req, res) => {
    const sql = 'SELECT id, type FROM products_types'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/product-metals', (req, res) => {
    const sql = 'SELECT id, name FROM materials WHERE materials.class = "благородний метал"'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/product-colors', (req, res) => {
    const sql = 'SELECT id, name, code FROM color_codes'; // Replace with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/data/currency-rates', async (req, res) => {
    try {
        const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5');
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching currency rates:', error.message);
        res.status(500).json({ error: 'Failed to fetch currency rates' });
    }
});

app.get('/api/data/currency-rates-fake', (req, res) => {
    const data =
    [
        {
        "ccy":"EUR",
        "base_ccy":"UAH",
        "buy":"4.20000",
        "sale":"4.00000"
        },
        {
        "ccy":"USD",
        "base_ccy":"UAH",
        "buy":"8.05000",
        "sale":"8.65000"
        }
    ];
    res.json(data);
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
