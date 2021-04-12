/* foreword: 
PostMan is a great way to test out your server 
before you connect it to your front-end
*/


/* PostMan -get */

// 1) go to postman and click get
// 1. enter the url that you want to have this running on
// 2. in bash: do 'npm start' again
// 3. eg: enter localhost:3000/profile
// 4. in postman: you'll get 'getting profile'

// 2) click get
// 1. keyin localhost:3000/profile in url
// 2. click send
// 3. you'll see 'getting profile'


/* PostMan -post */

// 3) click post
// 1. keyin localhost:3000/profile in url
// 2. click body and choose x-www-form-urlencoded
// 3. click send
// 4. you'll see
// {
//   "name": "Sally",
//   "hobby": "soccer"
// }


// 4)
/* in server.js */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('getting root');
});
app.get('/profile', (req, res) => {
  res.send('getting profile');
});

app.post('/profile', (req, res) => {
  console.log(req.body)  //new
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user);
});

app.listen(3000);


// 4) click send in postman, you'll see
// 1. in postman:
// {
//   "name": "Sally",
//   "hobby": "soccer"
// }
// 2. in bash:
// undefined

// 3.reason
  /*
  we see that the POST request is working.
  And if I want to access this information 
  I simply do '(req.body)'


  BUT, If I click send and I get 'undefined' 
  and that is because Express only gives you a little bit.
  You still need a few packages if you want this to work.

  If you ever want to access '(req.body)' 
  you need to use a middleware 
  and the middleware that we want is called body-parser 
  and you'll use it and most Express servers, 
  so you'll just get used to it.

  It's 'npm install body-parser'.
  */