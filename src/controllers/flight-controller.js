const {FlightService}= require('../services/index');

const flightService = new FlightService();

const create =async (req, res)=>{
    try {
        const flight = await flightService.create(req.body);
        return res.status(201).json({
            data : flight,
            success : 'successfully created the flight',
            err: {}
        });
        
    } catch (error) {

        console.log("something went wrong in the controller.");
        return res.status(201).json({
            data : req.body,
            success: 'false',
            err : error
        })
    }
}

const getall = async(req, res)=>{
    try {
        const flights = await flightService.getAll(req.query);
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
        })
    }
}

module.exports = {
    create,
    getall
}
