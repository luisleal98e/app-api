import * as dotenv from 'dotenv'
dotenv.config()
import { clientsModel } from './clients.model'
import { servicesModel } from './services.model'
import { invoicesModel } from './invoices.model'

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

const clients = clientsModel(sequelize, Sequelize)
const services = servicesModel(sequelize, Sequelize)
const invoices = invoicesModel(sequelize, Sequelize)

const db = { Sequelize, sequelize, clients, services, invoices }

export default db
