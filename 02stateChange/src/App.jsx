import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [count, setCount] = useState(0)

  function add(){
    count = count + 1
    setCount(count)
  }

  function sub(){
    count = count - 1
    setCount(count)
  }

  return (
    <>
      <h1>Number : {count}</h1>
      <button onClick={add} >Add Number :- {count}</button>
      <br/>
      <br/>
      <button onClick={sub} >Sub Number :- {count}</button>
    </>
  )
}

export default App
