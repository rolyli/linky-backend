const User = require("../models/user");
const auth = require("../utils/auth");
var ObjectId = require("mongoose").Types.ObjectId;

exports.user_signup = (req, res) => {
  User.find({ username: req.body.username }, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }

    if (result.length != 0) {
      res.status(403).end();
    }

    else {
      User.create(
        {
          username: req.body.username,
          password: req.body.password,
          role: "user",
        },
        (error, result) => {
          if (error) {
            console.error(error);
            return res.status(403).end;
          }
        }
      );
      let token = auth.generateAccessToken({
        user_id: req.body.user_id,
        username: req.body.username,
        role: "user",
      });

      res.json({
        username: req.body.username,
        role: "user",
        token,
      });
    }
  });
};

exports.user_login = (req, res) => {
  // returns a jwt token
  User.find(
    { username: req.body.username, password: req.body.password },
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500);
      }
      if (result.length > 0) {
        let token = auth.generateAccessToken({
          user_id: result[0]._id,
          username: req.body.username,
          role: result[0].role,
        });
        res.json({
          username: req.body.username,
          role: "user",
          token,
        });
      } else {
        res.status(403).end();
      }
    }
  );
};
