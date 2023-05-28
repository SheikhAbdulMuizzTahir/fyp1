import Express from "express";
import { handleLogin, handleRegister } from "../controllers/authController.js";

export const router = Express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
