/* 
Ideally we have a 'Sign In' form and once a user signs in, 
then they're able to access the homepage.
It sounds like we need a bit of state.
*/

// 1) create a route state
// the route keeps track of where we are on the page.
// in our case, it means 'singin'


// 2) it sounds like a conditional statement right.

// I can do an if statement here,
// because we're inside of a return statement.
// But because this is JSX, 
// we can wrap things in curly brackets,
// in order to make it become javascript expression.

// And we want the navigation there no matter what.
// this.state.route === 'signin' 
// If that's true, then return the 'signin' component,
// Otherwise you can return the 'Logo' component.


// 3) we get an error here saying
// json ajax elements must be wrapped in an enclosing tag. 
// Remember because we're returning multiple elements here,
// that doesn't work, We need to wrap them.
// -> to wrap this in a 'div'. 
