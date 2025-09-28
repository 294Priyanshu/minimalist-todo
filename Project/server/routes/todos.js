const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// POST create todo
router.post('/', async (req, res) => {
  const { text, priority, reminderAt } = req.body;
  const todo = new Todo({ text, priority, reminderAt });
  const saved = await todo.save();
  res.status(201).json(saved);
});

// PATCH update todo
router.patch('/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
