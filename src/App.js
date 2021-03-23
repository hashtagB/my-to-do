import React from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
