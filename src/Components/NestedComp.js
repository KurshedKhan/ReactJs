import React from 'react'

function Button(){
    return(
        <button type="button">I am button</button>
    );
}

function Header(){
    return(
        <div className='AllBorder'>
           <div className='float'>
           Home | About | Contact | Login
           </div>
        </div>
    );
}
export default function NestedComp() {
  return (
    <div>
    <Header/>
      <h1>My Heading</h1>
      <Button/>
    </div>
  )
}
