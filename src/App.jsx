import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoItem from "./components/todo-item/TodoItem";
function App() {
  const [lists, setLists] = useState([]);

  const getTodoItem = (item) => {
    lists.push(item);
    setLists([...lists]);
  };

  const deleteTodoItem = (id) => {
    const deletedTodo = lists.filter((item) => item.id !== id);
    setLists(deletedTodo);
  };

  return (
    <div className="container">
      <Form getTodoItem={getTodoItem} />
      <div className="todo__content">
        {lists.map((list) => (
          <TodoItem key={list.id} {...list} deleteTodoItem={deleteTodoItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
