// 5) /* APPEND -> fs.appendFile */

// 1. in script.js
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrorrr');
  }
  console.log('Async', data.toString('utf8'));
})

//new
// notice: if the first parameter doesn't exist, 
// it'll actually just create the file for us.
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());
fs.appendFile('./hello.txt', 'This is so cool!', err => {
  if(err) {
    console.log(err)
  }
})

// 2. run node script.js in bash
// in hello.txt, you'll see
  // helllooo there!!!This is so cool!
// in bash, you'll see
  // $ node script.js
  // Sync helllooo there!!!
  // Async helllooo there!!!

// 3. run node script.js in bash again
// in hello.txt, you'll see
  // helllooo there!!!This is so cool!This is so cool!
// in bash, you'll see
  // $ node script.js
  // Sync helllooo there!!!This is so cool
  // Async helllooo there!!!This is so cool
  


