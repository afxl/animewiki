import styles from "./bodyImages.module.css"
const BodyImages =()=>{
    return (
      <div className={styles.parent}>
        <div className={styles.first}>
          <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg"></img>{" "}
          <img src="https://cdn.myanimelist.net/images/anime/6/73245.jpg"></img>{" "}
        </div>
        <div className={styles.second}>
          <img src="https://cdn.myanimelist.net/images/anime/3/40451l.jpg"></img>{" "}
        </div>
      </div>
    );
}
export default BodyImages;