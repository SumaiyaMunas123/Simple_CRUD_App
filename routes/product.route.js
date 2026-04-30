const express = require('express'); //importing express module
const Product = require('../models/product.model.js'); //importing the product model to interact with the database
const router = express.Router(); //creating a router object to define routes in a separate file
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js'); //importing the product controller to handle the logic for the routes

router.get('/', getProducts);
router.get('/:id', getProductById);

// create a new product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);


module.exports = router;