// import React, { useRef, useState } from 'react'

// const A = (props) =>{
//     const nameRef = useRef()
//     const handleSubmit =() =>{
//         const nameValue = nameRef.current.value;
//         // alert(nameValue)
//         props.cb(nameValue)
//     }
//     return <> <h1>A</h1>
// <p>
//     First Name: <input type="text" ref={nameRef} />
// </p>

// <button onClick={handleSubmit}>Submit</button>

//     </>
// }

// const B = () =>{
//     return <> <h1>B</h1>
//     <p>
//         Location: <input type="text" />
//     </p>
//     <button>Submit</button>
//     </>
// }

// const C = (props) =>{
//     return <> <h1>C</h1>
//    C:{props.name}
//     </>
// }

// const D = () =>{
//     return <> <h1>D</h1>
//     D:
//     </>
// }


// const ContextAPI2 = () => {
//     const [name , setName]= useState()

//     function f1(data) {
//         console.log("parent Received", data)
//         setName(data)
//     }
//   return (
//     <div>
//         <h3>App Component</h3>
//       <A  cb = {f1} />
//       <B />
//       <C name={name} />
//       <D />
//     </div>
//   )
// }

// export default ContextAPI2

//88***********************************************************************************************************

import React, { useRef, useState } from 'react'

const A = (props) =>{

    const [name, setName] = useState()
    // const [name, setName] = useState("")
    // const [name, setName] = useState({})

    const handleChange = (eve) =>{
        const {id, value} = eve.target
        setName({...name, [id]:value})
    }
    const handleSubmit =() =>{
        props.cb(name)
    }
    return <> <h1>A</h1>
<p>
    First Name: <input type="text" id='n1' onChange={handleChange} />
</p>

<p>
    Last Name: <input type="text" id='n2' onChange={handleChange}/>
</p>
<button onClick={handleSubmit}>Submit</button>

    </>
}

const B = () =>{
    return <> <h1>B</h1>
    <p>
        Location: <input type="text" />
    </p>
    <button>Submit</button>
    </>
}

const C = () =>{
    return <> <h1>C</h1>
   C:
    </>
}

const D = (props) =>{
    // console.log(111, props);
    
    const {n1, n2} = props.name
    return <> <h1>D</h1>
    D:{n1}
    D:{n2}  

    </>
}


const ContextAPI2 = () => {
    const [fullname, setFullName] = useState()
    function f1(data) {
        console.log("parent Received", data) // {n1: 'jhjh', n2: 'erre'}
        // setFullName({...data})
        // setFullName({...fullname, [n1]:value})
        setFullName(data)
    }
  return (
    <div>
        <h3>App Component</h3>
      <A  cb = {f1} />
      <B />
      <C />
      <D name={fullname}/>
    </div>
  )
}

export default ContextAPI2

