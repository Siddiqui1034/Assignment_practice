import React, { useRef, useState } from 'react'

const A = (props) =>{
    return <>
    <h1>A</h1>
    <B />
    </>
}

const B = (props) =>{
    return <>
    <h1>B</h1>
    <C />
    <D />
    </>
}

const C = (props) =>{
    return <>
    <p>
    C: 
    Name:
    </p>   
    </>
}

const D = () =>{
    return <>
    <p>
    D
    Location:
    </p>
   
    </>
}

const Assignmt_8 = () => {

    const [data, setData] = useState({})
    const inputRef = useRef()
    const handleChange = (eve) =>{
    //   const {name, value} =  eve.target
    //   console.log(name, value)
    }
    
    const handleClick = () =>{
        const {id, value} = inputRef.current
        setData({...data, [id]:value})
        console.log(data);
        
    }
  return (
    <div>
      <p>Name:
        <input type="text"  ref={inputRef} onChange={handleChange} id="name" />
      </p>
      <p>
        Location:
        <input type="text" ref={inputRef} onChange={handleChange} id="location" />
      </p>
      <button onClick={handleClick}>Submit</button>
      <A />
     
    </div>
  )
}

export default Assignmt_8
