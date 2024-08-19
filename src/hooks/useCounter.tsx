import { useState } from "react";

interface Props {
  initialValue: number;
}

export const useCounter = ({initialValue}:Props) => {
  
  const [counter, setCounter] = useState(initialValue)

  const increment = (value: number) => {
    setCounter(counter + value)
  };

  const decrement = (value: number) => {
    if(value === 0) return;
    setCounter(counter - value)
  };

  return {
    counter,
    increment,
    decrement,
  }
}
