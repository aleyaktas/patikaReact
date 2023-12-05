import React, { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";

const AddTodo = () => {
  const { todo, setTodo, todoList, setTodoList } = useContext(TodoListContext);

  //Todo form submit action
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todo.title !== "") {
      setTodoList([...todoList, todo]);
      setTodo({ title: "", completed: false });
    } else {
      alert("Todo field must be filled");
    }
  };

  //Add todo action for input
  const handleChangeTodo = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  return (
    <form className="form" onSubmit={handleTodoSubmit}>
      <div className="add-todo-container">
        <input
          className="add-todo-input"
          type="text"
          placeholder="Add new todo"
          value={todo.title}
          onChange={handleChangeTodo}
        />
        <button className="add-todo-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
