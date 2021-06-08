// work on image endpoint

/*  in server.js  */
// 1) delete the database that we don't need
app.put('/image', (req, res) => {
    const { id } = req.body;
    // let found = false;
    // // find the user and increase the entries of the user
    // database.users.forEach(user => {
    //   console.log(user.id)
    //   console.log(id)
    //   if(user.id === id) {
    //     found = true;
    //     user.entries++
    //     return res.json(user.entries);
    //   }
    // })
    // if (!found) {
    //   return res.status(400).json('not found');
    // }
  })

// 2) to update the entries count
// 1. see the syntax in knex web-> update & increment
// syntax update ->
    knex('books')
    .where('published_date', '<', 2000)
    .update({
        status: 'archived',
        thisKeyIsSkipped: undefined
    })
// syntax increment ->
    knex('accounts')
    .where('userid', '=', 1)
    .increment('balance', 10)
// 2. grab the entries and increase
app.put('/image', (req, res) => {
    const { id } = req.body;
    db.where('id', '=', id)
    .incremnt('entries', 1)
    .returning('entries')
    .then(entries => {
      console.log(entries)
    })
  })


/*  in postman  */
// 3) to test
// PUT -> localhost:3000/image
// {
//     "id":"1"
// }
// run -> get error
// in terminal: typeError
// reason: it has no idea about what db now

/*  in server.js  */
// 4) add the db name
app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      console.log(entries)
    })
  })


/*  in postman  */
// 5) to test
// PUT -> localhost:3000/image
// {
//     "id":"1"
// }
// run -> get no res
// in terminal: [ '1' ]

// 6) to test again
// PUT -> localhost:3000/image
// {
//     "id":"1"
// }
// run -> get no res
// in terminal: [ '2' ]


/*  in terminal: smart-brain  */
// 7) SELECT * FROM users;
    // id | name |      email       | entries |         joined          
    // ----+------+------------------+---------+-------------------------
    //   2 | Anne | anne@email.com   |       0 | 2021-06-07 08:21:04.244
    //   3 | John | john@email.com   |       0 | 2021-06-07 08:25:30.779
    //   6 | Amy  | theamy@email.com |       0 | 2021-06-07 08:38:14.21
    //   1 | Ann  | ann@email.com    |       2 | 2021-06-07 07:49:49.55
    // (4 rows)


/*  in server.js  */
// 8) add res & catch
app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  })

// 9) to test the catch if works
// delete the name of db
app.put('/image', (req, res) => {
    const { id } = req.body;
    db('').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  })


/*  in postman  */
// 10) to test catch
// PUT -> localhost:3000/image
// {
//     "id":"1"
// }
// run -> "unable to get entries" & 400 bad request


/*  in server.js  */
// 11) to fix the error
// add the name of db
app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  })


/*  in postman  */
// 12) to test again
// PUT -> localhost:3000/image
// {
//     "id":"1"
// }
// run -> "3"
