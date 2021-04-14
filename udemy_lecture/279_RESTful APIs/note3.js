// 6)

// 1. create a folder named public
// 2. create a index.html in public folder
      // <!DOCTYPE html>
      // <html>
      //   <head>
      //     <title>HII</title>
      //   </head>
      //   <body>
      //     it's working
      //   </body>
      // </html>

// 3. in script.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3000);

// 4. refresh the broswer -> it's working
// 5. open the network tab
// you'll see status 200
// and your html file in response 