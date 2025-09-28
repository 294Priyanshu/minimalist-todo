const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  done: { type: Boolean, default: false },
  reminderAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);
