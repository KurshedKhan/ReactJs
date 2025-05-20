import { useState } from "react";

function AddTodo({newItems}) {

  let [inputName,setInputName] = useState("")
  let [dueDate,setDueDate] = useState("")

  const handleInputName = (event) =>{
    setInputName(event.target.value);
  }

  const handleDueDate = (event) =>{
    setDueDate(event.target.value);
  }

  const handleAddButton = (Name1,Date1) => {
    newItems(Name1,Date1)
    setInputName("");
    setDueDate("");
  }
  return (
    <div className="container my-1">
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <input type="text" placeholder="Enter your task" className="w-100" value={inputName} onChange={handleInputName} />
        </div>
        <div className="col-4">
          <input type="date" className="w-100" onChange={handleDueDate} value={dueDate}/>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success w-100" onClick={()=>handleAddButton(inputName,dueDate)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
