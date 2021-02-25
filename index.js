const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

// Connect to MongoDB Atlas
mongoose.connect(process.env.CON_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

const postController = require("./controllers/postController");

app.use(cors());
app.use(express.static("build"));

router.get("/posts/:page?", postController.post_list);
router.get("/post/:id", postController.post_detail);
router.post("/post", postController.post_post);
router.get("/post", postController.post_detail_list);
router.delete("/post/:id", postController.post_delete);

app.use("/api", router);
app.listen(process.env.PORT || 3001);
