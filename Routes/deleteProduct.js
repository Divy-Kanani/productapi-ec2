const express = require('express');
const db = require('../DB/db')

const router = express.Router();

router.delete('/products/:id', (req,res) => {
    const productId = req.params.id;

    const query = "DELETE FROM products WHERE ID = ?"
    
    db.query(query, [productId], (err, result) => {
        if (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json({ message: 'Product deleted successfully'});
    })
})

module.exports = router;