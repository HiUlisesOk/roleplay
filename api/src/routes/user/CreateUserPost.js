const { Router } = require("express");
const CreateUserRouter = Router();

const { createUser } = require("../../controllers/UserControllers.js");
//Creamos una receta y la guardamos en la base de datos
CreateUserRouter.post("/create-user", async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      birthDate,
      email,
      password,
      userScore,
      profilePicture,
      isAdmin
    } = req.body;

    const user = await createUser(
      username,
      firstName,
      lastName,
      birthDate,
      email,
      password,
      userScore,
      profilePicture,
      isAdmin
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = CreateUserRouter;
