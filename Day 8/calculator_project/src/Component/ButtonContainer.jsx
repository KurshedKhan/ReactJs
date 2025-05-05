import Styles from "./ButtonContainer.module.css"

const ButtonContainer = ({btn})=>{


  return (
    <div className={Styles.buttonContainer}>
         {btn.map(
          (value,index) =>(
          <button key={index} type="button">{value}</button>
         )
        )}
    </div>
  );
}

export default ButtonContainer;