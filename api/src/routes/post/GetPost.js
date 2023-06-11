const { Router } = require("express");
const userRouter = Router();
const { authenticateToken } = require('../../utils/Auth')
const {
	getAllUsersFromDb
} = require("../../controllers/UserControllers.js");


userRouter.get("/get-all-users", authenticateToken, async (req, res) => {
	try {
		const userList = await getAllUsersFromDb();
		res.status(200).send(userList);
	} catch (error) {
		res.status(401).send(error.message);
	}
});

module.exports = userRouter;
