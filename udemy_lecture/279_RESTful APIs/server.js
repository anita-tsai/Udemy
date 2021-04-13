const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// app.get('/:id/:id2', (req, res) => {
  // console.log(req.query);
  // req.body
  // console.log(req.headers);
  // console.log(req.params);
  // res.status(404).send("not found")
// });

app.use(express.static(__dirname + './public'))

app.listen(3000);