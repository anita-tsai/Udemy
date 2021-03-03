/*
It's time to learn another exciting topic and we're going to get into Backend basics.

But I wanted to show you what we've covered so far on the Front-End.

We've started with this diagram of asking for "Who is google.com?" and going through the ISP asking

the domain name server for the IP address.

We then ask the IP address to find the Google servers and then the Google servers gives us our HTML,

CSS and JavaScript file which we're able to get one through HTML

And then the link tags and the script tags to get the CSS and Javascript. The browser reads the file for

us, the HTML, CSS and the V8 engine or the JavaScript engine of the browser uses it to read the JavaScript

and we manipulate the DOM using JavaScript.

We also learned that the location of the server is important, how many trips we make, how many HTTP requests

we make is important.

The size of the files is important.

And we learned some of those solutions such as content delivery networks, having script into just a bundle.js file

and also minimizing our files.

And then we also learned about this new technology called AJAX where we can just fetch users, talk to

the server while the user is still browsing the website and receive a JSON response to update the

website in real time.

And this picture that we started with looks a lot clearer than in the first video, doesn't it?

We understand what a Front-End developer does.

We see the power of React and we also know that these arrows simply mean HTTP requests; a language that

both Front-End and Back-End can speak and using AJAX and JSON we're able to do it dynamically.

Now the Back-End and the role of a Back-End developer. They are the ones that are in charge of working

with servers and databases. And a server is responsible for whatever you get in the browser.

I can ask from the browser anything; such as "Go to google.com". But at the end of the day the web server

can just give me whatever it wants. If it's going to just send me to twitter.com instead of google.com,

well, that's up to the server. Whatever we need,

we just make the request and we hope that the server gives us what we asked for. And if you remember

a server is just a computer; a computer that's somewhere in the world just listening to this HTTP

connection, asking to see if we have any files.

The most basic of servers and you might have used this before maybe using Hostgator a hosting site

or even WordPress sites and putting them on Hostgator. It uses something called a 'LAMP STACK'.

This was what was useful for the most basic of websites that is, (if) you just want a simple information

website

Maybe a simple WordPress website where nothing complex is happening.

Nothing professional really. What they used was a Linux server which is the operating system.

Just like I have Mac, Linux will be the operating system of the server.

We have the Apache server.

Apache is a server, again

a program written by somebody that is really really good at just accepting requests and sending

out responses of files.

We had MySQL which is database.

Maybe you had a comment section in your blog and you need to store that data,

that would be the database. And then we had the PHP which was just a language that you can use to have

a bit of logic in your servers. And the server, just like your computer, had a file system where all the

files of your website are stored. And Apache just did that.

Just listen to see if anybody entered

funfunwebsite.com into the URL. If it got that request,

it'll just default give you index.html.

If somebody entered funfunwebsite.com/about, it will just give you about.html. It a was very

simple very easy server.

That's what most hosting websites like Hostgator use. And you might be asking "Could I just download Apache

server and just run my own server from your computer?"

Yes you absolutely can.

But without having a server software,

well, our computer is unreachable.

Nobody over the Internet can access our computer because our computer is not a server, (it) has no code that

tells it "Hey, if I get a request, send this out."

But as we saw in our previous videos, we can create fake servers to test our websites.

Now this was the old way of doing things.

There wasn't much logic to it, you couldn't really expand on it.

You can't have websites like Facebook or Amazon using this type of a system.

Like I said, this was for very basic websites.

Now a new stack something we call an application server looks something more like this.

Now an application server is different than our previous example because unlike using Apache server

that is very simple and just does request response, just give files there and back. With a something like

a Node server where you have Node.js running, well you can write a script and say "If I receive a request

for a log in then check the user's username in the database. If it matches then let me know and then

send a response through JSON to the Front-End application. And we can customize what these scripts say.

So far we've only been able to use JavaScript on the web. But now, with Node.js, we can use it on a server,

on a computer that isn't running a web browser. With Node.js,

we can write JavaScript where, if I posted something on Facebook, that post on Facebook, when I clicked 'post',

it will get sent to the Node Server that's listening for requests.

It will say that, "Andrei just posted this message that is in JSON format." The Node.js and Express.js file

on the server will read it and it'll say "Ah, we want to store this post in our database." and this

database is going to store that post, so that when I come back next time it's still there.

And then once that's done, it's going to respond with a success saying that "My post is a success" and now

displays in my timeline.

I can edit the post, I can delete the post, and again Node Server can delete that post from the database and

then send a response and remove it from the timeline.

You just have the power to constantly be interacting with the Front-End. Over in the next couple of videos

we're going to be building a project that incorporates all of this.

We're going to create a Node Server using a Express,

We're going to create our own database where we store user information. And we're going to be using AJAX

and JSON to constantly create, sign in, update user information.

So we have an understanding of this full system. If you're building websites and web apps,

well, you're not really building these. As a web developer, you're building something more similar to this:

but you might be asking yourself, "Is this it?"

"Is this the ultimate end to what a Back-End server infrastructure can do?"

Well, no, if you're Facebook, or Twitter, or Amazon, you would do something like this and don't get too worried

here, we can explain what's going on.

You are just making copies of your computer.

So think of each of these rectangles as a computer. And because Facebook gets a lot of people, it makes

a copy of their server and put it maybe in Asia,

and one in Africa, so that everybody from Asia can access this one and everybody from Africa can

access this one,

instead of having everybody access one server and overload the system. Because they have the same server

it's just copying these files and putting it on a server somewhere else.

That's it.

And that's what we called scaling. But they also still use the same database, so that if from this server

somebody updates the information, well, this person over here who uses this server, this user will still

have access to the information that person using this server updated.

And then finally, we have something called a 'Load Balancer'. And this is similar to what Apache or NginX

would do. Where it listens for an HTTP request and it notices that "Hmm, this one over here in North America

it's really really busy right now."

"I'm going to transfer this person to this server over here." and it just balances the load of the servers.

and it can keep growing this having more and more servers as you have more and more users.

And finally you can even have multiple databases.

Again these squares each represent a computer; a computer that's running a database, a computer that's

running a server, a computer that's running a load balancer. And you can have multiple databases, again,

so that they don't get overwhelmed with all these requests.

And each one maintains a copy of the other. And this is something that we'll talk (about) more when we get to

the Node section and Database section.

But I want to show you the idea behind servers. To work with the Back-End,

the main goal is to make sure that when we make a HTTP request from the Front-End that we get a response

back as fast as possible with correct data.

And that is what Back-End development is. Making sure that we return those resources so that our Front-End

team can be confident that we are going to receive exactly what we need.

So I want you to get excited because over the next sections we're going to be focusing on the Back-End as

well as the Front-End. We're going to build a App that uses all of these technologies in one place.

So you know exactly how everything is connected and you have an idea of how to go from something like

this to one day having something like this.
*/