import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios"
import styles from "./AnimeList.module.css"
import handlefetchdata from "./fetchData";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
const AnimeList=(props)=>{
    const navigate =useNavigate()
    const [animeList,setAnimeList]=useState([]);
    const [isLoading,setIsLoading]=useState(true)
    const url = props.url;
    useEffect(() => {handlefetchdata(url,animeList,setAnimeList,props.setIsLast)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
    }, [url]);
    const clickHandler=(e)=>{
      if(props.isChar) return;
      navigate(
        `/g/${e.target.closest(".card").id}`,
      {
        state: {
          mal_id: e.target.closest(".card").id,
        },
      });
    }
    return( <>
    {isLoading ? <Loader></Loader> :
     <><div className={styles.title}>
         <h3>{props.name}</h3>
     </div>
       <div className={styles.parentClass}>
         {animeList.length ? ( 
           animeList.map((el)=>{
             return (
               <Card key={el.mal_id} id={el.mal_id} onClick={clickHandler}>
                 <div className={styles.imageHolder} onClick={clickHandler}>
                   {
                     <img
                       src={
                         el.images.webp.large_image_url
                           ? el.images.webp.large_image_url
                           : el.images.webp.image_url
                       }
                     ></img>
                   }
                   {el.score && (
                     <div className={styles.mask}>
                       <p>{el.score}</p>
                     </div>
                   )}
                 </div>
                 <h3 onClick={clickHandler}>
                   {el.title_english
                     ? el.title_english
                     : el.title
                     ? el.title
                     : el.name}
                 </h3>
               </Card>
             );
           })
         ) : (
           ""
         )}
      </div></>}
     </>
    );
}
export default AnimeList;