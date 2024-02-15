import { useState } from "react";
import "./HiddenMonkey.css";
import Button from "./Button";

export default function HiddenMonkey() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsVisible(!isVisible)}>Toggle Me</Button>
      {isVisible && <p>Hello Monkey</p>};
    </div>
  );
}

// /* Alternate syntax */
// export default function HiddenMonkey() {
//   const [isVisible, setIsVisible] = useState(false);

//   return <div>{isVisible ? <p>Hello World</p> : null }</div>
// }
