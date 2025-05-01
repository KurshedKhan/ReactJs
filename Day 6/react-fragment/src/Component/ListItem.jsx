import Items from "./items";
function ListItem({itemsList}) {

  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <ul className="list-group">
        {itemsList.map((item, index) => (

         <Items itemsNames={item} />

        ))}
      </ul>
    </>
  );
}
export default ListItem;

