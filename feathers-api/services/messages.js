const { BadRequest, NotFound } = require('@feathersjs/errors')

module.exports = class MessageService {
  constructor({ firestore }) {
    this._db = firestore
    this._collection = 'Message',
    this._sub_collection = 'inbox',
    this.messages = [{
      message: []
    }]
  }

  get db() {
    return this._db
  }

  get collection() {
    return this._collection
  }

  get sub_collection() {
    return this._sub_collection
  }

  async get(id, params) {
    const message = await this.getMessage(id)
    this.messages.message = message.docs.map(doc => {
      return doc.data()
    })
    return this.messages.message
  }

  async update(id, data, params) {
    await this.updateMessage(data)
  }

  async remove(id, params) {
    const data = {
      userId: params.query.userId,
      messageId: params.query.messageId
    }
    await this.deleteMessage(data)
  }

  async getMessage(id) {
    return await this.db
      .collection(this.collection)
      .doc(id).collection(this.sub_collection)
      .where('status', '==', true)
      .orderBy("createdAt", "desc")
      .get()
  }

  async updateMessage(data) {
    return await this.db
      .collection(this.collection)
      .doc(data.userId)
      .collection(this.sub_collection)
      .doc(data.messageId)
      .update({
        isRead: true
      })
  }

  async deleteMessage(data) {
    return await this.db
      .collection(this.collection)
      .doc(data.userId)
      .collection(this.sub_collection)
      .doc(data.messageId)
      .update({
        status: false
      })
  }

  static get hooks() {
    return {
      after: {
        remove: [
          async function (ctx) {
            const result = await this.get(ctx.params.query.userId);
            ctx.result = result
          }
        ],
        update: [
          async function (ctx) {
            const result = await this.get(ctx.data.userId);
            ctx.result = result
          }
        ]
      },
      error: {
        all: [ctx => {
          delete ctx.error.className
          delete ctx.error.errors
        }]
      }
    }
  }
}
