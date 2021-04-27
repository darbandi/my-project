import React, { useContext, useRef } from "react";
import { myDispatchContext } from "../../context/context";

const TodoItem = ({ item }) => {
  const checkBoxRef = useRef(false);
  const dispatchContext = useContext(myDispatchContext);

  const handleDeleteItem = () => {
    dispatchContext({ type: "removeTodoItem", id: item.id });
  };

  return (
    <li
      className="todo-item"
      onClick={() => {
        const checked = checkBoxRef.current.checked;
        dispatchContext({
          type: "updateToDo",
          id: item.id,
          checked,
        });
        checkBoxRef.current.checked = !checked;
      }}
    >
      <input
        id={item.id}
        ref={checkBoxRef}
        value={checkBoxRef?.current?.checked}
        type="checkbox"
        defaultChecked={item.done}
      />
      <label className={`todo-title ${item.done ? "done" : ""}`}>
        {item.title}
      </label>
      <i className="todo-delete" onClick={handleDeleteItem}>
        Delete
      </i>
    </li>
  );
};

export default TodoItem;
