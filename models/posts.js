import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter post name"],
  },
  imageUrl: {
    type: String,
    required: [true, "please enter imgurl"],
    unique: true,
  },
});

export const Posts = mongoose.model("Posts", schema);
