import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    // friendList: [
    //   {
    //     friendId: {
    //       type: String,
    //       required: true,
    //     },
    //     friendName: {
    //       type: String,
    //       required: true,
    //     },
    //   }
    // ],
    lastLoginTime: {
      type: Date,
      required: true,
    },
  }
);

const User = mongoose.model('User', UserSchema);
export default User;
