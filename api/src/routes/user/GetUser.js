const { Router } = require("express");
const userRouter = Router();
const { authenticateToken } = require('../../utils/Auth')
const {
	getAllUsersFromDb
} = require("../../controllers/UserControllers.js");

//recibimos todas las recetas de la API
userRouter.get("/get-all-users", authenticateToken, async (req, res) => {
	try {
		const userList = await getAllUsersFromDb();
		res.status(200).send(userList);
	} catch (error) {
		res.status(401).send(error.message);
	}
});

// //Buscar receta por id
// userRoutes.get("/recipes/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const recipe = await getRecipeById(id);
// 		res.status(200).send(recipe);
// 	} catch (error) {
// 		res.status(401).send(error.message);
// 	}
// });

// //buscamos una receta por nombre
// userRoutes.get("/recipes", async (req, res) => {
// 	try {
// 		const { name } = req.query;
// 		const recipe = await searchByName(name);
// 		res.status(200).json(recipe);
// 	} catch (error) {
// 		res.status(400).send(error.message);
// 	}
// });
module.exports = userRouter;
