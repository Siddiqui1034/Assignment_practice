import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import Pagination from "./Pagination";

const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);

  useEffect(() => {
    const fetchedData = async () =>{
      try {
        // const arr =  axios.get('https://picsum.photos/v2/list?page=1&limit=5')
        const arr = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`);
        console.log(arr.data)
        // setData(arr.data)
      } catch (error) {
        console.error("Error fetching Data", error)
      }  
    }
    
    fetchedData();  
  }, [pageNo]);

  return (
    <>
      <div className="container">
        Post
        <div className="postContainer">
          {data?.map((item, ind) => (
            <img src={item.download_url} alt="" />
          ))}
        </div>
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </>
  );
};

export default Post;
