import { useEffect, useState } from "react";
import handlefetchdata from "../pages/fetchData";
import styles from"./animeData.module.css"
const AnimeData=(props)=>{
    const [data,setData]=useState({});
    const url = `https://api.jikan.moe/v4/anime/${props.id}/full`;
    useEffect(() => {
        handlefetchdata(url,data, setData, false);
    }, [url]);
    return (
      <>
        {Object.keys(data).length!==0 (
          <div className={styles.parentDiv}>
            <div
              className={styles.poster}
              style={{ backgroundImage: `url(${data.images.webp.image_url})` }}
            ></div>
            <div className={styles.textArea}>
              <h3>{data.title}</h3>
              <p>{data.synopsis}</p>
              <ul>
                {[...data.genres].map((el) => {
                  return <li>{el.name}</li>;
                })}
              </ul>
            </div>
            {data.trailer.embed_url && <div>
              <iframe
                width="480"
                height="320"
                src={data.trailer.embed_url}
              ></iframe>
            </div>}
          </div>
        )}
      </>
    );
}
export default AnimeData;