import React, { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  const squaredNumber = useMemo(() => {
    console.log("Computing square...");
    return number * number;
  }, [number]); // Recalculates only if `number` changes

  return <p>Squared: {squaredNumber}</p>;
}

export default function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(2);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <ExpensiveComponent number={input} />
    </div>
  );
}

