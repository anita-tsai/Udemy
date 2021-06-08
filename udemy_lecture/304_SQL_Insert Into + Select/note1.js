
// 1) in terminal
// 1. psql 'test'
// SAMPLE: 
// test=# INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, value_2, value_3);

// 2. INSERT INTO users (name, age, birthday) VALUES ('Anita', 27, '1994-01-10');
    // INSERT 0 1
// 3. test-# \d
    // List of relations
    //  Schema | Name  | Type  |   Owner   
    // --------+-------+-------+-----------
    //  public | users | table | anitatsai
    // (1 row)



// 2) in tableplus
// to see the result that we just created



// 3) in terminal: how to grab this infomation
// 1. test=# SELECT name, age, birthday FROM users;
    // name  | age |  birthday  
    // -------+-----+------------
    //  Anita |  27 | 1994-01-10
    // (1 row)
// 2. test=# SELECT * FROM users;
    // name  | age |  birthday  
    // -------+-----+------------
    //  Anita |  27 | 1994-01-10
    // (1 row)

// 4) in terminal: how to grab this infomation
// 1. choose SQL
// type:
// select * from users;
// run all -> see the result as before

// 5) keep creating another user
// 1. in terminal
// test=# INSERT INTO users (name, age, birthday) VALUES ('Sally', 37, '1984-01-25');
// \d
// test=# SELECT * FROM users;
    // test=# SELECT * FROM users;
    //  name  | age |  birthday  
    // -------+-----+------------
    //  Anita |  27 | 1994-01-10
    //  Sally |  37 | 1984-01-25
    // (2 rows)
