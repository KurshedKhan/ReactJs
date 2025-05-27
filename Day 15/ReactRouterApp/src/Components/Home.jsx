import React from 'react'
import { NavBar } from './NavBar'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  let navigation = useNavigate();

  function handleButton(){
      navigation("/service");
  }
  return (
   <>
    <NavBar/>
    <div>Home</div>
    <button onClick={handleButton}>Move Service</button>
   </>
    
  )
}
