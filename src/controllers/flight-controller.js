const {FlightService}= require('../services/index');

const flightService = new FlightService();

const create =async (req, res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : 'true',
            err: {}
        });
        
    } catch (error) {

        console.log("something went wrong in the controller.");
        return res.status(201).json({
            data : req.body,
            success: 'false',
<<<<<<< HEAD
            err : error
        })
    }
}

const getall = async(req, res)=>{
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data : flights,
            success : 'true',
            err : {}
        });
    } catch (error) {
        console.log("something went wrong in the controller.");
        return res.status(201).json({
            data : req.body,
            success: 'false',
            err : error
=======
            err : {error}
>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
        })
    }
}

module.exports = {
<<<<<<< HEAD
    create,
    getall
=======
    create
>>>>>>> 1604d74cfdf9145224d2817de8fafff9fa5cd892
}
