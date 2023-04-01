import styles from "./Card.css"
const Card=(props)=>{
    return (
      <div className="card" id={props.id}>
        {props.children}
      </div>
    );
}
export default Card;