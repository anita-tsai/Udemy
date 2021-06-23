// Npm Serve

/*

We are going to be putting our front end onto a server 
in the next video! Woohooo!!!!
But wait...
To avoid any errors when deploying to Heroku 
(some students have mentioned that their deployment fails 
because of a certain version of create react app 
that they are using), 
there is a way to make sure your deployment succeeds.

npm install serve --s

Please install the serve package from NPM 
using the command above and replace the npm start command  
in package.json like this:
"scripts": {
    "start": "serve -s build",
    // it used to be like this, which you can remove now:
    // "start": "react-scripts start",

The serve package https://www.npmjs.com/package/serve/v/6.4.10
will make sure that we "serve" 
the files needed to start the front end 
on the server without any errors. 
This is actually the recommended way 
to "deploy to production" using create react app: 
https://create-react-app.dev/docs/deployment#static-server

Finally, if the above is still giving you issues, 
you have a second option: 
https://create-react-app.dev/docs/deployment/#heroku
*/