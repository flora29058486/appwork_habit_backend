import {
  postBet,
  putBet,
} from "../controllers/bets.js";
import express from "express";

const router = express.Router();

// POST /bet/:userId
router.post("/:userid", postBet);
// PUT /bet/:betid
router.put("/:betid", putBet);

export default router;
