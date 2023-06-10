/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  name: "Asado Argentino",
  image:
    "https://platosargentinos.com/wp-content/uploads/2022/07/beef-g1ade598ab_1920.jpg",
  summary: "No hay nada tan revitalizante como un asado argentino. ",
  healthScore: 95,
  steps: "1rst-step 2nd-step 3rd-step",
  dishTypes: `"lunch", "main course", "main dish", "dinner",`,
  dietId: [1, 2, 3],
};

const otherRecipe = {
  name: "Tortafritas",
  image:
    "https://cuk-it.com/wp-content/uploads/2020/05/thumb02-1024x576-2-1.jpg",
  summary: "Tortas Fritas Caseras, simples, ricas e ideales para la merienda!!",
  healthScore: 5,
  steps: "1rst-step 2nd-step 3rd-step",
  dishTypes: ["lunch", "main course"],
  dietId: [7, 8, 10],
};

describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    }),
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe)),
  );
  describe("GET /getAllRecipes", () => {
    it("should get 200 or 304", () => {
      agent.get("/getAllRecipes").then((res) => res.expect(200 || 304));
    });
    it("should have an id property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("id"));
    });
    it("should have a name property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("name"));
    });
    it("should have an image property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("image"));
    });
    it("should have a summary property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("summary"));
    });
    it("should have a steps property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("steps"));
    });
    it("should have a diets property", () => {
      agent
        .get("/getAllRecipes")
        .then((res) => expect(res).to.have.property("diets"));
    });
  });

  describe("GET /recipes", () => {
    it("should get 200", () => {
      agent.get("/recipes?name=Asado Argentino").then((res) => res.expect(200));
    });

    it("should get 401", () => {
      agent
        .get("/recipes?name=Esta Receta No Existe")
        .then((res) => res.expect(400));
    });

    it("should get 401 on invalid name", () => {
      agent
        .get("/recipes?name=nombreInvalido123")
        .then((res) => res.expect(400));
    });

    it("should get 401 on invalid name", () => {
      agent.get("/recipes?name=@recipe").then((res) => res.expect(400));
    });
  });

  describe("GET /recipes/:id", () => {
    it("should get 200", () =>
      agent
        .get("/recipes?name=Asado Argentino")
        .then((res) => agent.get(`/recipes/${res._body[0].id}`).expect(200)));
  });
  // POST
  describe("POST /createRecipe", () => {
    //Recipe already exists
    it("should get 400", () =>
      agent.post("/createRecipe").send(recipe).expect(400));

    it("should get 200", () =>
      agent.post("/createRecipe").send(otherRecipe).expect(200));
  });
});
