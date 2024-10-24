"use client"
import React, { useRef, useState } from 'react'

const List = () => {
    const [data, setData] = useState([])
    const inputRef = useRef()

    const handleChange = (eve) =>{
        const name = eve.target.value
        setData(name)
    }

    const handleAdd = () => {
        // alert("hi")
        // alert(inputRef.current.value)
        // const name = inputRef.current.value
        // setData(...name, name)

    }
    return (
        <div>
            <p>
                Name: <input onChange={handleChange}/>
                <button onClick={handleAdd}>Add</button>
            </p>
            <ul>
                {
                    data?.map((obj, index) => {
                        return <li key={`index_li`}>{index+1}. {data}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default List
