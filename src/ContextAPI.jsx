// import React, { useState } from 'react'
// import { useRef } from 'react'

// const A = (props) =>{
//     return <div>A
//         <C name={props.name}/>
//     </div>
// }

// const B = () =>{
//     return <div>B</div>
// }

// const C = (props) =>{
//     return <div>C
//         <D passedName = {props.name} />
//     </div>
// }

// const D = (props) =>{
//     return <div>D
//         <E nameReceived = {props.passedName} />
//     </div>
// }

// const E = (props) =>{
//     return <div>E{props.nameReceived}</div>
// }

// const ContextAPI = () => {
//     const inputRef = useRef()
//     const [data, setData] = useState()

//     const handleChange = (eve) =>{
//     // console.log(eve.target.value)
//     // console.log(inputRef.current.value); // we can access value of input field directly by passing reference only
//     // const inputValue = inputRef.current.value
//     // console.log(data)
//     // setData(inputValue)
//     }

//     const handleClick = () =>{
//         setData(inputRef.current.value)
//     }

//   return (
//     <div>
//       <b>Parent Component : </b>
//       <input onChange={handleChange} ref={inputRef} type="text" name="" id="" />
//       <button onClick={handleClick}>Submit</button>
//       <A name={data} />
//       <B />
//     </div>
//   )
// }

// export default ContextAPI

//*******************************************************************************************************//

// import React, { createContext, useContext, useRef, useState } from 'react'

// const ctxObj = createContext()

// const A = () => {
//     return <div>A
//         <C />
//     </div>
// }

// const B = () => {
//     return <div>B</div>
// }

// const C = () => {
//     return <div>C
//         <D />
//     </div>
// }

// const D = () => {
//     return <div>D
//         <E />
//     </div>
// }

// const E = () => {
//     const contextData = useContext(ctxObj)
//     return <div>E{contextData}</div>
// }

// const ContextAPI = () => {

//     const inputRef = useRef()

//     const { Provider } = ctxObj
//     const [data, setData] = useState()

//     const handleClick = () => {
//         const inputdata = inputRef.current.value
//         setData(inputdata)
//     }

//     return (
//         <div>
//             Parent Component <input type="text" ref={inputRef} />
//             <button onClick={handleClick}>Submit</button>
//             <Provider value={data}>
//                 <A />
//                 <B />
//             </Provider>
//         </div>
//     )
// }

// export default ContextAPI

//********************************************** More than one Provider */

import React, { createContext, useState, useRef, useContext } from 'react'

const contextObj1 = createContext()
const contextObj2 = createContext()
// const {contextObj1,contextObj2 }= createContext()  //react-dom_client.js?v=86a59230:14030 Type Error: The above error occurred in the <ContextAPI> component:

// const {Provider } = contextObj1
// const {Provider } = contextObj2

const A = () => {
    return <div>A
        <C />
    </div>
}

const B = () => {
    return <div>B</div>
}

const C = () => {
    return <div>C
        <D />
    </div>
}

const D = () => {
const providerdata2 = useContext(contextObj2)
    return <div>D
        {providerdata2.n2}
        <E />
    </div>
}

const E = () => {
    const contextData = useContext(contextObj1)
    return <div>E{contextData}</div>
}

const ContextAPI = () => {
    const inputRef = useRef()
    const [data, setData] = useState()

    const handleClick =()=>{
       const inputData =  inputRef.current.value
       setData(inputData)
    }
  return (

    <div>
        Parent Component 
        <input type="text" ref={inputRef} />
        <button onClick={handleClick} >Submit</button>
        <contextObj1.Provider value={data} >
        <contextObj2.Provider value = {{n1: 1, n2: 2, n3: 3}}> 
        <A />
        <B />
        </contextObj2.Provider>
      </contextObj1.Provider>
    </div>
  )
}

export default ContextAPI
