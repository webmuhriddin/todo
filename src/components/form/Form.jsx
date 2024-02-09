import { useState } from "react";
import "./form.css";

function Form({ getTodoItem }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const todoData = {
      id: new Date().getTime().toString(),
      text: text,
    };
    getTodoItem(todoData);
    setText("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          style={error ? { borderColor: "crimson" } : { borderColor: "gray" }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Send</button>
      </form>
      {error ? (
        <span className="error">please fill in all inputs!!!</span>
      ) : null}
    </div>
  );
}

export default Form;
