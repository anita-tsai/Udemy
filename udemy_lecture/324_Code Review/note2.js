// => backe-end code
// => focus on register


/*  in backend  */
// 1) add a folder: controllers
// although now we have only 4 routes
// but them should't be in one file(server.js)
// 1. add a new folder named controllers under the api foler
// controller ->
// control whatever happens when an endpoint gets in

/*  in controllers folder  */
// 2) create a register.js 
// 1. copy the entire fn of the /register
// 2. alter the fn in /register
app.post('/register', register.handleRegister)
// 3. go to register.js and paste the codes
const handleRegister = (req, res) => {
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
  }
  
  module.exports = {
    handleRegister: handleRegister
}
// problem: in this file, we don't know bcrypt & db


/*  in server.js  */
// 3) pass bcrypt, db into the fn
app.post('/register', (req, res) => { register.handleRegister(req, res, bcrypt, db) })
// 4) import register.js into server.js
const register = require('./controllers/register');

/*  in register.js  */
// 5) pass req, res, bcrypt, db
const handleRegister = (req, res, bcrypt, db) => {
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
  }
  
  module.exports = {
    handleRegister: handleRegister
}


/*  in react.app  */
// 6) test the register form
// create a new user-> Dabby
// result: ok!