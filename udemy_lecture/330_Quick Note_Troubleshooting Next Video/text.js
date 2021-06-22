// Quick Note: Troubleshooting Next Video

/*
Heads up! 
In the next video we are going to connect our Knex.js library 
to our Heroku Database. 
If you are encountering an issue following the next video 
and you are seeing errors like...
Error: self signed certificate
or
code: 'DEPTH_ZERO_SELF_SIGNED_CERT'

This is due to a line in the code you will see 
in the next video where we set ssl: true

In the case that you see the error above, 
it may have to do with the fact that 
we are using the free version of Heroku. 
If you encounter this issue (and only if you do), 
you can resolve it by 2 ways:

Option 1:  
adding the below on line 11 in the server.js file:
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 


Option 2: Replace ssl: true to:
connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }


Note that this is not secure for use in production, 
and to only use for local development 
(which isn't a big issue for us 
because this is a personal project app with no real users)
*/