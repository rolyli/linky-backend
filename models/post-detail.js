const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    id: mongoose.Types.ObjectId, //parent post id
    username: String,
    user_id: String,
    text: String,
    attachment: Array,
    comment: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostDetail", postSchema, "post-detail");
