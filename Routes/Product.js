const express = require('express');
const router = express.Router();
const db = require('../DB/db');


router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM products WHERE id = ?';

  db.query(query, [productId], (err, results) => {
    if (err) {
      console.error('Error retrieving product:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    const product = results[0];
    res.json({ product });
  });
});

module.exports = router;
