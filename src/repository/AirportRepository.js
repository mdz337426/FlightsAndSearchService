const { where } = require('sequelize');
const { Airport } = require('../models/index');
const airport = require('../models/airport');
const {Op} = require('sequelize');


class AirportRepository{

        async createAirport({name, cityId})
        {
            try {

                const airport = await Airport.create({
                    name,
                    cityId
                });

                return airport;
                
            } catch (error) {
                
                console.log("something went wrong in the repository layer");
                throw {error};
            }
        }

        async updateAirport(data, airportId)
        {
            try {

                const airport = await Airport.update(data, {
                    where:{
                        id: airportId
                    }
                }, );

                return airport;
            } catch (error) {
                
                console.log("something went wrong in the repository layer");
                throw {error};
            }
        }

        async getAirport(airportId)
        {
            try {
                const airport = await Airport.findOne({
                    where:{
                        id:airportId
                    }
                });
                return airport;
                
            } catch (error) {
                
                console.log("something went wrong in the repository layer");
                throw {error};
            }
        }

        async deleteAirport(airportId)
        {
            try {
                const airport = await Airport.destroy({
                        where:{
                            id : airportId
                        }
                    });
                return airport;
                
            } catch (error) {
                console.log("something went wrong in the repository layer");
                throw {error};
            }
        }

        async getAllAirports(filter)
        {
            try {      
                const airports = await Airport.findAll({
                    where:{
                        name:{
                                [Op.startsWith] : filter.name
                            }
                        }
                    });
                    return airports;
            } catch (error) {
                console.log("something went wrong in the repository layer");
                throw {error};
            }
        }
}

module.exports = AirportRepository;