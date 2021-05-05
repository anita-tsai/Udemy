// 2) store the hash(the jumbled up value) in our db for login

// When we do singin, we want to check
// if the user's passwords match

// 1. in server -register
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
      password: password,
      entries: 0,
      joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
  })
// 2. in server -signin
// to compare your PlaintextPassword and hash
  app.post('/signin', (req, res) => {
    bcrypt.compare('apples', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
      console.log('first guess', res)
    });
    bcrypt.compare('veggies', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
      console.log('second guess', res)
    });
    if(req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password) {
      res.json('success');
    } else {
      res.status(400).json('error logging in');
    }
  })
// 3. in postman -do signin
// post-> localhost:3000/signin-> 
// {
//   "email": "john@email.com",
//   "password": "cookie"
// }
// click send, you'll see
  // "error logging in" (in postman)
  // first guess true   (in termianl)
  // second guess false
/*
We're going to use this 
when we actually implement a database to our registration. 
Using bcrypt, which is a tried and tested hashing package, 
we can safely store users' information, users' passwords 
into our database and nobody even if they 
– even if hackers access our database 
– they'll have a very hard time getting the user passwords.

They may be able to get their email addresses 
but never our passwords and we'll implement 
that in our database using bcrypt.

But I really want to emphasize this point 
because security is really important.

Always send any sensitive information 
from the front-end to the back-end 
using HTTPS in a POST body and if you get something like a password 
the way you store it into the database 
is using something like bcrypt to generate a hash,
and every time a user signs in, check that hash with whatever the user inputted. 
*/