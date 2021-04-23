
// 1) /* profile & userId */

// 1. in server.js
  app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    database.users.forEach(user => {
      if(user.id === id) {
        res.json(user);
      } else {
        res.status(404).json('no such user');
      }
    })
  })

// 2. in postman
// get-> localhost:3000/profile/123-> press send
// you'll see
  // {
  //   "id": "123",
  //   "name": "John",
  //   "email": "john@email.com",
  //   "password": "cookies",
  //   "entries": 0,
  //   "joined": "2021-04-21T03:20:47.555Z"
  // }

// 3. in postman
// get-> localhost:3000/profile/124-> press send
// you'll see in postman,
  // {"no such user"} 
// in terminal,
  // Error [ERR_HTTP_HEADERS_SENT]
  // : Cannot set headers after they are sent to the client

// 4. reason
  /*
  we can send response only at once,
  so when the code run into else,
  even through you find the true one,
  because it after else
  server will return and response the 'error' sign
  */
// solution
  app.get('/profile/:id', (req,res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
      if (user.id === id) {
        found = true;
        return res.json(user);
      }
    })
    if(!found) {
      return res.status(400).json('not found');
    }
  })

// 5. in postman
// get-> localhost:3000/profile/124
  /*
  {
    "id": "124",
    "name": "Sally",
    "email": "sally@email.com",
    "password": "bananas",
    "entries": 0,
    "joined": "2021-04-21T04:23:20.644Z"
  }
  */
// get-> localhost:3000/profile/123
  /*
  {
      "id": "123",
      "name": "John",
      "email": "john@email.com",
      "password": "cookies",
      "entries": 0,
      "joined": "2021-04-21T04:23:20.644Z"
  }
  */

// 6. in postman
// post-> localhost:3000/register-> raw-> json-
// -> keyin and press send
  /*
  {
    "email": "ann@gmail.com",
    "password": "apples",
    "name": "Ann"
  }
  */
// get-> localhost:3000/profile/125-> send
// you'll see
  /*
  {
    "id": "125",
    "name": "Ann",
    "email": "ann@gmail.com",
    "password": "apples",
    "entries": 0,
    "joined": "2021-04-21T09:58:02.015Z"
  }
  */
