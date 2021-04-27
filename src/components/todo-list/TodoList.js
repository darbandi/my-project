import React, { useContext } from "react";
import TodoItem from "./../todo-item/TodoItem";
import { myStateContext } from "./../../context/context";

const TodoList = () => {
  const stateContext = useContext(myStateContext);

  if (stateContext?.todoList?.length <= 0)
    return <div className="not-fount">Not found!</div>;
  return (
    <ul className="todo-list">
      {stateContext?.todoList?.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default TodoList;
