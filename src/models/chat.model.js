import mongoose from "mongoose"

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true,
      },
    ],
    lastMessage: {
      type: String,
    },
    lastMessageAt: {
      type: Date,
      default: Date.now,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    chatName: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
)

export const Chat = mongoose.model("Chat", chatSchema)
