const express = require('express');
const mysql = require('mysql');
const app = express();

const addProduct = require('./Routes/addProduct')
const Products = require('./Routes/Products')
const Product = require('./Routes/Product')
const deleteproduct = require('./Routes/deleteProduct')
const updateProduct = require('./Routes/updateProduct')

app.use(express.json());
const port = 8080;


app.use("/", Products)
app.use("/", addProduct)
app.use("/", deleteproduct)
app.use("/", updateProduct)
app.use('/products', Product)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
