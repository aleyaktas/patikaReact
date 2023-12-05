import React, { useContext } from "react";

import TodoItem from "../TodoItem/TodoItem";
import { TodoListContext } from "../../context/TodoListContext";

const TodoList = () => {
  const { filteredTodoList } = useContext(TodoListContext);

  return (
    <>
      {/* Check if todolist is available and show todo list action */}
      {filteredTodoList &&
        filteredTodoList.map((item, index) => (
          <div key={index} className="item-list-container">
            <TodoItem item={item} index={index} />
          </div>
        ))}
    </>
  );
};

export default TodoList;
