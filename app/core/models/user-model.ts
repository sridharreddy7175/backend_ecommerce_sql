
import { model, Schema, Document } from "mongoose";
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  accountType: boolean;
  phone: string;
  profileUrl:string;
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"],
    },
    password: {
      type: String,
      required: true,
    },
    profileUrl:{
      type: String,
      default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  },
  { timestamps: true }
);

export const UserModel = model<IUser>("UserModel", userSchema);