import "../CSS/listArea.css";

function ListArea({ todos, setTodos }) {
  const deleteTodo = (index) => {
    const newTodos = [];
  
    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodos.push(todos[i]);
      }
    }
  
    setTodos(newTodos);
  };
  return (
    <>
      <div className="list-panel">
        {todos.length === 0 && <h2 className="empty-list-label">No tasks added yet.</h2>}
        {todos.map((todo, index) => (
          <div className="task" key={index}>
            <div className="checkbox-list-wrapper">
              <input type="checkbox" id={`checkbox-${index}`} />
              <label htmlFor={`checkbox-${index}`} className="custom-checkbox">
                <ion-icon name="checkmark-outline"></ion-icon>
              </label>
              <label htmlFor={`checkbox-${index}`} className="task-name">
                {todo}
              </label>
            </div>
            <button
              className="delete-task-btn"
              onClick={() => deleteTodo(index)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListArea;
