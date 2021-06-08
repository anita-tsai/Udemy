// work on signin endpoint
// we've inserted the user with name, email and joined
// but never update join the login table

// goal:
// We want to create something every time 
// a new user logs in and actually capture their passwords 
// or the hash of their passwords

/*   in terminal: smart-brain  */
// 1) to check login table
// smart-brain=# SELECT * FROM login;
    //  id | hash | email 
    // ----+------+-------
    // (0 rows)

// 2) use bcrypt to hash out a password that we get
// to register a user and grab their passwords
// 1. see the bcrypt syntax: use sync(it's simple to use)
// syntax ->
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    // // Store hash in your password DB.
// 2. add to the codes
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB

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
      .catch(err => res.status(400).json('unable to register'))
  })

// 3) transaction
// we can add transaction to make sure that 
// when we're doing multiple operations on a database 
// if one fails then they all fail
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB
      db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
          return trx('users')
            .returning('*')  //retrun all the columns
            .insert({
              email: loginEmail,
              name: name,
              joined: new Date()
            })
            .then(user => {
              res.json(user[0])
            })
          })
        })
      .catch(err => res.status(400).json('unable to register'))
  })


/*   in postman   */
// 4) to test
// POST -> localhost:3000/register
// run ->
// {
//     "email": "john@email.com",
//     "password": "cookies",
//     "name": "John"
// }
// get ->
    // {
    // "id": 7,
    // "name": "John",
    // "email": "{\"john@email.com\"}",
    // "entries": "0",
    // "joined": "2021-06-07T22:12:56.266Z"
    // }

/*  in terminal: smart-brain  */
// 5) to check login table
// smart-brain=# SELECT * FROM login;
    //  id | hash | email 
    // ----+------+-------
    // (0 rows)
// 6) to check users table
    // id | name |      email       | entries |         joined          
    // ----+------+------------------+---------+-------------------------
    //   2 | Anne | anne@email.com   |       0 | 2021-06-07 08:21:04.244
    //   3 | John | john@email.com   |       0 | 2021-06-07 08:25:30.779
    //   6 | Amy  | theamy@email.com |       0 | 2021-06-07 08:38:14.21
    //   1 | Ann  | ann@email.com    |       4 | 2021-06-07 07:49:49.55
    // (4 rows)
// 7) problem: we don't have login and no new user in users table


/*   in server.js   */
// 8) commit
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB
      db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
          return trx('users')
            .returning('*')  //retrun all the columns
            .insert({
              email: loginEmail,
              name: name,
              joined: new Date()
            })
            .then(user => {
              res.json(user[0])
            })
        })
          .then(trx.commit)
          .catch(trx.rollback)
    })
      .catch(err => res.status(400).json('unable to register'))
  })


/*   in postman   */
// 9) to test
// POST -> localhost:3000/register
// run ->
// {
//     "email": "cindy@email.com",
//     "password": "hhh",
//     "name": "Cindy"
// }
// get ->
    // {
    //     "id": 8,
    //     "name": "Cindy",
    //     "email": "{\"cindy@email.com\"}",
    //     "entries": "0",
    //     "joined": "2021-06-07T22:33:09.342Z"
    // }


/*  in terminal: smart-brain  */
// 10) to check login table
// smart-brain=# SELECT * FROM login;
    // id |                             hash                             |      email      
    // ----+--------------------------------------------------------------+-----------------
    //   7 | $2b$10$HRSnAc51Zje8XUF5Zgsz0eV7esDzOz7VTw8SOhEShj43ojTSe8nii | cindy@email.com
    // (1 row)
// smart-brain=# SELECT * FROM users;
    // id | name  |        email        | entries |         joined          
    // ----+-------+---------------------+---------+-------------------------
    //   2 | Anne  | anne@email.com      |       0 | 2021-06-07 08:21:04.244
    //   3 | John  | john@email.com      |       0 | 2021-06-07 08:25:30.779
    //   6 | Amy   | theamy@email.com    |       0 | 2021-06-07 08:38:14.21
    //   1 | Ann   | ann@email.com       |       4 | 2021-06-07 07:49:49.55
    //   8 | Cindy | {"cindy@email.com"} |       0 | 2021-06-08 06:33:09.342
    // (5 rows)
// 11) problem: loginEmail -> return an array now



/*   in server.js   */
// 12) fix the loginEmail
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB
      db.transaction(trx => {
        trx.insert({
          hash: hash,
          email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
          return trx('users')
            .returning('*')  //retrun all the columns
            .insert({
              email: loginEmail[0],
              name: name,
              joined: new Date()
            })
            .then(user => {
              res.json(user[0])
            })
        })
          .then(trx.commit)
          .catch(trx.rollback)
    })
      .catch(err => res.status(400).json('unable to register'))
  })


/*   in postman   */
// 13) to test
// POST -> localhost:3000/register
// run ->
// {
//     "email": "john1@email.com",
//     "password": "cookies",
//     "name": "John"
// }
// get ->
    // {
    //     "id": 10,
    //     "name": "John",
    //     "email": "john1@email.com",
    //     "entries": "0",
    //     "joined": "2021-06-07T22:41:18.180Z"
    // }


/*  in terminal: smart-brain  */
// 10) to check users table
// smart-brain=# SELECT * FROM users;
    // id | name  |        email        | entries |         joined          
    // ----+-------+---------------------+---------+-------------------------
    //   2 | Anne  | anne@email.com      |       0 | 2021-06-07 08:21:04.244
    //   3 | John  | john@email.com      |       0 | 2021-06-07 08:25:30.779
    //   6 | Amy   | theamy@email.com    |       0 | 2021-06-07 08:38:14.21
    //   1 | Ann   | ann@email.com       |       4 | 2021-06-07 07:49:49.55
    //   8 | Cindy | {"cindy@email.com"} |       0 | 2021-06-08 06:33:09.342
    //   9 | John  | {"john@email.com"}  |       0 | 2021-06-08 06:36:47.689
    //  10 | John  | john1@email.com     |       0 | 2021-06-08 06:41:18.18
    // (7 rows)
