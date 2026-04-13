const Product = require('../models/product.model');


const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        // Product is our model, find is a function to get data from db, {} here means all data, await waits until db responds
        res.status(200).json(products);
        // status(200) means http success code, .json sends data as json format to user
    } catch(error){
        res.status(500).json({message: error.message});
        // 500 is server error
    }
}

const getProductById = async (req, res) => {
    try{
        const {id} = req.params; //req.params is an object holding the id,
        // {id} means create a variable called id and assign it the value of req.params.id
        // {} is a pattern used to extract values
        // {id} is a destructuring syntax
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const createProduct = async(req,res)=>{
    try{
            const product = await Product.create(req.body);
            res.status(200).json(product);
        }catch(error){
            res.status(500).json({message: error.message});
        }
}

const updateProduct = async(req,res)=>{
    try{
            const{id} = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body);
            if(!product){
                return res.status(404).json({message: "Product not found"});
            }
            const updatedProduct =await Product.findById(id);
            res.status(200).json(updatedProduct);
        }catch(error){
            res.status(500).json({message: error.message});
        }
}

const deleteProduct = async(req, res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(deletedProduct);
    }catch(error){
        res.status(500).json({message : error.messsage});
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}