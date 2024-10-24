import React, { useState, useRef } from 'react'

const AddItemToList = () => {
    const [row, setRow] = useState([])
    const inputRef = useRef()
    // const handleChange = (eve) =>{
    //     const {id, value} = eve.target;
    //     inputRef.current[id] = value;     
    // }
    const handleAdd = () =>{
        if(!row.includes(inputRef.current.value)){
            setRow([...row, inputRef.current.value])
        }
       else{
        alert(`${inputRef.current.value} already exits`)
       }
    }

  return (
    <div>
      Name: <input id='row' type="text" ref={inputRef} />
      <button onClick={handleAdd}>Add Item</button>
     
        {
            row.map((val, ind)=>{
                return <p key={`li_${ind}`}>{`${ind+1}.${val}`}</p>
            })
        }
      
    </div>
  )
}

export default AddItemToList
