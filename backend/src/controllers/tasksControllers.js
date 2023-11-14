const tasksModel = require("../modules/tasksModel");

const getAll = async (request, response) => {
    const [tasks] = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createTasks = async (request, reponse) => {
    //const createdTask = await tasksModel.createTasks();
    return reponse.status(200).json(createdTask);
}

module.exports = {
    getAll,
    createTasks
}