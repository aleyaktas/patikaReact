import React, { useContext } from "react";
import checkIcon from "../../img/checked.svg";
import unCheckIcon from "../../img/un-checked.svg";
import { TodoListContext } from "../../context/TodoListContext";

const TodoItem = ({ item, index }) => {
  const { todoList, setTodoList } = useContext(TodoListContext);

  //Checkbox changing action after todo completed
  const handleCheckboxChange = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <button
        className="check-button"
        onClick={() => handleCheckboxChange(index)}
      >
        <img
          src={item?.completed ? checkIcon : unCheckIcon}
          alt="checked-icon"
          width={24}
          height={24}
        />
      </button>
      <li className={`todo-item ${item.completed && "completed-text"}`}>
        {item?.title}
      </li>
    </>
  );
};

export default TodoItem;
