// The Effect Hook, useEffect,
/*
It adds the ability to perform side effects from a function component. 
It serves the same purpose as componentDidMount, componentDidUpdate, 
and componentWillUnmount in React classes, 
but unified into a single API. 
(We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)
*/

// goal:
// use 'useEffect' to replace 'componentDidMount'

// 1)
useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)})
},[])