const uuid = require('uuid/v4')
const { BadRequest, NotFound } = require('@feathersjs/errors')
const bcrypt = require('bcrypt')

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
    let account;
    snapshot.forEach(doc => {
      ref = doc.id
      account = doc.data()
    })

    if (params.query.module === 'changePassword') {
      if (!data.oldPassword) {
        throw new BadRequest('Please insert your old password (oldPassword).', data)
      }

      if (!bcrypt.compareSync(data.oldPassword, account.password)) {
        throw new BadRequest('Password mismatch (oldPassword).', data)
      }

      if (!data.newPassword) {
        throw new BadRequest('Please insert your new password (newPassword).', data)
      }

      const hash = bcrypt.hashSync(data.newPassword, 10)
      await this.db.collection(this.collection).doc(ref).update({
        password: hash,
        updatedAt: data.updatedAt
      })

      delete data.oldPassword
      delete data.newPassword
      return data
    }

    throw new BadRequest('Invalid module.', params.query)
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
