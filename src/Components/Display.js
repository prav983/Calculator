
import styles from "./Display.module.css";
const Display = ({displayVal}) =>{

    return(
        <div>   
        <input type='text' className={styles.display} readOnly value={displayVal}></input>
        </div>
    )
}

export default Display