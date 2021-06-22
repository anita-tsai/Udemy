// we don't want to hard code what port 
// we are listening to
// -> we need something dynamic that it can be changed


// 1) predecessor task
// 1. create server.js
// 2. install package.json(npm init)
// 3. change start from 'node' to 'nodemon'
    // "start": "nodemon server.js"
// 4. basic code 
const app = require('http')
  .createServer((req, res) => res.send('oh hi there!'));


app.listen(3000, () => {
  console.log('server is running on port 3000');
})