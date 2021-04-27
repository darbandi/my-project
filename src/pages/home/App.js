import React from "react";
import "./App.css";

import TodoAdd from "./../../components/todo-add/TodoAdd";
import TodoList from "./../../components/todo-list/TodoList";
import TodoClear from "./../../components/todo-clear/TodoClear";

import { Provider } from "./../../context/context";

function App() {
  return (
    <Provider>
      <div className="container">
        <h1 className="page-title">TO-DO LIST</h1>
        <TodoAdd />
        <TodoList />
        <TodoClear />
      </div>
    </Provider>
  );
}
export default App;
