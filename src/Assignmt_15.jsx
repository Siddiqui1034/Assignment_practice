import React, { useState } from 'react'

const config = [
  {
    level: 1,
    name: 'courses',
    isChecked: false,
    items: [
      {
        level: 2,
        name: 'Java',
        parent: "courses",
        isChecked: false
      },
      {
        level: 2,
        name: 'UI',
        parent: "courses",
        isChecked: false
      }
    ]
  },
  {
    level: 1,
    name: 'movies',
    isChecked: false,
    items: [
      {
        level: 2,
        name: "XYZ",
        isChecked: false
      },
      {
        level: 2,
        name: "ABC",
        isChecked: false
      },
      {
        level: 2,
        name: "JKLM",
        isChecked: false
      }
    ]
  }
]

const Assignmt_15 = () => {

  const [data, setData] = useState(config)

  const handleChange =(event) =>{
    // console.log(event.target);
    const {id, name, dataset } = event.target
    console.log(id, name, dataset);
    
  }
  return (
    <div>
      {
        data?.map(({ level, name, isChecked, items }, index) => {
          return <div key={`${index}`}>
            <input onChange={handleChange} data-level={level} id={name} name={level} type="checkbox" key={`level1_${index}`} />{name}
            {
              items?.map(({level, name, isChecked}, ind)=>{
                return <div style={{paddingLeft: 30}} key={`level2_${ind}`}>
                  <input onChange={handleChange} data-level={level} id={name} name={level}  type='checkbox'  />{name}
                </div> 
              })
            }
          </div>
        })
      }
    </div>
  )
}

export default Assignmt_15
