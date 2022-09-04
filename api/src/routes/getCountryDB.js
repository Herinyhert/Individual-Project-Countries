const { Router } = require('express');

const { Country, Activity } = require('../db');

const router = Router();



router.get('/:id', async (req,res) => {
    const  countryId  = req.params.id;
    let countriesss = await Country.findByPk(countryId, {include: Activity});

    countriesss
        ? res.status(200).send(countriesss)
        : res.status(404).send('no existe id solicitado');
});


module.exports = router;