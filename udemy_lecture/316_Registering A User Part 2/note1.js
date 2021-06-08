// to respond to the front-end with the new user

/*  in server.js  */
// 1) 
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  db('users')
    .returning('*')  //retrun all the columns
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(response => {
      res.json(response)
    })
})

/*  in postman  */
// 2) to test new user
// POST -> localhost:3000/register
// {
//     "email": "anne@email.com",
//     "password": "apples",
//     "name": "Anne"
// }
// run->
    // [
    //   {
    //       "id": 2,
    //       "name": "Anne",
    //       "email": "anne@email.com",
    //       "entries": "0",
    //       "joined": "2021-06-07T00:21:04.244Z"
    //   }
    // ]


/*  in terminal: database  */
// 3) to test
// SELECT * FROM users;
    // id | name |     email      | entries |         joined          
    // ----+------+----------------+---------+-------------------------
    //   1 | Ann  | ann@email.com  |       0 | 2021-06-07 07:49:49.55
    //   2 | Anne | anne@email.com |       0 | 2021-06-07 08:21:04.244
    // (2 rows)


/*  in postman  */
// 4) to test new user
// POST -> localhost:3000/register
// {
//     "email": "john@email.com",
//     "password": "cookies",
//     "name": "John"
// }
// run->
    // [
    //   {
    //       "id": 3,
    //       "name": "John",
    //       "email": "john@email.com",
    //       "entries": "0",
    //       "joined": "2021-06-07T00:25:30.779Z"
    //   }
    // ]


/*  in server.js  */
// 5) to check the front-end 
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    db('users')
      .returning('*')  //retrun all the columns
      .insert({
        email: email,
        name: name,
        joined: new Date()
      })
      .then(user => {
        res.json(user[0])
      })
      .catch(err => res.status(400).json(err))
})


/*  in postman  */
// 4) to test the same user
// POST -> localhost:3000/register
// {
//     "email": "john@email.com",
//     "password": "cookies",
//     "name": "John"
// }
// run again -> get 400 error
    // {
    //     "length": 206,
    //     "name": "error",
    //     "severity": "ERROR",
    //     "code": "23505",
    //     "detail": "Key (email)=(john@email.com) already exists.",
    //     "schema": "public",
    //     "table": "users",
    //     "constraint": "users_email_key",
    //     "file": "nbtinsert.c",
    //     "line": "656",
    //     "routine": "_bt_check_unique"
    // }

// 5) a security issue
// don't give the client any information about your system
// solution->
// .catch(err => res.status(400).json('unable to register'))

// 6) run post: john again
    // get-> 400 error
    // "unable to register"


/*  in react app  */
// 7) to test the register if it works
// name: Amy, email: theamy@email.com, password: 123
// run -> ok!


/*  in terminal: database  */
// smart-brain=# SELECT * FROM users;
    // id | name |      email       | entries |         joined          
    // ----+------+------------------+---------+-------------------------
    //   1 | Ann  | ann@email.com    |       0 | 2021-06-07 07:49:49.55
    //   2 | Anne | anne@email.com   |       0 | 2021-06-07 08:21:04.244
    //   3 | John | john@email.com   |       0 | 2021-06-07 08:25:30.779
    //   6 | Amy  | theamy@email.com |       0 | 2021-06-07 08:38:14.21
    // (4 rows)