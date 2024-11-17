const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller')
const FlightController = require('../../controllers/flight-controller');
const router = express.Router();


router.post('/city', CityController.create);
router.get('/city/:id', CityController.read);
router.delete('/city/:id', CityController.destroy);
router.get('/city', CityController.getall);
router.patch('/city/:id', CityController.update);

router.post('/airport', AirportController.create);
router.get('/airport/:id', AirportController.read);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport', AirportController.getall);
router.patch('/airport/:id', AirportController.update);

router.post('/flight', FlightController.create);
router.get('/flight', FlightController.getall);
module.exports = router;

