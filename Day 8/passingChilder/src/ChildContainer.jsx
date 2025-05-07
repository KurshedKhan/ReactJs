import styles from "./ChildContainer.module.css"

function ChildContainer({children}){

  return (
    <div className={styles.box}>
      {children}
    </div>
  );
}

export default ChildContainer;