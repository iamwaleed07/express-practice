import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["online", "offline", "away", "do not disturb"],
      default: "offline",
    },
    bio: {
      type: String,
      default: "",
      maxlength: 500,
      trim: true,
      validate: {
        validator: (value) => value.length <= 500,
        message: "Bio must not exceed 500 characters",
      },
    },
    showProfile: {
      type: Boolean,
      default: true,
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    chat: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
