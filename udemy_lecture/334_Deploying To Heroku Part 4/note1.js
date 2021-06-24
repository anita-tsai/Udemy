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
