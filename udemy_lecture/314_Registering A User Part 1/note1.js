// to access something from the users
// -> use .then()
// it returns a promise and we get our response


/*  in server.js  */
// 1) .then
// 1. access something from the users
// postgres.select('*').from ('users').then(data => {
//     console.log(data);
// }); 
    // run -> [] empty array

// 2. rename: postgres -> db
    // const db = knex({
    //     client: 'pg',
    //     connection: {
    //     host : '127.0.0.1', // it equals to localhost, home
    //     user : 'anitatsai',
    //     password : '',
    //     database : 'smart-brain'
    //     }
    // });
    
    // db.select('*').from ('users').then(data => {
    //     console.log(data);
    // }); 


// 2) create a statement to insert users when they register
// 1. go to knex web and see: INSERT
// 2.
    app.post('/register', (req, res) => {
        const { email, name, password } = req.body;
        db('users').insert({
        email: email,
        name: name,
        joined: new Date()
        }).then(console.log)
        res.json(database.users[database.users.length-1]);
    })



/*  in terminal: app.js  */
// 3) start the react app
// npm start

/*  in postman   */
// 4) to test
// POST -> localhost:3000/register
// {
//     "email": "ann@email.com",
//     "password": "apples",
//     "name": "Ann"
// }
// run -> see the result in terminal: api


/* in terminal: database  */
// 5) to test
// SELECT * FROM users;
    // id | name |     email     | entries |         joined         
    // ----+------+---------------+---------+------------------------
    //   1 | Ann  | ann@email.com |       0 | 2021-06-07 07:49:49.55
    // (1 row)

