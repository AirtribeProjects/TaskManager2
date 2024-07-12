const { updateTask, assignTask } = require("../Controller/TaskController");
const Task = require("../Model/TaskModel");
const User = require("../Model/userModel");
const Team = require('../Model/TeamModel');

const TaskService = {

    createTask: async(TaskDetals,createdBy)=>{
        const task = new Task({title:TaskDetals.title,description:TaskDetals.description,dueDate:TaskDetals.dueDate,createdBy:createdBy});
        await task.save();
        return task;
    },

    getAllTasks: async (filter) => {
        const task = await Task.find(filter);
        return task ;
    },

    updateTask: async(taskId,taskInfo) => {
        const task = await Task.findById(taskId);
        if(!task){
            return {
                code: 404,
                message:" task Not found"
            }
        }
        task.title = taskInfo.title || task.title;
        task.description = taskInfo.description || task.description;
        task.dueDate = taskInfo.dueDate || task.dueDate;
        task.status = taskInfo.status || task.status;
        task.assignedTo = taskInfo.assignedTo || task.assignedTo;
        await task.save();
        return task;
    },
    deleteTask: async(taskId) => {
        const task = await Task.findById(taskId);
        if(!task){
            return {
                code: 404,
                message:" task Not found"
            }
        }
        await task.deleteOne();
        return {message:"task removed"}
    },
    assignTask: async(userId,taskId,assigned) => { 
    const task = await Task.findById(taskId);
    if(!task){
        return {
            code: 404,
            message:" task Not found"
        }
    }

    // Find the team that the task belongs to
    const team = await Team.findById(task.team._id);
    if(!team){
        return {
            code: 404,
            message:" team Not found"
        }
    }

    // Check if the current user is a member of the team
    if (!team.members.includes(userId)) {
        return {
            code: 401,
            message:"user not aithorised"
        }
    }

    // Check if the user to be assigned is a member of the team
    if (!team.members.includes(assigned)) {
        return {
            code: 401,
            message:"User not part of the team"
        }
    }

    // Assign the task to the user
    task.assignedTo = assigned;
    await task.save();
    return task;
    },

}
module.exports = TaskService;