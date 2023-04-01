import { useState } from "react";
import AnimeList from "./Animelist";
import Pagination from "./pagination";

const Seasonal = () => {
  const [isLast,setIsLast]=useState(false);
  const [pageNum, setPageNum] = useState(1);
  return <><AnimeList url={`https://api.jikan.moe/v4/seasons/now?page=${pageNum}`} name={"Seasonal"} setIsLast={setIsLast}></AnimeList>
  <Pagination num={pageNum} setNum={setPageNum} isLast={isLast}></Pagination>
  </>;
};
export default Seasonal;
