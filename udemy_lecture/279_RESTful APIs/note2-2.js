// 3) req.header

// 1. in server.js
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
      // console.log(req.query);  
      // req.body
      console.log(req.headers); //new
      // req.params
      res.send("getting root");
    });

    app.listen(3000);

// 2. in postman, -> localhost:3000
// click headers and keyin key & value
// you'll see in bash
// {
//   name: 'nancy',
//   'content-type': 'application/json',
//   'user-agent': 'PostmanRuntime/7.26.10',
//   accept: '*/*',
//   'postman-token': '06493395-ade4-4ea4-95fb-dd1f85828ea7',
//   host: 'localhost:3000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive',
//   'content-length': '49'
// }




