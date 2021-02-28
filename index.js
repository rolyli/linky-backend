const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

// Connect to MongoDB Atlas
mongoose.connect(process.env.CON_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});
app.use(
  express.urlencoded({
    extended: true,
  })
);

const auth = require("./utils/auth");
const postController = require("./controllers/postController");
const commentController = require("./controllers/commentController");

app.use(cors());
app.use(express.static("build"));

router.get("/auth/login", (req, res) => {
  let token = auth.generateAccessToken({
    username: req.body.username,
    user_id: req.body.user_id,
  });
  res.json(token);
});

router.get("/posts/:page?", postController.post_list);
router.get("/post/:id", postController.post_detail);
router.post("/post", postController.post_post);
router.get("/post", postController.post_detail_list);
router.delete("/post/:id", postController.post_delete);

router.post("/post/:id/comment", auth.authenticateToken, commentController.comment_post);

app.use("/api", router);
app.listen(process.env.PORT || 3001);
