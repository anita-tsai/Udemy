// to design our own database

/*  in terminal  */
// 1) create database
// desktop/
// createdb 'smart-brain'
// psql 'smart-brain'


/*  in tableplus  */
// 2) connect our database
// host: localhost
// port: 5432
// database: smart-brain


// 3)create table
// go to server.js to see the db
// in order to what we need about a db
// we need -> two tables: users, login
// we need -> id, name, email, entries, joined
// notice: we never stored plaintext password

// 1. create table-> users
// CREATE TABLE users (
// 	id serial PRIMARY KEY,
// 	name VARCHAR(100),
// 	email text UNIQUE not null,
// 	entries BIGINT DEFAULT 0,
// 	joined TIMESTAMP not null
// );
// 2. create table-> login
// CREATE TABLE login (
// 	id serial PRIMARY KEY,
// 	hash VARCHAR(100) not null,
// 	email text UNIQUE not null,
// );