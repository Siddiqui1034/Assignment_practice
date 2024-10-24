// import React, { useState } from 'react'
// import config from './configuration.json'

// const Table = () => {
//     const [data, setData] = useState(config)
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         {
//                             Object.keys(data[0]).map((key, ind) => {
//                                 return <th key={`row_${ind}`}>{key}</th>
//                             })
//                         }
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((item, index)=>{
//                           return  <tr key={`col_${index}`}>
//                                 {
//                                     Object.values(item).map((value, ind)=>{
//                                       return   <td key={`col_${ind}`}>{value}</td>
//                                     })
//                                  }
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default Table

import React, { useState } from 'react'
import config from './configuration.json'

const Table = () => {
  const [data, setData] = useState(config)
  return (
    <div>
      
        <table>
          <thead>
          <tr>
            {
              Object.keys(data[0]).map((key, ind)=>{
                return <th key={`head_${ind}`}>{key}</th>
              })
            }
          </tr>
          </thead>
          <tbody>
            {
              data.map((item, index)=>{
                return <tr>
                  {
                    Object.values(item).map((val,ind)=>{
                      return <td >{val}</td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Table

