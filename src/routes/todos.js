const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  try {
    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
