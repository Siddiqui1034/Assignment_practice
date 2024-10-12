import React, { useState } from 'react'

function Parent(){
    const [count, setCount] = useState(0)
    console.log("Parent Component")
    const handleClick = () =>{
        setCount(prev => prev + 1)
    }
    return <div>
        <h3>Parent Component</h3>
        <h2>{count}</h2>
        <button onClick={handleClick}>Increment</button>
        <Child />
    </div>
}

function Child(){
    console.log("Child Component")
return <div>
    <h3>Child Component</h3>
</div>
}

Child = React.memo(Child)

const ReactMemo = () => {
  return (
    <div>
     <Parent /> 
    </div>
  )
}

export default ReactMemo
