const { CityService } = require('../services/index');
const Cityservice =new CityService();


//post method
const create =async (req, res)=>{
    try {
        const city = await Cityservice.createCity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message : 'successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: req.body,
            success: false,
            message: "not able to create city",
            err: error
<<<<<<< HEAD
        });        
=======
        });
=======
        
        
    } catch (error) {
>>>>>>> origin/main
        
>>>>>>> e8e9dbd23fb80697436e088e6518a72ce4daf22e
    }

}

const read =async (req, res)=>{

    try {
        const city = await Cityservice.getCity(req.params.id);
        return res.status(201).json({
            dtat:city,
            success: true,
            message : 'successfully fetched the city',
            err: {}
        })

        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: city,
            success: false,
            message: "not able to fetch city",
            err: error
        });
    }
   

}



const update =async (req, res)=>{

    try {
        const city = await Cityservice.updateCity(req.body, req.params.id);
        return res.status(201).json({
            dtat:city,
            success: true,
            message : 'successfully updated the city',
            err: {}
        })

        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: city,
            success: false,
            message: "not able to update city",
            err: error
        });
    }



}

const destroy =async (req, res)=>{
    try {
        const city = await Cityservice.removeCity(req.params.id);
        return res.status(201).json({
            data:city,
            success: true,
            message : 'successfully deleted the city',
            err: {}
        })

        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: city,
            success: false,
            message: "not able to delete city",
            err: error
        });
    }

}


const getall = async (req, res)=>{
    try {
        const cities = await Cityservice.getAllCities(req.query);
        return res.status(200).json({
            dtat:cities,
            success: true,
            message : 'successfully fetched the cities',
            err: {}
        })

        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: req.body,
            success: false,
            message: "not able to fetch cities",
            err: error
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