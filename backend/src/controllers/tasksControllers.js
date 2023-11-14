const tasksModel = require("../modules/tasksModel");

const getAll = async (request, response) => {
    const [tasks] = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createTasks = async (task) => {
    const {title} = task;
    const query = "INSERT INTO tasks(id, title, status, created_at) VALUES(?, ?, ?)";
    const createdTask = await connection.execute(query, [title, "pendente", "data"]);
}

module.exports = {
    getAll,
    createTasks
}