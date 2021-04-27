import React, { useContext, useRef } from "react";
import { myDispatchContext } from "./../../context/context";

const TodoAdd = () => {
  const dispatchContext = useContext(myDispatchContext);
  const inputRef = useRef(null);
  const addWithEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (inputRef.current.value === "") {
      return;
    }
    dispatchContext({ type: "addTodo", text: inputRef.current.value });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="todo-add">
      <input
        ref={inputRef}
        type="text"
        className="input-text"
        placeholder="new task"
        onKeyUp={addWithEnter}
      />
      <button className="btn-add" onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
};

export default TodoAdd;
