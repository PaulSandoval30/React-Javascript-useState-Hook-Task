import { useState } from 'react'

import '../CSS/InputArea.css'


function InputArea({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    addTodo(task);
    setTask("");
  };
  return (
    <>
     <div className="input-panel">
        <h2>Add a new task</h2>
        <div className="input-group">
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter task here...' />
        </div>
        <button className='add-task-btn' onClick={handleAddTodo}>Add Task</button>
      </div>
    </>
  )
}

export default InputArea