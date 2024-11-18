const { where } = require('sequelize');
const {City} = require('../models/index')
const { Op } = require('sequelize')
const CrudRepository = require('./crud-repository')
class CityRepository extends CrudRepository {
   constructor()
   {
    super(City);
   }
}

module.exports = CityRepository;