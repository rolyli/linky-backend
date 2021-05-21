const Commment = require("../models/comment");
const Post = require("../models/post");
const auth = require("../utils/auth");
const PostDetail = require("../models/post-detail");
exports.comment_post = (req, res) => {
  // Runs after authenticateToken middleware that returns user

  Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: {
        comment_count: 1,
      },
    },

    (error, result) => {
      if (error) {
        console.error(error);
      }
      res.end();
    }
  );

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
              username: req.token.username,
              user_id: req.token.user_id,
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
          username: req.token.username,
          user_id: req.token.user_id,
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
