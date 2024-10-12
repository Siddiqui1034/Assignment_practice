import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [update, setUpdate] = React.useState()
  const nameRef = React.useRef()
  const handleClick = () => {
    // console.log(nameRef.current.value);
    setUpdate(nameRef.current.value)
  }
  return (
  <>
  <p>
   Name: <input type="text" ref={nameRef}/>    
  </p>
  <p>
  <button onClick={handleClick}>Submit</button>
  </p>
  <p>
    Show: <input type="text" value={update} />
  </p>
  </>
  )
}

export default App
