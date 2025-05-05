import Input from "./Component/Input"
import ButtonContainer from "./Component/ButtonContainer"


function App() {
  
    const buttons = ["C","(",")","*","7","8","9","/","4","5","6","-","1","2","3","+","B",".","0","=",];

  return (
    <>
      <div className="container">
        <Input></Input>
        <ButtonContainer btn={buttons} ></ButtonContainer>
      </div>
    </>
  )
}

export default App
