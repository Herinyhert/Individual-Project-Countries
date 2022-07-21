const { Country, Activity } = require('../db');

async function postDbActivity({ name, difficulty, duration, season, countries }){
        
    const newActivity = await Activity.create({ 
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season 
});
            const match = await Country.findAll({
                where:{
                    name: countries
                }
            })
            console.log(match)
            await newActivity.addCountry(match);
        return newActivity;
}

module.exports = postDbActivity;
