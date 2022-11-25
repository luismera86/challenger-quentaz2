const { Router } = require("express")
const airlinesRoutes = require("./airline.routes")
const airportRoutes = require("./airport.routes")
const flightsRoutes = require("./flight.routes")

const router = Router()

router.use('/airline', airlinesRoutes)
router.use('/airport', airportRoutes)
router.use('/flight', flightsRoutes)

module.exports = router