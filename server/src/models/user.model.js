import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length <= 50,
        message: "Name must not exceed 50 characters",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
        message: "Username must only contain alphanumeric characters",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default:
        "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    bio: {
      type: String,
      validate: {
        validator: (value) => value.length <= 500,
        message: "Bio must not exceed 500 characters",
      },
    },
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
