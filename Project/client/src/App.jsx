import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/todos';

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/service-worker.js');
  }
}

function requestNotificationPermission() {
  if ('Notification' in window) Notification.requestPermission();
}

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    registerSW();
    requestNotificationPermission();
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  const addTodo = async (payload) => {
    const res = await axios.post(API, payload);
    setTodos([res.data, ...todos]);
  };

  const updateTodo = async (id, patch) => {
    const res = await axios.patch(`${API}/${id}`, patch);
    setTodos(todos.map(t => t._id === id ? res.data : t));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-4">Minimalist To-Do</h1>
      <NewTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}
