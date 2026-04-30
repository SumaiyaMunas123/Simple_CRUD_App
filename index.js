// Express.js is a framework that makes building servers and APIs much easier

const express = require('express'); //importing the Express library into the project. get the tools
const mongoose = require('mongoose'); //importing the Mongoose library into the project. get the tools
const app= express(); //express() is a function → calling it gives you an app object. creating an express application(server)
const Product= require('./models/product.model');
const productRoute = require('./routes/product.route.js');

// middlewares
app.use(express.json()); //middleware to act as translator to understand json nd pass it 
app.use(express.urlencoded({extended: false})); //middleware to understand url encoded data, extended: false means we are not allowing nested objects in url encoded data

/* This app is the main thing you use to:
- create routes (app.get, app.post)
- handle requests & responses
- start the server */


// app.listen(3000, ()=>{ //starts the server and wait for request
//     // ()=> is a callback function. a function given to another to be run later
//     // Arrow function syntax: () => { ... } is a shorter way to write function() { ... }
//     console.log('Server is running on port 3000');// display in server
// });


// routes
app.use('/api/products', productRoute);



app.get('/', (req, res) => { // get - reads data, '/' - home route 
    // req - data coming from the client (request), res - what u send back to user(response), this is also a callback function 
    res.send('Hello from Node API Server'); //sends to user 
});




/*app.get('/api/products', async (req, res)=>{ //async is a function tht allows await, time taking
    try{
        const products = await Product.find({});
        // Product is our model, find is a function to get data from db, {} here means all data, await waits until db responds
        res.status(200).json(products);
        // status(200) means http success code, .json sends data as json format to user
    } catch(error){
        res.status(500).json({message: error.message});
        // 500 is server error
    }
});*/

// get a prodcut using id

 /*app.get('/api/products/:id', async (req, res)=>{//:id is a dynamic parameter, it can be any id, we can access it using req.params.id
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
});*/

// app.post('/api/products',(req,res)=>{//post - user sends data
//     console.log(req.body); 
//     res.send(req.body);
// })

/*app.post('/api/products',async(req,res)=>{//post - user sends data
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})*/

// updating a product
/*app.put('/api/products/:id', async(req,res)=>{
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
})*/

// deleting a product 
/*app.delete('/api/products/:id', async(req, res)=>{
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
}) */

//got nodemon , so whatever we change auto changes when we save, we dont have to restart the server every time we make a change.

mongoose.connect("mongodb+srv://sumaiya:123@simpledb.s9z7gna.mongodb.net/Simple_CRUD_App?appName=simpledb")
.then (()=> { //we connect the mongodb using connection string
    console.log('connected to database');

    app.listen(3000, ()=>{ //starts the server and wait for request
    // ()=> is a callback function. a function given to another to be run later
    // Arrow function syntax: () => { ... } is a shorter way to write function() { ... }
    console.log('Server is running on port 3000');// display in server
    });
})

.catch (()=>{ //if not connected
    console.log('connection failed');
})