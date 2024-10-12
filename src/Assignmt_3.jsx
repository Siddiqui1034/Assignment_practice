import React, { useRef, useState } from 'react'

const Assignmt_3 = () => {

    const inputRef = useRef()      
    const [data, setData] = useState("")

    const handleSubmit = () =>{
        setData(inputRef.current.value)
    }

  return (
    <div>
      <p>
        Enter Name: <input ref={inputRef}  type="text"    />
      </p>
      <button onClick={handleSubmit}>
        Submit
      </button>
      <p>
        Show: <input type="text" value={data} />
      </p>
    </div>
  )
}

export default Assignmt_3
