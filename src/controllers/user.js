import UserSchema from "../models/user.js";
import mongoose from "mongoose";

import { genericErrorHandler } from "../utils/errors.js";

// POST /user/
export const postUser = async (req, res) => {
  const { userName } = req.body;

  try {
    const newUser = {
      userId: new mongoose.Types.ObjectId(),
      userName: userName,
      lastLoginTime: new Date(),
    }

    await UserSchema.create(newUser);

    res.status(200).json(newUser);
  } catch (error) {
    genericErrorHandler(error, res);
  }
};
