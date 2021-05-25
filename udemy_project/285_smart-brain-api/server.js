const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@email.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@email.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: "john@email.com"
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {
  bcrypt.compare('apples', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
    console.log('first guess', result)
  });
  bcrypt.compare('veggies', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
    console.log('second guess', result)
  });
  if(req.body.email === database.users[0].email &&
     req.body.password === database.users[0].password) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  // bcrypt.hash(password, 10, function(err, hash) {
  //   console.log(hash);
  //   console.log(err);
  // });
  database.users.push({
    id: '125',
    name: name,
    email: email,
    // password: password,
    entries: 0,
    joined: new Date()
  })
  res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id) {
      found = true;
      return res.json(user);
    }
  })
  if (!found) {
    return res.status(400).json('not found');
  }
})

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  // find the user and increase the entries of the user
  database.users.forEach(user => {
    console.log(user.id)
    console.log(id)
    if(user.id === id) {
      found = true;
      user.entries++
      return res.json(user.entries);
    }
  })
  if (!found) {
    return res.status(400).json('not found');
  }
})

app.listen(3000, () => {
  console.log('app is running on port 3000');
})


/*
/ --> res = this is working
/signin --> POST = sucess/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

 */

