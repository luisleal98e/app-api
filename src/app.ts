import * as dotenv from 'dotenv'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import http from 'http'
import db from './models'
import routes from './routes'

dotenv.config()
const app = express()

app.use(cors())

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

/* app.get('*', (req, res) =>
  res.status(200).send({
    message: 'API',
  })
) */

const port = process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Server is running on port ${port}.`)

  db.sequelize
    .sync()
    .then(() => {
      console.log('Synced db.')
    })
    .catch((err: any) => {
      console.log('Failed to sync db: ' + err.message)
    })
})

module.exports = app
