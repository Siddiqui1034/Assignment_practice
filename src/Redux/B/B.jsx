'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const B = () => {
  const [loc, setLoc] = useState()
  const dispatch = useDispatch()
  
  const handleSubmit = () =>{
    dispatch({type:"LOCATION", loc})
  }
  return (
    <div>
            <h1>B</h1>
            <p>Location:<input type="text" onChange={(eve)=>setLoc(eve.target.value)} /></p>
            <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default B










































// "use client"
// import React, { useState } from 'react'
// import './B.css'
// import { useDispatch } from 'react-redux'

// const B = () => {
//     const [location, setLocation] = useState("")

//     const dispatch = useDispatch()
//     // const handleChange = (eve) =>{
//     //     setLocation(eve.target.value)
//     // }
//     const handleClick = () =>{
//         // alert(location)
//         dispatch({type:"LOCATION_UPDATE", location})

//     }
//   return (
//     <div>
//       <h1>B</h1>
//       <p>
//         Location: <input type="text" onChange={ eve =>setLocation(eve.target.value)} />
//       </p>
//       <button onClick={handleClick}>Submit</button>
//       {/* <button onClick={()=>handleClick(10,20)}>Submit</button> if u want to pass some parameter to a function then use this one */}
//     </div>
//   )
// }

// export default B
