const { CityService } = require('../services/index');

const CityService  =new CityService();

//post method
const create =async (req, res)=>{

    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message : 'successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: city,
            success: false,
            message: "not able to create city",
            err: error
        });
        
    }

}

const read =async (req, res)=>{

    try {
        const city = await CityService.getCity(req.params.id);
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
        const city = await CityService.updateCity(req.body, req.params.id);
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
        const city = await CityService.removeCity(req.params.id);
        return res.status(201).json({
            dtat:city,
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

module.exports ={
    create,
    read, 
    update,
    destroy
}