import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p className="text-gray-500">No tasks yet.</p>;
  return (
    <ul className="space-y-2">
      {todos.map(t => (
        <TodoItem key={t._id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
