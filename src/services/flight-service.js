const { Model } = require('sequelize');
<<<<<<< HEAD
const {compareTime} = require('../utils/helper')
=======
>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
const {flightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new flightRepository(); 
    }

    async createFlight(data)
    {
        try {
<<<<<<< HEAD
            if(!compareTime(data.arrivalTime, data.departureTime))
            {
                throw {error : 'Arrival time cannot be less than Daparture time.'}
            }
=======
>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity});  
            return flight;
        } catch (error) {
<<<<<<< HEAD
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


=======

            console.log("something went wrong in the service layer");
            throw {error};        
        }
    }
>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
}

module.exports = FlightService;