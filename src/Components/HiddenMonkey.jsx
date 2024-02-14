import "./HiddenMonkey.css";
import Button from "./Button";

export default function () {
  const [visible, setVisible] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible;
        }}
      />
    </div>
  );
}
