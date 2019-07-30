const admin = require('firebase-admin');
// const functions = require('firebase-functions');

const uuidv4 = require('uuid/v4');
const _ = require('lodash');

let filterOnly = (db, collection, wheres, pageSize) => {
  return new Promise((resolve, reject) => {
    let [a, b, c] = wheres
    let query = db.collection(collection)
                .where(a, b, c).limit(parseInt(pageSize));
    query.get().then(result => {
      let list = [];
      result.forEach((data) => {
        list.push(data.data())
      })
      if(list.length > 0) {
        resolve(list)
      } else {
        reject('Data is not found!')
      }
    })

  })
}

let filterOrderBy = (db, collection, wheres, pageSize, orderBy) => {
  return new Promise((resolve, reject) => {
    let [a, b, c] = wheres
    let [d, e] = orderBy
    let query = db.collection(collection)
                .where(a, b, c).orderBy(d, e).limit(parseInt(pageSize));
    query.get().then(result => {
        let list = [];
        result.forEach((data) => {
          list.push(data.data())
        })
        if(list.length > 0) {
          resolve(list)
        } else {
          reject('Data is not found!')
        }

      })
  })
}

let FindAndFilter = async (db,collection, condition) => {
  let {filter, orderBy, pageSize} = condition
  pageSize = (pageSize?pageSize:50);
  filter = (filter?filter:['id', '>', '0']);
  let result = {};
  //filterOrderBy
  if (filter && orderBy) {
    result = await filterOrderBy(db, collection, filter, pageSize, orderBy)
  } else { //filterOnly
    result = await filterOnly(db, collection, filter, pageSize)
  }
  return result
}

function deleteQueryBatch(db, query, batchSize, resolve, reject) {
  query.get()
    .then((snapshot) => {
      // When there are no documents left, we are done
      if (snapshot.size == 0) {
        return 0;
      }

      // Delete documents in a batch
      let batch = db.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      return batch.commit().then(() => {
        return snapshot.size;
      });
    }).then((numDeleted) => {
      if (numDeleted === 0) {
        // update totalItems
        //decreaseTotalItems(snapshot.size)
        //Promise.resolve();
        return;
      }

      // Recurse on the next process tick, to avoid
      // exploding the stack.
      process.nextTick(() => {
        deleteQueryBatch(db, query, batchSize);
      });
    })
    .then(result => resolve(result))
    .catch(reject);
}

let insertData = (db, collection, model) => {
  let {subDoc, data} = model
  data.id = uuidv4()
  let dbRef = {}

  if (subDoc) {
    dbRef = db.collection(collection).doc(subDoc)
  } else {
    dbRef = db.collection(collection).doc(data.id)
  }
  return dbRef.set(data)

}


/**
 * @class Firestore
 * @classdesc This class is managing Firebase.
 */
class Firestore {


  /** @constructs This construtor function must assign collection name.*/
  constructor (config) {
    this.config = config;
    this.DbName = config.dbName;
    this.Collection = config.collectionName;
    if(admin.apps.length === 0) {
      let serviceAccount = require('../../config/test-b95b010368fb.json');
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    }
    this.db = admin.firestore();

  }

  /** Methods */

  /**
   * Open database.
   */
  Open () {
    this.IsConnected = false;
    return new Promise ((resolve, reject) => {
      resolve(true)
    })
  }

  /**
   * Close database.
   */
  Close () {
    return new Promise((resolve, reject) => {
      this.db = null
       resolve(true)
    })
  }
  /**
   * Insert data to database.
   * @param {json} data  - format as a json.
   * @returns {json} result - ops
   */
  Insert (dataWithSubDoc) {
    return new Promise((resolve, reject) => {
      insertData(this.db, this.Collection, dataWithSubDoc)
      .then(result => resolve(dataWithSubDoc.data))
      .catch(err => reject(err))
    })
  }
  /* Insert (dataWithSubDoc) {
    return new Promise((resolve, reject) => {
      let {subDoc, data} = dataWithSubDoc
      // data.id =uuidv4()
      let docRef;
      if (subDoc) {
      docRef = this.db.collection(this.Collection).doc(subDoc);
       this.db.runTransaction(t => {
         return t.get(docRef).then(doc => {
          t.set(docRef, data)
          Promise.resolve(data)
           // Promise.resolve(this.AddTotalItems())
         })

        })
        .then(result => resolve(result))
        .catch(err => reject(err))
      } else {
        docRef = this.db.collection(this.Collection);
        this.db.runTransaction(t => {

          return this.GenAutoNumber()
          .then(number => {
            console.log('autoid', number)
            let doc = docRef.doc(number.toString())
            return t.get(doc)
            .then(d => {
              data.id = number
              t.set(doc, data)
              console.log('resolve', data)
              Promise.resolve(data)
              return data
              //Promise.resolve(this.AddTotalItems())
            })
          })
        }).then(result => {
          console.log('insert result', result)
          resolve(result)
        })
        .catch(err => reject(err));
      }

    })
  }*/

  AddTotalItems() {
    return new Promise((resolve, reject) => {
      let docRef = this.db.collection('totalItems').doc(this.Collection)
      docRef.get().then(doc => {
        let data = {};
        if (doc.exists) {
          data = doc.data();
        }
        let total = (data.count?data.count + 1:1)
        docRef.set({count:total})
        .then(result => resolve(result))
        .catch(err => reject(err))
      })
    })
  }

  GenAutoNumber() {
    return new Promise ((resolve, reject) => {
      let docRef = this.db.collection(this.Collection)
      .orderBy('id', 'desc').limit(1)
      docRef.get()
      .then(doc => {
        let data = {}, number = 1
        if (doc.size > 0) {
          data = doc.docs[0];
        }

        if (data.id) {
          // console.log('data id', data.id)
          number = parseInt(data.id) + 1
        }
        resolve(number)
      })
    })
  }

  /**
   * Update data
   * @param {*} dataWithCondition
   */
  Update (dataWithCondition) {
    let { data, condition } = dataWithCondition
    let [a, b, c] = condition
    var query = this.db.collection(this.Collection).where(a, b, c);

    return new Promise((resolve, reject) =>{
      this.db.runTransaction((transaction) => {
        return transaction.get(query).then((doc) => {
          if (!doc.docs) throw "Document does not exist!";
          doc.forEach((a) => {
            transaction.update(a.ref, data)
          })

          return data
        })
      }).then((result) => resolve(result))
      .catch((err) => reject(err))
    })
  }

  UpdateById (dataWithCondition) {
    let { data } = dataWithCondition
    let a = 'id', b = '==', c= data.id
    var query = this.db.collection(this.Collection).where(a, b, c);

    return new Promise((resolve, reject) => {
      this.db.runTransaction((transaction) => {
        return transaction.get(query).then((doc) => {
          if (!doc.docs) throw "Document does not exist!";
          doc.forEach((a) => {
            transaction.update(a.ref, data)
          })
          return data
        })
      }).then((result) => resolve(result))
      .catch((err) => reject(err))
    })
  }

  /**
   * Upsert
   */
  Upsert (dataWithCondition) {
    let { data, condition } = dataWithCondition;
    let option = { upsert: true }
    data = {'$set': data }
    return new Promise((resolve, reject) => {
      this.Client.collection(this.Collection)
      .updateMany(condition, data, option, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  }

  /**
   * Remove data
   * @param {*} conditionWithOption
   */
  Remove (conditionWithOption) {
    let {condition, batchSize} = conditionWithOption
    batchSize = (batchSize?batchSize:1)
    let [a, b, c] = condition
    return new Promise((resolve, reject) => {
      let query = this.db.collection(this.Collection).where(a, b, c)
      deleteQueryBatch(this.db, query, batchSize, resolve, reject )
    })
  }

  Find (condition) {
    let db = this.db;
    let collection = this.Collection;
    return FindAndFilter(db, collection, condition)
  }


  FindOne (condition) {
    let db = this.db;
    let collection = this.Collection;
    let newCondition = condition
    newCondition.pageSize = 1
    return FindAndFilter(db, collection, newCondition)
  }

  Count (condition) {
    let {filter} = condition
    if (!filter) {
      filter = ['id', '>', 0]
    }
    let [a, b, c] = filter

    return new Promise((resolve, reject) => {
      let query = this.db.collection(this.Collection).where(a, b, c)
      query.get().then(result => {
        let size = result.size
        result = null
        resolve(size)
      })
    })
  }

}

module.exports = Firestore;