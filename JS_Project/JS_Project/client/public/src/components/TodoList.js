import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.task}
          <button onClick={() => deleteTodo(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
