import { useState } from 'react'
import HeaderNav from './components/headerNav.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderNav />
    </>
  )
}

export default App
