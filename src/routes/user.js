import {
  postUser,
} from "../controllers/user.js";
import express from "express";

const router = express.Router();

// POST /user/
router.post("/", postUser);

export default router;
