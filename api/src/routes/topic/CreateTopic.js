const { Router } = require("express");
const CreateTopicRouter = Router();

const { CreateTopic } = require("../../controllers/TopicsControllers");
//Creamos una receta y la guardamos en la base de datos
CreateTopicRouter.post("/create-topic", async (req, res) => {
  try {
    const {
      author, title
    } = req.body;

    const user = await CreateTopic(author, title);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = CreateTopicRouter;