import React, { useRef } from "react";
import "./Pagination.css";

const Pagination = ({ pageNo, setPageNo }) => {
  const inputPageRef = useRef();

  // Previous Three Page Array
  const prevThreeArrayNo = Array.from({ length: 3 }, function (_, index) {
    return pageNo - 1 - index;
  });

  // Condition on Previous Page
  const array = prevThreeArrayNo.filter((value) => value > 0).reverse();

  // Next three Page Array
  const nextThreeArrayNo = Array.from({ length: 4 }, function (_, index) {
    return pageNo + index;
  });

  console.log(nextThreeArrayNo);
  // NOw combine prethreeArray and nextthreeArray
  const paginationArray = [...array, ...nextThreeArrayNo];

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePage = () => {
    const enteredPageNo = inputPageRef.current.value;
    // console.log(enteredPageNo);
    if (enteredPageNo <= 0 || enteredPageNo > 100) alert("Invalid Page Number");
    setPageNo(Number(enteredPageNo));
  };

  return (
    <div className="paginationContainer">
      <input type="text" ref={inputPageRef} />
      <button onClick={handlePage}>Go</button>

      {
      pageNo > 1 ? (
        <div onClick={handlePrev} className="pageBtn">
          {"<"}
        </div>
      ) : (
        ""
      )}

      {
      paginationArray?.map((pageArrayValue, index) => {
        return (
          <div
            onClick={() => setPageNo(pageArrayValue)}
            key={`pageNo_${index}`}
            className={
              pageArrayValue === pageNo ? "pageBtn activePageNo" : "pageBtn"
            }
          >
            {pageArrayValue}
          </div>
        );
      })}

      {
      pageNo < 100 ? (
        <div onClick={handleNext} className="pageBtn">
          {">"}{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
