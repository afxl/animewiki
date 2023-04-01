import AnimeList from "./Animelist";
import { useState } from "react";
import Pagination from "./pagination";
const TopAnime=()=>{
    const [pageNum, setPageNum] = useState(1);
  const [isLast, setIsLast] = useState(false);

    return (
      <>
        <AnimeList
          url={`https://api.jikan.moe/v4/top/anime?page=${pageNum}`}
          name={"Top Anime"}
          setIsLast={setIsLast}
        ></AnimeList>
        <Pagination num={pageNum} setNum={setPageNum} isLast={isLast}></Pagination>
      </>
    );
}
export default TopAnime;