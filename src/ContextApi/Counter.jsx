import { React, useContext } from "react";
import { CounterContext } from "./context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  // console.log(counterContext);

  return (
    <div>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count - 1);
        }}
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;
