const { Router } = require("express");
const TopicRouter = Router();
const { authenticateToken } = require('../../utils/Auth')
const {
	getAllTopicsFromDb
} = require("../../controllers/TopicsControllers");


TopicRouter.get("/get-all-topics", authenticateToken, async (req, res) => {
	try {
		const TopicList = await getAllTopicsFromDb();
		res.status(200).send(TopicList);
	} catch (error) {
		res.status(401).send(error.message);
	}
});

module.exports = TopicRouter;