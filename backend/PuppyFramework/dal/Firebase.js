const firebase = require('firebase');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');

/**
 * @class Firebase
 * @classdesc This class is managing Firebase.
 */
class Firebase {


  /** @constructs This construtor function must assign collection name.*/
  constructor (config) {
      this.config = config;
      if(firebase.apps.length === 0) {
        firebase.initializeApp(this.config);
      }
  }

  /** Methods */

  /**
   * Open database.
   */
  Open () {
    this.IsConnected = false;
    return new Promise ((resolve, reject) => {
       const {email, password} = this.config;
       if (email === undefined || password === undefined){
           reject('email or password is not defined!');
       }
       firebase.auth()
       .signInWithEmailAndPassword(email, password)
       .then((result) => {
           if (result.user.uid) {
            this.IsConnected = true;
            resolve(this.IsConnected);
           } else {
               reject('Can\'t connect to database!');
           }
       })
    })
  }

  /**
   * Close database.
   */
  Close () {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.IsConnected = false;
            resolve(this.IsConnected);
          }).catch((error) => {
            reject(error);
        });
    })
  }
  /**
   * Insert data to database.
   * @param {json} data  - format as a json.
   * @returns {json} result - ops
   */
  Insert (data) {
    return new Promise((resolve, reject) => {
        let id = (data.id?data.id:uuidv4());
        firebase.database()
        .ref(`${this.config.collectionName}/${id}` )
        .set(data)
        .then(result => resolve(true))
        .catch(err => reject(err));

        /*ref.onWrite(event => {
          let no = (current_value || 0) + 1;
          ref(`${this.config.collectionName/no}` )
          .set(data)
          .then(result => resolve(true))
          .catch(err => reject(err));
        });*/
        
    })
  }

  /**
   * Update data
   * @param {*} dataWithCondition 
   */
  Update (dataWithCondition) {
    let { data, condition, option } = dataWithCondition
    if (!option) {
      option = {};
    }
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
    let { condition, option } = conditionWithOption
    if(!condition) throw 'Invalid condition!';
    if (!option) {
      option = {justOne: true};
    }
    return new Promise((resolve, reject) => {
      this.Client.collection(this.Collection)
      .deleteMany(condition, option, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  }

  Find (condition) {
    let {filter, pageSize} = condition
    pageSize = (pageSize?pageSize:50);
    filter = (filter?filter:{});

    return new Promise((resolve, reject) => {
    
      let ref = firebase.database()
                .ref(`${this.config.collectionName}` );
      
      ref.orderByKey().limitToLast(pageSize).once('value', (snapshot) => {
        let data = []
        snapshot.forEach((a) => {
          data.push(a.val())
        })
        data =_.filter(data, filter); 
        resolve(data)
      })
    
    })
  }

  FindOne (condition) {
    return new Promise((resolve, reject) => {
      this.Client.collection(this.Collection)
      .findOne(condition, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  }

  Count (condition) {
    return new Promise((resolve, reject) => {
      this.Client.collection(this.Collection)
      .countDocuments(condition, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
    })
  }

}

module.exports = Firebase;