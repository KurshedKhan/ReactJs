function ToDoItem1() {

  let taskName = "come to School";
  let date = "4/4/2027";

  return (
    <div className="container text-start my-1">
      <div className="row d-flex align-items-center">
        <div className="col-4">{taskName}</div>
        <div className="col-4">{date}</div>
        <div className="col-4">
          <button type="submit" className="btn btn-danger w-100">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
