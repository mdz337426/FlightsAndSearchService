const {CityRepository} = require('../repository/index');
class CityService{

    constructor()
    {
        this.CityRepository = new CityRepository();
    }
    async createCity(data){

        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {

            console.log("something went wrong in service layer");
            throw {error};   
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await this.CityRepository.updateCity(data, cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async removeCity(cityId){
        try {
            const city = await this.CityRepository.deleteCity(cityId); 
            return city;
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(cityId)
    {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllCities(filter)
    {
        try {
            const cities = await this.CityRepository.getAllCities(filter);
            return cities;         
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error}; 
        }
    }
}

module.exports = CityService;