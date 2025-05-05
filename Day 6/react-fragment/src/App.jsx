import "bootstrap/dist/css/bootstrap.min.css"
import ListItem from "./Component/ListItem";
import EmptyList from "./Component/EmptyList";


function App() {

  const colorsList = ["Red","Green","Yellow","Blue","Black","White"];
  //const colorsList = [];

  // if(colorsList.length === 0){

  //   return <p>Color Names is undefined.</p>

  // }
  
  // let EmptyColorList = colorsList.length == 0 ? <p>Color Names is undefined.</p> : null;
  
  return (
    <>
      {/* {colorsList.length == 0 && <p>Color Names is undefined.</p> } */}
      {/* {EmptyColorList} */}


      <h2 className="border border-2 bg-info text-center p-2"> Color Names</h2>
      <EmptyList itemsList={colorsList} />
      <ListItem itemsList={colorsList} />
    </>
  );
}

export default App;
