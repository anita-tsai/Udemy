/* pSQL on heroku */

// 1) heroku
// Data -> SQL -> choose the free one

// 2) in smart-brain-api terminal
// heroku addons
// heroku pg:info
// heroku pg:psql  (you're in database)

// 3) to recreate the database that we had -> go to tableplus
// go to tablePlus to copy those codes we need to recreate table
// ------------------- paste the following codes in terminal
// CREATE TABLE login(
// 	id serial PRIMARY key,
// 	hash VARCHAR(100) not null,
// 	email text UNIQUE not null
// );
// CREATE TABLE users (
// 	id serial PRIMARY KEY,
// 	name VARCHAR(100),
// 	email text UNIQUE not null,
// 	entries BIGINT DEFAULT 0,
// 	joined TIMESTAMP not null
// );
// \d 

// 4)
// heroku pg:info
// heroku addons
// copy this line:
// cryptic-brushlands-02929

// 5) change the host in connection of db
// from
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1', // it equals to localhost, home
    user : 'anitatsai',
    password : '',
    database : 'smart-brain'
  }
});
// to 
const db = knex({
  client: 'pg',
  connection: {
    host : 'cryptic-brushlands-02929', 
    user : 'anitatsai',
    password : '',
    database : 'smart-brain'
  }
});


// 6) store and update those changes
// git add .
// git commit -m "updating database""
// git push heroku master


// 7) still can not register
// heroku logs --tail
// solution: to see the documentation 'Connecting in Node.js'
// => use: 
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });


// 8)
const db = knex({
  client: 'pg',
  connection: {
    host : process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false
    }
  }
});


// 9) store and update those changes
// git add .
// git commit -m "updating database""
// git push heroku master
// heroku logs --tail
// heroku config


// 10) still can not register
// solution: to see the documentation 'Connecting in Node.js'
const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false
    }
  }
});



// 11) store and update those changes
// git add .
// git commit -m "updating database""
// git push heroku master
// heroku logs --tail
// heroku config


// 12) test in react app
// it's working now

// 13) 
// heroku pg:psql
// select * FROM users;
// id | name |     email     | entries |         joined          
// ----+------+---------------+---------+-------------------------
//   1 | ted  | ted@email.com |       0 | 2021-06-22 16:00:24.339
// (1 row)
