// 1) follow the privious steps 
// 1. to create a server.js / package.json / nodemon
// 2. npm start


// 2) 
// 1. in server.js
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
      console.log(req.query);  //new
      // req.body
      // req.header
      // req.params
      res.send("getting root");
    });

    app.listen(3000);

// 2. in website, 
// keyin http://localhost:3000/?name=jeno&nickname=turtle
// you'll see { name: 'jeno', nickname: 'turtle' } in bash



