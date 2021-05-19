// go to udemy project -> 285_smart brain api

/*
 * To interrogate our server 
 * that we just created using Node and express 
 * to our front end which was built with JavaScript and react 
*/

// 1) run app and server
// 1. npm start(252_facerecon) 
// notice: chang the port to run
// 2. npm start(285_smart brain api)

// 2) create componentDinMount
// in order to communicate with the back end and front end
// We can use fetch in our case 

// 1. in app.js
  /*
  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log) //.then(data => console.log(data))
    }  
  */

// 2. in localhost:3001(web)
  // failed to fetch
// reason: Chrome doesn't really trust whatever we're accessing it
// they have no way of knowing that our server is secure
// solution: 
// set the request's mode to 'no-cors' to fetch the resource with CORS disabled.




// 3) install cors npm
// 1. in terminal
  // npm i cors
// 2. in server.js
    // const cors = require('cors');
    // ...
    // app.use(cors());
// 3. in terminal
    // npm start
// 4. in port3001
// refresh
// you'll see
  // (2) [{…}, {…}]
  // 0: {id: "123", name: "John", email: "john@email.com", entries: 0, joined: "2021-05-06T10:05:43.196Z"}
  // 1: {id: "124", name: "Sally", email: "sally@email.com", entries: 0, joined: "2021-05-06T10:05:43.196Z"}
  // length: 2
  // __proto__: Array(0)

// 4) sent the singin from front end to back end
// 1. in server.js
// add Jhon and Sally's passwords
    // password: 'cookies',
    // password: 'bananas',

