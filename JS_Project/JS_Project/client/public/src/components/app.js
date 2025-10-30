import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTodo = () => {
    if (!task.trim()) return;
    axios.post("http://localhost:5000/add", { task })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.log(err));
    setTask("");
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 MERN To-Do List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
