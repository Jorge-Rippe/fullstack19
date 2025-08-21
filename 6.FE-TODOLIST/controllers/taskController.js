import taskService from "../services/taskService.js";

const getTask = (req, res) => {
    const data = taskService.getTask();
    res.send(data);
};

const createTask = (req, res) => {
    const body = req.body;
    console.log(body);
    taskService.createTask(body);
    res.send("tarea creada");
};

export default {
    getTask,
    createTask
};