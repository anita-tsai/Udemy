// go to 285_smart-brain-api that is in udemy_project

/** use bcrypt to create a security login */

// 1) add login and install bcrypt
// 1. in server.js
/**
 * we definitely want to include it through an HTTPS request 
 * so that it's encrypted. 
 * When he sends 'cookies', it's going to get jumbled up 
 * and nobody in the middle can see this or they'll be able to see it 
 * but they won't understand what it means.
 * And only the server once it receives this password 
 * can actually understand that this stands for 'cookies'.
 * 
 * we store password in a hash and bcrypt.
 */
  app.use(bodyParser.json());
  const database = {
    users: [
      {
        id: '123',
        name: 'John',
        email: 'john@email.com',
        // password: 'cookies',
        entries: 0,
        joined: new Date()
      }, 
      {
        id: '124',
        name: 'Sally',
        email: 'sally@email.com',
        // password: 'bananas',
        entries: 0,
        joined: new Date()
      }
    ],
    login: [
      {
        id: '987',
        hash: '',
        email: 'john@email.com'
      }
    ]
  }

// 2. in postman
// post-> localhost:3000/signin-> body-> json
// keyin
// {
//   "id": "987",
//   "password": "cookies"
// }

// 2) install bcrypt packages
// 1. in terminal -> npm i bcrypt
// 2. in server.js
  const bcrypt = require('bcrypt'); //new

  app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) { //new
      console.log(hash);
    });
    database.users.push({
      id: '125',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
  })
// 3. in postman
// post-> localhost:3000/register-> json
// {
//   "email": "ann@email.com",
//   "password": "apples",
//   "name": "Ann"
// }
// click send

// 4. in terminal
// click send, you'll see someting 
  // like this-> $2b$10$g6rq8Ottat5zhniz0wKUf.fBeoAiLTebg57UTlhpwJCP4r8otB/xW
// click send again
  // $2b$10$0MT92krQVpzgErfIxD..LOXkA0OLFirc4j0DQYRCb6nUjywnlwnOm

/**
  A hash function takes a string and jumbles it up 
  in a way that there's no way I'm going to be able to 
  figure out that this [the hash] stands for the password 'cookies' 
  and hash functions are one way.

  And although hash functions actually always 
  return the same thing for the same value 
  bcrypt is a little bit more secure than that 
  and adds a bit of other magic to make sure that it's impossible 
  to ever figure out what the password is.
*/





