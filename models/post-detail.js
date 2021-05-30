const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    title: String,
    id: mongoose.Types.ObjectId, //parent post id
    username: String,
    user_id: String,
    text: String,
    attachment: Array,
    comment: Array,
    channel: String,
    upvote: Array,
    downvote: Array,
    comment_count: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostDetail", postSchema, "post-detail");
