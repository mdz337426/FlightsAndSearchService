# Welcome to flights service 


## Project Setup
    - clone the project on your local 
    - Execute `npm install` on the same path as of your root directory of the downloaded project
    - Create a `.env` file in the root directory and add the following environment variables 
            - 'PORT = 3000'
    - Inside the `src/config` folder,  create a new file `config.json' and then add the following json objects
    ```
    {
        "development": {
        "username": <Your DB login name>,
        "password": <Your mysql DB password>,
        "database": "flights_search_db_dev",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    }

    ```