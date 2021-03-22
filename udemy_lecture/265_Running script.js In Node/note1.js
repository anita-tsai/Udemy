
// 1) create a script file that we can run (under 265 file)
// 1-1) touch script.js

// 2) 
// 2-1) in script.js
const a = 4;
const b = 5;

console.log(a+b);
// 2-2) in bash
// node script.js
// 9  // reason: so the last thing it executes is 'console.log'
      // it runs 'process.exit' and exits out of the file


// 3)
// 3-1) in script.js
// new line
const c = 12;
const d = 15;

setTimeout(() => {
  console.log(c+d);
}, 3000)
// 3-2) in bash
// node script.js
// 9
// 27(after 3s it shows 27)


// 4)
// 4-1) in script.js
// new line
console.log(__dirname);
// 4-2) in bash
// node script.js
// 9
// C:\Users\蔡佩芳\Desktop\Udemy\udemy_lecture\265_Running script.js In Node
// 27 (it shows after 3s)
