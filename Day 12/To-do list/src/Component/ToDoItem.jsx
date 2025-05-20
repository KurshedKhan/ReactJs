function ToDoItem({ itemList1,handleDeleteButton1 }) {
  return (
    <>
      {itemList1.map((item,index) => (
        <div key={index} className="container text-start my-1">
          <div className="row d-flex align-items-center">
            <div className="col-4">{item.taskName}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-4">
              <button type="submit" className="btn btn-danger w-100" onClick={()=>handleDeleteButton1(index)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoItem;
