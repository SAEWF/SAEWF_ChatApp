import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const messageSchema = new Schema(
  {
    sender: { type: ObjectId, ref: "User" },
    fileUrl: { type: String, trim: true },
    file_id: { type: String, trim: true },
    file_name: { type: String, trim: true },
    content: { type: String, trim: true },
    chat: { type: ObjectId, ref: "Chat" },
    time: { type: String },
    latitude: { type: String },
    longitude: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
