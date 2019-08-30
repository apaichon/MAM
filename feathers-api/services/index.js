const admin = require('firebase-admin')
const adminConfig = require('../config/firebase-admin.json')
admin.initializeApp({
  credential: admin.credential.cert(adminConfig)
})
const firestore = admin.firestore()

module.exports = {
  register(app) {
    const path = require('path');
    const fs = require('fs');

    for (const filename of fs.readdirSync(__dirname)) {
      if (filename === path.basename(__filename))
        continue

      const serviceName = filename.replace(/\.[0-9a-z]+$/i, '')
      const service = require('./' + serviceName)
      app.use(serviceName, new service({ firestore }))

      if (service.hooks)
        app.service(serviceName).hooks(service.hooks)
    }
  }
}