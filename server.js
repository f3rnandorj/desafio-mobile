const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const tasksFilePath = path.resolve(__dirname, "tasks.json");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

function saveTasksToFile(data) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(data, null, 2), "utf-8");
}
function loadTasksFromFile() {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  return JSON.parse(data);
}

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get("/tasks", (req, res) => {
  const tasksContainer = loadTasksFromFile();
  return res.status(200).json(tasksContainer);
});

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get("/task/:id", (req, res) => {
  const id = req.params.id;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Bad request." });
  }

  const { tasks } = loadTasksFromFile();
  const task = tasks.find((item) => item.id === id);

  if (task) {
    return res.status(200).json({ task });
  } else {
    return res.status(404).json({ message: "Not found." });
  }
});

/**
 * PUT /task/update/
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put("/task/update", (req, res) => {
  const id = req.body.id;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Bad request" });
  }

  const tasksContainer = loadTasksFromFile();
  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    saveTasksToFile(tasksContainer);
    return res.status(200).json({ task });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
});

/**
 * POST /task/create
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post("/task/create", (req, res) => {
  const tasksContainer = loadTasksFromFile();

  const task = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
  };

  tasksContainer.tasks.push(task);
  saveTasksToFile(tasksContainer);

  return res.status(201).json({
    message: "Resource created",
  });
});

/**
 * DELETE /task/delete
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete("/task/delete", (req, res) => {
  const id = req.body.id;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Bad request" });
  }

  const tasksContainer = loadTasksFromFile();
  const taskIndex = tasksContainer.tasks.findIndex((item) => item.id === id);

  if (taskIndex !== -1) {
    tasksContainer.tasks.splice(taskIndex, 1);
    saveTasksToFile(tasksContainer);

    return res.status(200).json({
      message: "Deleted successfully",
    });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
});

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
