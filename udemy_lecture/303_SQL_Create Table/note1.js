

// 1) in terminal
// 1. go to desktop
  // Desktop/
// 2. to communicate with db using SQL
  // psql 'test'
// 3. to create a table
  // CREATE TABLE table_name (column_1 datatype, colum_2 datatype, colum_3 datatype);
  // we can see,
  // ERROR:  type "datatype" does not exist
  // LINE 1: CREATE TABLE table_name (column_1 datatype, colum_2 datatype...
  // reason
  // I get an error 'type "datatype" does not exist' 
  // and that is because datatype is referring to what Postgres
  // or our relational database knows, we have to say ahead of time 
  // what type of data column_1, column_2, and column_3 hold.

// 4. test=# CREATE TABLE users (name text, age smallint, birthday date);
    // CREATE TABLE  
// 5. test=# \d
    // List of relations
    // Schema | Name  | Type  |   Owner   
    // --------+-------+-------+-----------
    // public | users | table | anitatsai
    // (1 row)

// 6. test=# \q
  // we can back to terminal
