import { useReducer } from "react";

const initState = {
  email : "",
  emailError : "",
  password : "",
  passwordError :""
}

function reducer(state,action){
  const emailValRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordValRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  switch(action.type){
    case "set_email":
      return {
        email : action.value,
        emailError : emailValRegex.test(action.value) ? "" : "Invalid email address 😡"
      }
    case "set_password":
      return {
        password : action.value,
        passwordError : passwordValRegex.test(action.value) ? "" : "Invalid password 😡"
      }
    case "reset":
      return initState
    default :
      return state
  }
}

const MyForm = ()=>{

  const [state,dispatch] = useReducer(reducer,initState);

  function handleSubmit(e){
    e.preventDefault();
    console.log(!state.emailError && !state.passwordError);
    if(!state.emailError && !state.passwordError){
      alert("login => successfully")
      dispatch({type:"reset"});
    }
    else{
      alert("Please fix this error.");
    }
  }

  return (
    <>
      <h1 style={{textAlign:"center"}}>Form Validation</h1>
      <form onSubmit={handleSubmit} style={{width:"400px",margin:"0 auto",border:"2px solid black",padding:"10px",borderRadius:"4px"}}>
        <div>
          <label>Email : </label> <br />
          <input 
          type="text" 
          value={state.email} 
          onChange={(e)=>dispatch({type:"set_email",value:e.target.value})}
          />
          <p style={{color:"red"}}>{state.emailError}</p>
        </div>
        <br />

        <div>
          <label>password : </label> <br />
          <input 
          type="password" 
          value={state.password} 
          onChange={(e)=>dispatch({type:"set_password",value:e.target.value})}
          />
          <p style={{color:"red"}}>{state.passwordError}</p>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MyForm;