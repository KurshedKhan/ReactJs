import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaWhatsapp,FaHome,FaFacebookF,FaBeer } from "react-icons/fa";
import { BiAccessibility } from "react-icons/bi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaWhatsapp/>
      <BiAccessibility/>
      <FaHome></FaHome>
      <FaFacebookF/>
      <h3>Let’s go for a <FaBeer />?</h3>
    </>
  )
}

export default App
