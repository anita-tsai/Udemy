// 3) 
// 1. in script.js
    const fs = require('fs');

    fs.readFile('./hello.txt', (err, data) => {
      if(err) {
        console.log('errrorrr');
      }
      console.log(data.toString('utf8'));        //new
    })

// 2. in bash
// node script.js
// the same result -> helllooo there!!!
// 3. what is utf ?
  // So UTF 8 is a type of encoding that we have.
  // That's pretty standard with HTML 5.

// stop by 5:21