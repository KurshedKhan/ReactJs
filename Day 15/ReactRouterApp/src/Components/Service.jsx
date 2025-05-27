import React from 'react'
import { NavBar } from './NavBar'
import { useNavigate } from 'react-router-dom'

export const Service = () => {

  let navigation = useNavigate();

  function handleHome(){
      navigation("/");
  }
  return (
    <>
    <NavBar></NavBar>
    <div>Service</div>
    <button onClick={handleHome}>Home</button>
    </>
  )
}
