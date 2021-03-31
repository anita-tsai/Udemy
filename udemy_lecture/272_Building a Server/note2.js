

// 7) in server.js
/*
const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Helllooooo</h1>');
})

server.listen(3000);
*/



// 8) in bash
// 8-1) ctrl+C -> to stop 
// 8-2) npm start
// 8-3) in broswer, you'll see Hellloooo
// 8-4) in network -> localhost file 
  // -> you can see
  // Host: localhost:3000
  // Status Code: 200 OK
  // Content-Type: text/html



// 9) in server.js(add new line)
/*
const server = http.createServer((request, response) => {
  console.log('headers', request.headers)
  console.log('method', request.method)
  console.log('url', request.url)
  

  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Helllooooo</h1>');
})
*/



// 10) in website
// keyin: localhost:3000/profile/123
// in bash, you'll see -> 
// method GET
// url /profile/123


// 11) in server.js
/*
const server = http.createServer((request, response) => {
  console.log('headers', request.headers)
  console.log('method', request.method)
  console.log('url', request.url)
  const user = {
    name:'John',
    hobby:'Skating'
  }
  
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
})
*/
// you'll see those in broswer
/*
// 20210329174551
// http://localhost:3000/profile123

{
  "name": "John",
  "hobby": "Skating"
}
*/