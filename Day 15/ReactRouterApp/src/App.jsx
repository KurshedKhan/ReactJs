import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Service } from "./Components/Service";
import { About1 } from "./Components/About1";
import { About2 } from "./Components/About2";
import { About3 } from "./Components/About3";
import { ErrorHandle } from "./Components/ErrorHandle";


function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          { 
            path:"about1",
            element:<About1/>
          },
          {
            path:"about2",
            element:<About2/>
          },
          {
            path:"about3",
            element:<About3/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/service",
        element:<Service/>
      },
      {
        path:"*",
        element:<ErrorHandle/>
      }
    ]
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
