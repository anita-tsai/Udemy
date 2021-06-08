/* Troubleshooting: Connecting Knex */
/* 

When you use the knex function to connect to a database, 
make sure you type your pgsql details 
when you created your database. 
Otherwise, it will give you errors 
like this one (no password provided):

*/

const db= knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1', //localhost
      user : 'postgres', //add your user name for the database here
      password : '', //add your correct password in here
      database : 'smartweb' //add your database name you created here
    }
});