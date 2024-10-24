'use client'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'


const A = () => {
    // const [name, setName] = useState()
    const inputRef = useRef()
   const dispatch = useDispatch()

    const handleClick = () =>{ 
        // setName(inputRef.current.value)
        dispatch({type:'NAME_UPDATE', name: inputRef.current.value })
    }
  return (
    <div>
      <h1>A</h1>
      <p>Name:<input type="text" ref={inputRef} id='name' /></p>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default A






































// "use client"
// import React, {useState} from 'react'
// import './A.css'
// import { useDispatch } from "react-redux";

// const A = () => {
//     const [name, setName] = useState('')
//     const dispatch = useDispatch()
//     const handleChange = (eve) =>{
//         setName(eve.target.value) 
//     }
//     const handleClick = () =>{
//         // alert(name)
//         // dispatch(name)
//         dispatch({type:"NAME_UPDATE",name})
//     }
//     return (
//         <div>
//             <h1>A</h1>
//             <p>
//                 Name: <input type="text" onChange={handleChange} />
//             </p>
//             <button onClick={handleClick}>Submit</button>
//         </div>
//     )
// }

// export default A
