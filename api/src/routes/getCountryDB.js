const { Router } = require('express');

const { Country } = require('../db')
const router = Router();



router.get('/:id', async (req,res) => {
    const  countryId  = req.params.id;
    let countries = await Country.findByPk(countryId);

    countries
        ? res.status(200).send(countries)
        : res.status(404).send('no existe id buscado');
});


module.exports = router;