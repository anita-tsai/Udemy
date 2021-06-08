/*  in server.js  */
// 11) delete the codes in signin
app.post('/signin', (req, res) => {
    // bcrypt.compare('apples', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
    //   console.log('first guess', result)
    // });
    // bcrypt.compare('veggies', '$2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm', function(err, result) {
    //   console.log('second guess', result)
    // });
    // if(req.body.email === database.users[0].email &&
    //    req.body.password === database.users[0].password) {
    //   res.json(database.users[0]);
    // } else {
    //   res.status(400).json('error logging in');
    // }
})

// 12)select
app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
      .then(data => {
        console.log(data)
      })
})


/*  in postman  */
// 13) to check
// POST -> localhost:3000/signin
// run ->
// {
//     "email": "john@email.com",
//     "password": "cookie"
// }
// get -> no response
// in smart-brain api ->
    // [
    //     {
    //       email: 'cindy@email.com',
    //       hash: '$2b$10$HRSnAc51Zje8XUF5Zgsz0eV7esDzOz7VTw8SOhEShj43ojTSe8nii'
    //     },
    //     {
    //       email: 'john@email.com',
    //       hash: '$2b$10$Z3YGrxuYrqus/74a25IIReI78yoaWOX3xphcFESQnF5S1idURUtO2'
    //     },
    //     {
    //       email: 'john1@email.com',
    //       hash: '$2b$10$QHfO0PRUJl5TULLGUEtSEuNPtolGLr5QuvOsQjSI7G.D.44avTJrC'
    //     }
    //   ]
  

/*  in server.js  */
// 14) to do where
app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
      .where('email', '=', req.body.email)
      .then(data => {
        console.log(data)
    })
})



/*  in postman  */
// 15) to check
// POST -> localhost:3000/signin
// run ->
// {
//     "email": "john@email.com",
//     "password": "cookie"
// }
// get -> no response
// in smart-brain api ->
    // [
    //    {
    //      email: 'john@email.com',
    //      hash: '$2b$10$Z3YGrxuYrqus/74a25IIReI78yoaWOX3xphcFESQnF5S1idURUtO2'
    //    }
    // ]



/*  in server.js  */
// 16) to check if the password is right
// use: bcrypt compare syntax
app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
      .where('email', '=', req.body.email)
      .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if(isValid) {
          return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
              res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        }else {
          res.status(400).json('wrong credentials')
        }
      })
      .catch(err => res.status(400).json('wrong credentials'))
})


/*  in postman  */
// 15) to add a new
// POST -> localhost:3000/signin
// run ->
// {
//     "email": "lisa@email.com",
//     "password": "choco",
//     "name": "Lisa"
// }
// get ->
    // {
    //     "id": 11,
    //     "name": "Lisa",
    //     "email": "lisa@email.com",
    //     "entries": "0",
    //     "joined": "2021-06-07T23:42:34.558Z"
    // }

// 16) to check and compare (right info)
// POST -> localhost:3000/signin
// run ->
// {
//     "email": "lisa@email.com",
//     "password": "choco"
// }
// get ->
    // {
    //     "id": 11,
    //     "name": "Lisa",
    //     "email": "lisa@email.com",
    //     "entries": "0",
    //     "joined": "2021-06-07T23:42:34.558Z"
    // }


// 16) to check and compare (wrong info)
// POST -> localhost:3000/signin
// run ->
// {
//     "email": "lisa@email.com",
//     "password": "cho"
// }
// get -> "wrong credentials"