import classes from "./Items.module.css"

function Items({itemsNames,buyButton}){



  return (
    <li className="list-group-item">
      <span>{itemsNames}</span>
      <button className={classes.btn} onClick={()=>buyButton(itemsNames)} >Buy</button>
    </li>
  );
}

export default Items;