const {CityRepository} = require('../repository/index');

class CityService{

    async createCity(data){

        try {
            const city = await CityRepository.createCity(data);
            return city;
        } catch (error) {

            console.log("something went wrong in service layer");
            throw {error};   
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await CityRepository.updateCity(data, cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async removeCity(cityId){
        try {
            const city = await CityRepository.removeCity(cityId); 
            return city;
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(cityId)
    {
        try {
            const city = await CityRepository.getCity(cityId);
            return city;
                        
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = CityService;