const { Router } = require("express");
const CreatePostRouter = Router();

const { createPost } = require("../../controllers/PostControllers.js");

CreatePostRouter.post("/create-post", async (req, res) => {
  try {
    const {
      content,
      authorID,
      topicID,
    } = req.body;

    const Post = await createPost(
      content,
      authorID,
      topicID,
    );
    res.status(200).send(Post);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = CreatePostRouter;
