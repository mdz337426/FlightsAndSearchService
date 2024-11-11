const {AirportRepository} = require('../repository/index');

class AirportService{

    constructor()
    {
        this.AirportRepository = new AirportRepository();
    }

    async createAirport(data){

        try {
            const airport = await this.AirportRepository.createAirport(data);
            return airport;
        } catch (error) {

            console.log("something went wrong in service layer");
            throw {error};   
        }
    }

    async updateAirport(data, airportId){
        try {
            const airport = await this.AirportRepository.updateAirport(data, airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async removeAirport(airportId){
        try {
            const airport = await this.AirportRepository.deleteAirport(airportId); 
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAirport(airportId)
    {
        try {
            const airport = await this.AirportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllAirports(filter)
    {
        try {
            const airports = await this.AirportRepository.getAllAirports(filter);
            return airports;         
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error}; 
        }
    }
}

module.exports = AirportService;