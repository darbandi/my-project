import { createContext, useReducer } from "react";

const myStateContext = createContext();
const myDispatchContext = createContext();

const oldTodoList = localStorage.getItem("todoList");

const init = {
  todoList: oldTodoList ? JSON.parse(oldTodoList) : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      const newTodoList = [...state.todoList];
      newTodoList.unshift({
        id: Math.ceil(Math.random(0, 10000) * 100),
        title: action.text,
        done: false,
      });
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return { ...state, todoList: newTodoList };

    case "updateToDo":
      const newTodoList1 = [...state.todoList];
      newTodoList1.forEach((todoItem) => {
        if (todoItem.id === parseInt(action.id)) {
          todoItem.done = !action.checked;
        }
      });
      localStorage.setItem("todoList", JSON.stringify(newTodoList1));
      return { ...state, todoList: newTodoList1 };

    case "clearTodo":
      localStorage.removeItem("todoList");
      return { ...state, todoList: [] };

    case "removeTodoItem":
      state.todoList = state.todoList.filter((item) => item.id !== action.id);
      return { ...state, todoList: state.todoList };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <myStateContext.Provider value={state}>
      <myDispatchContext.Provider value={dispatch}>
        {children}
      </myDispatchContext.Provider>
    </myStateContext.Provider>
  );
};

export { myStateContext, myDispatchContext, Provider };
