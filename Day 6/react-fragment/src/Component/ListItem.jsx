import Items from "./items";
function ListItem(props) {

  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <ul className="list-group">
        {props.itemsList.map((item, index) => (

         <Items itemsNames={item} />

        ))}
      </ul>
    </>
  );
}
export default ListItem;

