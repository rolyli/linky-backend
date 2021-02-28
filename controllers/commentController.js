const Commment = require("../models/comment");
const Post = require("../models/post");
const auth = require("../utils/auth");
const PostDetail = require("../models/post-detail");
exports.comment_post = (req, res) => {
  // Runs after authenticateToken middleware that returns user
  Post.findById(req.params.id, (error, result) => {
    if (error) {
      console.error(error);
    }
    if (result.comment.length < 4) {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            comment: {
              username: req.user.username,
              user_id: req.user.user_id,
              text: req.body.text,
            },
          },
        },
        (error, result) => {
          if (error) {
            console.error(error);
          }
          res.end();
        }
      );
    }
  });

  PostDetail.findOneAndUpdate(
    { id: req.params.id },
    {
      $push: {
        comment: {
          username: req.user.username,
          user_id: req.user.user_id,
          text: req.body.text,
        },
      },
    },
    (error, result) => {
      if (error) {
        console.error(error);
      }
      res.end();
    }
  );
};
