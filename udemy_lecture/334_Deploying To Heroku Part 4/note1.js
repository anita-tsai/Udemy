/*  push front end on heroku  */


// 1) in heroku
// go to dashboard:
// click new -> create new app
// APP name: smart-brain(I change to 'facerecon-smart-brain')
// click create app
// -> get the commands for us to set up on heroku

// 2) in terminal: facerecon
// 1. login
// $ heroku login (and keyin your infomation to login your account)

// 2. Create a new Git repository
// $ git init (if it is necessery)
// $ heroku git:remote -a facerecon-smart-brain
// $ git remote -v(to make sure we now have heroku)

// 3. Deploy your application
// $ git add .
// $ git commit -m "deploy"
// $ git push heroku main
// $ heroku open (link to website)



// 3) test the website


// 4) for security concern (to hide the API key)
// 1. in heroku
// click personal -> backend -> settings 
// -> Config Vars
// KEY: API_CLARIFAI
// VALUE: c2d799a9bdcf46cd947a8487df16d627 (copy from image.js)

// 2. in image.js
// from:
const app = new Clarifai.App({
  apiKey: 'c2d799a9bdcf46cd947a8487df16d627'
});
// to:
const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI
});