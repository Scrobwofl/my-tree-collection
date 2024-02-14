import Button from "./Button";
import { useState } from "react";
import "./TreeCard.css";

export default function TreeCard({ treeName, url, location }) {
  const [myCounter, setMyCounter] = useState(0);

  function performAddition() {
    console.log(myCounter);
    setMyCounter(myCounter + 1);
    console.log(myCounter);
  }
  function performSubtract() {
    console.log(myCounter);
    setMyCounter(myCounter - 1);
    console.log(myCounter);
  }

  function resetCount() {
    setMyCounter(0);
  }

  return (
    <>
      <div id="tree-card">
        <h1>{treeName} Tree</h1>
        <img src={url} alt="" />
        <p>{location}</p>
        <Button textContent="Add It" onClick={performAddition} />
        <Button textContent="Subtract It" onClick={performSubtract} />
        <h3 onClick={resetCount}>{myCounter}</h3>
      </div>
    </>
  );
}
