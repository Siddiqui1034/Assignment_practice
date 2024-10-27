import React, { useState } from 'react'

const Toggle = () => {
    const [name, setName] = useState(true)

    const toggleName = () => {
        setName(prev => !prev)
    }
  return (
    <div>
      <h1>Name Toggle</h1>
      { name ? "Sachin" : "Dhoni"}
      <button onClick={toggleName}>Toggle</button>
    </div>
  )
}

export default Toggle
