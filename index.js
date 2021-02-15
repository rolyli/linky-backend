const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(express.urlencoded({
  extended: true
}))

const postController = require("./controllers/postController");

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  console.log(req.body)
  res.end()
})


app.use(cors());
app.use(express.static("build"));
router.use("/posts/:page?", postController.post_list);
router.use("/post/:id", postController.post_detail);
router.post("/post", postController.post_post);
router.get("/post", postController.post_detail_list);
app.use("/api", router);
app.listen(process.env.PORT || 3001);
