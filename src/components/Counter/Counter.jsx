import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(true);

  useEffect(() => {
    if (isAutomatic) {
      //1 sec delay
      setTimeout(() => {
        //increment count
        setCount(count + 1);
      }, 1000);
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const stopCounter = () => {
    setIsAutomatic(false);
  };

  const startCounter = () => {
    setIsAutomatic(true);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div className="counterContainer">
        <div>
          <h2 onClick={() => console.log("clicked")} >Counter Controls</h2>
          <div className="controls">
            {isAutomatic ? (
              <button onClick={stopCounter}>STOP</button>
            ) : (
              <>
                <button onClick={increment}>Increment(+)</button>
                <button onClick={decrement}>Decrement(-)</button>
                <button onClick={startCounter}>Auto</button>
              </>
            )}
          </div>
        </div>
        <div className="count">{count}</div>
      </div>
    </div>
  );
};

export default Counter;
