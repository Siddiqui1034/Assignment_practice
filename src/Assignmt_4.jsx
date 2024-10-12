// import React, { useState } from 'react'

// // A Component
// const A = (props) => {

//   return <p>
//     <h4>A Component</h4>
//     Name from Parent {props.name}
//   </p>
// }

// // B Component
// const B = (props) => {
//   return <p>
//     <h4>B Component</h4>
//     Location from Parent {props.loc}
//   </p>
// }

// const Assignmt_4 = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     loc: ""
//   })
//   const [valueP, setValueP] = useState()
  
//   const handleChange = (eve) => {
//     const { id, value } = eve.target;
//     console.log(id, value)
//     setFormData({[id]:value })

//   }
//   const handleSubmit = () => {
//     // console.log({...formData,[id]:value });
//     // data = setFormData()   
//   }

//   return (
//     <div>
//       <p>
//         Name: <input type="text" name='name' id='name' onChange={handleChange} />
//       </p>
//       <p>
//         Location: <input type="text" name='location' id='loc' onChange={handleChange} />
//       </p>
//       <button onClick={handleSubmit}>Submit</button>

//       <A name={formData.name}/>
//       <B loc={formData.loc}/>
//     </div>
//   )
// }

// export default Assignmt_4


import React, {useRef, useState} from 'react'

  const A = () =>{
    return <div>
      <h4>A Component</h4>
    </div>
  }

const Assignmt_4 = () => {

  const inputRef = useRef();
  const [name, setName] = useState()

  const handleChange = (eve) => {
    // console.log(eve.target)
   const {id, value} = eve.target
    inputRef.current[id] = value;
  }

  const handleSubmit = () =>{
   setName(inputRef.current)
  }
  return (
    <div>
      <h4>App Component</h4>
      {name}
      <input type="text"onChange={handleChange} id="name"/>
      <button onClick={handleSubmit}>Submit</button>
      <A />
    </div>
  )
}

export default Assignmt_4

