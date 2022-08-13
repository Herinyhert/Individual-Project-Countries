// const { Router } = require("express");
// const router = Router();
// const { Activity } = require('../db');

// // router.delete("/id", async (req, res) => {
// //     const { id } = req.body;
// //     //if (!id) res.status(404).json({ error: "No existe id" })
// //     console.log("estoy aqui",id)
// //     const deleActivity = await Activity.findAll((a) => a.id === id)
// //     //if (!deleActivity) res.status(404).json({ error: "No existe id" })

// //     // try {
// //     //     deleActivity = await deleActivity.filter((a) => a.id !== id)
// //     //     res.status(200).json(deleActivity);
// //     //     console.log("actividad eliminada")
// //     // } catch (error) { console.log("llega este error", error) }

// // })



// async function updateActivity(activityTo, action, fromCountry) {
//     const activity = await Activity.findOne({
//         where: { name: activityTo },
// 	}).catch((e) => console.log("Find Activity remover:", e.message));
    
// 	const country = await Country.findOne({
//         where: { name: fromCountry },
// 		include: {
//             model: Activity,
// 			through: {
//                 attributes: [],
// 			},
// 		},
// 	}).catch((e) => console.log("Find City remover:", e.message));
    
// 	if (action === "remove") activity.removeCountry(country);
// 	if (action === "add") activity.addCountry(country);
// }

// router.put("/", async (req, res) => {
//     const { activity, action, country } = req.body;
//     await updateActivity(activity, action, country);

//     res.send({ activity, action, country });
// });

// module.exports = router;