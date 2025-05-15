import Input from "./Component/Input"
import ButtonContainer from "./Component/ButtonContainer"
import { useState } from "react";


function App() {
  
    const buttons = ["C","(",")","*","7","8","9","/","4","5","6","-","1","2","3","+","B",".","0","=",];
    let isActive = true;
    let isdark = false;

    const [value,setValue] = useState("");

    const buttonHandle = (getValue) =>{

      if(getValue === "="){
        let result = eval(value)
        setValue(result);
      }
      else if(getValue === "C"){
        let totalInputValue = value + getValue;
        totalInputValue = "";
        setValue(totalInputValue);
      }
      else if(getValue === "B"){

      }
      else{
        let totalInputValue = (value + getValue);
        setValue(totalInputValue);
      }
    }

  return (
    <>
      <div className="container">
        <Input displayValue={value}></Input>
        <ButtonContainer btn={buttons} isActive1={isActive} isDark1={isdark} buttonHandler={buttonHandle}></ButtonContainer>
      </div>
    </>
  )
}

export default App
