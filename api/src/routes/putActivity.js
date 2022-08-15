const { Router } = require("express");
const router = Router();
const { Country, Activity } = require('../db');


//async
// router.put("/:id", async (req, res) => {
//     const { id } = req.params
//     const { name, difficulty, duration, season, countryId } = req.body;
//     try {
//         await Activity.update(
//             {
//                 name: name,
//                 difficulty: difficulty,
//                 duration: duration,
//                 season: season,
//             },
//             {
//                 where: {
//                     id: id,
//                 },
//             }
//         );

//         const activity = await Activity.findByPk(id)
//         await activity.setCountries(countryId)
//         res.json(activity)
//     } catch (error) {
//         // res.send(error);
//         res.status(404).send("No se actualizo la Actividad");
//     }
// })



//Promise

router.put("/", (req, res) => {
    const { id } = req.query
    const { name, difficulty, duration, season, countryId } = req.body;

    Activity.update({ name, difficulty, duration, season }, { where: { id: id } })
        .then(() => {
            Activity.findByPk(id)
                .then((upactivity) => {
                    upactivity.setCountries(countryId)
                        .then(() => res.json(upactivity))
                })
                .catch((e) => { res.status(404).send("No se actualizo la Actividad"); })
        })
        .catch((e) => { res.status(404).send("No error en la Actividad"); })

})

module.exports = router;