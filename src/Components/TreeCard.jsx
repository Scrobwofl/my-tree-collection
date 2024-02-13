import Button from "./Button";
import "./TreeCard.css";

export default function TreeCard({ treeName, url, location }) {
  return (
    <>
      <div id="tree-card">
        <h1>{treeName} Tree</h1>
        <img src={url} alt="" />
        <p>{location}</p>
        <Button textContent="Click Me!" />
      </div>
    </>
  );
}
