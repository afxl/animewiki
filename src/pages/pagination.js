import styles from "./pagination.module.css"
const Pagination=(props)=>{
    const moveBack = () => {
      props.setNum(props.num - 1);
    };
    const moveForward = () => {
      props.setNum(props.num + 1);
    };
    return <div className={styles.parentdiv}>
      {props.num > 1 && <div className= {styles.arrow} onClick={moveBack}>◀</div>}
      <div>{props.num}</div>
      {props.isLast && <div className={styles.arrow} onClick={moveForward}>▶</div>}
    </div>;
}
export default Pagination;