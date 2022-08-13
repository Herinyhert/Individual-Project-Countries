const axios = require('axios');
const { Country, Activity } = require('../db')

const getApiInfo = async () => {
    try{
        let apiInfo = await axios.get('https://restcountries.com/v3/all');
        apiInfo = apiInfo.data.map(e =>{
        return{
            id: e.cca3,
			name: e.name.common,
			flag: e.flags[0],
			capital: e.capital ? e.capital.toString() : "N/A",
			region: e.region,
			subregion: e.subregion,
			area: e.area,
			population: e.population,
            continent: e.continents[0]
        }
    })
        await Country.bulkCreate(apiInfo)
    }catch(error){
        console.log(error)
    }
}

module.exports = getApiInfo;
