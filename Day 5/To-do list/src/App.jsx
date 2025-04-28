import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="container text-center">
        <h2>To do App</h2>
        <div className="row">
          <div className="col-4"><input type="text" placeholder="Enter your task" /></div>
          <div className="col-4"><input type="date" /></div>
          <div className="col-2"><button type="submit" className="btn btn-success">Add</button></div>
        </div>
        <div className="row">
          <div className="col-4">come to School</div>
          <div className="col-4">4/4/2027</div>
          <div className="col-2"><button type="submit" className="btn btn-danger">Delete</button></div>
        </div>
        <div className="row">
          <div className="col-4">go to College</div>
          <div className="col-4">4/4/2026</div>
          <div className="col-2"><button type="submit" className="btn btn-danger">Delete</button></div>
        </div>
      </div>
  );
}

export default App;
