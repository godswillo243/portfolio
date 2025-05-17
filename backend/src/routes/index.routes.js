import { Router } from "express";
import authRoutes from "./auth.routes.js";
import postsRoutes from "./post.routes.js";
import usersRoutes from "./user.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/posts", postsRoutes);

export default router;
