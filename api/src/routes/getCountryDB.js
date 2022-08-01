const { Router } = require('express');

const { Country } = require('../db')
const router = Router();



router.get('/:id', async (req,res) => {
    const  countryId  = req.params.id;
    let countriesss = await Country.findByPk(countryId);

    countriesss
        ? res.status(200).send(countriesss)
        : res.status(404).send('no existe id buscado');
});


module.exports = router;