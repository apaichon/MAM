/**
 * @class DataAdapter
 * @classdesc This class is managing difference data provider.
 */
class DataAdapter {

    constructor (config) {
        let Db;
        switch (config.type) {
            case 'mongodb':
                Db = require('./MongoDb');
            break;
            case 'firebase':
                Db = require('./Firebase');
            break;
            case 'firestore':
                Db = require('./Firestore');
            break;
        }
        this.dbo = new Db (config);
           
    }
}

module.exports = DataAdapter;