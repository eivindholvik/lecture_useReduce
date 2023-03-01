import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <button onClick={() => dispatch({ type: "decrease" })}>decreaase</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increase" })}>increase</button>
    </div>
  );
}

export default Counter;
