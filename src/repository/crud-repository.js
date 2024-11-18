const { where,Op } = require("sequelize");

class CrudRepository {
    constructor(model)
    {
        this.model = model;
    }

    async create(body){
        try {
            const data = this.model.create(body);
            return data;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw {error};
        }
    }

    async get(modelId){
        try {
            const data = this.model.findByPk(modelId);
            return data;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw {error};
        }
    }

    async update(data, modelId){
        try {
            const Data = this.model.update(data, {
                where:{
                    id:modelId
                }
            });
            return Data;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw {error};
        }
    }


    async destroy(modelId)
    {
        try {
            const data = this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return data;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw {error};
        }

    }

    async getAll(filter)
    {
        try {
            if(filter.name === "")
                {
                const data = await this.model.findAll();
                return data;
                }
                const name = filter.name
                const data = await this.model.findAll({
                    where:{
                        name : {
                            [Op.startsWith] : name
                        }    
                    }
                });
                return data;    
            
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw {error};
        }
    }
}


module.exports = CrudRepository;