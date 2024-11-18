const { Model } = require('sequelize');
const {compareTime} = require('../utils/helper')
const {flightRepository, AirplaneRepository} = require('../repository/index');
const CrudService = require('./crud-service');
class FlightService extends CrudService {
    constructor(){
        const FlightRepository = new flightRepository();
        super(FlightRepository);
        this.AirplaneRepository = new AirplaneRepository();   
        this.flightRepository = new flightRepository();
    }

    async create(data)
    {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime))
            {
                throw {error : 'Arrival time cannot be less than Daparture time.'}
            }
            const airplane = await this.AirplaneRepository.get(data.airplaneId);
            const flight = await this.flightRepository.create({...data, totalSeats:airplane.capacity});  
            return flight;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
            throw {error};        
        }
    }
}

module.exports = FlightService;