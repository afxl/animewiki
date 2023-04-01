import styles from "./nav.module.css"
import { useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav =()=>{
  const [show, setshow] = useState(false);
  const type=useRef(undefined);
  const query = useRef(undefined);
  const navigate=useNavigate();
  const handleShow=()=>{
    setshow(!show)
  }    
  const searchHandler=()=>{
    if(!query.current.value) return;
    navigate("search",{
            state:{searchtype:type.current.value,
              searchquery:query.current.value}
          })
  }
    return (
      <nav>
        <div className={styles.search}>
          <select id="para" name="params" form="carform" ref={type}>
            <option value="anime">anime</option>
            <option value="manga">manga</option>
            <option value="characters">character</option>
          </select>
          <input placeholder="search" ref={query} />
            <button onClick={searchHandler}>Search</button>
          
          <div className={styles.showmore}>
            <button onClick={handleShow}>{show ? "HIDE" : "SHOW"}</button>
          </div>
        </div>

        <div className={`${styles.links} ${!show && styles.hidden}`}>
          <Link to="top_anime">Top anime</Link>
          <Link to="seasonal">seasonal</Link>
          <Link to="TopManga">Top manga</Link>
          <Link to="upcoming">upcoming</Link>
        </div>
      </nav>
    );
}
export default Nav;