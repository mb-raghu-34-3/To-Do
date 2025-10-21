import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo,
} from '../redux/actions/todoActions'; 
import { logout } from '../redux/actions/loginActions';

const ToDoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const user = useSelector(state => state.auth)
  const [listTodo,setListDoTo] = useState(todos)
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Fetch todos on component mount
  useEffect(() => {
    dispatch(fetchTodos(user.id));
  }, []);

  useEffect(()=>{
    setListDoTo(todos)
  },[todos])

  // Add new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({'text':newTodo, 'id':user.id}));
      setNewTodo('');
    } 
  };

  // Start editing a todo
  const handleStartEditing = (todo) => {
    setEditingTodo(todo);
    setEditingText(todo.text);
  };

  // Save edited todo
  const handleSaveTodo = () => {
    if (editingText.trim() !== '') {
      dispatch(editTodo(editingTodo.id, editingText));
      setEditingTodo(null);
      setEditingText('');
    }
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // Toggle completion status of a todo
  const handleToggleTodo = (todoData) => {
    dispatch(toggleTodo(todoData));
  };

  // Logout functionality (reset todos in this example)
  const handleLogout = () => {
    alert('Logging out...');
    dispatch(logout())
    localStorage.clear(); 
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar with Logout Button */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ToDo App</a>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content - Centering h1 and To-Do List */}
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1 className="mb-4">{user.name}'s To Do List</h1>

        {/* Input for Adding Todo */}
        <div className="mb-3 w-50">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new to-do"
          />
          <button className="btn btn-primary mt-2 w-100" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>

        {/* List of Todos */}
        <ul className="list-group w-50">
          {listTodo.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              {/* Editing Todo */}
              {editingTodo && editingTodo.id === todo.id ? (
                <div className="d-flex w-100">
                  <input
                    type="text"
                    className="form-control"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button className="btn btn-success ms-2" onClick={handleSaveTodo}>
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <span className={todo.completed ? 'text-decoration-line-through' : ''}>
                    {todo.text}
                  </span>
                  <div>
                    {/* Toggle Completion */}
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleToggleTodo({todoId:todo.id,completed: todo.completed})}
                    >
                      {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    {/* Edit and Delete Buttons */}
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleStartEditing(todo)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(todo.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-3 bg-light">
        <p>&copy; 2025 ToDo App - RNY. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ToDoApp;
