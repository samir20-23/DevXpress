const express = require("express");
const router = express.Router();

let todos = [
    { id: 1, task: "Learn Express.js", done: false },
    { id: 2, task: "Build a project", done: false },
];

router.get("/", (req, res) => {
    res.json(todos);
});

router.get("/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

router.post("/", (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        done: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (req.body.task !== undefined) {
        todo.task = req.body.task;
    }

    if (req.body.done !== undefined) {
        todo.done = req.body.done;
    }

    res.json(todo);
});

router.delete("/:id", (req, res) => {
    todos = todos.filter((t) => t.id !== parseInt(req.params.id));
    res.json({ message: "Todo deleted" });
});

module.exports = router;