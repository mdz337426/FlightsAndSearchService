const {AirportRepository, CrudRepository} = require('../repository/index');
const CrudService = require('./crud-service')

class AirportService extends CrudService{

    constructor(repository)
    {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;