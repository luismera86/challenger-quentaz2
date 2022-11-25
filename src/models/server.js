const express = require('express')
const db = require('../config/db.config')
const { PORT } = require('../config/server.config')
const router = require('../routes')

class Server {
	constructor() {
		this.app = express()
		this.port = PORT
        this.db = db
        
		
        this.listen()
		this.dbConnection()
		this.middlewares()
		this.router()
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server connected in port ${this.port}`)
		})
	}

	middlewares() {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
	}

	router() {
		this.app.use('/api', router)
	}

	async dbConnection() {
		await this.db.sync({ force: false })
		try {
			console.log('DB Connected')
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = Server
