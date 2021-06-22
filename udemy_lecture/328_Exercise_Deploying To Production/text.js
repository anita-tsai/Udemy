// Exercise: Deploying To Production
/*
Exercise time!!!
...and this is a big one! 
Deploying code to production is always difficult 
and something that is a real sticky point for some software developers. 
Up until now, the code worked just fine on your computer. 
But what happens when we now move the code 
from our computers to somewhere in the world 
on a "server" that has a different setup than our home computers?


Because of this, 
in this section you will encounter many errors, 
and it will test your ability to research, debug, 
and understand why your code isn't working on Heroku. 
It may become frustrating, but trust me on this, 
that this is a good learning experience and you WILL get there. 
To help you out along the way, watch the next couple of videos 
and you can also use this guide as a reference on a different way 
to do it if the path I outlined for you in the next videos produces errors for you:

For Frontend React code: 
https://medium.com/quick-code/deploying-production-build-of-react-app-to-heroku-2548d8bf6936
For Backend code: 
https://devcenter.heroku.com/articles/getting-started-with-nodejs


For example, here is a sneak peak:
In the next video, we will be deploying our app to Heroku. 
Some student may encounter an error 
while doing this which will state (in the logs):
'nodemon: not found'

On Heroku, dev dependencies never get installed. 
However nodemon is a dev dependency...
If you encounter this problem while following the next video, 
simply change your start script in your package.json 
from
'nodemon server.js'
to
"scripts": {
    "start": "node server.js",
    "start:dev": "nodemon server.js"
    .....    
},

and everything should work as expected! 
You can read more about this issue here 
if you are curious: 
https://stackoverflow.com/questions/56047981/node-js-heroku-deployment-on-mac-sh-1-nodemon-not-found-npm-err-nodemon?newreg=9da4e21fe81a46b9b84711c02166f439
*/