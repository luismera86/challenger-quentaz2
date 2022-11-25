const { Router } = require("express")

const router = Router()

router.use('/airline', airlinesRoutes)
router.use('/airport', airPortsRoutes)
router.use('/flight', flightsRoutes)

module.exports = router