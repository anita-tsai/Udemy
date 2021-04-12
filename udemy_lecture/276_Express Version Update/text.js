/*
275. Express Version Update

Express Version Update

In the next video, we will be installing a package:
  npm install body-parser

However, if you are running a version of Express that is 4.16+, 
it now includes the same functionality inside of Express.

Instead of adding these lines in the code 
like I will show you in the next video:
  app.use(bodyparser.urlencoded({extended: false}));
  app.use(bodyparser.json());

If you are using Express 4.16+ you can now replace that with:
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
*/