import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "./context/Counter.jsx";

const CounterMainPage = () => {
  const counterState = useContext(CounterContext);

  // console.log(counterState);
  return (
    <>
      <h1>Count Is : {counterState.count}</h1>
      <Counter />
    </>
  );
};

export default CounterMainPage;
