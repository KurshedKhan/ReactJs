import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <h2 className=""> Color Names</h2>
      <ul className="list-group">
      {
         colorsList.map((item,index)=>(
          <li key={index} className="list-group-item">{item}</li>
        ))
      }
      </ul>
    </>
  );
}

export default App;
