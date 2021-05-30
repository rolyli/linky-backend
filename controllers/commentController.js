const Commment = require("../models/comment");
const Post = require("../models/post");
const auth = require("../utils/auth");
const PostDetail = require("../models/post-detail");
var ObjectId = require("mongoose").Types.ObjectId;

const { isValidObjectId } = require("mongoose");
const comment = require("../models/comment");
exports.comment_post = (req, res) => {
  // Runs after authenticateToken middleware that returns user

  // If request is to comment on a comment
  if (req.body.comment_id) {
    PostDetail.find({ id: req.params.id }, (error, result) => {
      if (error) {
        console.error(error);
      }

      // Recursively search for comment_id within comment array and return comment tree with new comment inserted.
      const updateComment = (new_comment, comment_array, comment_id) => {
        return comment_array.map((c) => {
          if (c.comment_id == comment_id) {
            if (c.comment) {
              c.comment.push(new_comment);
            } else {
              c.comment = [];
              c.comment.push(new_comment);
            }
            return c;
          } else if (c.comment) {
            c.comment = updateComment(new_comment, c.comment, comment_id);
            return c;
          } else {
            return c;
          }
        });
      };

      const new_comment = {
        comment_id: new ObjectId(),
        username: req.token.username,
        user_id: req.token.user_id,
        text: req.body.text,
      };

      PostDetail.findOneAndUpdate(
        { id: req.params.id },
        {
          $set: {
            comment: updateComment(
              new_comment,
              result[0].comment,
              req.body.comment_id
            ),
          },
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
    });
  } else {
    PostDetail.findOneAndUpdate(
      { id: req.params.id },
      {
        $push: {
          comment: {
            comment_id: new ObjectId(),
            username: req.token.username,
            user_id: req.token.user_id,
            text: req.body.text,
          },
        },
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
  }

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

  /* legacy
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
              id: new ObjectId(),
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
  */
};
