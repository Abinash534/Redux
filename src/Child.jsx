import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/action/countAction";

function Child() {
  const count = useSelector((store) => store.countReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Consumer</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default Child;
