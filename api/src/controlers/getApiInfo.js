const axios = require('axios');
const { Country, Activity } = require('../db')

//async

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

//promise

// const getApiInfo =  () => {
//     // let urlInfo = axios.get("https://restcountries.com/v3/all");
//     // urlInfo
//     // .then((apiInfo) => { apiInfo.data.map((e) =>{
//     //             return {
//     //                 id: e.cca3,
//     //     			name: e.name.common,
//     //     			flag: e.flags[0],
//     //     			capital: e.capital ? e.capital.toString() : "N/A",
//     //     			region: e.region,
//     //     			subregion: e.subregion,
//     //     			area: e.area,
//     //     			population: e.population,
//     //                 continent: e.continents[0]
//     //             } })
//     //             .then(() => Country.bulkCreate(urlInfo))
//     //             console.log(urlInfo)
//     //         })
//     //         .catch((e) => { console.log("Error"); })
     
    
//     try {
//         let apiCountries = axios.get("https://restcountries.com/v3/all");
//         console.log(apiCountries)
//          apiCountries
//            .then((res) => {
//              res.data.map((country) => {
//                return {
//                  name: country.name.common,
//                  id: country.cca3,
//                  flags: country.flags[0],
//                  continents: country.continents[0],
//                  capital: country.capital ? country.capital[0] : " ",
//                  subregion: country.subregion,
//                  area: country.area,
//                  population: country.population,
//                };
//              })
//              .then(()=> Country.bulkCreate(apiCountries));
//              console.log("dos", apiCountries) 
//            }).catch((error) => {
//              console.log(error);
//            }
//            );
//        } catch (error) {
//          console.log(e)
// }
// }

module.exports = getApiInfo;
