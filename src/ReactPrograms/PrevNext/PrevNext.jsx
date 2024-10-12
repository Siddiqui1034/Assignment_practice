import React,{ useState } from 'react'
import styles from './PrevNext.module.css'

const PrevNext = () => {

  const [count, setCount] = useState(1)

  const handleClick = (e) =>{
  // console.log(e.target.name)
  let btnClicked = e.target.name;
  
  console.log(btnClicked)
  // debugger;
  switch (btnClicked) {
    case "prev":     
      // setCount((count)=>{count-1})
      setCount(count-1)
      // console.log(count)
      break;
    case "next":
      // setCount((count)=>{count+1})
      setCount(count+1)
    break;
    default:

    break;
  }
  }

  return (
  <>
  <div className={styles.containerDiv}>
    <div className={`${styles.sliderDiv}`} >
      Slider {count}
    </div>
    <p>
    <button disabled={count == 1} onClick={handleClick} name="prev">Prev</button>
    <button disabled={count == 3} onClick={handleClick} name="next">Next</button>
    </p>
    </div>
    
  </>
   

  )
}

export default PrevNext
