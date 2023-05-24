const express = require('express');
const db = require('../DB/db')

const router = express.Router();

router.post('/addproduct', (req,res) => {
    const { title, price, description, image, quantity } = req.body;

    const query = "INSERT INTO products (title, price, description, image, quantity) VALUES (?, ?, ?, ?, ?)"
    const data = [title, price, description, image, quantity]

    db.query(query, data, (err, result) => {
        if (err) {
            console.error('Error adding product:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(201).json({ message: 'Product added successfully'});
    })
})

module.exports = router;