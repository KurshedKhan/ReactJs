import Styles from "./Input.module.css"

const Input = ({displayValue}) =>{

  return (
    <input className={Styles.input} type="text" value={displayValue} readOnly/>
  )
}

export default Input;