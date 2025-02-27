import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let timer;
      if(isRunning){
        timer = setInterval(() => {
            setCount(count => count+1);
        }, 1000);
      }
    
      return () => {
        clearInterval(timer);
      }
    }, [isRunning])

    const handleStartStop = () => {
        setIsRunning(prev => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format as "m:ss"
    };
    
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto"
    }}>
        <h1 >Stopwatch</h1>
        <div>Time: {formatTime(count)}</div>
        <div>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch