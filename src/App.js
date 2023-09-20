import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
