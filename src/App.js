import './App.css';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const baseUrl = 'http://localhost:8000';

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={3}>
        <header>
          <h1 className="header">Sproof Todo List </h1>
        </header>
      </Grid>
      <Grid item xs={3}>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          baseUrl={baseUrl}
        />
      </Grid>
      <Grid item xs={3}>
        <TodoList baseUrl={baseUrl} todos={todos} setTodos={setTodos} />
      </Grid>
    </Grid>
  );
}

export default App;
