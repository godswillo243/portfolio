import { Router } from "express";
import { getAuthUser, login, signup } from "../controllers/auth.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import { signupValidator } from "../middlewares/validators/auth.validator.js";
const router = Router();

router.get("/user", protectRoute, getAuthUser);
router.post("/signup", signup);
router.get("/login", login);

export default router;
