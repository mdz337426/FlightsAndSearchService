const express = require('express');
const {PORT} =  require('../src/config/serverConfig')

const setUpAndStartServer = async() => {
    const app = express();
    app.listen(PORT, ()=> {
        console.log(`server started at ${PORT}`);
    });  
}
 

setUpAndStartServer();
