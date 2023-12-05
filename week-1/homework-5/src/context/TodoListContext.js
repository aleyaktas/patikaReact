import { createContext, useState } from "react";

//Create context for todolist
const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const [todo, setTodo] = useState({ title: "", completed: false });
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoListContext.Provider value={{ todo, setTodo, todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListProvider, TodoListContext };
