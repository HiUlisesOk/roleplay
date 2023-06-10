const expect = require("chai").expect;
const {
  searchRecipesInApiAndDB,
  getRecipeById,
  searchByName,
  getDiets,
  createRecipes,
} = require("../../src/controllers/index");

const { Recipe, conn } = require("../../src/db.js");

describe("Get All Recipes", function () {
  it("Realiza una petición para obtener las recetas de la api y la base de datos, comprobamos que cuenta con los datos necesarios", function () {
    searchRecipesInApiAndDB().then((res) => {
      expect(res[0]).to.have.property("id");
      expect(res[0]).to.have.property("name");
      expect(res[0]).to.have.property("image");
      expect(res[0]).to.have.property("summary");
      expect(res[0]).to.have.property("steps");
      expect(res[0]).to.have.property("diets");
    });
  });
});

describe("Create Recipe", function () {
  beforeEach(() => Recipe.sync({ force: true }));

  it("Debería crear una receta en la base de datos y retornar la receta creada", function () {
    createRecipes(
      "Asado Argentino",
      "https://platosargentinos.com/wp-content/uploads/2022/07/beef-g1ade598ab_1920.jpg",
      "No hay nada tan revitalizante como un asado argentino. ",
      95,
      "1rst-step 2nd-step 3rd-step",
      ["lunch", "main course", "main dish", "dinner"],
      [1, 2, 3],
    ).then((res) => {
      expect(res).to.deep.eql({
        name: "Asado Argentino",
        image:
          "https://platosargentinos.com/wp-content/uploads/2022/07/beef-g1ade598ab_1920.jpg",
        summary: "No hay nada tan revitalizante como un asado argentino.",
        healthScore: 95,
        steps: "1rst-step 2nd-step 3rd-step",
        dishTypes: ["lunch", "main course", "main dish", "dinner"],
        dietId: [1, 2, 3],
      });
    });
  });
});
