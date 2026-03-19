import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Countries from './components/countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-center text-2xl'>Countries</h1>
     <Countries></Countries>
   
    </>
  )
}

export default App
