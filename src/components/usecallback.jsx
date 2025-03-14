import { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default function UseCallBackFunction() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Function is memoized and never re-created

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} />
    </div>
  );
}
