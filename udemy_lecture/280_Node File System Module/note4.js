// 6) /* WRITE -> fs.write() */

// 1. in server.js
  const fs = require('fs');

  fs.readFile('./hello.txt', (err, data) => {
    if (err) {
      console.log('errrorrr');
    }
    console.log('Async', data.toString('utf8'));
  })

  const file = fs.readFileSync('./hello.txt');
  console.log('Sync', file.toString());

  // new
  // WRITE
  fs.writeFile('./bye.txt', 'Sad to see you go', err => {
    if(err) {
      console.log(err)
    }
  })

// 2. in folder
  // bye.txt just got added,
  // and click on it, we have
  // Sad to see you go


// 7) test the scipt.js if it fail some texts
// 1.in script.js
  const fs = require('fs');

  fs.readFile('./hell.txt', (err, data) => {     // test
    if (err) {
      console.log('errrorrr');
    }
    console.log('Async', data.toString('utf8'));
  })

  const file = fs.readFileSync('./hello.txt');
  console.log('Sync', file.toString());
// 2. run node script.js in bash, you'll see
  // $ node script.js
  // Sync helllooo there!!!
  // errrorrr
