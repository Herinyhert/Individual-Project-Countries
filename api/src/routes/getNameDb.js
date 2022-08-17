const { Router } = require('express');
const { Op } = require('sequelize');
const getAll = require('../controlers/getName');

const { Country, Activity } = require('../db');
const router = Router();


//async...
// router.get('/', async (req, res) => {
//     const name = req.query.name;
//     const countriesT = await getAll();
//     console.log("6",countriesT)
//     if (name) {
//         try {
//             const countryName = await countriesT.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
//             countryName.length
//                 ? res.status(200).json(countryName)
//                 : res.status(404).send('No se encontro el país')
//         } catch (error) {  }
//     } else {
//         try {
//             res.status(200).send(countriesT);
//         } catch (error) { res.json({ msg: "No se encuentra el país en la base de datos" }) }
//     }
// })

//Promise
router.get('/', (req, res) => {
    const { name } = req.query;

    if (name) {
        getAll()
            .then((countryT) => {
                const countryName = countryT.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
                console.log("1", countryName)

                if (countryName && countryName.length) { res.status(200).json(countryName) }
                else { res.status(404).send('No se encontro el país') }
            })
            .catch(() => res.json({ msg: "No se encuentra el país en la base de datos" }))
    } else {
        getAll()
            .then((countryT) => { res.status(200).send(countryT); })
            .catch((error) => { res.json({ msg: "No se encuentra el país en la base de datos" }) })
    }
})

module.exports = router;

