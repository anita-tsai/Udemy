// 6) in server.js
  /*
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {     
    res.send('heelllooo')
  });

  app.listen(3000);
  */
// refresh the broswer,
// you'll see heelllooo



// 7) in server.js
// you can also send html syntax
  /*
  res.send('<h1>heelllooo<h1>')
  */
// you'll find the deferences in broswer
// the font size bigger than before



// 8) in server.js
// you can also send JSON
  /*
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    const user = {
      name: 'Sally',
      hobby: 'soccer'
    }

    res.send(user)
  });

  app.listen(3000);
  */
// you'll see those in browser
  /*
  {
    "name": "Sally",
    "hobby": "soccer"
  }
  */



// 9) in server.js
  /*
  const express = require('express');

  const app = express();

  app.post('/profile', (req, res) => {
    const user = {
      name: 'Sally',
      hobby: 'soccer'
    }

    res.send(user)
  });

  app.listen(3000);
  */

// you'll see Cannot GET in the browser
// if you key in http://localhost:3000/profile
// -> Cannot GET /profile
// in Network
// -> Status Code: 404 Not Found

// reason : 
// Because now I've made the request method, 
// which was get from the Bouser,
// but here I only accept a post request.
// I get cannot get profiled because 
// Any time we refresh your browser, it's a get request.


