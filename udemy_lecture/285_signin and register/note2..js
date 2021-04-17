// 4) /**register */
// 1. in server.js
  app.post('/register', (req, res) => {
    req.body
  })
/**
 * We want to grab the 'req.body' 
 * and enter the new information into our database.
 * In this case we have a database object 
 * that has users and an array 
 * so we can do 'database.users.push()' to add to this array.
 */
// 2. in postman
// click post-> localhost:3000/register-> body-> Json
  // {
  //   "email": "ann@email.com",
  //   "password": "apples",
  //   "name": "Ann"
  // }
// 3. in server.js
  app.post('/register', (req,res) => {
    const { name, email, password } = req.body;
    database.users.push({
      id: '124',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
  })
// 4. back to postman, press send
// you'll see
  // {
  //   "id": "125",
  //   "name": "Ann",
  //   "email": "ann@email.com",
  //   "password": "apples",
  //   "entries": 0,
  //   "joined": "2021-04-17T14:17:44.163Z"
  // }