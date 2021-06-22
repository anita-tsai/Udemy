const app = require('http')
  .createServer((req, res) => res.send('oh hi there!'));


// app.listen(3000, () => {
//   console.log('server is running on port 3000');
// })

// console.log(process.env);
//   // it tells us the enviroment 


// ---------------------------------------
// 1) to set our own variables eg: port
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on ${process.env.PORT}`);
// })

// 2) to make it cleaner
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`); 
// })
// console.log(PORT); //it shows undefined

// 3) inject the property and value into node
// to acess or create an enviromnet variable within the computer

// to use bash
// -> PORT=3000 node server.js
// it shows 'server is running on 3000'

// 4) set up as DATABASE_URL and it would be dynamic
const DATABASE_URL = process.env.DATABASE_URL;
app.listen(3000, ()=> {
  console.log(`server is running on ${DATABASE_URL}`)
})
console.log(3000); // it would be changed from 3000 to 123
// -> if we said 'DATABASE_URL=123 node server.js'


// 5) to use fish
// -> env DATABASE_URL='hello' node server.js
// it shows
// 'server is running on hello'