import { useState } from "react";
import { createContext } from "react";

export let CounterContext = createContext({
  counter: 0,
  setcounter: () => {},
});

export const CounterProvider = ({ children }) => {
  let [counter, setcounter] = useState(0);
  console.log(counter);
  let value = { counter, setcounter };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
