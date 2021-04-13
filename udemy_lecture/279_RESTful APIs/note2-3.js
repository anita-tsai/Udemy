// 4) req.params

// 1. in server.js

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get('/:id', (req, res) => {       //new
  // console.log(req.query);
  // req.body
  // console.log(req.headers);        
  console.log(req.params);            //new       
  res.send("getting root");
});

// 2. in postman, -> localhost:3000/1234
// click headers and send
// you'll see in bash
// { id: '1234' }

// 3. in server.js
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get('/:id/:id2', (req, res) => {       //new
  // console.log(req.query);
  // req.body
  // console.log(req.headers);        
  console.log(req.params);
  res.send("getting root");
});


// 4. in postman, -> localhost:3000/1234/5566
// click headers and send
// you'll see in bash
// { id: '1234', id2: '5566' }
