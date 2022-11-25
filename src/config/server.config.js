const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    PORT: process.env.PORT || '3000',
    DB_URL: process.env.DB_URL || 'localhost',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASS: process.env.DB_PASS || '',
    DB_NAME: process.env.DB_NAME || 'test'
}