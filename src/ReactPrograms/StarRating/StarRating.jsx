import React, { useState } from "react";
import "./StarRating.css";

const StarRating = (props) => {
  const { starCount, rating } = props;
  const [starClick, setStarClick] = useState();
  const [starHover, setStarHover] = useState();
  // 1. Making props of starCount=5 as an array so that we can iterate map
  // 2. {new Array(ArrayName).fill(0).map(()=>{return })}
  // 3. when click on particular star i should know which star got clicked 3 or 2 or 5th
  // console.log(starClick)
  // How many star clicked we can store in state variable so we put it in state variable because i want to show change in UI
  // so i will pass it to any state variable which star number get clickedcons
  // for that we pass index of that star and store it in state variable
  // 4. now when click on stars it should change its color in UI to gold but based on condition
  // the color should be from start to that particular star number so condition      ***ind<starClick
  // Now i want to store hover star value in State when change in the UI it should update accordingly
  // console.log(starHover);

  const changeStarColor = (ind) => {
    setStarClick(ind + 1);
  };
  return (
    <div>
      {new Array(starCount).fill(0).map((value, ind) => {
        return (
          <span
            className={ind < starClick || ind < starHover ? "gold" : null}
            onClick={() => changeStarColor(ind)}
            onMouseEnter={() => setStarHover(ind + 1)}
            onMouseLeave={() => setStarHover(0)}
            key={ind}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );

  //     let limit = props.limit || 5
  //     let rating = props.rating || 1
  //     let [star, setStar] = useState(rating)
  //     const handleClick = (e) =>{
  //         setStar(+e.target.getAttribute('data'))
  //     }
  //   return (
  //     <div >
  //         {
  //           [...new Array(limit).keys()].map((val, index)=>{
  //                 return  <span data={val+1}onClick={handleClick}  key={`star_${index}`} className ={ val > star ?  "star": "star rated" }>
  //                 </span>
  //             })
  //         }
  //       {/* <div className='' style={{ width: "25px", height: "25px", borderRadius: "50px", backgroundColor: "black"}}> */}
  //       </div>
  //   )
};

export default StarRating;
