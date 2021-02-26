// for await of

// 3) from 239 practice2
const urls =[
  'http://jsonplaceholder.typicode.com/users',
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/albums'
]
const getData1 = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ));
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch(err) { 
    console.log('Oops', err)
  }
}


// 4) basic knowledge
const loopThroughUrls = url => {
  for (url of urls) {
    console.log(url);
  }
}

// 5)
const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log('data', data);
  }
}

// run 3) +4) +5) and call getData2, you will get a tons of data