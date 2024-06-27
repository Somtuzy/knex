module.exports.NODE_ENV = process.env.NODE_ENV || 'development'
module.exports.DB_HOST = process.env.DB_HOST
module.exports.DB_USER = process.env.DB_USER
module.exports.DB_PORT = parseFloat(process.env.DB_PORT)
module.exports.DB_PASSWORD = process.env.DB_PASSWORD
module.exports.DB_NAME = process.env.DB_NAME