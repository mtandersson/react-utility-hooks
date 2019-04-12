import { useState, Dispatch } from "react";

interface EventParam<T> {
  target: {
    value: T;
  };
}
// Custom state hook tailored for updating html input states
export function useHTMLState<S>(
  initialState: S | (() => S)
): [S, Dispatch<EventParam<S>>] {
  const [s, f] = useState(initialState);
  return [s, e => f(e.target.value)];
}
