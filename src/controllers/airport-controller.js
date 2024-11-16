const airport = require('../models/airport');
const { AirportService } = require('../services/index');
const Airportservice = new AirportService();


//post method
const create =async (req, res)=>{
    try {
        const airport = await Airportservice.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            success: true,
            message : 'successfully created an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: req.body,
            success: false,
            message: "not able to create airport",
            err: error});        
        }
}

const read =async (req, res)=>{

    try {
        const airport = await Airportservice.getAirport(req.params.id);
        return res.status(201).json({
            dtat:airport,
            success: true,
            message : 'successfully fetched the airport',
            err: {}
        })       
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: airport,
            success: false,
            message: "not able to fetch airport",
            err: error
        });
    }
}
const update =async (req, res)=>{

    try {
        const airport = await Airportservice.updateAirport(req.body, req.params.id);
        return res.status(201).json({
            data:airport,
            success: true,
            message : 'successfully updated the airport',
            err: {}
        })     
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: airport,
            success: false,
            message: "not able to update airport",
            err: error
        });
    }
}

const destroy =async (req, res)=>{
    try {
        const airport = await Airportservice.removeAirport(req.params.id);
        return res.status(201).json({
            data:airport,
            success: true,
            message : 'successfully deleted the airport',
            err: {}
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: req.body,
            success: false,
            message: "not able to delete airport",
            err: error
        });
    }
}


const getall = async (req, res)=>{
    try {
        const airports = await Airportservice.getAllAirports(req.query);
        return res.status(200).json({
            data:airports,
            success: true,
            message : 'successfully fetched airports',
            err: {}
        })

        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: req.body,
            success: false,
            message: "not able to fetch Airports",
            err:  error
        });
    }
}

module.exports ={
    create,
    read, 
    update,
    destroy,
    getall
}