import { useReducer } from "react";

const initState = {
  count : 0
}

function reducer(ketan,yashveer){
  switch(yashveer.type){
    case "increment":
      return {count : ketan.count + 1}
    case "decrement":
      return {count : ketan.count - 1}
  }
}

const App = () =>{

  const [state , dispatch] = useReducer(reducer,initState);

  return (

    <>
      <h1>useReducer hook in React</h1>
      <p>count :{state.count} </p>
      <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=> dispatch({type:"decrement"})}>decrement</button>
    </>
  );

};

export default App;