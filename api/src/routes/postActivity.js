const { Router } = require("express");
const router = Router();
const { Country, Activity } = require('../db');

router.post("/", async (req, res, next) => {
    const { name, difficulty, duration, season, country } = req.body;
    //console.log(country)
    if(!name || !difficulty || !duration || !season || !country){
        res.status(404).send("Falta  completar datos")
    }
try{
    const newActivity = await Activity.create({ name, difficulty, duration, season });
            
    const match = await Country.findAll({
        where: {
            name: country
        },
    })
            
    //console.log(match)
    await newActivity.addCountry(match);
    res.json(newActivity);
}catch(error){
    next(error)
}
});

module.exports = router;


