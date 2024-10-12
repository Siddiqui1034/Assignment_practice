import React, { useState } from 'react'

const config = [
    "Sachin",
    "Dhoni",
    "Sourav",
    "Kohli",
   " UV",
   " Dravid",
   " Panth",
    "Zaheer",
    "Lara",
    "Pointing"
]

const Filter = () => {
    // const [data, setData] = useState(config)
    const [result, setResult] = useState(config)
    // const [name, setName] = useState('')
    const handleChange = (eve) => {
        const name = eve.target.value
        const filteredData = config.filter((val) =>{
            return val.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        })
        console.log(filteredData)
        setResult(filteredData)
    }
    return (
        <div>
            <p>
                Search: <input type="text" onChange={handleChange}  />
            </p>
            <ol>
            {
                result?.map((player, index)=>{
                    return <li key={`p_${index}`}>{player}</li>
                })
            }
            </ol>
           
        </div>
    )
}

export default Filter
