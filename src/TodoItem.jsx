import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.isDone ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
      />
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;    