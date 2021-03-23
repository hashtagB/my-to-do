import React, { useState } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}

export default App;
