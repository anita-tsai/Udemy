// 5)

// 1. in server
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get('/:id/:id2', (req, res) => {       
  // console.log(req.query);
  // req.body
  // console.log(req.headers);        
  console.log(req.params);
  res.status(404).send("not found");
});

// 2. in postman -> localhost:3000/1234/5566
// refresh
// you'll see in postman
// body-> not found
// status -> 404Not Found

// 3. in broswer
// you'll als see the same result 404 in network tab