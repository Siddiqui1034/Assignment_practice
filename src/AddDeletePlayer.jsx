import React, {useState} from 'react'

const AddDeletePlayer = () => {

    const [data, setData] = useState([""])
    const handleAdd = () => {
      const fdata = [...data]
        setData([...fdata, ""])
    }
    const handleDelete = (index) =>{
      // alert(index)
      const fdata = [...data]
      fdata.splice(index, 1)
        setData(fdata)
    }

    const handleChange = (e) =>{
      // console.log(e.target)
      // const {name, value} = e.target;
      // console.log(name, value)
      const value = e.target.value;
      const fname = e.target.name
      // setData(value)
      const fdata = [...data]
      fdata[fname] = value;
      
      console.log(fdata)
      setData(fdata)
    }

    const handleSubmit = () =>{
      console.log(data)
    }
  return (
    <div style={{textAlign: "center"}}> Add Delete Player
    {
    data?.map((val, ind)=>{
      return <p key={`row_${ind}`}><b>Player {ind+1} </b><input value={val} type="text" onChange={handleChange} name={ind} />
              <button onClick={handleAdd}>Add</button>
              { data.length > 1 && <button onClick={() => handleDelete(ind)} id={ind}> Delete </button> } 
            </p>
    })
    }
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddDeletePlayer;





































// import React, {useState} from 'react'

// const AddDeletePlayer = () => {
//     const [row, setRow] = useState([""])

//     const AddPlayer = () =>{   
//         setRow([...row, ""])
//     }

//     const DeletePlayer = (index) =>{
//         // alert(ind)
//       const del = [...row]
//        del.splice(index, 1)
//     //    const delval = del.splice(ind, 1)
//     //   console.log(delval)
//     //   console.log(del);
//     setRow(del)
//     }

//     const handleChange = (eve) =>{
//         const {id, value} = eve.target;
//         console.log(id, value);
//         const data = [...row]
//         data[id] = value;
//         // console.log(data);
//         setRow(data)
//     }

//     const handleSubmit = () =>{
//        console.log(row);
//     //    console.log(data);
//     }
//   return (
//     <div>
//       {/* <p>Player 1: <input type="text" /> <button onClick={AddPlayer}>Add</button></p> */}
//       {
//         row?.map((val, index)=>{
//             return <p>
//                 Player {index+1}:
//                 <input id={index} value={val} type="text" onChange={handleChange} />
//                 <button onClick={AddPlayer}>Add</button>
//                 {row.length>1 && <button onClick={()=> DeletePlayer(index)} id={index}>Delete</button>}
//             </p>
//         })
//       }
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default AddDeletePlayer
