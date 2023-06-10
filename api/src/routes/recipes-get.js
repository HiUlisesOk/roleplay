const { Router } = require("express");
const recipesRoutes = Router();
const { Diet, Recipe, RecipesDiet } = require("../db");
const {
  searchRecipesInApiAndDB,
  getRecipeById,
  searchByName,
} = require("../controllers/index.js");

//recibimos todas las recetas de la API
recipesRoutes.get("/getallrecipes", async (req, res) => {
  try {
    const AllRecipes = await searchRecipesInApiAndDB(Recipe);
    res.status(200).send(AllRecipes);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//Buscar receta por id
recipesRoutes.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeById(id);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//buscamos una receta por nombre
recipesRoutes.get("/recipes", async (req, res) => {
  try {
    const { name } = req.query;
    const recipe = await searchByName(name);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = recipesRoutes;
