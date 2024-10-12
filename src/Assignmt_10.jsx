import React, { useState } from 'react'

const Assignmt_10 = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) =>{
    // console.log(e.target.checked) // true or false
    // console.log(isChecked) // false
    setIsChecked(e.target.checked)
    }

  return (
    <div>
      <input type="checkbox" onChange={handleChange} checked={isChecked} />Cricket
      <input type="checkbox" />Hockey
      <input type="checkbox" />Football
      <div>
      {
        isChecked && <img src="/c.jpg" width={100} height={100}/>
      }
      </div>
      
    </div>
    
  )
}

export default Assignmt_10
