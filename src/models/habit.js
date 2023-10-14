import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const DateCheckSchema = new mongoose.Schema(
  {
    date: String,
    checked: Boolean
  }
);

const HabitSchema = new mongoose.Schema(
  {
    habitId: {
      type: ObjectId,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
    betId: {
      type: ObjectId,
    },
    createAt: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    dateCheck: [
      DateCheckSchema,
    ],
    habitTitle: {
      type: String,
      required: true,
    },
  }
);

const Habit = mongoose.model('Habit', HabitSchema);
export default Habit;
