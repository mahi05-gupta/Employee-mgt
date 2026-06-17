import express from "express";
import {
  register,
  login,
  getMe,
  updateUser,
} from "../controllers/authController.js";

const router = express.Router();

// AUTH ROUTES
router.post("/register", register);
router.post("/login", login);

// USER PROFILE ROUTES
router.get("/me", getMe);
router.put("/update", updateUser);

export default router;