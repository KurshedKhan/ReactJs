import { useState } from "react";

function App(){

  let [value,setValue] = useState(0);

  let incrementFunction = () =>{
    setValue(value + 1);
  }

  return (
    <>
    <h1>Count : {value}</h1>
    <button onClick={incrementFunction}>Click & Increment</button>
    </>
  );
}

export default App;