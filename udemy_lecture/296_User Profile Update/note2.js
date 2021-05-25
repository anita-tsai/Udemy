/* problem */
// Because we need to make sure that 'user' is still the same 
// but we're just updating the 'user' object

// 1) Object.assign()
// 1. in App.js
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
              .then(response => response.json())
              .then(count => {
                this.setState({user: { 
                  entries: count
                }})
              })
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }