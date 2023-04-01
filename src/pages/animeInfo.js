import { useLocation, useParams } from "react-router-dom";
import AnimeData from "../animeInfo/animeData";

const AnimeInfo=(props)=>{
    const location=useLocation();
    return(<div>
        <AnimeData id={location.state.mal_id}>

        </AnimeData>
        
        {/* <Recommended>

        </Recommended>  */}
    </div>)
}
export default AnimeInfo;