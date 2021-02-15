const Post = require("../models/post");
var PostDetail = require("../models/post-detail");
var ObjectId = require("mongoose").Types.ObjectId;

exports.post_post = (req, res) => {
  console.log(req.body)

  Post.create({
    text: req.body.text,
    attachment: req.body.attachment,
  }, (error, result) => {
    PostDetail.create({
    id: result._id,
    text: req.body.text,
    attachment: req.body.attachment,
    comment: [],
    })
  })
}

exports.post_detail_list = (req, res) => {
  PostDetail.find({}, (error, result) => {
    res.json(result)
  })
}

exports.post_list = (req, res) => {
  const page = req.params.page * 10 || 0;

  Post.find({}, {}, { skip: page, limit: 10 }, (error, result) => {
    if (error) {
      console.error(error);
    }

    res.json(result);
  });
};

exports.post_detail = (req, res) => {
  const result = PostDetail.find({id: ObjectId(req.params.id)}, (error, result) => {
    if (error) {
      console.error(error);
    }

    res.json(result);
  })
 };
