const { Router } = require("express");
const router = Router();

const postDBactivity = require("../controlers/postActiviesDb");

router.post("/", async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    if(!name || !difficulty || !duration || !season || !countries){
        res.status(404).send("Falta  completar datos")
    }
try{
    const examples = await postDBactivity(req.body)
    res.status(200).json(examples)
}catch(error){
    res.status(404).send(error.message)
}
});

module.exports = router;


