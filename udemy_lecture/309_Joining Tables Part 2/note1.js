// in terminal
// 1)JOIN
// psql 'test'
// \d
    // List of relations
    // Schema |     Name     |   Type   |   Owner   
    // --------+--------------+----------+-----------
    // public | login        | table    | anitatsai
    // public | login_id_seq | sequence | anitatsai
    // public | users        | table    | anitatsai
    // (3 rows)
// test=# SELECT * FROM users JOIN login ON users.name = login.name;
    // name  | age |  birthday  | score | id | secret | name  
    // -------+-----+------------+-------+----+--------+-------
    //  Anita |  27 | 1994-01-10 |    50 |  1 | abc    | Anita
    //  Sally |  37 | 1984-01-25 |   100 |  2 | xyz    | Sally
    //  John  |  45 | 1945-04-14 |   100 |  4 | lol    | John
    // (3 rows)

