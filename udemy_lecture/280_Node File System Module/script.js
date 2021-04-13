const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrorrr');
  }
  console.log(data.toString('utf8'));
})