import React, { useRef } from 'react'
import './ProgressBar.css'
const ProgressBar = () => {

    const inputRef = useRef()
    const filedRef = useRef()

    const handleClick = () => {
        // alert("hello")
        
            const width = inputRef.current.value;
            console.log(width);
            if(width<=100){
                let filedbar = width*1000/100;            
                console.log(filedbar);
                filedRef.current.style.width = `${filedbar}px`;
             // filedRef.current.style.width = filedbar;
            }           
            else{
                alert("Input should not exceed 100");
            }
       
        
     return false;
    }

  return (
    <div>
     <p>Percentage:
        <input type="number" ref={inputRef} />
        <button onClick={handleClick}>Submit</button>
    </p> 
    <div className='progressBar'>
        <div ref={filedRef}> </div>
    </div>
    </div>
  )
}

export default ProgressBar
