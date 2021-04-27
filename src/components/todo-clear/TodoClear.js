import React, { useContext } from "react";
import { myDispatchContext } from "./../../context/context";

const TodoClear = () => {
  const dispatchContext = useContext(myDispatchContext);
  return (
    <div className="todo-clear">
      <button
        className="btn-clear"
        onClick={() => dispatchContext({ type: "clearTodo" })}
      >
        Clear
      </button>
    </div>
  );
};

export default TodoClear;
