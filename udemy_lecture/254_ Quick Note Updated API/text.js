// wevsites:
// https://github.com/Clarifai/clarifai-javascript
// https://www.clarifai.com/models/face-detection

// HEADS UP! In the next video you are going to learn about Clarifai API.

/*

1. I have added a troubleshooting video for you to watch after the next one: 
Clarifai API Updates, Models and Troubleshooting. 
This video will go over some of the Clarifai Website updates 
plus some common errors that students might get in the next video.
One thing you will notice is that for marketing reasons, 
they have changed their Predict model we will be using to 
Armada Predict...ohhh fancy!

2. Clarifai recently added new client APIs. 
Their newest version would require us to run npm install 
clarifai-nodejs-grpc vs what you will see in the upcoming video 
which is npm install clarifai. As I said, different packages 
but they both do the same thing. Because this change is fairly new, 
we want to wait for the newer version to stabilize before using it. 
Therefore we are going to continue to use npm install clarifai since 
it still works and has no issues moving forward. 
I will be creating an updated video once Clarifai changes are stable. 
This happens a lot in the industry and whenever you see things 
like "NOTE: For node.js users, this API Client is no longer supported,
" it simply means that they are not adding new features to it, 
but the library will still work.

3. Sometimes the Clarifai Models can be down or not working 
as they are constantly getting updated. 
A good way to check if the model you are using is up, 
is to check them on the clarifai website. For example, 
for the Face Detect Mode: https://www.clarifai.com/models/face-detection. 
If that isn't working, then that means you will have to wait 
until their servers are back up. Another solution is 
to use a different version of their model that works 
like this one: `c0c0ac362b03416da06ab3fa36fb58e3`.

So compared to what you might see in the next video 
you might have to enter the above key:
so you would change from in the video:

.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)

to:

.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)


You will see when you get there in the next video :)

*/