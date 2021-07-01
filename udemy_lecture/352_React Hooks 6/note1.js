// 1)
function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
}

// 2)
const onSearchChange = (event) => {
  searchfield(event.target.value)
}

