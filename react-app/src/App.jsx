import { useState } from 'react'
import './App.css'

import ListArea from './components/ListArea.jsx'
import InputArea from './components/InputArea.jsx'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim()) {
      setTodos([...todos, task]);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <div className="header">
            <h1>ToDo List</h1>
            <h4>React Javascript useState Hook Training</h4>
          </div>
          <div className="wrapper">
            <ListArea todos={todos} setTodos={setTodos} />
            <InputArea addTodo={addTodo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
