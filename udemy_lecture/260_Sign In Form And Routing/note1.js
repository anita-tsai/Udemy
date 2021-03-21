/*
create a Signin component and have some css for it
*/

// 1) create a component named Signin.js under a new folder named Signin

// 1-1) https://tachyons.io/components/forms/sign-in/index.html

// we don't have any css for it. And no props yet. 
// We want to have a 'Signin' form, and because we're using 'tachyons', 
// so if we search 'tachyons' form, they should have.

// 1-2) copy and paste the form from tacyons-Signin ,  //beacaus it fits HTML
// and modify these codes to fit JSX

// In html, we didn't necessarily have to close the input boxes. 
// But here with JSX, we have to make sure that the
// input tags are closed off.
// To make sure this works by adding this 'signin' component 
// to our app dot js.

// 1-3) put it at App.js
// render () {
//   return (
//        ...
//       <Navigation />
//       <Signin />     
//         ...            
//     </div>



// 2) 
// tachyon cards -> https://tachyons.io/components/cards/product-card/index.html
// we just need the bounderies, 
// just copy the article codes and paste to Signin.js
// (add the close tag)

// 3) start removing some things that we don't need.(in Signin.js)
// the 'forgot your password',
// the 'Remember Me'.

// 4) replace class with className (ctrl + h) (in Signin.js)

// 5) remove this 'center' over here ->> <form className="measure">

// 6) add some tachyons style....
{/* <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"></article> */}

// 7) replace Sign up with Register

// 8) change the font size
{/* <legend className="f1 fw6 ph0 mh0">Sign In</legend> */}
