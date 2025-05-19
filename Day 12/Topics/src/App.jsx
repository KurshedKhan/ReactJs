import { useRef } from "react"


function App() {

  const inputRef = useRef(null);
  const countRef = useRef(0);

  function inputFocus(){

    countRef.current += 1;
    
    if(inputRef.current){

      inputRef.current.textContent = countRef.current;

    }
  }

  return (
    <>
    <p ref={inputRef}>{countRef.current}</p>
    <button type="button" onClick={inputFocus}>Click</button>
    </>
  )
}

export default App
