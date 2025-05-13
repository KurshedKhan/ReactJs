import classes from "./Input.module.css"

// const Input = ({handleOnChange1}) =>{

//   return (
//     <input type="text" className={classes.Input} onChange={handleOnChange1} />
//   );

// }

// export default Input;



const Input = ({handleOnKeyDown1}) =>{

  return (
    <input type="text" className={classes.Input} onKeyDown={handleOnKeyDown1} />
  );

}

export default Input;