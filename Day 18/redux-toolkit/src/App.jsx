import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,reset,incrementByValue } from "./features/counter/counterSlice";
import { useState } from "react";


function App() {

  const [amount,setAmount] = useState(0);

  const count = useSelector((state)=>state.counter.value1);
  const dispatch = useDispatch();

  function handleIncButton(){
    dispatch(increment())
  }

  function handleDecButton(){
    dispatch(decrement())
  }
  function handleResetButton(){
    dispatch(reset())
  }

  function handleInputValue(){
    dispatch(incrementByValue(amount));
  }


  return (
    <>
    <h1>Redux Tool Kit</h1>
    <p>count : {count}</p>
    <button onClick={handleIncButton}>increment</button><br />
    <button onClick={handleDecButton}>decrement</button><br />
    <button onClick={handleResetButton}>reset</button> <br />
  

    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <button onClick={handleInputValue}>addValue</button>
    </>
  )
}

export default App
