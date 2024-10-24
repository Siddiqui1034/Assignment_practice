import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  let timerId;

  useEffect(() => {
    // debugger;
    if (isRunning) {
      timerId = setInterval(function (){
        setTime(time + 1)
      }, 100);
    }
    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleStartandStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };
  return (
    <div className="display-3">
      Stopwatch
      <p className="display-2">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <p className="display-5">
        <button onClick={handleStartandStop}>
          {isRunning ? "stop" : "start"}
        </button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};

export default Stopwatch;
