import { useContext } from "react";
import MyContext from "./ContextAPIFile";

const GrandChild = () =>{

 const {value,setValue} = useContext(MyContext)

  return (
    <>
    <p>{value}</p>
    <button onClick={()=>setValue("My Value is Updated via Context.")}>Click Me</button>
    </>
  );
};

export default GrandChild;