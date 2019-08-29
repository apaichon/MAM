const admin = require('firebase-admin')
const { serviceAccount } = require('../config/firebase-admin.js')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()

export class ProfileService {
  constructor() {
  }

  async find(params) {
    const snapshot = await db.collection('profile').get()
    snapshot.forEach((doc) => {
      this.profile.push(doc.data())
    })
    return {}
  }

  async get(id, params) {
    const doc = await db.collection('profile').doc(id).get()
    this.profile = doc.data()
    return this.profile
  }
}