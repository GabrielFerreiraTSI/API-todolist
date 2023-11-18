const express = require("express");
const tasksController = require("./controllers/tasksControllers");

const router = express.Router();
const tasksMiddlewares = require("./middlewares/tasksMiddlewares");

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddlewares.validateFieldTitle, tasksController.createTasks);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", tasksMiddlewares.validateFieldStatus, tasksController.updateTask);

module.exports = router;