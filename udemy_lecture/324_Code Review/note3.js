// => backend code
// => focus on signin

/*  in api folder  */
// 1) create signin.js 

/*  in server.js  */
// 2) copy and alter the codes of signin route
app.post('/signin', (req, res) => { signin.handleSignin(req, res, bcrypt, db) })
// 3) import signin.js to server.js
const signin = require('./controllers/signin')


/*  in signin.js  */
// 4) paste the codes from /signin route
const handleSignin = (req, res, db, bcrypt) => {
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
}

module.exports = {
    handleSignin: handleSignin
}

/*  in react.app  */
// 5) test the register form
// create a new user-> Dabby
// result: ??