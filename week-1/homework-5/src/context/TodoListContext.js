import { createContext, useEffect, useState } from "react";

//Create context for todolist
const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const [todo, setTodo] = useState({ title: "", completed: false });
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    setFilteredTodoList(todoList);
  }, [todoList]);

  //Get active todos according to filter
  const getActiveTodos = () => {
    return todoList.filter((task) => !task.completed);
  };

  //Get completed todos according to filter
  const getCompletedTodos = () => {
    return todoList.filter((task) => task.completed);
  };

  const clearAllTodos = () => {
    setTodoList([]);
  };

  return (
    <TodoListContext.Provider
      value={{
        todo,
        setTodo,
        todoList,
        setTodoList,
        getActiveTodos,
        getCompletedTodos,
        clearAllTodos,
        filteredTodoList,
        setFilteredTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListProvider, TodoListContext };
