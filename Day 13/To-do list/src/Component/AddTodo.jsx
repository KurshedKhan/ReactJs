import { useRef, useState } from "react";

function AddTodo({newItems}) {

  let inputNameValue = useRef("");
  let dueDateValue = useRef("");

  const handleAddButton = (event) => {

    let Name1 = inputNameValue.current.value;
    let Date1 = dueDateValue.current.value;
    inputNameValue.current.value = "";
    dueDateValue.current.value = "";
    event.preventDefault();
    newItems(Name1,Date1);
   
  }
  return (
    <div className="container my-1">
      <form className="row d-flex align-items-center" onSubmit={(event)=>handleAddButton(event)}>
        <div className="col-4">
          <input type="text" ref={inputNameValue} placeholder="Enter your task" className="w-100"  />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateValue} className="w-100" />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success w-100">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
