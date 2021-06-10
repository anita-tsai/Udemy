/*
goal:
to go through a simple code review process 
to show you how we can improve the app 
so that you can take this code base and expanded it, 
make it even better, on your own
*/

// => front-end code

/*  in react app  */
// 1) have a bug
// 1. register a new user-> mandy
// 2. send a photo to detect
// 3. sign out and register a new user-> nancy
// bug:
// never clear the state of frontend application
// so the next user will see the previous user submitted


/*  in App.js  */
// 2) the bug is we don't clear the state of user
class App extends Component {
    constructor() {
      super();
      this.state = {
        input: '',
        imgUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: false,
        user: {      //bug
          id: '',
          name: '',
          email: '',
          entries: 0,
          joined: ''
        }
      }
}}

// 3) to fix the bug -> initial
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
    }

// 4) when do sign out -> remove all the infomation
onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)  // remove the previous
    } else if (route === 'home') {
      this.setState({ isSignedIn: true})
    }
    this.setState({ route }); //({ route:route })
}


/*  in react app  */
// 5) test again
// 1. sign in the first user: mandy
// 2. send a photo, then sign out
// 3. sign in the second user: nancy
// -> never show the state that previous user had submitted



/*  in app.js  */
// 6)lose a catch if we didn't catch the image
// the good way:
// -> have a catch after you do .then

// 7) divide up the input and the button,
// to reuse them in somewhere