const express = require('express');
const {PORT} =  require('./config/serverConfig')
const bodyParser = require('body-parser'); 
const CityRepository= require('./repository/CityRepository');

const setUpAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, ()=> {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name:"kolkata"});
    });  
}
 

setUpAndStartServer();
