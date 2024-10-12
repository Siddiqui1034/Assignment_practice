import React from 'react'

const EventBubbling = () => {

    const handleDiv = () =>{
        console.log("div clicked")
    }
    const handleSpan = () =>{
        console.log("span clicked")
    }
    const handleParagraph = () =>{
        console.log("paragraph clicked")
    }
    const handleButton = (event) =>{
        event.stopPropagation();
        console.log("button clicked")
    }
  return (
    <div onClick={handleDiv}>
      <span onClick={handleSpan}>
        <p onClick={handleParagraph}>
            <button onClick={handleButton}>
                click
            </button>
        </p>
      </span>
    </div>
  )
}

export default EventBubbling
