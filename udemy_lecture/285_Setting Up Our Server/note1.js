// 1) Pre-Work 1

// 1. go to udemy_project 
// and create a new folder named 284_smart-brain-api
// 2. in bash: 284_smart-brain-api
// npm init (to have package.json)
// npm install nodemon --save-dev
    // (we can run Nodemon in our scripts and make sure our server is running)
// npm i body-parser
    // we use to parse and have access to the [req.body] 
    // to read JSON and form data.
// npm i express
    // (the express framework: we can build a server really nicely)
// touch server.js(to creat a js file) 
// 3. in pakage.json
  // "scripts": {
  //   "start": "nodemon server.js"
  // }



// 2) get a basic skeleton of Express app

// 1. in server.js
  const express = require('express');

  const app = express();

  app.listen(3000, () => {
    console.log('app is running on port 3000')
  })

// 2. run npm start
// you'll see
    // [nodemon] 2.0.7
    // [nodemon] to restart at any time, enter `rs`
    // [nodemon] watching path(s): *.*
    // [nodemon] watching extensions: js,mjs,json
    // [nodemon] starting `node server.js`
    // app is running on port 3000



// 3) create a basic route

// 1. in server.js, add
app.get('/', (req, res) => {
  res.send('this is working');
})
// 2. go to postman, and keyin localhost:3000/
// you'll see -> this is working

// 4) plan the API before start coding
// (to make sure that you have an idea of what your API design will look like)
  /*
  / --> res = this is working (to have a root route)
  /signin --> POST = sucess/fail
            ('signin' will be a POST request)
            (post some data some JSON, some user information)
            (and it's going to respond with either success or fail.)
  /register --> POST = user
            (to add the data to the database or)
            ( a variable in our server and with new user infomation)
            (will return new the user obj)
  /profile/:userId --> GET = user
            (the homescreen to have an ability: access the profile of the user)
            (we'll have a profile with an optional parameter of 'userId' 
            so that each user has their own homescreen.)
  /image --> PUT --> user
            (because the user already exists)
            (make sure that there is an update on the user profile)
  */

// 5) the reason why 'signin' use POST?
  /*
  And you also might be wondering here with the 'signin' 
  if we're not creating a new user why are we doing a POST?

  And if you remember any time we're sending a password 
  we don't really want to send it as a query string do we? 
  We want to send it inside of the body 
  ideally over HTTPS so that it's hidden 
  from man-in-the-middle attacks and it's secure. 
  */