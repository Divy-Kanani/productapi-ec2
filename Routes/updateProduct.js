const express = require('express');
const db = require('../DB/db')

const router = express.Router();

router.put('/products/:id', (req,res) => {
    const productId = req.params.id;
    const {price} = req.body;

    const query = "UPDATE products SET price = ? WHERE id = ?"
    
    db.query(query, [price, productId], (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json({ message: 'Product updated successfully'});
    })
})

module.exports = router;