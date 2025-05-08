import classes from "./Input.module.css"

const Input = () =>{

  return (
    <input type="text" className={classes.Input} onChange={(event)=>console.log(event.target.value)} />
  );

}

export default Input;