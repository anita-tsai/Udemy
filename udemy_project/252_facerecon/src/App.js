
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import Clarifai from 'clarifai';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
import { Component } from 'react';


// const particleOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//   }
// }

const app = new Clarifai.App({
  apiKey: 'c2d799a9bdcf46cd947a8487df16d627'
 });

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  }
}

const initialState = {
  input: '',
  imgUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }
  

  loadUser = (data) => {
    console.log(data)
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.id,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(console.log) //.then(data => console.log(data))
  // }

  calculateFaceLocation = (data) => {
    console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box })
  }

  onInputChange = (event) => {
    this.setState({ input:event.target.value });
  }

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
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true})
    }
    this.setState({ route }); //({ route:route })
  }

  render() {
    const { isSignedIn, imgUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} 
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' 
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onPictureSubmit={this.onPictureSubmit} 
              />
              <FaceRecognition box={box} imgUrl={imgUrl} />
            </div>
          : (
              route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )  
        }
      </div>
    );
  }
}

export default App;

/*
https://vincentgarreau.com/particles.js/
https://www.npmjs.com/package/react-particles-js
*/