const mongoose = require("mongoose"); //getting mongoose external library through require method and storing it in a variable called mongoose
// imports mongoose library which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data and includes built-in type casting, validation, query building, business logic hooks and more.
// helps u contact mongodb easily , 

const ProductSchema = new mongoose.Schema(
    // mongoose.Schema is a constructor function 
    // here a new object called ProductSchema is created using the mongoose.Schema constructor. 
    // This object defines the structure of the documents that will be stored in the MongoDB collection for products. 
    // It specifies the fields (name, quantity, price, image) and their data types, as well as any validation rules (e.g., required fields).
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],//this message shows when the user does not enter the name of the product and tries to save it in the database
    },

    quantity: {
      type: Number,
      required: true, //field is required
      default: 0, //if user dont send value, it stores 0
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true, //auto adds createdAt and updatedAt fields to the schema, 
                      // which automatically store the timestamps of when a document is created and last updated. 
  },
);

const Product = new mongoose.model("Product", ProductSchema);
// mongoose.model function 
// creates a model based on the defined schema. 
// The first argument "Product" is the name of the model, which will also be used as the name of the collection in MongoDB (in lowercase and pluralized form, so it will be "products"). 
// The second argument is the schema that defines the structure of the documents in that collection.
// schema is a blueprint, model is a tool to use db
// product variable now holds the model that can be used to interact with the products collection in the MongoDB database.
module.exports = Product;
// exports the Product model so that it can be imported and used in other parts of the application, such as in controllers or routes where you want to perform operations on the products collection in the database.
