import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoListProvider } from "./context/TodoListContext";
import FilterTodo from "./components/FilterTodo/FilterTodo";

function App() {
  return (
    //TodoListProvider - Context API
    <TodoListProvider>
      <div className="container">
        <div className="todo-list-container">
          <h1 className="header">Todo List</h1>
          {/* Add todo form */}
          <AddTodo />
          {/* Filter todo section */}
          <FilterTodo />
          <ul className="todo-list">
            {/* Todo list component */}
            <TodoList />
          </ul>
        </div>
      </div>
    </TodoListProvider>
  );
}

export default App;
