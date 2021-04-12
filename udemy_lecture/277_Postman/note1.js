// resource *2
// follow the privious video(273) to create a server.js

// steps)
  // 1) create server.js file
  // 2) create package.json
  // npm init
  // 3) node_modules
  // npm install nodemon --save-dev
  // 4) in pakage.json -> scripts
  // -> "start": "nodemon server.js"
  // 5) in bash
  // npm install express
  // 6) in server.js
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