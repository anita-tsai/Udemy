/*  in terminal  */

// 1)select conditional
// test=# SELECT * FROM users WHERE name LIKE 'A%';
    // name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Anita |  27 | 1994-01-10 |    50
    //  Amy   |  15 | 1995-02-23 |    80
    // (2 rows)

/*  in tableplus */
// 1) like
// SELECT * FROM users where name LIKE 'A%';
// SELECT * FROM users where name LIKE '%y';

// 2) store in order
// SELECT * FROM users ORDER BY score DESC;
// test=# SELECT * FROM users ORDER BY score DESC;
// test=# SELECT * FROM users ORDER BY score ASC;
// SELECT * FROM users ORDER BY score ASC;
    // name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Sally |  37 | 1984-01-25 |   100
    //  John  |  45 | 1945-04-14 |   100
    //  Amy   |  15 | 1995-02-23 |    80
    //  Anita |  27 | 1994-01-10 |    50
    // (4 rows)

    // name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Anita |  27 | 1994-01-10 |    50
    //  Amy   |  15 | 1995-02-23 |    80
    //  Sally |  37 | 1984-01-25 |   100
    //  John  |  45 | 1945-04-14 |   100
    // (4 rows)