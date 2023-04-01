import { useState } from "react";
import AnimeList from "./Animelist";
import Pagination from "./pagination";

const Upcoming = () => {
  const [pageNum, setPageNum] = useState(1);
  const [isLast, setIsLast] = useState(false);

  return (
    <>
      <AnimeList
        url={`https://api.jikan.moe/v4/seasons/upcoming?page=${pageNum}`}
        name={"Upcoming"}
        setIsLast={setIsLast}
      ></AnimeList>
      <Pagination num={pageNum} setNum={setPageNum} isLast={isLast}></Pagination>
    </>
  );
};
export default Upcoming;
