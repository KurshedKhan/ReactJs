import Items from "./items";
function ListItem(props) {

  const buyButton = (itemsNames1) => {

    console.log(`color name is ${itemsNames1} available.`)

  }
  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <ul className="list-group">
        {
          props.itemsList.map((item, index) => (
            
         <Items key={index} itemsNames={item} buyButton={buyButton} />
          
        ))}
      </ul>
    </>
  );
}
export default ListItem;

