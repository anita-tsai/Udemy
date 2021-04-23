// 2) /* /image */

// 1. goal
// we wanted to update the user 
// to increase their 'entries' count
// Every time they submit an image
// we want to increase their 'entries'

// 2. in server.js
  app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
      if(user.id === id) {
        found = ture;
        user.entries++
        return res.json(user.entries);
      }
      if(!found) {
        return res.status(400).json('not found');
      }
    });
  })
// 3. in postman

// *1)
// put-> localhost:3000/image-> raw-> Json
// {
//   "id": "123"
// }
// -> press send
  // 1
// again the previous steps
  // 2
// again the previous steps
  // 3

// *2)
// get-> localhost:3000/profile/123
  // {
  //   "id": "123",
  //   "name": "John",
  //   "email": "john@email.com",
  //   "password": "cookies",
  //   "entries": 3,
  //   "joined": "2021-04-23T11:24:33.634Z"
  // }

// *3)
// get-> localhost:3000/
  // [
  //   {
  //       "id": "123",
  //       "name": "John",
  //       "email": "john@email.com",
  //       "password": "cookies",
  //       "entries": 3,
  //       "joined": "2021-04-23T11:24:33.634Z"
  //   },
  //   {
  //       "id": "124",
  //       "name": "Sally",
  //       "email": "sally@email.com",
  //       "password": "bananas",
  //       "entries": 0,
  //       "joined": "2021-04-23T11:24:33.634Z"
  //   }
  // ]