const { Router } = require("express");
const router = Router();
const { Activity } = require('../db');


// async-----

// router.delete("/", async (req, res) => {
//     const { name } = req.query;
//     try{
//         await Activity.destroy({ where:{ name: name}})
//         res.status(200).send("Actividad eliminada")
//     } catch(error){
//         res.status(400).send(error)
//     }
// })


// Promise

router.delete("/", (req, res) =>{
    const { name } = req.query;
    Activity.destroy({ where:{ name: name}})
    .then( (a) => { res.status(200).send("Actividad eliminada") })
    .catch( (e) => { res.status(400).send(e) })
})

module.exports = router;