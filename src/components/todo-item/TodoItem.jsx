import "./todo-item.css";

function TodoItem({ id, text, deleteTodoItem }) {
  return (
    <div className="todo__item">
      <h1>{text}</h1>
      <button onClick={() => deleteTodoItem(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
