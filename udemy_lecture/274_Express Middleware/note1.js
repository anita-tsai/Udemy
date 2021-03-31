// 1) follow the previors steps
// create server.js
// npm init
// npm install nodemon --save-dev
// in package.json file
// -> scripts -> "start": "nodemon server.js"
// npm install express
// npm start

// 2)  what middleware does is ?
// - as the name suggests 
// – as the request is coming in 
// it's going to pass through this 'use' function 
// and then trickle down to whatever we get
// POST, PUT, DELETE and this middleware is going to 
// do something to the request 
// hat we just had in order to 
// perhaps make it easier to work with down here

// 3) in server.js(simple templete)
  /*
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    res.send('testest');
  });

  app.listen(3000);
  */


// 4) in server.js
  /*
  app.use((req, res, next) => {
    console.log('<h1>HELLOO</h1>')
  });
  */
// you'll see ERR_CONNECTION_RESET in the browser
// in bash, you'll see <h1>HELLOO</h1>
// reason:
  // If I go back I see that 'helllooo' gets triggered 
  // because I'm console logging it 
  // but it never reaches here
  // that is because in order for the middleware 
  // to keep passing data through it needs to call 'next'
  // next -> the third parameter


// 5) in server.js
  /*
  app.use((req, res, next) => {
    console.log('<h1>HELLOO</h1>')
    next();
  });
  */
// you'll see testest in the browser


// 6) 
/*
So the middleware the way it works is we use 'app.use()' 
it gets the requests of the website; 
the request comes through.
We can do whatever we want with it.

In our case we're not really touching it ,
we're just console logging 'helllooo' 
and then we hit next
and then Express keeps running through 
these [app.get() and app.listen()].
*/

