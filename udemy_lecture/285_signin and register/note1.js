/**go to project 284 smart-brain-api */

// 1) /**/singin */
// 1. in server.js
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    res.send('this is working');
  })

  app.post('/signin', (req, res) => {    //new
    res.json('signing');
  })

  app.listen(3000, () => {
    console.log('app is running on port 3000');
  })

// 2. in postman
// keyin: localhost:3000/signin 
// & click post, send (make sure npm is alreay started)
  // you'll see 'signing'



// 2) /**database */

  /*
  We want to check whatever the user enters on the front-end 
  – it's going to come back here in the response or in the request 
  and we want to check it with our current list of users 
  to make sure that their passwords match.
  So it sounds like we need some sort of a database 
  */
// 1. in server.js
  const database = {
    users: [
      {
        id: '123',
        name: 'John',
        email: 'john@email.com',
        password: 'cookies',
        entries: 0,
        joined: new Date()
      }
    ]
  }
// entries: to track scores, entries means how many times
// Jhon has submitted photos for face detection
// joined: keep track of when John joined our app

// 2. in server.js
// create another user 'Sally', id is '124'


// 3) /**/singin */

// 1. in server.js
// to make sure that we use 'POST',
// so we have to access to 'req.body()'
// -> we need a conditional statement

// 2. in postman
// before coding, go to postman
// keyin: localhost:3000/signin
// click post-> body-> raw-> JSON
// enter what we want to send with our body
  // {
  //   "email": "john@email.com",
  //   "password": "cookies"
  // }
/*
We're going to send this information from the front-end 
and we're just pretending that John is logging in 
so that we have access to it here.
*/

// 3. back to server.js
  app.post('/signin',(req, res) => {
    if(req.user.email === database.users[0].email &&
      req.user.password === database.users[0].password) {
      res.json('success');
    } else {
      res.status(400).json('error logging in');
    }
  })

// 4. in postman
// click send, in postman and bash
// you'll see -> TypeError: Cannot read property 'email' of undefined
// reason:
  /**
   * when we're sending data from the front-end and it's using JSON, 
   * so, we need to parse it because Express doesn't know what we just sent over; 
   * in order to be able to use 'req.body()' we need to use body-parser
   */
// solution: use bodyParser
  const express = require('express');
  const bodyParser = require('body-parser');  //new

  const app = express();

  app.use(bodyParser.json());                 //new
  const database = {
    
  }
// back to postman, and press send
  // you'll see 'success'
// if we change the password from 'cookies' to 'cookie'
  // you'll see 400 Bad Request with 'error logging in'
