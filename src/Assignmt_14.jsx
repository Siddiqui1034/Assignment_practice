import React, {useRef, useState}  from 'react'

const Assignmt_14 = () => {

    const [row, setRow] = useState([""])
    const inputRef = useRef({})

    const handleChange = (eve) =>{
       const {id, value} = eve.target;
       inputRef.current[id] = value; 
       console.log(inputRef.current)     
    }
    const handleAdd = () => {
        setRow([...row, ''])
    }

    const handleDelete = () =>{

    }
  return (
    <div> 
        {
            row.map((val, ind)=>{
                return <p key={`row_${ind}`}>player{ind + 1}<input ref={inputRef} id={`${ind+1}`}  type='text' onChange={handleChange} /><button onClick={handleAdd}>Add</button>{console.log(row.length)}
                        { row.length > 1  && <button onClick={handleDelete}>Delete</button>}
                    </p>         
            })
        }  
    </div>
  )
}

export default Assignmt_14


// import React, { useState, useRef } from 'react'

// const Assignmt_14 = () => {

//     const [row, setRow] = useState([""])
//     const inputRef = useRef()

    
//     const handleAddClick = () => {
//         setRow([...row, " "])
//     }
//     const handleDeleteClick = () =>{

//     }
//     const handleSubmitClick = () =>{
//         const {id, value}= inputRef.current
//         setRow([...row, " "])
//         console.log([...id, ...value])
//         // console.log(setRow([...]))       
//     }
//     return <div>
//         {
//             row.map((val, ind) => {
//               return  <p key={`row_${ind}`}>
//                     Player {ind+1}. <input type="text" ref={inputRef} id={ind} /> <button onClick={handleAddClick}>Add</button>
//                     { row.length>1 && <button onClick={handleDeleteClick}>Delete</button>}

//                 </p>
//             })
//         }
//         <button onClick={handleSubmitClick}>Submit</button>
//     </div>

    // const [row, setRow] = useState([])
    // const handleClick = (event) =>{        
    //     setRow([...row, ""])
    // }
    // return (
    //     <div>
    //         <p>
    //             Player 1: <input type="text" />
    //             <button onClick={handleClick} >Add</button>
    //         </p>
    //        {
    //             row.map((val, ind) => {
    //                 return <p key={`row_${ind}`}>
    //                     Player {ind+2} : <input type="text" name="" id="" />
    //                     <button onClick={handleClick}>Add</button>
    //                     <button>Delete</button>

    //                 </p>
    //             })
    //         }       
    //     </div>
    // )
// }

// export default Assignmt_14



