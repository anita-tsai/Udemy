// the two main problems
// 2. if you send a picture to detect buttom
// and click the console -> network -> headers
// you can see your own api key in there
// -> to move api key from frontend to your backend


/*   in termianl: api  */
// 1) npm install clarifai


/*  in image.js  */
// 2) 
    const Clarifai = require('clarifai');

    const app = new Clarifai.App({
    apiKey: 'c2d799a9bdcf46cd947a8487df16d627'
    });

    const handleApiCall = (req, res) => {
    // get imgurl from request and call clarifi api to get the face data
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
        res.json(data);
        })
        .catch(err => res.status(400).json('unable to work with API'))
    }

/*  in server.js  */
// 3)
    app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

/*  in app.js  */
// 4)
    onPictureSubmit = () => {
        this.setState({ imgUrl:this.state.input });
        // move clarifi api call from here to backend due to api key security
        // so that we need to pass the image url to backend
        fetch('http://localhost:3000/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            input: this.state.input
            })
        })
        .then(response => response.json())
    }