const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

// 1. Creamos la base de datos con .dotenv
const db = new Sequelize('db_bootcamp', 'postgres', 'claudia123', {
  host: 'localhost',
  dialect: 'postgres',
});

// 2. Sincronozamos con la base de datos
async function syncDB () {
  try {
    await db.authenticate()
    console.log('Connections has been established successfully');
  }
  catch(error) {
    console.error('Unable to connect to database', error)
  }
}
syncDB()

module.exports = db