import { useState } from "react";

function App(){

  let [value,setValue] = useState(0);

  return (
    <>
    <h1>Count : {value}</h1>
    <button onClick={()=>setValue(value + 1)}>Click & Increment</button>
    </>
  );
}

export default App;