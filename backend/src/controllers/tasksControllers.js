const connection = require("../modules/connection");
const tasksModel = require("../modules/tasksModel");

const getAll = async (request, response) => {
    const [tasks] = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createTasks = async (request, response) => {
    const createdTask = await tasksModel.createTasks(request.body);
    return response.status(201).json(createdTask);
}

const deleteTask = async (request, response) => {
    const {id} = request.params
    await tasksModel.deleteTask(id);
    return response.status(204).json({message: "ok"});
}

const updateTask = async (request, response) => {
    const {id} = request.params
    await tasksModel.updateTask(id, request.body);
    return response.status(204).json({message: "ok"});
}

module.exports = {
    getAll,
    createTasks,
    deleteTask,
    updateTask
}