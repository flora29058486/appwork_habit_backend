import UserSchema from "../models/user.js";
import HabitSchema from "../models/habit.js"
import BetSchema from "../models/bet.js";
import mongoose from "mongoose";

import { genericErrorHandler } from "../utils/errors.js";

// GET /habit/:userid 
export const getHabit = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const user = await UserSchema.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userHabits = await HabitSchema.find({ userId: userId });

    res.status(200).json(userHabits);
  } catch (error) {
    genericErrorHandler(error, res);
  }
};

// POST /habit/:userId
export const postHabit = async (req, res) => {
  const { userid } = req.params;
  const { dueDate, habitTitle } = req.body;

  if (!userid) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const user = await UserSchema.findOne({userId: userid});

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  try {
    // create a Bet
    const betId = new mongoose.Types.ObjectId()
    const newBet = new BetSchema({
      betId: betId,
      userId: userid,
      stake: 0,
      betPartner: ""
    });
    await newBet.save();

    // create Habit with the bet above
    const newHabit = {
      habitId: new mongoose.Types.ObjectId(),
      userId: userid,
      betId: betId,
      createAt: new Date(),
      dueDate: dueDate,
      status: 'uncheck',
      dateCheck: [],
      habitTitle: habitTitle,
    }
    await HabitSchema.create(newHabit);

    res.status(200).json(newHabit);

  } catch (error) {
    genericErrorHandler(error, res);
  }
};

// PUT /habit/dailycheck/:habitid
export const putHabit = async (req, res) => {
  const { habitid } = req.params;

  if (!habitid) {
    return res.status(400).json({ error: 'Habit Id is required' });
  }

  try {
    const habit = await HabitSchema.findOne({ habitId: habitid });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    if (habit.status != 'uncheck') {
      return res.status(400).json({ error: 'Status is not "uncheck"' });
    }

    habit.status = 'checked';
    await habit.save();

    res.status(200).json({message: 'Checked'});
  } catch (error) {
    genericErrorHandler(error, res);
  }
};

// GET /habit/closehabit/:habitid
export const getWinStatus = async (req, res) => {
  const { habitid } = req.params;

  if (!habitid) {
    return res.status(400).json({ error: 'Habit Id is required' });
  }

  try {
    const habit = await HabitSchema.findOne({ habitId: habitid });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    if (habit.status != 'close') {
      return res.status(400).json({ error: 'Habit status is not "close"' });
    }

    let habitSuccess;
    for (const date in habit.dateCheck) {
      if (dateCheck[date] !== true) {
        habitSuccess = false;
        return;
      }
      habitSuccess = true;
      return;
    };

    habit.status = `${habitSuccess}`;
    await habit.save();

    res.status(200).json({ message: `Habit ${habitSuccess ? "win" : "lose"}` });
  } catch (error) {
    genericErrorHandler(error, res);
  }
};
