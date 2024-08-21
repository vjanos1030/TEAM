import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Bevásárolni', isDone: true },
    { id: 2, text: 'Kitakarítani', isDone: false },
    { id: 3, text: 'Kutyát megetetni', isDone: true },
  ]);

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id="main-container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
