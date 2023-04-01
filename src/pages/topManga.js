import { useState } from "react";
import AnimeList from "./Animelist"
import Pagination from "./pagination";

const TopManga=()=>{
    const [pageNum, setPageNum] = useState(1);
  const [isLast, setIsLast] = useState(false);

    return (
      <>
        <AnimeList
          url={`https://api.jikan.moe/v4/top/manga?page=${pageNum}`}
          name={"Top Manga"}
          setIsLast={setIsLast}
        ></AnimeList>
        <Pagination num={pageNum} setNum={setPageNum} isLast={isLast}></Pagination>
      </>
    );
}
export default TopManga;