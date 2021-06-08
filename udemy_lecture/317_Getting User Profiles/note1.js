/*  in server.js  */
// 1) route: profile/:id
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    // database.users.forEach(user => {
    //   if(user.id === id) {
    //     found = true;
    //     return res.json(user);
    //   }
    // })
    db.select('*').from('users').then(user => {
      console.log(user);
    })
    if (!found) {
      return res.status(400).json('not found');
    }
})

/*  in postman  */
// 2) to test
// GET -> localhost:3000/profile/1
// run-> "not found"


/*  in knex web  */
// 3) to see the syntax: where
// ->
    // knex('users').where({
    //   first_name: 'Test',
    //   last_name:  'User'
    // }).select('id')

/*  in server.js */
// 4) to modify the error issue
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    db.select('*').from('users').where({
      id:id
    })
      .then(user => {
        console.log(user);
      })
    if (!found) {
      return res.status(400).json('not found');
    }
  })


/* in postman */
// 5) to test
// GET -> localhost:3000/profile/1
// run-> "not found"

/* in terminal: api */
// we can find
    // [
    //     {
    //       id: 1,
    //       name: 'Ann',
    //       email: 'ann@email.com',
    //       entries: '0',
    //       joined: 2021-06-06T23:49:49.550Z
    //     }
    // ]

/* in server.js */
// 6) to grab the array of the user
    app.get('/profile/:id', (req, res) => {
        const { id } = req.params;
        // let found = false;
        db.select('*').from('users').where({ id })
        .then(user => {
            res.json(user[0]);
        })
        // if (!found) {
        //   return res.status(400).json('not found');
        // }
    })

/* in postman */
// 7) to test id:1
// GET -> localhost:3000/profile/1
// run-> 
    // {
    //     "id": 1,
    //     "name": "Ann",
    //     "email": "ann@email.com",
    //     "entries": "0",
    //     "joined": "2021-06-06T23:49:49.550Z"
    // }

// 8) to test id:6
// GET -> localhost:3000/profile/6
// run-> 
    // {
    //     "id": 6,
    //     "name": "Amy",
    //     "email": "theamy@email.com",
    //     "entries": "0",
    //     "joined": "2021-06-07T00:38:14.210Z"
    // }

// 9) to test the id that doesn't exist
// GET -> localhost:3000/profile/2354
// run-> 
// get 200 ok with no response


/*  in server.js  */
// 10) to see the result if the user dosen't exist
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id })
      .then(user => {
        console.log(user)
        res.json(user[0]);
      })
  })

/*  in postman  */
// 11) to test the id that doesn't exist
// GET -> localhost:3000/profile/2354
// run-> 
// get 200 ok with no response
// you'll see [] an empty array in terminal


/*  in server.js  */
// 12) to set the error -> catch
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id })
      .then(user => {
        console.log(user)
        res.json(user[0]);
      })
      .catch(err => res.status(400).json('Not found'))
  })

/*  in postman  */
// 13) to test the id that doesn't exist
// GET -> localhost:3000/profile/2354
// run-> 
// get 200 ok with no response
// you'll see [] an empty array in terminal
// reason: because an empty array is -> true


/*  in server.js  */
// 14) to resolve the boolean problem -> use if & else
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id })
      .then(user => {
        if(user.length) {
            res.json(user[0]);
        }else {
            res.status(400).json('Not found')
        }
      })
      .catch(err => res.status(400).json('error getting user'))
  })


/*  in postman  */
// 15) to test the id that doesn't exist
// GET -> localhost:3000/profile/2354
// run-> "Not found" & 400 bad request