const { Model } = require('sequelize');
const {flightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new flightRepository(); 
    }

    async createFlight(data)
    {
        try {
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity});  
            return flight;
        } catch (error) {

            console.log("something went wrong in the service layer");
            throw {error};        
        }
    }
}

module.exports = FlightService;