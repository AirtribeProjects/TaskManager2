
const {createTask,getAllTasks,updateTask,assignTask, deleteTask} = require('../serives/taskServices');
const TaskController = {
    /*
        create a new task using title,description, due date
    */
    createTask : async(req,res) => {
        try{
            const taskInfo = req.body;
            const task = await createTask(taskInfo,req.user.userId);
            res.status(201).json(task);
        } catch(error) {
            res.status(500).json({ message: 'Error occured while task creation' + error });
        }
    },
    /*
        get all the task
    */
    getAllTasks: async(req,res) => {
        try{
            const { status } = req.query;
            let filter = {
                $or: [
                  { assignedTo: req.user.id },
                  { createdBy: req.user.id }
                ]
            };
            if (status) {
                filter.status = status;
            }
            const task = await getAllTasks(filter);
            if(task.length == 0) {
                return res.status(404).json({message:'no task assigned to the user'});
            }
            res.status(200).json(task);
        } catch(error) {
            res.status(500).json({ message: 'Error occured getting the task details' + error });
        }
    },
    /*
       update the task details
    */
    updateTask: async(req,res) => {
        try{
            const taskId = req.params.id;
            const taskInfo = req.body;
            const task = await updateTask(taskId,taskInfo);
            if(task.code == 404){
                return res.status(404).json(task.message);
            }
            res.status(200).json(task);
        } catch (error){
            res.status(500).json({ message: 'Error occured updating the task' + error });
        }
    },
    //delete the task
    deleteTask: async(req,res) => {
        try{
            const taskId = req.params.id;
            const task = await deleteTask(taskId);
            if(task.code == 404){
                return res.status(404).json(task.message);
            }
            res.status(200).json("task removed");
        } catch (error){
            res.status(500).json({ message: 'Error occured deleting the task' + error });
        }
    },
    //assign task to team member
    assignTask: async(req,res) => {
        try{
            const { taskId } = req.params;
            const { assignedTo } = req.body;
            const task = await assignTask(userId,taskId,assignedTo);
            if(task.code === 404 === 404 || task.code === 404 ){
                return res.status(task.code).json(task.message);
            }
            res.status(200).json(task);
        } catch (error){
            res.status(500).json({ message: 'Error occured updating the task' + error });
        }
    }
}
module.exports = TaskController;