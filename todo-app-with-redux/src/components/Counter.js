import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/CounterSlice";
const Counter = () => {
  const [number, setNumber] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <strong>{count}</strong>
      </div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(+number))}>Add by input </button>
    </div>
  );
};

export default Counter;
