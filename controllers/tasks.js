const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({task});
}

const createTasks = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({ msg: error})
                    }
    }

const getTask = async (req, res) => {
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        if (!task) {
            res.status(404).send(`No task with id: ${taskId}` )
        }
        res.status(201).json({task})
    } catch (error) {
    res.status(500).json({msg : error})
    }
}
    
const updateTask = async (req,res) => {
    try {
    const {id: taskID} = req.params
    const upTask = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runVlidators: true});
    res.status(200).send(upTask);
    } catch (error) {
        console.log(error);
    }
   
    }

const deleteTask = async (req, res) => {
    try {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    res.status(500).json({task})
    }
    catch (error) {
        res.status(500).send({msg: error});
    }
}


module.exports = {
    getAllTasks,
    getTask,
    createTasks,
    updateTask,
    deleteTask    
};
