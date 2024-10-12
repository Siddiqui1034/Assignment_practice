import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState("")
    const timerFunction = () =>{
            let currentTime = new Date()
            setTime(currentTime.toLocaleTimeString())
        }

    useEffect(()=>{
        timerFunction()
    },[])

    let timerId;
    // const intervalRef = useRef()
   function startTimer(){
    timerId = setInterval(timerFunction, 1000)
    // intervalRef.current = setInterval(timerFunction, 1000)
    }

    function stopTimer(){
        clearInterval(timerId)
        // clearInterval(intervalRef.current)
    }
  return (
    <div>
      <h1>Time: <span>{time}</span></h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer
