// goal
// to create a button right below our title

// 1) create a button
<button onClick={() => {setCount(count+1)} }>Click Me!</button>
// 2) creat a state
const [count, setCount] = setState(0)

// 3) problem: the number dosen't increase
// because useEffect only runs at once