import classes from "./Container.module.css"

function Container({children}){

  return (
      <div className={classes.box}>{children}</div>
  );
}

export default Container;