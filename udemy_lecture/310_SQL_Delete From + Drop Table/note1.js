/*  in terminal  */

// 1)DELETE name
// psql 'test';
// test=# SELECT * FROM users;
    //  name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Anita |  27 | 1994-01-10 |    50
    //  Sally |  37 | 1984-01-25 |   100
    //  John  |  45 | 1945-04-14 |   100
    //  Amy   |  15 | 1995-02-23 |    80
    // (4 rows)
// test=# DELETE FROM users WHERE name = 'Sally';
// test=# SELECT * FROM users;
    //  name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Anita |  27 | 1994-01-10 |    50
    //  John  |  45 | 1945-04-14 |   100
    //  Amy   |  15 | 1995-02-23 |    80
    // (3 rows)


// 2)DELETE TABLE -> DROP
// test=# DROP TABLE login;
// test=# DROP TABLE users;
// test=# \d
// Did not find any relations.

