import { Router } from "express";
import PostController from "../controller/PostController.js";
const router = new Router();

router.get("/", PostController.getAll);

router.post("/", PostController.create);

export default router;
