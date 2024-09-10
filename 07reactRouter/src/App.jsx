import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1 className="text-3xl font-bold underline bg-orange-500 py-2 rounded-xl text-white">
      Hello world!
    </h1>
    </>
  )
}

export default App
