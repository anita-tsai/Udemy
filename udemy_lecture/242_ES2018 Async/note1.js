// finally 

//1) previous video: promise ; notice: the urls got changed
const urls = [
  'https://swapi.py4e.com/api/people/1',
  'https://swapi.py4e.com/api/people/2',
  'https://swapi.py4e.com/api/people/3',
  'https://swapi.py4e.com/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json())
}))
  .then(arr => {
    console.log('1', arr[0]);
    console.log('2', arr[1]);
    console.log('3', arr[2]);
    console.log('4', arr[3]);
  })
  .catch(err => console.log('ughhh fix it', err))
  .finally(data => console.log('extra', data))

  //run line 4 to line 20 -> 
  //Promise {pending}
  //1 {name: 'Luke Sky', height: '172', ...}
  //2 {name:...}

  //run line 4 to line 21 -> the same as line 24-26
  //-> extra (undefined) : because it doesn't recieve a parameter

  
//2)

const urls = [
  'https://swapi.py4e.com/api/people/1',
  'https://swapi.py4e.com/api/people/2',
  'https://swapi.py4e.com/api/people/3',
  'https://swapi.py4e.com/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json())
}))
  .then(arr => {
    throw Error; //new
    console.log('1', arr[0]);
    console.log('2', arr[1]);
    console.log('3', arr[2]);
    console.log('4', arr[3]);
  })
  .catch(err => console.log('ughhh fix it', err))
  .finally(() => console.log('extra')); //new

  // run 2) ->
  //Promise {<pending>}
  //ughhh fix it f Error() {[native code]}
  //extra
