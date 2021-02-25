const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    text: String,
    attachment: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema, "post");
