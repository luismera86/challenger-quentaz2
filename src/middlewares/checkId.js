const Airline = require('../models/airline.model')
const Airport = require('../models/airport.model')
const Flight = require('../models/flight.model')
const { request, response } = require('express')

const checkAirlineId = async (req = request, res = response, next) => {
	const { id } = req.params
	try {
		const airline = await Airline.findByPk(id)
		console.log(airline)
		if (!airline) {
			return res.status(401).json({ msg: `The airline with the id ${id} does not exist` })
		}

		next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

const checkAirportId = async () => {
	const { id } = req.params
	try {
		const airport = await Airport.findByPk(id)
		if (!airport) {
			return res.status(401).json({ msg: `The airport with the id ${id} does not exist1` })
		}

		next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

const checkFlightId = async () => {
	const { id } = req.params
	try {
		const airport = await Flight.findByPk(id)
		if (!airport) {
			return res.status(401).json({ msg: `The flight with the id ${id} does not exist1` })
		}

		next()
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: error })
	}
}

module.exports = {
	checkAirlineId,
	checkAirportId,
	checkFlightId,
}
