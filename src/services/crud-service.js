
class CrudService{
    constructor(repository)
    {
        this.repository = repository;
    }


    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};   
        }
    }

    async get(modelId){
        try {
            const result = await this.repository.get(modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};   
        }
    }

    async update(data, modelId){
        try {
            const result = await this.repository.update(data, modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async destroy(modelId){
        try {
            const result = await this.repository.destroy(modelId); 
            return result;
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAll(filter)
    {
        try {
            const result = await this.repository.getAll(filter);
            return result;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

}

module.exports = CrudService;