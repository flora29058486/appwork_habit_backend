import {
  postBet,
  putBet,
} from "../controllers/bets.js";
import express from "express";

const router = express.Router();

// POST /bet/:userid
router.post("/:userid", postBet);
// PUT /bet/:betid
router.put("/:betid", putBet);

/**
 * @swagger
 * /api/bet/{userid}:
 *   post:
 *     summary: Create a new bet.
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: Bet created successfully.
 *       '400':
 *         description: Bad request.
 *       '404':
 *         description: User not found.
 */

/**
 * @swagger
 * /api/bet/{betid}:
 *   put:
 *     summary: Setup stake amount and bet title.
 *     parameters:
 *       - in: path
 *         name: betid
 *         required: true
 *         description: Enter the betid.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Stake is a integer bigger than 0, betPartner currently is a string.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stake:
 *                 type: integer
 *                 format: int64
 *                 minimum: 0
 *               betPartner:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully change the stake amount and setup bet title.
 *       '400':
 *         description: Bet ID is required.
 *       '404':
 *         description: Bet not found.
 */




router.post("/:userid", postBet);

export default router;
