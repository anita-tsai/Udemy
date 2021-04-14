// explain the rule about challenge

// 1) crate script.js & hello.js
    // use
    // console.time('xxx')
    // console.timeEnd('XXX')
// 1. in scipt.js
    const fs = require('fs');

    fs.readFile('./hello.txt', (err, data) => {
      console.time('funchallenge')             //new
      if (err) {
        console.log('errrorrr');
      }
      console.log('Async', data.toString('utf8'));
      console.timeEnd('funchallenge');         //new
    })

    const file = fs.readFileSync('./hello.txt');
    console.log('Sync', file.toString());

// 2. run node script.js in bash
// you'll see
    // $ node script.js
    // Sync hello it's lecture 281!
    // Async hello it's lecture 281!
    // funchallenge: 26.835ms
