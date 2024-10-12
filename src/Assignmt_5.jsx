import React, { useRef, useState } from 'react'

const A = (props) =>{
    const [data, setData] = useState("")
    
    function f1(obj) {
        setData(obj.name)
        props.cbP(obj.loc) // passing data loc through props and cbP(obj.loc)
    }
    return<>
    <h3>A</h3>
    Name: {data}
    <B cb={f1}/>
    </>
}

const B = (props) =>{
    const inputRefs = useRef({})

    const handleChange = (eve) =>{        
        const {id, value} = eve.target
        inputRefs.current[id] = value;
        
    }

    const handleSubmit = () =>{
         props.cb(inputRefs.current)   
    }
    
    return <>
    <h3>B</h3>
    <p>Name:
    {/* <input type="text" ref={(e)=> inputRef.current["name"] = e} id='name' /> */}
    <input type="text" ref={inputRefs} id='name' onChange={handleChange}  />
     </p>
     <p>Loc:
    <input type="text" ref={inputRefs} id='loc' onChange={handleChange}  />
     </p>
     <button onClick={handleSubmit}>Submit</button>
    </>
}

const Assignmt_5 = () => {

    const [loc, setLoc] = useState()
    function parentCb (data) {
        setLoc(data)
    }
  return (
    <div>
        <h3>App</h3>
        Location:{loc}
      <A cbP={parentCb} />
    </div>
  )
}

export default Assignmt_5
//******************************************************************************************************************* */
// import React, { useRef, useState } from 'react'
// const A = (props) => {
//     const [name, setName] = useState("")

//     const callbackA = (obj) => {
//         setName(obj.loc)
//         props.callback(obj.name)
//     }
//     return <>
//         <h3>A Component</h3>
//         <h6>{name}</h6>
//         <B cb={callbackA} />
//     </>
// }
// const B = (props) => {

//     const inputRef = useRef({})

//     const handleChange = (eve) => {

//         const { id, value } = eve.target;
//         console.log(id, value)
//         // console.log(inputRef.current)
//         // console.log(...inputRef.current)
//         // inputRef.current[id] = value;
//         inputRef.current[id] = value;
//     }
//     const handleSubmit = () => {
//         props.cb(inputRef.current)
//     }
//     return <>
//         <p>
//             Name: <input type="text" id="name" onChange={handleChange} />
//         </p>
//         <p>
//             Location: <input type='text' id="loc" onChange={handleChange} />
//         </p>
//         <p>
//             <button onClick={handleSubmit}>Submit</button>
//         </p>
//     </>
// }
// const Assignmt_5 = () => {

//     const [loc, setLoc] = useState('')
    
//     const callbackApp = (data) => {
//         setLoc(data)
//         console.log(data);
//     }
//     return (
//         <div>
//             <h2>App</h2>
//             <h5>{loc}</h5>
//             <A callback={callbackApp}/>
//         </div>
//     )
// }
// export default Assignmt_5

//*************************************************************************************************** */

// const A = (props) =>{
//     const [name, setName] = useState("")
//     const callbackA = (obj) =>{
//         setName(obj.name)
//         props.callback(obj.loc)
//     }
// return <div>
//     <h4>A component</h4>
//     <p>
//     Name: {name}
// </p>
//     <B cb={callbackA}/>
// </div>
// }
// const B = (props) =>{
//     const inputRef = useRef({})
//     const handleChange = (e) =>{
//      const {id, value} =  e.target;
//      inputRef.current[id] = value;     
//     }
//     const handleSubmit = () =>{
//         props.cb(inputRef.current)
//     }
//     return <div>
//     B Component 
//     <p>
//         Name: <input type="text" id='name' onChange={handleChange} />
//     </p>
//     <p>
//        Location: <input type="text" id='loc' onChange={handleChange} />
//     </p>
//     <p>
//      <button onClick={handleSubmit} >Submit</button>
//     </p>
// </div>
// }
// const Assignmt_5 = (props) => {
//     const [loc, setLoc] = useState("")
//      const callbackApp = (data) =>{
//         setLoc(data)
//     }
//   return (
//     <div>
//         <h4>App Component
//             : {loc}
//         </h4>
//     <A callback={callbackApp}/>
//     </div>
//   )
// }
// export default Assignmt_5
