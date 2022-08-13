const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });

      it("La creacion de un 'country' deberia fallar si no se le da un 'name'", async () => {
        let hasTrowed = false;
    
        try {
          await Country.create({});
        } catch (error) {
          hasTrowed = true;
        }
    
        if (hasTrowed === false) {
          throw new Error("La creacion deberia haber fallado");
        }
      });
    });
  });
});
