// 1) check the node vesion, 
// don't lower than you expected
// -> node -v 


// 2) http://johnny-five.io/
// This Johnny five is a JavaScript library that you can use with node.
// And if you have something like a Raspberry Pi.
// It helps you build functions using JavaScript 
// that robots can perform.

// It's surprising how easy it is to build a robot 
// that does whatever you want it to do,
// just using JavaScript.


// 3) in git bash:
// node
// > console.log('hi')
// hi
// > 4+5
// 9
// > Boolean(3)
// true
// > window
// Uncaught ReferenceError: window is not defined
// > global.fetch
// undefined
// > document
// Uncaught ReferenceError: document is not defined



// 4) issues: don't have window & document
// We don't have the window object, 
// the window object was provided to us by the browser,
// there's no browser that's running it.
// Instead, Node comes with something called global.


// 5)process
/*
key in process,
If I press enter again, 
I have a ton of stuff and a. process 
means this process, what I'm running right now 
in the terminal is the process, what the computer is doing.
*/

// 6)
// > process.exit
// [Function: exit]
// process.exit()
