/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: "pasta",
  image: "https://jappi.com.co/wp-content/uploads/2020/08/Clasificacion-de-los-alimentos-imagen-destacada.jpg",
  summary: "pasta",
  healthScore: "2",
  stepToStep: ["pasta"],
  diets: ["vegan", "gluten free", "vegetarian"]
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
});
