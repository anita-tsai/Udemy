// 1) create a file named script.js 
// 1. in script.js
    
    const fs = require('fs');

    fs.readFile('', (err, data) => {
      if (err) {
        console.log('errrorrr');
      }
      console.log(data);
    })
    


/* READ -> fs.readFile() */
// 2) create a new file named hello.txt
// 1. in hello.txt
// hellloooo there!!!

// 2. in script.js
    
    const fs = require('fs');

    fs.readFile('./hello.txt', (err, data) => {       //new
      if (err) {
        console.log('errrorrr');
      }
      console.log(data);
    })
    
// Now this readFile method is going to find the file with the path

// 3. in bash
// node script.js
// you'll see 
// <Buffer 68 65 6c 6c 6c 6f 6f 6f 20 74 68 65 72 65 21 21 21> in bash
// notice: if no encoding is specified, 
// then the raw buffer is returned.

// 4. in script.js
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrorrr');
  }
  console.log(data.toString());          //new
})

// 5. in bash
// node script.js
// you'll see 
// helllooo there!!! in bash

 