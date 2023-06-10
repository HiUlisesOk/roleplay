const { Router } = require("express");
const putRecipe = Router();

const { putMyRecipe } = require("../controllers/index.js");
//Editamos la receta
putRecipe.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, summary, healthScore, steps, dishTypes, dietId } =
      req.body;
    console.log(name);
    const recipe = await putMyRecipe(
      id,
      name,
      image,
      summary,
      healthScore,
      steps,
      dishTypes,
      dietId,
    );
    res.status(200).send({ message: "La receta fue editada", element: recipe });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = putRecipe;
