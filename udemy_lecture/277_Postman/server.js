const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false})) //new
app.use(bodyParser.json()); //new
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
  res.send("Success"); //new
});

app.listen(3000);