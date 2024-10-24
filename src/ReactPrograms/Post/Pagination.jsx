import React, { useRef } from "react";
import "./Pagination.css";

const Pagination = ({ pageNo, setPageNo }) => {
  const inputPageRef = useRef();

  const prevThreeArrayNo = Array.from({ length: 3 }, function (_, index) {
    return pageNo - 1 - index;
  });

  // console.log(prevThreeArrayNo)
  const array = prevThreeArrayNo.filter((value) => value > 0).reverse();
  // console.log(array)

  const nextThreeArrayNo = Array.from({ length: 4 }, function (_, index) {
    return pageNo + index;
  });
  console.log(nextThreeArrayNo);

  // NOw combine prethreeArray and nextthreeArray
  // console.log([...array, ...nextThreeArrayNo])
  const paginationArray = [...array, ...nextThreeArrayNo];

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePage = () => {
    const enteredPageNo = inputPageRef.current.value;
    console.log(enteredPageNo);
  };

  return (
    <div className="paginationContainer">
      <input type="text" ref={inputPageRef} />
      <button onClick={handlePage}>Go</button>
      {pageNo > 1 ? (
        <div onClick={handlePrev} className="pageBtn">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArray?.map((pageArrayValue, index) => {
        return (
          <div
            onClick={setPageNo(pageArrayValue)}
            key={`pageNo_${index}`}
            className={
              pageArrayValue === pageNo ? "pageBtn activePageNo" : "pageBtn"
            }
          >
            {pageArrayValue}
          </div>
        );
      })}
      <div onClick={handleNext} className="pageBtn">
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
