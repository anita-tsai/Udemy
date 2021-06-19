/*  Quick Note: Updated API  */

/*
1)
HEADS UP! Sometimes the Clarifai Models can be down 
or not working as they are constantly getting updated. 
A good way to check if the model you are using is up, i
s to check them on the Clarifai website. 
For example, 
for the Face Detect Mode: https://www.clarifai.com/models/face-detection. 
If that isn't working, 
then that means you will have to wait 
until their servers are back up. 
Another solution is to use a different version of their model 
that works like this one: `c0c0ac362b03416da06ab3fa36fb58e3`.

2)
So compared to what you might see in the next video 
you might have to enter the above key:

so you would change from in the video:
.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
to:
.predict('c0c0ac362b03416da06ab3fa36fb58e3', req.body.input)

3)
You will see when you get there in the next video :)

const handleApiCall = (req, res) => {
  app.models
    // You may have to do this:
    // .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .predict('c0c0ac362b03416da06ab3fa36fb58e3', req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

*/