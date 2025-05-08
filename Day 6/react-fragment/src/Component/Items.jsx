import classes from "./Items.module.css"

function Items({itemsNames}){

  const buyButton = (event) => {
    console.log(event.target.innerText)
    console.log(`color name is ${itemsNames}  available.`)
  }


  return (
    <li className="list-group-item">
      <span>{itemsNames}</span>
      <button className={classes.btn} onClick={(event)=>buyButton(event)} >Buy</button>
    </li>
  );
}

export default Items;