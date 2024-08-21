import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default TodoForm;