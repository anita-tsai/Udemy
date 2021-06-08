// use npm packages to connect our database
// -> KNEX.JS

/*  in terminal: smart-brain-api  */
// 1) install KNEX
// npm install knex

// 2) install the appropriate database library: pg-> postgreSQL
// npm i pg


/*  in server.js  */
// 3)import knex into server.js
// 1. go to knex and copy and paste these codes in server.js
// const knex = require('knex');
// knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',  // it equals to localhost, home
//     user : 'anitatsai',
//     password : '',
//     database : 'smart-brain'
//     }
// });

/*  in terminal: smart-brain-api  */
// 4) start the server
// npm start


/* in server.js */
// 5) select
// 1. go to knex.js web, copy -> select — .select([*columns])
// 2. knex.select('*').from('users')
    // run-> TypeError: knex.select is not a fn
// 3. const postgres = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'anitatsai',
//         password: '',
//         database: 'smart-brain'
//     }
//  });
// 4. postgres.select('*').from('users');
// 5. console.log(postgres.select('*').from ('users'));
    // run-> we get a tons of infomation,
    // it means we connect our server to database