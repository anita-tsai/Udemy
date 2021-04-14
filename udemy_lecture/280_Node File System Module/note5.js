// 8) /* DELETE -> fs.unlink() */

// 1. first, use fs.write() to create a new txt named byebye
// 2. in script.js
    fs.unlink('./byebye.txt', err => {
      if(err) {
        console.log(err)
      }
      console.log('Inception')
    })

// 3. run node script.js
// you'll find the byebye.txt got deleted
// and in bash, you'll see
  // $ node script.js
  // Sync helllooo there!!!
  // Inception
  // Async helllooo there!!!
 