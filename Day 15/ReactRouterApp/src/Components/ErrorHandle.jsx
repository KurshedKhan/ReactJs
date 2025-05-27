import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorHandle = () => {

  let navigation = useNavigate();

  function handleHomePage(){
      navigation('/');
  }
  return (
    <>
      <h1>Kal aana, aaj page nhi milega 404 error</h1>
      <button onClick={handleHomePage}>Home</button>
    </>
  )
}
