// 4) remove componentDidMount 
  // 1. in app.js 
  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(console.log) //.then(data => console.log(data))
  //   }




// 5) convert signin component into a smart component
  // 1. in singin.js
  import React from 'react';

  //new
  class Signin extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword:''
      }
    }

    onEmailChange = (event) => {
      this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
      this.setState({ signInPassword: event.target.value })
    }
  //new
    onSubmitSignIn = () => {
      console.log(this.state)
    }

    render() {
      const { onRouteChange } = this.props;
      return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
              </fieldset>
              <div className="">
                <input 
                  onClick={() => this.props.onRouteChange('home')} //new
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Sign in" />
              </div>
              <div className="lh-copy mt3">
                <p  
                onClick={() => this.props.onRouteChange('register')}  //new
                className="f6 link dim black db pointer">Register</p>
              </div>
            </div>
          </main>
        </article>
      );
    } 
  }
  
  export default Signin;

  // 2. in signIn.js
  onSubmitSignIn = () => {
    console.log(this.state);
    this.props.onRouteChange('home'); //new
  }


  <div className="">
    <input 
      onClick={this.onSubmitSignIn} //new
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign in" />
  </div>

  // 3. go to web
  // keyin: test@gmail.com  
  // keyin: test  and press sign in
  // you'll see 
    // {signInEmail: "", signInPassword: ""}
    // signInEmail: ""
    // signInPassword: ""
    // __proto__: Object



// 6) send these changes to console
  // 1. in singin.js (on the input of email)
    // <input 
    //   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
    //   type="email" 
    //   name="email-address"  
    //   id="email-address" 
    //   onChange={this.onEmailChange}
    // />
  // 2. in singin.js (on the input of password)
    // <input 
    //   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
    //   type="email" 
    //   name="email-address"  
    //   id="email-address" 
    //   onChange={this.onPasswordChange}
    // />
  // 3. go to web
  // keyin: test@gmail.com  
  // keyin: test  and press sign in
  // you'll see
    // {signInEmail: "test@gmail.com", signInPassword: "test"}



// 7) send info to our server
  // 1. in signin.js
  // first parameter we can pass website.
  // second parameter we can pass an obj here,
  // that describes what the req will be in our case.
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    this.props.onRouteChange('home');
  }

  // 2. go to web
  // keyin: john@gmail.com  
  // keyin: cookies  and press sign in
  // you'll see
    // Signin.js:22 POST http://localhost:3000/signin 400 (Bad Request)
  // in network, you'll see
    // "error logging in"
  
  // 3. go to web
  // keyin: john@email.com  
  // keyin: cookies  and press sign in
  // in network, you'll see
    // "success"
  
  // 4. in signin.js
    onSubmitSignIn = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data === 'success') {
          this.props.onRouteChange('home');
        }
      })
    }
  // 5. go to web
  // keyin: john@email.com  
  // keyin: cookies  and press sign in
  // in network, you'll see
    // "success"