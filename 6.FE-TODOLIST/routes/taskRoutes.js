import {Router} from "express";

import taskController from "../controllers/taskController.js";

const router = new Router();

router
.get("/", taskController.getTask)
.post("/", taskController.createTask);


export default router;
