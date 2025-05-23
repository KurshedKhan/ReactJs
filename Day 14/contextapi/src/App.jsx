import ContentProvider from "./ContentProvider";
import MyContext from "./ContextAPIFile";
import { useState } from "react";

const App = () => {

   const [value,setValue] = useState("Hello World")


  return (
   <>
    <MyContext.Provider value={{value,setValue}}>
    <ContentProvider></ContentProvider>
    </MyContext.Provider>
   </>
  );
};

export default App;