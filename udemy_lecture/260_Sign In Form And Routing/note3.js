/*
we want to direct them to the homepage. 
So let's create a function on 'signin' 

we also want to click 'onSignOut'
and it should take us to the 'Sign In' page.

*/

// 1) create a function on 'signin' and this prop will have'onRouteChange'.

// 1-1) use arrow fn to create onRouteChange
// onRouteChange = () => {
//   this.setState({route: 'home'});
// }

// 1-2) in Signin.js
// add : onClick={onRouteChange} (in input tag)
// add : const Signin = ({ onRouteChange })


// 2) click 'onSignOut', take us to 'Signin' page

// 2-1) in Navigation.js
// add: const Navigation = ({ onRouteChange })
// add: <p onClick={onRouteChange}......>

// 2-2) in App.js
// add:  <Navigation onRouteChange={this.onRouteChange}/>

// 2-3) an issue: 
// once I 'Sign In' and I click 'Sign Out' 
// while nothing happenes. We're never
// changing the route to 'signin'.