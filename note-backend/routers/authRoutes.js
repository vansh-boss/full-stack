import express from "express";
import { register, login, logout, me } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import usersRoutes from "./usersRoutes.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, me);
router.use("/user", usersRoutes);


export default router;
