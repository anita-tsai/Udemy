/*
I want to be able to have 'Sign Out' only 
when I'm at home, 
and maybe when I'm on the 'Sign In' or 'Register',
I have the two navigation tabs over here.
*/

// 1)
// in Navigation.js
// const Navigation = ({ onRouteChange, isSignedIn }) => {
//   if (isSignedIn) {
//     return (
//       <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <p 
//             onClick={() => onRouteChange('signin')} 
//             className='f3 link dim black underline pa3 pointer'
//         >
//           Sign Out
//           </p>
//       </nav>
//     );
//   } else {
//     return (
//       <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
//         <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
//       </nav>
//     );
//   }

// 2) in App.js
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       imgUrl: '',
//       box: {},
//       route: 'signin',
//       isSignedIn: false
//     }
//   }

// 3) make codes become cleaner
// render () {
//   const { isSignedIn, imgUrl, route, box } = this.state;
// ...

/* two issues
see the console, make sure that we don't get any errors. 
And we see that we have two things here.

// 1) One is invalid DOM property for.

Did you mean htmlFor?, 
it gives us a nice error that says at Signin dot js, 
and that is because again
we're using JSX and 'for' is a javascript word.
Even though in html you can use 'for' for 'labels' to attach them to input, 
in JSX we have to do a 'htmlFor', so

// solution: we can do 'htmlFor'

// 2) when I click 'Sign In', 
I get the form submission canceled because the form is not connected, 
and that is because with HTML,
when we worked on forms, i
t automatically if there is an input or a button 
when there is an'onSubmit' event, 
where there's 'type' submit, 
you will automatically try and send those forms.

// solution: change 'form' to a 'div',
*/