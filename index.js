// Express.js is a framework that makes building servers and APIs much easier

const express = require('express'); //importing the Express library into the project. get the tools
const app= express(); //express() is a function → calling it gives you an app object. creating an express application(server)

/* This app is the main thing you use to:
- create routes (app.get, app.post)
- handle requests & responses
- start the server */


app.listen(3000, ()=>{ //starts the server and wait for request
    // ()=> is a callback function. a function given to another to be run later
    // Arrow function syntax: () => { ... } is a shorter way to write function() { ... }
    console.log('Server is running on port 3000');// display in server
});

app.get('/', (req, res) => { // get - reads data, '/' - home route 
    // req - data coming from the client (request), res - what u send back to user(response), this is also a callback function 
    res.send('Hello from Node API Server'); //sends to user 
});

//got nodemon , so whatever we change auto changes when we save, we dont have to restart the server every time we make a change.

