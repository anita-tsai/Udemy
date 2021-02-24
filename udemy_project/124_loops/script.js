var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room~",
    "brush teeth~",
    "exercise~",
    "study javascript~",
    "eat healthy~"
];

var todosLength = todos.length;
/*for (var i =0; i <todosLength; i++) {
    todos[i] = todos[i] + "!";
    todos.pop();
}*/

/*var counterOne = 0;
while(counterOne < 10) {
    console.log(counterOne);
    counterOne++
}*/

/*var counterOne = 10;
while(counterOne > 10) {
    console.log("while", counterOne);
    counterOne--
}; //doesn't work */

/*var counterTwo = 10
do {
    console.log("do while", counterTwo);
    counterTwo--;
}while(counterTwo > 10); //it work*/

var todosLength = todos.length;
for (var i =0; i <todosLength; i++) {
    todos[i] = todos[i] + "!";
    console.log(todos[i], i);
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
})

function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);