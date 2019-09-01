const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const cors = require('cors');

import services from './services'

const app = express(feathers())
app.use(cors({
  origin: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.configure(express.rest())
app.use(express.errorHandler())
app.configure(services)
app.use(express.errorHandler())

const server = app.listen(3032)

server.on('listening', () => console.log('Feathers REST API started at http://localhost:3032'))