const { Recipe, conn } = require("../../src/db.js");
const { expect } = require("chai");
const recipeExample = {
  name: "Asado Argentino",
  image:
    "https://platosargentinos.com/wp-content/uploads/2022/07/beef-g1ade598ab_1920.jpg",
  summary: "No hay nada tan revitalizante como un asado argentino. ",
  steps: "1 - Kill the cow, eat the meat",
  dishTypes: "lunch, main course, main dish, dinner",
  healthScore: 76,
};
describe("Recipe model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    }),
  );
  describe("Validators", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Recipe.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should work when its a valid name", (done) => {
        Recipe.create({ ...recipeExample, name: "Milanesa a la napolitana" })
          .then(() => done())
          .catch(() => done(new Error("It requires a valid name")));
      });

      it("should throw an error if image is null", (done) => {
        Recipe.create({ ...recipeExample, image: null })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if summary is null", (done) => {
        Recipe.create({ ...recipeExample, summary: null })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if steps is null", (done) => {
        Recipe.create({ ...recipeExample, steps: null })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if healthScore is null", (done) => {
        Recipe.create({ ...recipeExample, healthScore: null })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if healthScore is invalid", (done) => {
        Recipe.create({ ...recipeExample, healthScore: "ABC-invalid-Name-123" })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
    });
  });
});
