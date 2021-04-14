// 3) /* fs.readfile() */

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
  // It's a way for us to have characters, 
  // whether they're Latin characters, 
  // you know ABC's or we have Korean
  // Japanese, Chinese characters, 
  // they're all represented by a number, 
  // and UTF 8 is a way of encoding these
  // numbers to make sure that we can read them.


  
// 4) /* fs.readFileSync */

// 1. in script.js
    const fs = require('fs');

    fs.readFile('./hello.txt', (err, data) => {
      if(err) {
        console.log('errrorrr');
      }
      console.log(data.toString('utf8'));
    })

    const file = fs.readFileSync('./hello.txt');   //new
    console.log(file.toString());                  //new
// 2. in bash, you'll see (keyin: node script.js)
    // helllooo there!!!
    // helllooo there!!!

// 3. in script.js
    const fs = require('fs');

    fs.readFile('./hello.txt', (err, data) => {
      if (err) {
        console.log('errrorrr');
      }
      console.log('1', data.toString('utf8'));     //new
    })

    const file = fs.readFileSync('./hello.txt');
    console.log('2', file.toString());             //new
// 4. in bash, you'll see (keyin node script.js)
    // 2 helllooo there!!!
    // 1 helllooo there!!!

// 5.reason? (go to watch the asynchronous synchronous video in this course)
    // Now read file is asynchronous, 
    // and that's why it has something called the callback function.

    // It is saying: hey I'm going to read this file, 
    // and when I'm done with it, you just keep going on with your
    // business and keep reading.
    // Line three, line four, line five, line six, all the way to 11.

    // When I'm done, I'll let you know 
    // and I'll either give you an error or some data. 'readFileSync()' 
    // which is synchronous says: I'm going to read this file.
    // Don't do anything, just wait here when I'm done

    // I'm going to assign it to 'file' 
    // and then you can keep going.

    // So as you can see here what happens 
    // is we read the file and because this is an asynchronous, 
    // it's going to run this and come to line 10 
    // and run the 'fs.readFileSync()' 
    // and the 'readFileSync()' because it's saying
    // hey wait until I'm done this, it is going to print out
    // 'helllloooooo there!!!'

    // and then the asynchronous code 
    // is going to say: hey I finished reading the file,
    // here's the data and it prints out down over here.


