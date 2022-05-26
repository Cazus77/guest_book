import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, require: true },
  text: { type: String, require: true },
  createData: { type: Date, default: new Date() },
});

export default mongoose.model("Post", Post);
