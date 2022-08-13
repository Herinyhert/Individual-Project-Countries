const { Router } = require('express');
const { Op } = require('sequelize');
const getAll = require('../controlers/getName');

const { Country, Activity } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    const name = req.query.name;
    const countriesT = await getAll();

    if (name) {
        try {
            const countryName = await countriesT.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
            countryName.length
                ? res.status(200).json(countryName)
                : res.status(404).send('No se encontro el país')
        } catch (error) { res.json({ msg: "No se encuentra el nombre país en la base de datos" }) }
    } else {
        try {
            res.status(200).send(countriesT);
        } catch (error) { res.json({ msg: "No se encuentra el país en la base de datos" }) }
    }
})

module.exports = router;

