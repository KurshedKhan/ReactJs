import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Service } from "./Components/Service";
import { NavBar } from "./Components/NavBar";

function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<div>
          <NavBar/>
          <Home/>
        </div>
      },
      {
        path:"/about",
        element:<div>
          <NavBar/>
          <About/>
        </div>
      },
      {
        path:"/contact",
        element:<div>
          <NavBar/>
          <Contact/>
        </div>
      },
      {
        path:"/service",
        element:<div>
          <NavBar/>
          <Service/>
        </div>
      }
    ]
  );

  return (
    <>
      <h1>Hello Dear Jee</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
