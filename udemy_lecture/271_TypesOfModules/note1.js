
// 1) create package.json
// npm init


// 2) node_modules
// npm install nodemon --save-dev


// 3) in pakage.json -> scripts
// "test": "echo \"Error: no test specified\" && exit 1"
// -> "start": "nodemon"


// 4) in bash
// npm start
/*
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node script.js`
680
[nodemon] clean exit - waiting for changes before restart
*/


// 5) if I change the number b: 35(script.js) const b =35
// it keeps listening to changes and it will output everything
/*
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node script.js`
590
[nodemon] clean exit - waiting for changes before restart
*/

