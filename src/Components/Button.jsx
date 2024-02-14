import "./Button.css";

export default function Button({ textContent, onClick }) {
  return <button onClick={onClick}>{textContent}</button>;
}
