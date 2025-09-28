import React from 'react';

const priorityColor = (p) =>
  p === 'high' ? 'border-red-400' :
  p === 'medium' ? 'border-yellow-400' : 'border-green-400';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`p-3 rounded border ${priorityColor(todo.priority)} flex justify-between items-center`}>
      <label className={`flex items-center gap-3 ${todo.done ? 'opacity-60 line-through' : ''}`}>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo._id, { done: !todo.done })} />
        <div>
          <div className="font-medium">{todo.text}</div>
          {todo.reminderAt && (
            <div className="text-xs text-gray-500">
              Reminder: {new Date(todo.reminderAt).toLocaleString()}
            </div>
          )}
        </div>
      </label>
      <button onClick={() => onDelete(todo._id)} className="text-sm px-2 py-1 border rounded">delete</button>
    </li>
  );
}
