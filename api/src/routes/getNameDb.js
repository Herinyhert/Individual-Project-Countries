const { Router } = require('express');
const { Op } = require('sequelize')

const { Country } = require('../db')
const router = Router();

router.get('/', async(req,res)=>{
    const  name = req.query.name;
    
    // if(!name) return res.status(404).send("no recibe nombre")
    // console.log(name);
    const countriesT = name 
        ? await Country.findAll({ where: { name: { [Op.iLike]: name} } }) 
        : await Country.findAll();
    //console.log(countriesT);
    countriesT.length > 0
        ? res.status(200).json(countriesT)
        : res.status(404).send('esto no funca')
})

 module.exports = router;
