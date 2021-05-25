/*
Resource:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 
*/

// once we sign in we have our user information 
// and perhaps '/profile/:id' will be useful for us 
// to grab our profile and perhaps update our name or our email


// 1) 
// To focus on is this our last route, 
// which is 'image', which allows us to increment
// the number of our 'entries'

// 1. in App.js: change the name of onButtonSubmit to  onPictureSubmit
// 2. in onPictureSubmit fn
    onPictureSubmit = () => {
        this.setState({ imgUrl:this.state.input });
        app.models
          .predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.input)
          .then(response => {
            if(response) {
              fetch('http://localhost:3000/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  id: this.state.user.id
                })
              })
            }
            this.displayFaceBox(this.calculateFaceLocation(response))
          })
          .catch(err => console.log(err));
      }

// 3. in react app
// to test if the app works
// result: everything is ok except 'entries' didn't get changed

// 4. in App.js
    onPictureSubmit = () => {
      this.setState({ imgUrl:this.state.input });
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL, 
          this.state.input)
        .then(response => {
          console.log(response)
          if(response) {
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(response => response.json())  //new
              .then(count => {                    //new
                this.setState({user: {           //new
                  entries: count                  //new
                }})
              })
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }

// 5. in React app
// test again
// go to network to see the response
// you'll get -> 2