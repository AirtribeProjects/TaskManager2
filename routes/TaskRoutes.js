const express = require('express');
const router = express.Router();
const taskController = require("../Controller/TaskController");
const verifyToken = require('../middleware/authJWT');

//create a task
router.post('/', verifyToken, taskController.createTask);

//get task details
router.get('/', verifyToken, taskController.getAllTasks);

//update task details
router.put('/:id', verifyToken, taskController.updateTask);

//assign task to teams
router.post('/:id/assign', verifyToken, taskController.assignTask);

//delete task 
router.delete('/:id', verifyToken, taskController.deleteTask);

module.exports = router;
