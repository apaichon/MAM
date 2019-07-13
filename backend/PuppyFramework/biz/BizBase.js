class BizBase {

    set DataObject(dataAdapter) {
        this._dataObject = dataAdapter;
    }

    get DataObject() {
        return this._dataObject;
    }

    constructor(config) {
        const { DataAdapter } = require('../dal');
        let dataAdapter = new DataAdapter(config);
        this.DataObject = dataAdapter.dbo;
    }

    async Add(data) {
        let result = await this.Execute('Insert', data);
        return result;
    }

    async Edit(dataWithCondition) {
        let result = await this.Execute('Update', dataWithCondition);
        return result;
    }

    async EditById(dataWithCondition) {
        let result = await this.Execute('UpdateById', dataWithCondition);
        return result;
    }

    async EditAdd(dataWithCondition) {
        let result = await this.Execute('Upsert', dataWithCondition);
        return result;
    }

    async Find(condition) {
        let result = await this.Execute('Find', condition);
        return result;
    }

    async FindOne(condition) {
        let result = await this.Execute('FindOne', condition);
        return result;
    }

    async Remove(condition) {
        let result = await this.Execute('Remove', condition);
        return result;
    }

    async Count(condition) {
        let result = await this.Execute('Count', condition);
        return result;
    }

    async Execute(name, data) {
        let connected = await this.DataObject.Open();
        let result = await this.DataObject[name](data);
        let closed = await !this.DataObject.Close();
        return result;
    }

    async Dispose() {
        let closed = await !this.DataObject.Close();
        delete this.DataObject;
    }
}

module.exports = BizBase;