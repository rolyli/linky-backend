const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");

// Connect to MongoDB Atlas
mongoose.connect(process.env.CON_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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
app.use(express.json());


const auth = require("./utils/auth");
const postController = require("./controllers/postController");
const commentController = require("./controllers/commentController");
const userController = require("./controllers/userController");

app.use(cors());
app.use(express.static("build"));

router.post("/user/login", userController.user_login);
router.post("/user/signup", userController.user_signup);

router.get("/posts/:page?", postController.post_list);
router.get("/post/:id", postController.post_detail);
router.post("/post", auth.authenticateToken, postController.post_post);
router.post("/post/:id/upvote", auth.authenticateToken, postController.post_upvote);

router.get("/post", postController.post_detail_list);
router.delete("/post/:id", postController.post_delete);

router.post(
  "/post/:id/comment",
  auth.authenticateToken,
  commentController.comment_post
);

app.use("/api", router);
app
  .get("*", (req, res) =>
    res.sendFile(path.join(__dirname + "/build/index.html"))
  )
  .listen(5000, () => console.log("Server on port 5000"));
