import React, { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";

const FilterTodo = () => {
  const {
    todoList,
    setFilteredTodoList,
    getActiveTodos,
    getCompletedTodos,
    clearAllTodos,
  } = useContext(TodoListContext);

  const buttons = ["All", "Active", "Completed", "Clear All"];

  //Filter todo according to button name
  const handleFilterButtonClick = (name) => {
    switch (name) {
      case "All": //Get all todos
        setFilteredTodoList(todoList);
        break;
      case "Active": //Get active todos
        setFilteredTodoList(getActiveTodos());
        break;
      case "Completed": //Get completed todos
        setFilteredTodoList(getCompletedTodos());
        break;
      case "Clear All": //Clear all todos
        setFilteredTodoList(clearAllTodos());
        break;
      default:
        break;
    }
  };

  return (
    <div className="button-list">
      {buttons.map((name) => (
        <button
          key={`${name} +1`}
          className="filter-button"
          onClick={() => handleFilterButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterTodo;
