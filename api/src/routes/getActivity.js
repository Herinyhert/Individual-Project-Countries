const { Router } = require("express");
const router = Router();
const { Country, Activity } = require('../db');

router.get("/", async (req, res) => {
    try {
        const activities = await Activity.findAll({
            attributes: ["name", "difficulty", "duration", "season", "description"],
            include: Country,
        });
        res.status(200).json(activities);
    } catch (error) { console.log(error) }
});

module.exports = router;