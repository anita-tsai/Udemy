/*  in tableplus  */

// 1)create a new table
/*
CREATE TABLE login(
    ID serial NOT NULL PRIMARY KEY,
    secret VARCHAR (100) NOT NULL,
    name text UNIQUE NOT NULL
);
*/

// 2) insert
// INSERT INTO login (secret, name) VALUES ('abc', 'Anita');
// INSERT INTO login (secret, name) VALUES('xyz', 'Sally');
// INSERT INTO login (secret, name) VALUES('xyz', 'Sally');
// INSERT INTO login (secret, name) VALUES('lol', 'John');
    // we don't get id:3
    // because it has an error -> the name, Sally already exists
