import { useState } from 'preact/hooks'
import './app.css'
import Background from './components/Background'
import Navbar from './components/Navbar'

export function App() {
  const [playstatus, setPlaystatus] = useState(true)

  return (
    <>
      <Navbar/>
      <Background playstatus={playstatus}/>
    </>
  )
}
