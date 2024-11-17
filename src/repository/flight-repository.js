<<<<<<< HEAD
const { Model, where } = require('sequelize');
const { flight } = require('../models/index');
const {Op} = require('sequelize');

class flightRepository{

    #createFilter(data)
    {
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirportId;
        }
        let minPrice = 0;
        let maxPrice = 10000000;
        if(data.minPrice){ minPrice = data.minPrice;}
        if(data.maxPrice) {maxPrice = data.maxPrice;}
        Object.assign(filter,{ [Op.and] : [{price : {[Op.gte]:minPrice}},{price : {[Op.lte]:maxPrice}}]});
        return filter;
    }

=======
const { Model } = require('sequelize');
const { flight } = require('../models/index');

class flightRepository{

>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
    async createFlight(data){
        try {
            const Flight = await flight.create(data);
            return Flight;
        } catch (error) {

            console.log("something went wrong in the repository layer.");
            throw {error};
        }
    }
<<<<<<< HEAD
    

    async getFlight(flightId)
    {
        try {
            const Flight = await flight.findByPk(flightId);
            return Flight;
        } catch (error) {
            console.log("something went wrong in the repository layer.");
            throw {error};      
        }
    }

    async getAllFlight(filter)
    {
        try {
            const FilterObject = this.#createFilter(filter);
        const flights = await flight.findAll({
            where: FilterObject
        });
        return flights;
        } catch (error) {
            console.log("something went wrong in the repository layer.");
            throw {error};   
        }
    }
=======


>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
}

module.exports = flightRepository;
