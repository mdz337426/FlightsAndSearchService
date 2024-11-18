const { Model, where } = require('sequelize');
const { flight } = require('../models/index');
const {Op} = require('sequelize');
const CrudRepository = require('./crud-repository')

class flightRepository extends CrudRepository{

    constructor()
    {
        super(flight);
    }

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
 
    async getAll(filter)
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
}

module.exports = flightRepository;
