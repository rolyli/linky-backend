const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    username: String,
    user_id: String,
    attachment: Array,
    comment: Array,
    channel: String,
    comment_count: Number,
    upvote: Array,
    downvote: Array
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema, "post");
