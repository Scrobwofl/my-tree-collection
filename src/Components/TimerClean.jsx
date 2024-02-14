import { useState, useEffect } from "react";

export default function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}
