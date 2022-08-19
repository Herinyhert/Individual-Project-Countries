const axios = require('axios');
const { Country, Activity } = require('../db')

//async

const getApiInfo = async () => {
    try{
        let apiInfo = await axios.get('https://restcountries.com/v3/all');
        apiInfo = apiInfo.data.map(c =>{
        return{
            id: c.cca3,
			name: c.name.common,
			flag: c.flags[0],
			capital: c.capital ? c.capital.toString() : "N/A",
			region: c.region,
			subregion: c.subregion,
			area: c.area,
			population: c.population,
            continent: c.continents[0]
        }
    })
        await Country.bulkCreate(apiInfo)
    }catch(error){
        console.log(error)
    }
}

//promise

// const getApiInfo = () => {
//     return axios
//       .get("https://restcountries.com/v3/all")
//       .then((res) => {
//         const countrys = res.data.map((c) => {
//           return {
//             id: c.cca3,
// 			name: c.name.common,
// 			flag: c.flags[0],
// 			capital: c.capital ? e.capital.toString() : "N/A",
// 			region: c.region,
// 			subregion: c.subregion,
// 			area: c.area,
// 			population: c.population,
//             continent: c.continents[0]
//           };
//         });
//         return countrys;
//       })
//       .catch((error) => console.log(error));
//   };

module.exports = getApiInfo;
