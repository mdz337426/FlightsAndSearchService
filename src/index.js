const express = require('express');
const {PORT} =  require('./config/serverConfig')
const bodyParser = require('body-parser'); 
const v1Apiroutes = require('./routes/index') 
const db = require("./models/index")
const {City, Airport} = require('./models/index')
const { where } = require('sequelize');

const setUpAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', v1Apiroutes);

    app.listen(PORT, async ()=> {
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
    });  
}
setUpAndStartServer();
