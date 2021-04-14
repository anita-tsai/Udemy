const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrorrr');
  }
  console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//APPEND
// fs.appendFile('./hello.txt', 'This is so cool!', err => {
//   if(err) {
//     console.log(err)
//   }
// })

// WRITE
// fs.writeFile('byebye.txt', 'Sad to see you go', err => {
//   if(err) {
//     console.log(err)
//   }
// })

// DELETE
fs.unlink('./byebye.txt', err => {
  if(err) {
    console.log(err)
  }
  console.log('Inception')
})
