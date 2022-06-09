import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemText } from '@mui/material';
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
    <ListItem sx={{ mr: 22 }}>
      <ListItemText
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
      >
        {text}
        <IconButton sx={{ ml: 11 }} onClick={completeHandler}>
          <CheckCircleIcon color="success" />
        </IconButton>
        <IconButton onClick={deleteHandler}>
          <DeleteIcon color="warning" />
        </IconButton>
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
