//ES2020

//1) before ES2020
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));
// run 1) -> Promise {<pending>}
//you will find undefined, because Promise.all has to have 
//all promises resovled, and not throw any errors

//2) allSettled: ES2020
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));
// run 2) -> Promise {<pending>}
// (2) [{…}, {…}]
// 0: {status: "fulfilled", value: undefined}
// 1: {status: "rejected", reason: undefined}
// length: 2
// __proto__: Array(0)

// the promise of settled runs all promises,
//regardless of whether they reject or not.

//3) conclusion
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 6000)) //changed
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));
//Even though the first promise that returns
//is rejected, it doesn't care.
//All settle just checks for six seconds 
//until all the promises are returned.