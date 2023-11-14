const connection = require("./connection");

const getAll = async () => { 
    const tasks = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTasks = async (task) => {
    const {title} = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = "INSERT INTO tasks(id, title, status, created_at) VALUES(?, ?, ?)";
    const createdTask = await connection.execute(query, [title, "pendente", dateUTC]);
    return createdTask;
}

module.exports = {
    getAll,
    createTasks
}