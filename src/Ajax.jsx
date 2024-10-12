import React, { useState } from 'react'

const Tab =({items})=>{
    return (
        <div> <b>{items} </b></div>
    )
}

const Ajax = () => {
    // const [data, setData] = useState()
    // const [data, setData] = useState([])
    const [data, setData] = useState([""])
    const handleClick = async () => {
        // debugger;
       const res = await fetch("https://jsonplaceholder.typicode.com/users", {method: "get", headers: {}})
    //    debugger
       const result = await res.json()
       setData(result) // already an array formate

    }
  return (
    <div>
      <button onClick={handleClick} className='btn btn-danger'>Get Users</button>
      <table className='table'>
        <thead>
            <tr>
                {
                    Object.keys(data[0]).map((key,ind)=>{
                        return <th key={`th_${ind}`}>{key}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map((obj,index)=>{
                    return <tr>
                        {
                            Object.values(obj).map((object, ind)=>{
                                // const {id, name, company, email} = object
                                console.log(object)
                            })
                        }
                    </tr>
                })
            }
        </tbody>
      </table>
      <Tab items={["List", "Grid"]}/>
      {/* <ol>
      {
      data?.map((obj)=>{
        return <li>{obj.id}{obj.name}</li>
      })}
      </ol> */}
     
    </div>
  )
}

export default Ajax
