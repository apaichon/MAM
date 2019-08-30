const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const cors = require('cors');

import firebase from './firebase'
import services from './services'

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
  }
  async remove(id, params) {
    const data = {
      userId: params.query.userId,
      messageId: params.query.messageId
    }
    await firebase.deleteMessage(data)
  }
}

app.use('messages', new Messages())

app.service('messages').hooks({
  after: {
    remove: [
      async function (hook) {
        const result = await this.get(hook.params.query.userId);
        hook.result = result
      }
    ],
    update: [
      async function (hook) {
        const result = await this.get(hook.data.userId);
        hook.result = result
      }
    ]
  }
})

services.register(app)
app.use(express.errorHandler())


const server = app.listen(3032)

server.on('listening', () => console.log('Feathers REST API started at http://localhost:3032'))