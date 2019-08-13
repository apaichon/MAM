const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const cors = require('cors');

import firebase  from './firebase'

const app = express(feathers())
app.use(cors({
  origin: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.configure(express.rest())
app.use(express.errorHandler())


class Messages {
  constructor() {
    this.messages = [{
      message: []
    }]
  }
  async get(id, params) {
     const message = await firebase.getMessage(id)
      this.messages.message = message.docs.map(doc => {
       return doc.data()
     })
     return this.messages.message
  }
  async update(id, data, params) {
    await firebase.updateMessage(data)
    await this.get(data.userId)
    return this.messages.message
  }
}

app.use('messages', new Messages())

app.use(express.errorHandler())

const server = app.listen(3030)

server.on('listening', () => console.log('Feathers REST API started at http://localhost:3030'))