const axios = require('axios');
const { Country, Activity } = require('../db');
const getApiInfo = require('./getApiInfo');

const getAll = async (name) => {
    const where = {};
    if (name) {
      where[name] = { [Op.iLike]: name };
    }
    let countries = await Country.findAll({
      where: where,
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    if (!name && !countries.length) {
      await getApiInfo();
      countries = await Country.findAll({
        where: where,
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      });
    }
    return countries;
  };

  module.exports = getAll;