var database = [
    {
        username: "Anita",
        password: "supersecret"
    },
    {
        username: "Jeno",
        password: "123"
    },
    {
        username: "Shan",
        password: "666"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sue",
        timeline: "Javascript is sooo coool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
function isUserValid (username, password) {
    for (var i=0 ; i < database.length ; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
   if (isUserValid(username, password)) {
        console.log(newsFeed);
    }else {
        alert("Sorry! wrong username and password!")
    }
}
/*function signIn(username, password) {
    for (var i=0 ; i <database.length; i++ ){
        if (database[i].username === username && database[i].password === password) {
         console.log(newsFeed);
     }else {
         alert("Sorry! wrong username and password!")
     }
    }
 }*/
signIn(userNamePrompt, passwordPrompt);
