const express = require('express');
const db = require('../DB/db')

const router = express.Router();

router.get('/products', (req,res) => {

    const query = "Select * from products"
    db.query(query, [], (err, result) => {
        if (err) {
            console.error('Error retrieving product:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ products : result})
    })
})

module.exports = router;