const express = require('express')

class Server {
    
    constructor() {
        this.app = express()

        this.listen()
    }

    listen() {
        this.app.listen('3000', () => {
            console.log(`Server connected in port 3000`)
        }
        )
    }
}

module.exports = Server