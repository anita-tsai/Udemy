// the two main problems
// 1. if you type a blank infomation
// you still can register and sign in 
// and in the db, you can see the blank user
// -> validation




/*  in tableplus  */
// 1) delete the blank user

/*  in register.js  */
// 2) add a conditional fn
if(!name || !email || !password) {
    return resizeBy.status(400).json('incorrect from submission')
}

/*  in react app  */
// 3) in register form: do a blank register, press send 
// consult:
// still got a register
// but get "undefined, your current entry count is..."


/*  in register.js  */
// 4) to check the response include 'id' or not
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
      if(user.id) { // to check the response include 'id' or not
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
}


/*  in react app  */
// 5) in register form: do a blank register, press send
// consult:
// 400 bad request

/*  in sigin.js  */
// 6) add a conditional fn
const { email, password } = req.body;
if(!email || !password) {
    return res.status(400).json('incorrect from submission')
}


/*  in react app  */
// 7) in signin form: do a blank register, press send
// consult:
// 400 bad request