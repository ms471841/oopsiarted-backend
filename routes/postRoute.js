import express from "express";
import { getAllPost, createPost } from "../controllers/postController.js";

// import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/getpost").get(getAllPost);

router.route("/createpost").post(createPost);

export default router;
