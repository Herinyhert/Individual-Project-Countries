const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getApiInfo =  require('../controlers/getApiInfo');
const { Country, Activity } = require('../db');
const CountryDB = require('../routes/getCountryDB');
const CountryNameDB = require('../routes/getNameDb');
const ActivityDb = require('../routes/postActivity')
const GetActivity = require('../routes/getActivity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/countries', async (req,res) =>{
//     const countries = await getApiInfo()
//     // for(var i=0; i < countries.length; i++) {
//     //     Country.create({
//     //         name: countries[i].name,
//     //         id: countries[i].id,
//     //         flag: countries[i].flag,
//     //         continent: countries[i].continent,
//     //         region: countries[i].region,
//     //         capital: countries[i].capital,
//     //         subregion: countries[i].subregion,
//     //         area: countries[i].area,
//     //         population:countries[i].population
//     //     })
//     // }
//     console.log(countries);
//     res.status(200).send('base de datos cargada')
// })



router.use('/countries', CountryDB);
router.use('/countries', CountryNameDB);
router.use('/activities', ActivityDb);
router.use('/activities', GetActivity);

module.exports = router;
