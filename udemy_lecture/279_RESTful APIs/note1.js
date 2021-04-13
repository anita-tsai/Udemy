/* RESTful API */

// foreword
/*
A RESTful API defines a set of functions 
which developers can perform requests and receive responses

via a HTTP protocol such as GET, POST, PUT, DELETE 
– something we've talked about.

Remember how I said a web browser sends a request 
and just hopes that the server returns what the browser
asked for.

A Google server can send us whatever it wants.

It doesn't have to follow the rules 
that perhaps the web browser sets. 
With RESTful API we're able to
create an API that is RESTful 
– something that follows the rules 
that everybody can agree on 
so that we have compatibility between different systems.

So a RESTful API is an architectural style 
and it's an approach to communications; 
an agreed upon set of rules so everyone plays nicely. 

A RESTful API users GET to receive a resource, 
PUT to change the state or update a resource, 
a POST that creates a resource, and a DELETE to remove it.

And that's something that we've already talked about, 
and the RESTful API is a way to define our server
so that it specifies what it can provide and how to use it.

In other words the URL parameters should make sense.

For example if we're doing '/profile' 
–  we expect that if it's a GET request 
we're going to get a profile.

If it's a POST request we're going to add a profile.

If it's a PUT perhaps we're updating the profile, and this URL makes sense.

And you can think of this as the noun of what we want to receive. 
The HTTP request is the verb 
and everything after the slash [/] is the noun.

Now finally REST APis are something called 'stateless' 
– meaning that calls can be made independently
of one another and each call contains all the data necessary 
to complete itself successfully. 
A server doesn't need to keep memorizing things.

Each request that comes in has enough information 
that the server can respond with, regardless of who that person is.
 */


// explain
  // req.query
  // req.body
  // req.header
  // req.params
/*
We also have request body [req.body], 
which again we've talked about 
– using something like your 'urlencoded' or 'JSON'
body-parsers, we can add that middleware 
to receive whatever the request sends in the body.

We also have request dot header [req.header].

So if I 'console.log(req.header)' 
well this time using Postman I can say in the header 
– and it has a nice Headers tab 
- you see that we have Content-Type
'application/json', which automatically does it 
because the last request was a JSON request.

But I can put in anything here I can say 'name' is 'sally' 
if I send this (it's a GET method) 
I see that now (req.header) has all these headers 
but also – name: 'sally'.


And then finally we also have something called (req.params)
And if 'console.log(req.params)' 
– this is a syntax where you use the parameters of the URL.
If I do the semicolon and then let's say 'id' ['/:id'] 
– I save this and now we have access 
to whatever the parameter is of the URL.
So let's just say '1234' and I'll remove the header for now.
If I 'Send' I now have { id: '1234' } right.

And you can have as many parameters as you want 
and you can nest them but we have access to our request
information, which is fantastic.


Now when we send a response 
we also want to have a bit of an option 
as to what we want to send. 
Well with a response we can say that with sending
we also want to respond with a status, 
let's say a status of 404 and we could say send("not found")
if I refresh and send now, 
I get 'not found' with a status of 404.
Again if I go back to my browser and refresh
I have in my Network tab a 404 status.
*/