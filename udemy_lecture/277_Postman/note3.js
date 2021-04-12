/* Body-Parser */
/* https://www.npmjs.com/package/body-parser */


// 5) in bash
// 1. ctrl+C
// 2. npm install body-parser
// 3.
  /*
  And now this body-parser  what it's going to do 
  is it's going to grab whatever information we receive 
  and parse it just like JSON or forms into something 
  that we can use. In order to actually use it well, 
  we know how middleware works, 
  we simply at the top say 'app.use()'
  */

// 6) in server.js
const express = require('express'); 
const bodyParser = require('body-parser'); //new 

const app = express();
app.use(bodyParser.urlencoded({extended: false})) //new
app.use(bodyParser.json()); //new for 8)
app.get('/', (req, res) => {
  res.send('getting root');
});
app.get('/profile', (req, res) => {
  res.send('getting profile');
});

app.post('/profile', (req, res) => {
  console.log(req.body)
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user);
});

app.listen(3000);

// 7) in postman
// 1. key: name 
// 2. value: anita
// 3. tick key & value, and click send
// 4. you'll see { name: 'anita' } in bash


// 8) in postman
// 1. body -> raw -> text: JSON
// 2. keyin
/* 
  {
      "user": "Jenny",
      "hobby": "tennis"
  }
*/
// 3. click send
// you'll see {} (it's an empty obj) in bash
// 4. reason:
/*
because we've only told it to parse 'urlencoded' 
but body-parser also needs to know about JSON. 
Again in order to do that we say 'app.use(bodyParser.json())'
*/ 
// 5. solution:
// add new line -> app.use(bodyParser.json());
// you'll see {user: 'Jenny', hobby: 'tennis'} in bash

// 9) in server.js
// 1. change res.send(user); to  res.send('Success');
// 2. click send
// 3. you'll get Success in response(postman)