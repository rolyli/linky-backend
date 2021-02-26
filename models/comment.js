const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: String,
    user_id: String,
    text: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema, "comment");

