const { CityService } = require('../services/index');
const Cityservice =new CityService();


//post method
const create =async (req, res)=>{
    try {
        const city = await Cityservice.create(req.body);
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
            err: error});        
        }
}

const read =async (req, res)=>{

    try {
        const city = await Cityservice.get(req.params.id);
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
        const city = await Cityservice.update(req.body, req.params.id);
        return res.status(201).json({
            data:req.body,
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
        const city = await Cityservice.destroy(req.params.id);
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
        const cities = await Cityservice.getAll(req.query);
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