import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
    const count = useRef(0);
    const [renderCount, setRenderCount] = useState(0); // State to trigger re-renders

    const increment = () => {
        count.current += 1; // Increment the count
        setRenderCount(renderCount + 1); // Trigger a re-render
    };

    const decrement = () => {
        count.current -= 1; // Decrement the count
        setRenderCount(renderCount + 1); // Trigger a re-render
    };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "90vh"
    }}>
        <h1>Counter App</h1>
        <p>Count: {count.current}</p>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          width: "300px"
      }}>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter