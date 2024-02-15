import useTimer from "./useTimer";

export default function CustomHookTimer() {
  const count = useTimer();

  return (
    <div>
      <h1>Hook Timer</h1>
      <div>Count: {count}</div>
    </div>
  );
}
