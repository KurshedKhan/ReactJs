import "bootstrap/dist/css/bootstrap.min.css"
import ListItem from "./Component/ListItem";
import EmptyList from "./Component/EmptyList";
import Container from "./Component/Container";
import classes from "./App.module.css"
import Input from "./Component/Input";

function App() {

  const colorsList = ["Red","Green","Yellow","Blue","Black","White"];
  //const colorsList = [];

  // if(colorsList.length === 0){

  //   return <p>Color Names is undefined.</p>

  // }
  
  // let EmptyColorList = colorsList.length == 0 ? <p>Color Names is undefined.</p> : null;
  
  return (
    <>
    <Container>
      {/* {colorsList.length == 0 && <p>Color Names is undefined.</p> } */}
      {/* {EmptyColorList} */}
      <h2 className="border border-2 bg-info text-center p-2"> Color Names</h2>
      <EmptyList itemsList={colorsList} />
      <Input/>
      <ListItem itemsList={colorsList} />

    </Container>
    <Container>
    <h2>Remote Design</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <button className={classes.btn}>Buy Now</button>
    </Container>
    </>
  );
}

export default App;
