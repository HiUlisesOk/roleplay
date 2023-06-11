const { Router } = require("express");
const CreateTopicRouter = Router();

const { CreateTopic } = require("../../controllers/TopicsControllers");

CreateTopicRouter.post("/create-topic", async (req, res) => {
  try {
    const {
      author, title, authorID
    } = req.body;

    const user = await CreateTopic(author, title, authorID);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = CreateTopicRouter;