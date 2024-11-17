const { Model } = require('sequelize');
const {compareTime} = require('../utils/helper')
const {flightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new flightRepository(); 
    }

    async createFlight(data)
    {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime))
            {
                throw {error : 'Arrival time cannot be less than Daparture time.'}
            }
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity});  
            return flight;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
            throw {error};        
        }
    }

    async getFlight(flightId)
    {
        try {
            const Flight = await thish.FlightRepository.getFlight(flightId);
            return Flight;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};  
        }
    }

    async getAllFlights(filter)
    {
        try {
            const fligths = await this.FlightRepository.getAllFlight(filter);
            return fligths;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};     
        }
    }


}

module.exports = FlightService;