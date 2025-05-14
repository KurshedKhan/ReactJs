import classes from "./Items.module.css"

function Items({set1,isActive,buyButton}){



  return (
    <li className={`list-group-item ${isActive && classes.bgDanger1}`}>
      <span>{set1}</span>
      <button className={classes.btn} onClick={()=>buyButton(set1)} >Buy</button>
    </li>
  );
}

export default Items;