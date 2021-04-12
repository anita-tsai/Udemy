
// 10) in server.js
  /*
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    res.send('getting root');
  });
  app.get('/profile', (req, res) => {
    res.send('getting profile');
  });
  app.post('/', (req, res) => {
    const user = {
      name: 'Sally',
      hobby: 'soccer'
    }
    res.send(user);
  });

  app.listen(3000);
  */

// 11) in the browser
// localhost:3000
// -> getting root

// localhost:3000/profile
// ->getting profile

// localhost:3000/ ***
// *** means it doesn't exist
// -> get a 404 not fund 
