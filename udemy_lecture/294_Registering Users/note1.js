
// 1) register (convert it to class that extends react component)
// 1. in Register.js
  class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name: ''
      }
    }

    onEmailChange = (event) => {
      this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
      this.setState({ password: event.target.value })
    }

    onNameChange = (event) => {
      this.setState({ name: event.target.value })
    }

    render() {
      return(
        <div>
        
        </div>
      )
    }
  }

// 2. in Register.js
  class Register extends React.Component {
    // ...

    onSubmitSignIn = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
      .then(response => response.json())
      .then(user => {
        if(user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
    }  

    render() {
      // const { onRouteChange } = this.props;
      return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="text" 
                    name="name"  
                    id="name" 
                    onChange = { this.onNameChange } //new
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    onChange = { this.onEmailChange }  //new
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" 
                    onChange = { this.onPasswordChange } //new
                  />
                </div>
              </fieldset>
              <div className="">
                <input 
                  onClick={ this.onSubmitSignIn } //new
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Register" />
              </div>
            </div>
          </main>
        </article>
      )
    } 
  }


// 2) update the user profile on the front end

// 1. in App.js(to have a user profile)
    // class App extends Component {
    //   constructor() {
    //     super();
    //     this.state = {
    //       input: '',
    //       imgUrl: '',
    //       box: {},
    //       route: 'signin',
    //       isSignedIn: false,
    //       user: {
    //         id: '',
    //         name: '',
    //         email: '',
    //         entries: 0,
    //         joined: ''
    //       }
    //     }
    //   }

// 2. in Register.js
    onSubmitSignIn = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
      .then(response => response.json())
      .then(user => {
        if(user) {
          this.props.loadUser(user) //new
          this.props.onRouteChange('home');
        }
      })
    }

// 3. in App.js(create fn)
    loadUser = (data) => {
      this.setState({ user: {
        id: data.id,
        name: data.name,
        email: data.id,
        entries: data.entries,
        joined: data.joined
      }})
    }

// 4. in web(go to register)
// keyin: ted / ted@email.com/ 123
// we get
    // Unhandled Rejection (TypeError): this.props.loadUser is not a function
// reason:
    // 'loadUser' is never passed into 'Register'
// solution: in App.js
    // : (
    //   route === 'signin'
    //   ? <Signin onRouteChange={this.onRouteChange} />
    //   : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
    // )  
    // }


// 5. in web(go to register)
// keyin: ted / ted@email.com/ 123
// we're able to sign in but get a bad requset
    // POST http://localhost:3000/signin 400 (Bad Request)
// in network we can find
    // {email: "ted@email.com", password: "123", name: "ted"}
    // email: "ted@email.com"
    // name: "ted"
    // password: "123"
// in response we got
    // "error logging in"
// solution: in Register.js
    onSubmitSignIn = () => {
      fetch('http://localhost:3000/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
      .then(response => response.json())
      .then(user => {
        if(user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
    }

// 6. in web(go to register)
// keyin: ted / ted@email.com/ 123
// we don't get any error
// in network -> response
  // {"id":"125","name":"ted","email":"ted@email.com",
  // "password":"123","entries":0,"joined":"2021-05-24T10:23:43.851Z"}

// 7. we don't need to pass the password
// in server.js
// delete the password
    app.post('/register', (req, res) => {
      const { email, name, password } = req.body;
      // bcrypt.hash(password, 10, function(err, hash) {
      //   console.log(hash);
      //   console.log(err);
      // });
      database.users.push({
        id: '125',
        name: name,
        email: email,
        // password: password,
        entries: 0,
        joined: new Date()
      })
      res.json(database.users[database.users.length-1]);
    })

// 8. open a new web(localhost:3000/)
// <1> in register route to add new user
  // keyin: ted / ted@email.com/ 123
// <2> in localhost:3000/ (refresh the page)
// you'll see
    [
      {
        "id": "123",
        "name": "John",
        "email": "john@email.com",
        "password": "cookies",
        "entries": 0,
        "joined": "2021-05-24T10:28:21.069Z"
      },
      {
        "id": "124",
        "name": "Sally",
        "email": "sally@email.com",
        "password": "bananas",
        "entries": 0,
        "joined": "2021-05-24T10:28:21.069Z"
      },
      {
        "id": "125",
        "name": "ted",
        "email": "ted@emial.com",
        "entries": 0,
        "joined": "2021-05-24T10:30:07.684Z"
      }
    ]
