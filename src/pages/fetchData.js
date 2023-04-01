import axios from "axios";
const handlefetchdata = async (url,data,setData,setIsLast) => {
  await axios(url)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
      setIsLast && setIsLast(res.data.pagination.has_next_page);
    })
    .catch((err) => {
      <><p>no data found</p></>;
    });
};
export default handlefetchdata;