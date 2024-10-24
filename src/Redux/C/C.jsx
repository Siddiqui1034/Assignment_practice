'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const C = () => {
  const Name = useSelector((state)=>{
    return state.appReducer.name
  })
  return (
    <div>
            <h1>C</h1>
            <p>Name:{Name}</p>
    </div>
  )
}

export default C















































// "use client"
// import React from 'react'
// import './C.css'
// import { useSelector } from 'react-redux'

// const C = () => {

//   const name = useSelector( (state)=>{
//     return state.appReducer.name;
//   })

// // using Promise
// //   const name = useSelector( (state)=>{
// //     return new Promise(function (resolve, reject){
// //       resolve(state.appReducer.name)
// //     })
// //   })
// //   const promiseObj = name(state);
// //   promiseObj.then(
// //     function(data){
// //       console.log("name", data)
// //   },
// //   function(data){
// //     console.log("loc", data)
// //   }
// // )

//   return (
//     <div>
//       <h1>C</h1>
//       <h5>Name:{name}</h5>
//     </div>
//   )
// }

// export default C
