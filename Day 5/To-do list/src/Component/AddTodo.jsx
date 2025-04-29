function AddTodo(){

  return (
    <div className="container my-1">
      <div className="row d-flex align-items-center">
      <div className="col-4"><input type="text" placeholder="Enter your task" className="w-100" /></div>
      <div className="col-4"><input type="date" className="w-100" /></div>
      <div className="col-4"><button type="submit" className="btn btn-success w-100">Add</button></div>
  </div>
    </div>
  );
}

export default AddTodo;