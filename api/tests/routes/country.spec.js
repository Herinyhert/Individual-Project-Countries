/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "NEV",
  name: "CARACAS",
  flag: "https://flagcdn.com/ve.svg",
  region: "Americas",
  capital: "Caracas",
  continent: "South America",
};

describe('Country routes', () => {
  before(() => conn.authenticate().catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

describe("ruta post", () => {
  let countries
  beforeEach(async () => {
    await conn.sync({ force: true });
    countries = await Country.bulkCreate([
      { id: "VEN", name: "Venezuela", flag: "https://flagcdn.com/ve.svg", region: "Americas", capital: "Caracas", continent: "South America" },
      { id: "ARG", name: "Argentina", flag: "https://flagcdn.com/ve.svg", region: "Americas", capital: "Buenos Aires", continent: "South America" },
      { id: "COL", name: "Colombia", flag: "https://flagcdn.com/ve.svg", region: "Americas", capital: "Bogota", continent: "South America" },
    ]);
  });


    it("Deberia contar la lista de ejemplos de mi base de datos", async () => {
      const res = await agent.get("/countries");
      expect(res.status).to.be.equal(200);
      //console.log("estoy aqui",  res.body.length)
      expect(res.body.length).to.be.equal(3);
    });
    
    it("Deberia de recibir un name por query y traer solo los countries que tengan coincidencia exacta con ese parametro", async () => {
      const res = await agent.get("/countries?name=Argentina");
      //console.log("estoy si aqui", res.body[0].name)
      expect(res.body[0].name).to.be.deep.equal("Argentina")
    })
})
