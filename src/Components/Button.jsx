import "./Button.css";

export default function Button({ textContent }) {
  return (
    <>
      <button
        onClick={() => {
          alert("You clicked teh button");
        }}
      >
        {textContent}
      </button>
    </>
  );
}
