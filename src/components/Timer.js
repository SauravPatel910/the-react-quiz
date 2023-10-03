import { useEffect } from "react";

function Timer({ dispatch, secondsRemains }) {
  const seconds = secondsRemains % 60;
  const mins = Math.floor(secondsRemains / 60);

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
