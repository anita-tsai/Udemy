//ASYNC AWAIT


//1)before:
fetch('http://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json()) // can not with ; in the end
  .then(console.log)

//2)now(the new way):
async function fetchUsers() {
  const resp = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}
//fetUsers(); 

//3)another eg(old way):
const urls =[
  'http://jsonplaceholder.typicode.com/users',
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch('Oops');

//4)another eg(new way):
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  ));
  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
 }

 //5)-1 try{}
const getData = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch {
    console.log('Oops')
  }
  
}

//5-2 try{}
const getData1 = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch(err) { //the differnce
    console.log('Oops', err)
  }
  
}