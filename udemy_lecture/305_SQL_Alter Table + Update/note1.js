// 1) ALTER TABLE & ADD column
// psql 'test'
// test=# INSERT INTO users (name, age, birthday) VALUES ('John', 45, '1945-04-14');
// \d
// test=# SELECT * FROM users;

// 2) add another column to a pre-existing table
// -> ALTER TABLE table_name ADD column datatype;
// test=# ALTER TABLE users ADD score smallint;

// 3)Update
// -> UPDATE table_name
// -> SET some_column = some_value
// -> WHERE some_column = some_value;
// test=# UPDATE users SET score = 50 WHERE name = 'Anita';
// test=# SELECT * FROM users;
    // name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Sally |  37 | 1984-01-25 |      
    //  John  |  45 | 1945-04-14 |      
    //  Anita |  27 | 1994-01-10 |    50
    // (3 rows)

// test=# UPDATE users SET score = 100 WHERE name = 'Sally' or name = 'John';
// test=# SELECT * FROM users;
    // name  | age |  birthday  | score 
    // -------+-----+------------+-------
    //  Anita |  27 | 1994-01-10 |    50
    //  Sally |  37 | 1984-01-25 |   100
    //  John  |  45 | 1945-04-14 |   100
    // (3 rows)
// test=# INSERT INTO users (name, age, birthday, score) VALUES ('Amy', 15, '1995-02-23', 80);