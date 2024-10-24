"use client"
import C from '../C'
import React, { useState } from 'react'

const A = (props) => {
    const [name, setName] = useState()
    const handleChange =(eve)=>{
        // setname(eve.target.value)
        setName(eve.target.value);
    }

    const handleClick = () =>{
        console.log(name)
        props.cb(name)
        // when i click on submit button then only it go to parent as well as child E Component
    }
  return (
    <div>
      <h3>A</h3>
      <p>Name: <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      </p>
      <C name={name} />
    </div>
  )
}
export default A
