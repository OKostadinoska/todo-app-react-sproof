import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    fetch(`http://localhost:8000/todos/${todo.id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    fetch(`http://localhost:8000/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
