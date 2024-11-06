const express = require('express');
const {PORT} =  require('./config/serverConfig')
const bodyParser = require('body-parser'); 
const v1Apiroutes = require('./routes/index') 

const setUpAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', v1Apiroutes);

    app.listen(PORT, ()=> {
        console.log(`server started at ${PORT}`);
        
    });  
}

setUpAndStartServer();
