import Welcome from "./welocome";
import BodyImages from "./bodyImages";
import styles from "./body.module.css"
const Body=()=>{
    return(<div className={styles.main} style={{display:"flex",width:"100%"}}>
    <Welcome/>
    <BodyImages/>
    </div>)
}
export default Body;