"use client"
import A from '../A'
import React, { useState } from 'react'

const App = () => {
const [received, setReceived] = useState()
  function callback(data){
console.log("parent Data", data)
setReceived(data)
  }
  return (
    <div>
        <h3>App Component</h3>
    {received}
      <A cb={callback} />
    </div>
  )
}

export default App
