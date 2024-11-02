import { Router } from "express";
import { authController } from "./controller.js";

const authRouter = Router();
authRouter.get("/signup", authController.signup);
authRouter.get("/login", authController.login);
authRouter.get("/logout", authController.logout);

export default authRouter;
