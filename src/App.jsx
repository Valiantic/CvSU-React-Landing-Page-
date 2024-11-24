import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavbarComponent'
import Card from './components/CardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Card />
      
    </>
  )
}

export default App
