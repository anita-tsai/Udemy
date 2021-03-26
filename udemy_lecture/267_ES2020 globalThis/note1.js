
// 1) globalThis === window
// -> true


// 2) Why did we need a globalThis?
// globalThis works outside the browser as well

// 2-1) demo in node(bash)
// node
// > window
// Uncaught ReferenceError: window is not defined
// reason
/*
The command window to access the window object will get an err 
window is not defined 
because window is part of the browser, 
but inside of node no doesn't really work as a browser.
It doesn't really know what window is.
Instead, Node uses global write.
*/
// > global
// > globalThis
/*
the global this object now exists
as both part of the window and node 
so that you can have unified variables across different platforms,
different systems.
*/