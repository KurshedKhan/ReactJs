import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ToDoName from "./Component/ToDoName";
import AddTodo from "./Component/AddTodo";
import ToDoItem from "./Component/ToDoItem";
import { useState } from "react";

function App() {

  let itemList1 = [
    {
        taskName : "come to School",
        date : "4/4/2027"
    },
    {
        taskName : "go to College",
        date : "4/4/2026"
    }
  ]

  const [itemList,setItemList] = useState(itemList1)

  const handleInputButton = (name,date2) =>{
    let newItemsList = [...itemList,{taskName:name,date:date2}]
    setItemList(newItemsList);
  }

  const handleDeleteButton = (myIndex) =>{
    let newItemswithFilter = itemList.filter((item,index)=>{
      if(index !== myIndex){
        return item;
      }
    })
    setItemList(newItemswithFilter);
  }
  return (
      <div className="container rounded rounded-3 shadow-lg p-2 w-50 text-center">
       <ToDoName/>
        <AddTodo newItems={handleInputButton}/>
        <ToDoItem itemList1={itemList} handleDeleteButton1={handleDeleteButton} />
      </div>
  );
}

export default App;
