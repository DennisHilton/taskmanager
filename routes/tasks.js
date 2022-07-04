const express = require ('express');
const { getAllTasks, getTask, createTasks, updateTask, deleteTask} = require('../controllers/tasks');
const router = express.Router();


router.get('/', getAllTasks)
router.get('/:id', getTask)
router.post('/', createTasks)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask )


module.exports = router;
