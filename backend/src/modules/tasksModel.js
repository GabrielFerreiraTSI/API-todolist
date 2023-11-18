const connection = require("./connection");

const getAll = async () => { 
    const tasks = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTasks = async (task) => {
    const {title} = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = `INSERT INTO tasks VALUES('', '${title}', 'pendente', '${dateUTC}')`;
    const createdTask = await connection.execute(query);
    return {insertId: createdTask.insertId};
}

const deleteTask = async (id) => {
    const query = `DELETE FROM tasks WHERE id = ${id}`;
    const removedTask = await connection.execute(query);
    return removedTask;
}

const updateTask = async (id, task) => {
    const {title, status} = task;
    const query = `UPDATE tasks SET title = '${title}', status = '${status}' WHERE id = ${id}`;
    const updatedTask = await connection.execute(query);
    return updatedTask;
}

module.exports = {
    getAll,
    createTasks,
    deleteTask,
    updateTask
}