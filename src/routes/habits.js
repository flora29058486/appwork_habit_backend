import {
  getHabit,
  postHabit,
  putHabit,
  getWinStatus,
} from "../controllers/habit.js";
import express from "express";

const router = express.Router();

// GET /habit/:userid 
router.get("/:userid", getHabit);
// POST /habit/:userid
router.post("/:userid", postHabit);
// PUT /habit/dailycheck/:habitid
router.put("/dailycheck/:habitid", putHabit);
// GET /habit/closehabit/:habitid
router.get("/closehabit/:habitid", getWinStatus);

export default router;
