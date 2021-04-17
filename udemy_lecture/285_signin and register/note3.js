// 5) /**root route */

// 1. in server.js
  app.get('/', (req, res) => {
    res.send(database.users);
  })
// 2. in postman
// get-> localhost:3000/-> send
// you only see
  [
    {
        "id": "123",
        "name": "John",
        "email": "john@email.com",
        "password": "cookies",
        "entries": 0,
        "joined": "2021-04-17T14:33:56.358Z"
    },
    {
        "id": "124",
        "name": "Sally",
        "email": "sally@email.com",
        "password": "bananas",
        "entries": 0,
        "joined": "2021-04-17T14:33:56.358Z"
    }
  ]
// you can't find Ann, why?
// reason:
/**
 * The reason that Ann wasn't added the first time around 
 * is because I changed the root route to include 'database.users', 
 * which meant the Nodemon had to restart; 
 * the server had to restart and start over.
 * 
 * And because these are JavaScript variables 
 * every time we restart the server this gets run all over again.
 * So the database initiates with just the two users.
 * Again we don't really use variables to store information that we need 
 * to what we call 'persist' – that is to last and be memorized by the system. 
 * 
 * Databases are really really good because they run on disk 
 * somewhere out there in the world and they're really really 
 * good at keeping this information and not going down 
 * or if they do go down that they have backups 
 * so that users always get at it and we don't lose any information.
 */

// 3. in postman
// First, if you do POST-> localhost:3000/register-> ann's information-> send
// Second, do GET-> localhost:3000/-> send
// you'll see
  [
    {
        "id": "123",
        "name": "John",
        "email": "john@email.com",
        "password": "cookies",
        "entries": 0,
        "joined": "2021-04-17T14:33:56.358Z"
    },
    {
        "id": "124",
        "name": "Sally",
        "email": "sally@email.com",
        "password": "bananas",
        "entries": 0,
        "joined": "2021-04-17T14:33:56.358Z"
    },
    {
        "id": "125",
        "name": "Ann",
        "email": "ann@email.com",
        "password": "apples",
        "entries": 0,
        "joined": "2021-04-17T14:41:03.485Z"
    }
  ]