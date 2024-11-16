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
            err : {error}
        })
    }
}

module.exports = {
    create
}
