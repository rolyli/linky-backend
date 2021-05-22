const Post = require("../models/post");
var PostDetail = require("../models/post-detail");
var ObjectId = require("mongoose").Types.ObjectId;

exports.post_upvote = (req, res) => {
  Post.findById(req.params.id, (error, result) => {
    if (error) {
      console.error(error);
    }

    if (result.upvote.includes(req.token.user_id)) {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $pull: {
            upvote: req.token.user_id,
          },
        },
        (error, result) => {
          if (error) {
            console.error(error);
            res.send("Error voting");
          }
          res.send("0").end();
        }
      );
    } else {
      Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            upvote: req.token.user_id,
          },
        },
        (error, result) => {
          if (error) {
            console.error(error);
          }
          res.send("1").end();
        }
      );
    }
  });
};

// requires auth from authenticateToken()
exports.post_post = (req, res) => {
  Post.create(
    {
      title: req.body.title,
      username: req.token.username,
      user_id: req.token.user_id,
      text: req.body.text,
      attachment: req.body.attachment,
    },
    (error, result) => {
      PostDetail.create({
        title: req.body.title,
        username: req.token.username,
        user_id: req.token.user_id,
        id: result._id,
        text: req.body.text,
        attachment: req.body.attachment,
        comment: [],
      });
    }
  );
  res.end();
};

exports.post_delete = async (req, res) => {
  // Delete from both Post and PostDetail

  await PostDetail.deleteMany(
    { id: ObjectId(req.params.id) },
    (error, result) => {
      if (error) {
        console.error(error);
      }
    }
  );
  await Post.deleteMany({ _id: ObjectId(req.params.id) }, (error, result) => {
    if (error) {
      console.error(error);
    }
  });

  res.end();
};

exports.post_detail_list = (req, res) => {
  PostDetail.find({}, (error, result) => {
    res.json(result);
  });
};

exports.post_list = (req, res) => {
  const page = req.params.page * 10 || 0;

  Post.find(
    {},
    null,
    { sort: { createdAt: -1 }, skip: page, limit: 10 },
    (error, result) => {
      if (error) {
        console.error(error);
      }

      res.json(result);
    }
  );
};

exports.post_detail = (req, res) => {
  const result = PostDetail.find(
    { id: ObjectId(req.params.id) },
    (error, result) => {
      if (error) {
        console.error(error);
      }

      res.json(result);
    }
  );
};
