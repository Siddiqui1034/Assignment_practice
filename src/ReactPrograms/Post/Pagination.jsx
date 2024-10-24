import React from 'react'
import './Pagination.css'

const Pagination = ({pageNo, setPageNo}) => {

    const handlePrev = () => {
        setPageNo(pageNo-1)
    }
    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }
  return (
    <div className='paginationContainer'>
        {pageNo>1 && <div onClick={handlePrev} className='pageBtn'>{"<"}</div>}
        
        <div className='pageBtn'>{pageNo}</div>
        <div onClick={handleNext} className='pageBtn'>{">"}</div>
    </div>
  )
}

export default Pagination
