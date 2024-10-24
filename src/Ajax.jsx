import React, { useState } from 'react'

const Tab =({items})=>{
    return (
        <div> <b>{items} </b></div>
    )
}

const Ajax = () => {
    // const [data, setData] = useState()
    // const [data, setData] = useState([])
    const [data, setData] = useState([])

    const handleClick = async () => {
        // debugger;
       const res = await fetch("https://jsonplaceholder.typicode.com/users", {method: "get", headers: {}})
    //    debugger
       const result = await res.json()
    //    console.log(result)  // [{},{},{},{}]
       setData(result) // already an array formate

    }
  return (

    <div>
    <button onClick={handleClick} className='btn btn-danger'>Get Users</button>
    {data.length > 0 && (
      <table className='table'>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, ind) => (
              <th key={`th_${ind}`}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={`object_${index}`}>
              {Object.values(obj).map((value, ind) => (
                <td key={`items_${ind}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>

    // <div>
    //   <button onClick={handleClick} className='btn btn-danger'>Get Users</button>
    //   <table className='table'>
    //     <thead>
    //         <tr>
    //             {
    //                 Object.keys(data[0]).map((key,ind)=>{
    //                     return <th key={`th_${ind}`}>{key}</th>
    //                 })
    //             }
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             data.map((obj,index)=>{
    //                 return <tr key={`object_${index}`}>
    //                     {
    //                         Object.values(data[0]).map((value, ind)=>{
    //                             // const {id, name, company, email} = object
    //                             console.log(value)
    //                             // for(let key in object){
    //                                 return <td key={`items_${ind}`}>
    //                                     {obj[value]}
    //                                 </td>
    //                             // }
    //                         })
    //                     }
    //                 </tr>
    //             })
    //         }
    //     </tbody>
    //   </table>
    //   <Tab items={["List", "Grid"]}/>
    //   {/* <ol>
    //   {
    //   data?.map((obj)=>{
    //     return <li>{obj.id}{obj.name}</li>
    //   })}
    //   </ol> */}
     
    // </div>

    
  )
}

export default Ajax
