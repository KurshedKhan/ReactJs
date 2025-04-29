import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ToDoName from "./Component/ToDoName";
import AddTodo from "./Component/AddTodo";
import ToDoItem1 from "./Component/ToDoItem1";
import ToDoItem2 from "./Component/ToDoItem2";

function App() {
  return (
      <div className="container rounded rounded-3 shadow-lg p-2 w-50 text-center">
       <ToDoName/>
        <AddTodo/>
        <ToDoItem1/>
        <ToDoItem2/>
      </div>
  );
}

export default App;
