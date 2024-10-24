import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import Pagination from "./Pagination";

const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);

  useEffect(() => {
    // const arr =  axios.get('https://picsum.photos/v2/list?page=1&limit=5')
    const arr = axios.get(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
    );
    arr.then(
      (res) => setData(res.data)
      // console.log(res.data)
    );
    // console.log(arr);
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
