import React, { useState } from 'react';

export default function NewTodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('low');
  const [reminderAt, setReminderAt] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, priority, reminderAt: reminderAt || null });
    setText('');
    setPriority('low');
    setReminderAt('');
  };

  return (
    <form onSubmit={submit} className="space-y-2 mb-4">
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Task..." className="w-full p-2 rounded border" />
      <div className="flex gap-2">
        <select value={priority} onChange={e => setPriority(e.target.value)} className="p-2 rounded border">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="datetime-local" value={reminderAt} onChange={e => setReminderAt(e.target.value)} className="p-2 rounded border" />
        <button type="submit" className="px-4 py-2 rounded bg-black text-white">Add</button>
      </div>
    </form>
  );
}
