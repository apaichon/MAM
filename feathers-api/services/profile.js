const { BadRequest, NotFound } = require('@feathersjs/errors')
const uuid = require('uuid/v4')
const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert(require('../config/firebase-admin.json'))
})
const db = admin.firestore()

class ProfileService {
  constructor() {
    this._collection = 'profile'
  }

  get collection() {
    return this._collection
  }

  async get(id, params) {
    const profile = []

    const snapshot = await db.collection(this.collection)
      .where('email', '==', id)
      .get()

    if (snapshot.empty) {
      throw new NotFound('Profile does not exists.', id)
    }

    snapshot.forEach(doc => {
      profile.push(doc.data())
    })

    return profile.shift()
  }

  async create(data, params) {
    const snapshot = await db.collection(this.collection)
      .where('email', '==', data.email)
      .get()

    if (!snapshot.empty) {
      throw new BadRequest('Duplicate email found.', data)
    }

    await db.collection(this.collection).doc(uuid()).set(data)
    return data
  }

  async update(id, data, params) {
    const snapshot = await db.collection(this.collection).where('email', '==', id).get()
    if (snapshot.empty) {
      throw new NotFound('Profile does not exists.', id)
    }

    let ref;
    snapshot.forEach(doc => {
      ref = doc.id
    })

    await db.collection(this.collection).doc(ref).update(data)
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

module.exports = {
  register(app) {
    app.use('profile', new ProfileService())
    app.service('profile').hooks(ProfileService.hooks)
  }
}