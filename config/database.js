require('dotenv').config()
const { Sequelize } = require('sequelize')
const sequelize = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
)
// Test connection (error management)
sequelize()
  .then(() => {
    console.log('Connected to the DB')
  })
  .catch(err => {
    console.error('Cannot connect to the DB', err)
  })

module.exports = sequelize
