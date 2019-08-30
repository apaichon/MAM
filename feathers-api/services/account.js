const uuid = require('uuid/v4')
const { BadRequest, NotFound } = require('@feathersjs/errors')

module.exports = class AccountService {
  constructor({ firestore }) {
    this._db = firestore
    this._collection = 'account'
  }

  get db() {
    return this._db
  }

  get collection() {
    return this._collection
  }

  async get(id, params) {
    const account = []

    const snapshot = await this.db.collection(this.collection)
      .where('email', '==', id)
      .get()

    if (snapshot.empty) {
      throw new NotFound('Account does not exists.', id)
    }

    snapshot.forEach(doc => {
      account.push(doc.data())
    })

    return account.shift()
  }

  async create(data, params) {
    const snapshot = await this.db.collection(this.collection)
      .where('email', '==', data.email)
      .get()

    if (!snapshot.empty) {
      throw new BadRequest('Duplicate email found.', data)
    }

    await this.db.collection(this.collection).doc(uuid()).set(data)
    return data
  }

  async update(id, data, params) {
    const snapshot = await this.db.collection(this.collection).where('email', '==', id).get()
    if (snapshot.empty) {
      throw new NotFound('Account does not exists.', id)
    }

    let ref;
    snapshot.forEach(doc => {
      ref = doc.id
    })

    await this.db.collection(this.collection).doc(ref).update(data)
    return data
  }

  static get hooks() {
    return {
      before: {
        create: [async ctx => {
          ctx.data.createdAt = new Date().toJSON()
        }],
        update: [async ctx => {
          ctx.data.updatedAt = new Date().toJSON()
        }]
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
