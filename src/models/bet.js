import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const BetSchema = new mongoose.Schema(
  {
    betId: {
      type: ObjectId,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
    stake: {
      type: Number,
      required: true,
      min: 0,
    },
    betPartner: {
      type: String,
    },
  }
);

const Bet = mongoose.model('Bet', BetSchema);
export default Bet;
