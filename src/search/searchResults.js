import { useState } from "react";
import { useLocation } from "react-router-dom";
import AnimeList from "../pages/Animelist";
import Pagination from "../pages/pagination";
const SearchResults=()=>{
    const location=useLocation();
  const [isLast, setIsLast] = useState(false);
    const [pageNum,setPageNum]= useState(1);
    return (
      <>
        <AnimeList
          url={`https://api.jikan.moe/v4/${location.state.searchtype}?q=${location.state.searchquery}`}
          name={`Search Reasults For:${location.state.searchquery}`}
          setIsLast={setIsLast}
          isChar={location.state.searchtype==="characters"?true:false}
        ></AnimeList>
        <Pagination
          num={pageNum}
          setNum={setPageNum}
          isLast={isLast}
        ></Pagination>
      </>
    );
}
export default SearchResults;