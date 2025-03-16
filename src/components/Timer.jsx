import { useState, useEffect } from "react";

export default function Timer(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (!props.winner) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.winner]);

  useEffect(() => {
    setTime(0); // Reset timer when resetTrigger changes
  }, [props.resetTrigger]);

  return <p className="timer">⏳ Time: {time} seconds</p>;
}
