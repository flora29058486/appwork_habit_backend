import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

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
      {
        date: {
          type: Date,
          required: true,
        },
        checked: {
          type: Boolean,
          required: true,
        },
      },
    ],
    habitTitle: {
      type: String,
      required: true,
    },
  }
);

const Habit = mongoose.model('Habit', HabitSchema);
export default Habit;
