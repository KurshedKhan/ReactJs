import Styles from "./ButtonContainer.module.css"
import Classes from "classnames"

const ButtonContainer = ({btn,isActive1,isDark1})=>{


  return (
    <div className={Classes(Styles.buttonContainer,Styles.bgColor)}>
         {btn.map(
          (value,index) =>(
          <button className={Classes({[Styles.button1]:isActive1,[Styles.button2]:isDark1})} key={index} type="button">{value}</button>
         )
        )}
    </div>
  );
}

export default ButtonContainer;