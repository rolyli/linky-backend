const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    id: mongoose.Types.ObjectId,
    text: String,
    attachment: Array,
    comment: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostDetail", postSchema, "post-detail");
