// Solve the below problems:

//lso, after you have your solutions, try to run them from Babel right here, 
//and see how it gets converted to a format (older javascript) that works on all browsers.

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

//answer #1 
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const result = await response.json();
  console.log(result);
}
// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
/*
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};
*/

//answer #2
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function() {
  const [users, posts, albums] = await Promise.all(urls.map(url=> 
    fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

//answer #3
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url => 
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch(error) {
    console.log('oooooops', error);
  }
}