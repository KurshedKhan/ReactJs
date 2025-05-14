import { useState } from "react";
import Items from "./items";
function ListItem(props) {

  let [activeItem,setActiveItem] = useState([])

  const buyButton = (value) => {
    // let totalItemsArray = [...activeItem,value]
    // setActiveItem(totalItemsArray)
    // console.log("new items ",value)
    setActiveItem(value)
  }
  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <ul className="list-group">
        {
          props.itemsList.map((item, index) => (
            
         <Items key={index} isActive={activeItem.includes(item)} set1={item} buyButton={buyButton} />
          
        ))}
      </ul>
    </>
  );
}
export default ListItem;

