const { where } = require('sequelize');
const {City} = require('../models/index')
const { Op } = require('sequelize')
class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({
                name
            })
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await City.update(data, {
                where:{
                    id:cityId
                }
            });
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityid){
        try {
            const city =await City.destroy({
                where:{
                    id:cityid
                }
            });
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};         
        }
    }

    async getCity(cityId){
        try {
            
            const city = await City.findOne({
                where:{
                    id : cityId
                } });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};          
        }
    }

    async getAllCities(filter)
    {
        try {
            if(filter.name === "")
            {
            const cities = await City.findAll();
            return cities;
            }
            const name = filter.name
            const cities = await City.findAll({
                where:{
                    name : {
                        [Op.startsWith] : name
                    }    
                }
            });
            return cities;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};          
        }
    }
}

module.exports = CityRepository;